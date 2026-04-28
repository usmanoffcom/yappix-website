import { NextRequest, NextResponse } from "next/server"
import {
  createLeadMailTransport,
  getSmtpFromAddress,
  getSmtpToAddress,
} from "@/lib/smtp-config"
import {
  verifyRecaptcha,
  formatRussianPhone,
  validateName,
  validateEmail as validateEmailFn,
  validatePhone,
} from "@/lib/validation"
import { escapeTelegramHtml } from "@/lib/telegram-html"
import { getTelegramBotToken, getTelegramLeadsChatId } from "@/lib/telegram-config"
import { telegramBotFetch } from "@/lib/proxy-fetch"

async function sendToTelegram(message: string): Promise<boolean> {
  const token = getTelegramBotToken()
  const chatId = getTelegramLeadsChatId()
  if (!token || !chatId) {
    console.error("Telegram: задайте TELEGRAM_BOT_TOKEN и TELEGRAM_LEADS_CHAT_ID или TELEGRAM_CHAT_ID в .env.production")
    return false
  }
  try {
    const response = await telegramBotFetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: String(chatId),
        text: message,
        parse_mode: "HTML",
      }),
    })
    const data = (await response.json()) as { ok?: boolean }
    if (!data.ok) {
      console.error("Telegram sendMessage failed:", JSON.stringify(data))
    }
    return data.ok === true
  } catch (error) {
    console.error("Telegram error:", error)
    return false
  }
}

async function sendEmail(data: {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}): Promise<boolean> {
  const transport = createLeadMailTransport()
  const from = getSmtpFromAddress()
  const to = getSmtpToAddress()
  if (!transport || !from || !to) {
    console.warn(
      "SMTP: задайте SMTP_PASSWORD и SMTP_EMAIL или SMTP_USER (и при необходимости SMTP_TO) в .env / .env.production — письмо пропущено",
    )
    return false
  }
  try {
    await transport.sendMail({
      from,
      to,
      subject: `Новая заявка от ${data.name}`,
      html: `
        <h2>Новая заявка с сайта YappiX</h2>
        <p><strong>Имя:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Телефон:</strong> ${data.phone}</p>` : ""}
        ${data.company ? `<p><strong>Компания:</strong> ${data.company}</p>` : ""}
        <p><strong>Сообщение:</strong></p>
        <p>${data.message}</p>
      `,
    })
    return true
  } catch (error) {
    const err = error as Error & { response?: string; responseCode?: string }
    console.error(
      "Email sendMail failed:",
      err?.message || String(error),
      err?.responseCode ? `code=${err.responseCode}` : "",
      err?.response ? `response=${err.response.slice(0, 200)}` : "",
    )
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { name, email, phone, company, message, recaptchaToken } = data

    // 1. Проверка reCAPTCHA (не блокируем лид при ошибке — помечаем в Telegram)
    let recaptchaOk = false
    if (recaptchaToken) {
      const recaptchaResult = await verifyRecaptcha(recaptchaToken)
      recaptchaOk = recaptchaResult.success === true
      if (!recaptchaOk) console.log("reCAPTCHA failed:", recaptchaResult)
      else console.log("reCAPTCHA score:", recaptchaResult.score)
    }

    // 2. Валидация обязательных полей
    if (!name || (!email && !phone) || !message) {
      return NextResponse.json({ error: "Заполните обязательные поля" }, { status: 400 })
    }

    // 3. Валидация имени
    const nameValidation = validateName(name)
    if (!nameValidation.valid) {
      return NextResponse.json({ error: nameValidation.error, field: "name" }, { status: 400 })
    }

    // 4. Валидация email
    if (email) {
      const emailValidation = validateEmailFn(email)
      if (!emailValidation.valid) {
        return NextResponse.json({ error: emailValidation.error, field: "email" }, { status: 400 })
      }
    }

    // 5. Форматирование и валидация телефона
    let formattedPhone = phone
    if (phone) {
      formattedPhone = formatRussianPhone(phone)
      const phoneValidation = validatePhone(formattedPhone)
      if (!phoneValidation.valid) {
        return NextResponse.json({ error: phoneValidation.error, field: "phone" }, { status: 400 })
      }
      formattedPhone = phoneValidation.formatted || formattedPhone
    }

    // 6. Проверка сообщения на спам
    if (message.length < 10) {
      return NextResponse.json({ error: "Сообщение слишком короткое", field: "message" }, { status: 400 })
    }

    // Format message for Telegram (единый формат: время + источник + данные)
    const ts = new Date().toLocaleString("ru-RU", {
      timeZone: "Europe/Moscow",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    const recaptchaLine = recaptchaOk
      ? "✅ reCAPTCHA пройдена"
      : recaptchaToken
        ? "⚠️ reCAPTCHA не пройдена"
        : "⚠️ Без reCAPTCHA"
    const safeName = escapeTelegramHtml(String(name))
    const safeEmail = email ? escapeTelegramHtml(String(email)) : ""
    const safePhone = formattedPhone ? escapeTelegramHtml(String(formattedPhone)) : ""
    const safeCompany = company ? escapeTelegramHtml(String(company)) : ""
    const safeMessage = escapeTelegramHtml(String(message))

    const telegramMessage = `
🕐 ${ts} · <b>Лид с сайта</b> yappix.ru

👤 <b>Имя:</b> ${safeName}
${safeEmail ? `📧 <b>Email:</b> ${safeEmail}` : ""}
${safePhone ? `📱 <b>Телефон:</b> ${safePhone}` : ""}
${safeCompany ? `🏢 <b>Компания:</b> ${safeCompany}` : ""}

💬 <b>Сообщение:</b>
${safeMessage}

${recaptchaLine}
    `.trim()

    // Send to Telegram first (most reliable)
    const telegramResult = await sendToTelegram(telegramMessage)
    console.log("Telegram sent:", telegramResult)

    // Try email to company (если есть email клиента — в теле письма; если только телефон — тоже шлём на sales@)
    let emailResult = false
    if (email?.trim()) {
      emailResult = await sendEmail({ name, email, phone: formattedPhone, company, message })
      console.log("Email sent:", emailResult)
    } else if (formattedPhone?.trim()) {
      emailResult = await sendEmail({
        name,
        email: "",
        phone: formattedPhone,
        company,
        message,
      })
      console.log("Email sent (phone-only lead):", emailResult)
    }

    const delivered = telegramResult || emailResult
    if (!delivered) {
      console.error("Contact: ни Telegram, ни SMTP не доставили лид")
      return NextResponse.json(
        { error: "Ошибка отправки. Позвоните: +7 995 095 55 93" },
        { status: 500 },
      )
    }
    if (!telegramResult && emailResult) {
      console.warn("Contact: лид ушёл только на email (Telegram недоступен с сервера)")
    }

    return NextResponse.json({
      success: true,
      message: "Заявка отправлена! Мы скоро свяжемся с вами.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Внутренняя ошибка сервера" }, { status: 500 })
  }
}
