import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const TELEGRAM_BOT_TOKEN = "8317760178:AAEUGZWwyAWBaHVW-umTrV29V3FcCTCIRyQ"
const TELEGRAM_LEADS_CHAT_ID = "-1002757127968"
const TELEGRAM_WEBHOOK_SECRET = "yappix-telegram-webhook-2026"
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
    from?: { id: number; first_name?: string; username?: string }
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

async function sendTelegramMessage(chatId: string | number, text: string): Promise<boolean> {
  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
      }),
    })
    const data = await response.json()
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

async function mirrorToLeadsChannel(userLabel: string, direction: "IN" | "OUT", text: string): Promise<void> {
  const prefix = direction === "IN" ? "⬅️" : "➡️"
  const message = `${prefix} <b>${direction}</b> ${escapeHtml(userLabel)}\n${escapeHtml(text)}`
  await sendTelegramMessage(TELEGRAM_LEADS_CHAT_ID, message)
}

async function finalizeLead(userLabel: string, session: Session): Promise<void> {
  const leadMessage =
    `🟢 <b>Новый лид из @yappix_bot</b>\n` +
    `👤 <b>Клиент:</b> ${escapeHtml(userLabel)}\n` +
    `🧑 <b>Имя:</b> ${escapeHtml(session.lead.name || "—")}\n` +
    `📞 <b>Контакт:</b> ${escapeHtml(session.lead.contact || "—")}\n` +
    `📝 <b>Задача:</b> ${escapeHtml(session.lead.project || "—")}`
  await sendTelegramMessage(TELEGRAM_LEADS_CHAT_ID, leadMessage)
}

export async function POST(request: NextRequest) {
  try {
    const secret = request.headers.get("x-telegram-bot-api-secret-token")
    if (secret !== TELEGRAM_WEBHOOK_SECRET) {
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

    const store = await readStore()
    const session = getOrCreateSession(store, chatId)
    pushHistory(session, "user", text)
    await mirrorToLeadsChannel(userLabel, "IN", text)

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
        const guessedName = extractName(text)
        if (guessedName) session.lead.name = guessedName
      }

      if (!session.lead.contact) {
        const guessedContact = extractContact(text)
        if (guessedContact) session.lead.contact = guessedContact
      }

      if (session.state === "awaiting_name") {
        const name = session.lead.name || extractName(text)
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
        await finalizeLead(userLabel, session)
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
    await writeStore(store)

    await sendTelegramMessage(chatId, reply)
    await mirrorToLeadsChannel(userLabel, "OUT", reply)

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Telegram webhook error:", error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
