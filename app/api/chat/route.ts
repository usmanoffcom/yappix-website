import { NextRequest, NextResponse } from "next/server"

import { serverEnv } from "@/lib/server-env"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const DEFAULT_MODEL = "openai/gpt-4o-mini"
const UPSTREAM_TIMEOUT_MS = 55_000

type ChatTurn = { role: "user" | "assistant"; content: string }

function normalizeClientMessages(raw: unknown): ChatTurn[] {
  if (!Array.isArray(raw)) return []
  const out: ChatTurn[] = []
  for (const m of raw) {
    if (!m || typeof m !== "object") continue
    const role = (m as { role?: string }).role
    const content = String((m as { content?: unknown }).content ?? "").trim()
    if (!content) continue
    if (role !== "user" && role !== "assistant") continue
    if (content.length > 12_000) continue
    out.push({ role, content })
  }
  // UI шлёт первым ассистента (приветствие) — многие апстримы хотят user сразу после system
  while (out.length > 0 && out[0].role === "assistant") {
    out.shift()
  }
  return out.slice(-20)
}

function getOpenRouterKey(): string | undefined {
  return serverEnv("OPENROUTER_API_KEY") || serverEnv("OPENROUTER_KEY")
}

function parseOpenRouterError(status: number, body: string): string {
  try {
    const j = JSON.parse(body) as { error?: { message?: string; code?: number | string } }
    const msg = j?.error?.message
    if (typeof msg === "string" && msg.trim()) return `[${status}] ${msg}`
  } catch {
    /* ignore */
  }
  return body.slice(0, 500) || `(HTTP ${status})`
}

const SYSTEM_PROMPT = `Ты — AI-ассистент компании YappiX, IT-студии полного цикла. Резиденты Сколково с 2020 года.

Твоя задача — помочь посетителям сайта:
1. Рассказать об услугах компании
2. Ответить на вопросы о разработке
3. Собрать контактные данные для связи с менеджером
4. Помочь определиться с типом проекта

Услуги YappiX:
- Веб-разработка (Next.js, React, Vue.js)
- Мобильные приложения (React Native, Flutter)
- AI и чат-боты (GPT, Claude, LangChain)
- SaaS/PaaS решения
- FinTech разработка
- DevOps услуги
- SEO продвижение
- SMM маркетинг

Преимущества:
- MVP за 7 дней с гарантией возврата
- AI-first подход: короче циклы разработки
- 260+ проектов
- $2.1M+ привлечено инвестиций
- Офисы: Россия (Сколково), США, Турция, Сербия

Контакты:
- Телефон: +7 995 095 55 93
- Email: sales@yappix.ru
- Telegram: @yappix_bot

Если пользователь заинтересован в услугах, предложи оставить контакты (имя, телефон/email, описание проекта).
ВАЖНО: никогда не говори, что контакты уже сохранены, отправлены или записаны. Ты не отправляешь лиды сам — только просишь заполнить форму.
Отвечай кратко, дружелюбно и профессионально. Используй эмодзи умеренно.`

function sanitizeAssistantReply(reply: string): string {
  // Prevent false confirmations about lead submission.
  const forbiddenPatterns = [
    /контакт[а-я]*\s+(сохран|запис|отправ)/i,
    /заявк[а-я]*\s+(принят|отправ|создан|оформлен)/i,
    /your contact(s)? (have been|has been)?\s*(saved|recorded|sent)/i,
    /lead (has been )?(saved|sent|submitted|recorded)/i,
  ]

  const hasFalseSubmissionClaim = forbiddenPatterns.some((pattern) => pattern.test(reply))

  if (!hasFalseSubmissionClaim) return reply

  return "Чтобы передать контакты менеджеру, заполните форму в чате: имя, телефон или email и краткое описание задачи."
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = getOpenRouterKey()
    if (!apiKey) {
      console.error("chat: OPENROUTER_API_KEY (или OPENROUTER_KEY) не задан в окружении")
      return NextResponse.json(
        { error: "Чат временно недоступен. Обратитесь через форму или по телефону." },
        { status: 503 },
      )
    }

    const body = (await request.json()) as { messages?: unknown; collectLead?: boolean }
    const { messages: rawMessages, collectLead } = body

    if (collectLead) {
      return NextResponse.json({ success: true })
    }

    const normalized = normalizeClientMessages(rawMessages)
    if (normalized.length === 0) {
      return NextResponse.json({ error: "Нет текста для отправки в модель." }, { status: 400 })
    }

    const appUrl = serverEnv("NEXT_PUBLIC_APP_URL") || "https://yappix.ru"
    const model = serverEnv("OPENROUTER_MODEL") || DEFAULT_MODEL

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Referer: appUrl,
        "HTTP-Referer": appUrl,
        "X-Title": "YappiX Chat Assistant",
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...normalized],
        max_tokens: 500,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      const summary = parseOpenRouterError(response.status, errText)
      console.error("OpenRouter error:", response.status, summary)
      return NextResponse.json(
        { error: "Ошибка AI. Попробуйте позже.", detail: process.env.NODE_ENV === "development" ? summary : undefined },
        { status: 502 },
      )
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>
      error?: { message?: string }
    }
    if (data.error?.message) {
      console.error("OpenRouter payload error:", data.error.message)
      return NextResponse.json({ error: "Ошибка AI. Попробуйте позже." }, { status: 502 })
    }
    const rawReply =
      data.choices?.[0]?.message?.content || "Извините, произошла ошибка. Попробуйте снова."
    const reply = sanitizeAssistantReply(rawReply)

    return NextResponse.json({ reply })
  } catch (error) {
    const name = error instanceof Error ? error.name : ""
    if (name === "TimeoutError" || name === "AbortError") {
      console.error("Chat error: OpenRouter timeout")
      return NextResponse.json({ error: "Ответ слишком долгий. Попробуйте короче или позже." }, { status: 504 })
    }
    console.error("Chat error:", error)
    return NextResponse.json({ error: "Внутренняя ошибка сервера" }, { status: 500 })
  }
}
