import { NextRequest, NextResponse } from "next/server"

const OPENROUTER_API_KEY = "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"

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
- AI-first подход: 7x-12x быстрее разработка
- 260+ проектов
- $2.1M+ привлечено инвестиций
- Офисы: Россия (Сколково), США, Турция, Сербия

Контакты:
- Телефон: +7 995 095 55 93
- Email: sales@yappix.ru
- Telegram: @yappix_bot

Если пользователь заинтересован в услугах, предложи оставить контакты (имя, телефон/email, описание проекта).
Отвечай кратко, дружелюбно и профессионально. Используй эмодзи умеренно.`

export async function POST(request: NextRequest) {
  try {
    const { messages, collectLead } = await request.json()

    if (collectLead) {
      // This is handled separately by the contact form
      return NextResponse.json({ success: true })
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://yappix.ru",
        "X-Title": "YappiX Chat Assistant",
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error("OpenRouter error:", error)
      return NextResponse.json(
        { error: "Ошибка AI. Попробуйте позже." },
        { status: 500 }
      )
    }

    const data = await response.json()
    const reply = data.choices?.[0]?.message?.content || "Извините, произошла ошибка. Попробуйте снова."

    return NextResponse.json({ reply })
  } catch (error) {
    console.error("Chat error:", error)
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    )
  }
}

