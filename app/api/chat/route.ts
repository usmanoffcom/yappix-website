import { NextRequest, NextResponse } from "next/server"

import { serverEnv } from "@/lib/server-env"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

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
    const apiKey = serverEnv("OPENROUTER_API_KEY")
    if (!apiKey) {
      console.error("chat: OPENROUTER_API_KEY is not set")
      return NextResponse.json(
        { error: "Чат временно недоступен. Обратитесь через форму или по телефону." },
        { status: 503 },
      )
    }

    const { messages, collectLead } = await request.json()

    if (collectLead) {
      // This is handled separately by the contact form
      return NextResponse.json({ success: true })
    }

    const appUrl = serverEnv("NEXT_PUBLIC_APP_URL") || "https://yappix.ru"

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": appUrl,
        "X-Title": "YappiX Chat Assistant",
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        max_tokens: 500,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error("OpenRouter error:", error)
      return NextResponse.json({ error: "Ошибка AI. Попробуйте позже." }, { status: 500 })
    }

    const data = await response.json()
    const rawReply =
      data.choices?.[0]?.message?.content || "Извините, произошла ошибка. Попробуйте снова."
    const reply = sanitizeAssistantReply(rawReply)

    return NextResponse.json({ reply })
  } catch (error) {
    console.error("Chat error:", error)
    return NextResponse.json({ error: "Внутренняя ошибка сервера" }, { status: 500 })
  }
}
