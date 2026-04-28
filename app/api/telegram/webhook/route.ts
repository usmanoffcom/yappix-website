import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"
import {
  getTelegramBotToken,
  getTelegramLeadsChatId,
  getTelegramWebhookSecret,
} from "@/lib/telegram-config"
import { telegramBotFetch } from "@/lib/proxy-fetch"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
const STORE_FILE = path.join(process.cwd(), ".data", "telegram-bot-sessions.json")

type SessionState = "idle" | "awaiting_name" | "awaiting_contact" | "awaiting_project" | "done"

type HistoryEntry = {
  role: "user" | "bot"
  text: string
  ts: number
}

type LeadData = {
  name?: string
  contact?: string
  project?: string
}

type Session = {
  state: SessionState
  lead: LeadData
  history: HistoryEntry[]
  updatedAt: number
}

type SessionStore = Record<string, Session>

type TelegramUpdate = {
  message?: {
    text?: string
    chat?: { id: number; type?: string }
    /** Имя/фамилия из аккаунта Telegram — нужны, чтобы не путать «Иванов» с именем для обращений */
    from?: { id: number; first_name?: string; last_name?: string; username?: string }
  }
}

type TelegramFrom = NonNullable<NonNullable<TelegramUpdate["message"]>["from"]>

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function moscowTime(): string {
  return new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow", day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" })
}

function dialogId(chatId: number): string {
  const s = String(Math.abs(chatId))
  return s.length >= 4 ? s.slice(-4) : s
}

async function sendTelegramMessage(chatId: string | number, text: string): Promise<boolean> {
  const token = getTelegramBotToken()
  if (!token) return false
  try {
    const response = await telegramBotFetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
      }),
    })
    const data = (await response.json()) as {
      ok?: boolean
      description?: string
      error_code?: number
    }
    if (!data.ok) {
      console.error("Telegram sendMessage failed:", data.error_code, data.description)
    }
    return data?.ok === true
  } catch (error) {
    console.error("Telegram sendMessage error:", error)
    return false
  }
}

async function ensureStore(): Promise<void> {
  const dir = path.dirname(STORE_FILE)
  await fs.mkdir(dir, { recursive: true })
  try {
    await fs.access(STORE_FILE)
  } catch {
    await fs.writeFile(STORE_FILE, "{}", "utf8")
  }
}

async function readStore(): Promise<SessionStore> {
  await ensureStore()
  const content = await fs.readFile(STORE_FILE, "utf8")
  try {
    return JSON.parse(content) as SessionStore
  } catch {
    return {}
  }
}

async function writeStore(store: SessionStore): Promise<void> {
  await ensureStore()
  await fs.writeFile(STORE_FILE, JSON.stringify(store), "utf8")
}

function getOrCreateSession(store: SessionStore, chatId: number): Session {
  const key = String(chatId)
  if (!store[key]) {
    store[key] = {
      state: "idle",
      lead: {},
      history: [],
      updatedAt: Date.now(),
    }
  }
  return store[key]
}

function pushHistory(session: Session, role: "user" | "bot", text: string): void {
  session.history.push({ role, text, ts: Date.now() })
  if (session.history.length > 100) {
    session.history = session.history.slice(-100)
  }
  session.updatedAt = Date.now()
}

function extractContact(text: string): string | undefined {
  const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
  const phoneRegex = /(?:\+?\d[\d\s\-()]{8,}\d)/
  const emailMatch = text.match(emailRegex)?.[0]
  if (emailMatch) return emailMatch
  const phoneMatch = text.match(phoneRegex)?.[0]
  if (!phoneMatch) return undefined
  const digits = phoneMatch.replace(/\D/g, "")
  return digits.length >= 10 ? phoneMatch : undefined
}

function normalizeSpaces(s: string): string {
  return s.trim().replace(/\s+/g, " ")
}

function extractName(text: string): string | undefined {
  const normalized = text.trim()
  const explicitPattern = /(?:меня зовут|я)\s+([A-Za-zА-Яа-яЁё-]{2,40})/i
  const explicitMatch = normalized.match(explicitPattern)?.[1]
  if (explicitMatch) return explicitMatch

  if (/^[A-Za-zА-Яа-яЁё-]{2,40}$/.test(normalized)) {
    return normalized
  }
  return undefined
}

/**
 * Имя для обращений: если в Telegram указаны имя и фамилия, не подставляем фамилию,
 * когда пользователь набрал её одной строкой («Петров») или два слова в порядке «Имя Фамилия».
 */
function deriveDisplayName(text: string, from?: TelegramFrom): string | undefined {
  const normalized = normalizeSpaces(text)

  const fn = from?.first_name?.trim()
  const ln = from?.last_name?.trim()
  const lnL = ln?.toLowerCase()
  const fnL = fn?.toLowerCase()

  const words = normalized.split(/\s+/).filter((w) => w.length > 0)

  if (words.length >= 2 && lnL) {
    const w0 = words[0]!.toLowerCase()
    const w1 = words[1]!.toLowerCase()
    /* «Иван Петров»: второе = фамилия в профиле — берём имя */
    if (w1 === lnL && words[0]) return words[0]
    /* «Петров Иван» */
    if (w0 === lnL && fn && words[1]) {
      if (w1 === fn.toLowerCase()) return fn
      return words[1]
    }
  }

  if (
    words.length === 2 &&
    fn &&
    ln &&
    words[0]!.toLowerCase() === fnL &&
    words[1]!.toLowerCase() === lnL
  ) {
    return fn
  }

  if (words.length === 1 && fn && ln && words[0]!.toLowerCase() === lnL) {
    return fn
  }

  let fromText = extractName(normalized)

  /* Текст дал только фамилию (совпадает с last_name), в профиле есть имя — обращаемся по first_name */
  if (fromText && fn && ln && fromText.toLowerCase() === lnL && fromText.toLowerCase() !== fnL) {
    return fn
  }
  return fromText
}

function getCannedReply(text: string): string | undefined {
  const msg = text.toLowerCase()
  if (/(стоим|цена|бюджет|price|cost)/.test(msg)) {
    return "Ориентиры по бюджету: MVP от 62 500 ₽, продуктовые решения от 250 000 ₽. Можем быстро посчитать диапазон под вашу задачу."
  }
  if (/(срок|когда|время|how long|timeline)/.test(msg)) {
    return "Типовые сроки: MVP 1-2 недели, продукт 4-8 недель, enterprise от 3 месяцев. Срок зависит от интеграций и требований."
  }
  if (/(услуг|что делаете|what do you do|service)/.test(msg)) {
    return "Мы делаем веб-сервисы, мобильные приложения, AI-автоматизацию, DevOps и продуктовую разработку под ключ."
  }
  return undefined
}

async function mirrorToLeadsChannel(chatId: number, userLabel: string, direction: "IN" | "OUT", text: string): Promise<void> {
  const ts = moscowTime()
  const id = dialogId(chatId)
  const who = direction === "IN" ? "Клиент" : "Бот"
  const toClient = direction === "OUT" ? " → клиенту" : ""
  const message = `🕐 ${ts} · диалог #${id}\n<b>${who}</b>${toClient} ${escapeHtml(userLabel)}\n\n${escapeHtml(text)}`
  await sendTelegramMessage(getTelegramLeadsChatId(), message)
}

async function finalizeLead(chatId: number, userLabel: string, session: Session): Promise<void> {
  const ts = moscowTime()
  const id = dialogId(chatId)
  const leadMessage =
    `🕐 ${ts} · диалог #${id}\n` +
    `🟢 <b>Лид из @yappix_bot</b>\n` +
    `👤 <b>Клиент:</b> ${escapeHtml(userLabel)}\n` +
    `🧑 <b>Имя:</b> ${escapeHtml(session.lead.name || "—")}\n` +
    `📞 <b>Контакт:</b> ${escapeHtml(session.lead.contact || "—")}\n` +
    `📝 <b>Задача:</b> ${escapeHtml(session.lead.project || "—")}`
  await sendTelegramMessage(getTelegramLeadsChatId(), leadMessage)
}

function webhookSecretFromRequest(request: NextRequest): string | null {
  const v = request.headers.get("x-telegram-bot-api-secret-token")
  return v?.trim() ? v.trim() : null
}

/** Health for мониторинг; Telegram шлёт только POST. */
export async function GET() {
  return NextResponse.json({ ok: true, service: "telegram-webhook" })
}

export async function POST(request: NextRequest) {
  try {
    const secret = webhookSecretFromRequest(request)
    const expected = getTelegramWebhookSecret()
    if (!expected || secret !== expected) {
      console.warn(
        `[telegram webhook] Unauthorized: secret ${secret === null ? "missing" : "mismatch"} (убедитесь, что setWebhook с secret_token совпадает с TELEGRAM_WEBHOOK_SECRET в .env.production)`,
      )
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 })
    }

    const update = (await request.json()) as TelegramUpdate
    const msg = update.message
    if (!msg?.chat?.id || msg.chat.type !== "private" || !msg.text) {
      return NextResponse.json({ ok: true })
    }

    const chatId = msg.chat.id
    const user = msg.from
    const userLabel = `@${user?.username || "no_username"} (id:${user?.id || "unknown"})`
    const text = msg.text.trim()

    let store: SessionStore = {}
    try {
      store = await readStore()
    } catch (e) {
      console.error("telegram sessions read failed (начинаем с пустого стора):", e)
    }
    const session = getOrCreateSession(store, chatId)
    pushHistory(session, "user", text)
    await mirrorToLeadsChannel(chatId, userLabel, "IN", text)

    let reply = ""

    if (text === "/start") {
      session.state = "awaiting_name"
      reply = "Привет! Я @yappix_bot. Помогу быстро оценить ваш проект. Как к вам обращаться?"
    } else if (text === "/help") {
      reply =
        "Я могу:\n" +
        "• ответить по услугам и срокам\n" +
        "• собрать заявку (имя, контакт, задача)\n\n" +
        "Для старта напишите /start."
    } else {
      if (!session.lead.name) {
        const guessedName = deriveDisplayName(text, user)
        if (guessedName) session.lead.name = guessedName
      }

      if (!session.lead.contact) {
        const guessedContact = extractContact(text)
        if (guessedContact) session.lead.contact = guessedContact
      }

      if (session.state === "awaiting_name") {
        const name = session.lead.name || deriveDisplayName(text, user)
        if (!name) {
          reply = "Не смог распознать имя. Напишите, пожалуйста, только имя (например: Иван)."
        } else {
          session.lead.name = name
          session.state = "awaiting_contact"
          reply = `Отлично, ${name}! Оставьте телефон или email для связи.`
        }
      } else if (session.state === "awaiting_contact") {
        const contact = session.lead.contact || extractContact(text)
        if (!contact) {
          reply = "Нужен телефон или email. Пример: +7 900 123-45-67 или name@company.com"
        } else {
          session.lead.contact = contact
          session.state = "awaiting_project"
          reply = "Принято. Кратко опишите задачу/проект (1-3 предложения)."
        }
      } else if (session.state === "awaiting_project") {
        session.lead.project = text
        session.state = "done"
        await finalizeLead(chatId, userLabel, session)
        reply = "Спасибо! Заявка принята. Команда YappiX свяжется с вами в ближайшее время."
      } else {
        const canned = getCannedReply(text)
        if (canned) {
          reply = canned
        } else {
          session.state = "awaiting_name"
          reply =
            "Помогу с оценкой задачи и расчетом сроков/бюджета. Давайте оформим заявку: как вас зовут?"
        }
      }
    }

    pushHistory(session, "bot", reply)
    try {
      await writeStore(store)
    } catch (e) {
      console.error("telegram sessions write failed (ответ пользователю всё равно отправим):", e)
    }

    await sendTelegramMessage(chatId, reply)
    await mirrorToLeadsChannel(chatId, userLabel, "OUT", reply)

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Telegram webhook error:", error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
