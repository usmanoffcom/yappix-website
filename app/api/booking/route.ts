import { NextRequest, NextResponse } from "next/server"
import {
  createLeadMailTransport,
  getSmtpFromAddress,
  getSmtpToAddress,
} from "@/lib/smtp-config"
import { escapeTelegramHtml } from "@/lib/telegram-html"
import { getTelegramBotToken, getTelegramLeadsChatId } from "@/lib/telegram-config"

async function sendToTelegram(message: string): Promise<boolean> {
  const token = getTelegramBotToken()
  const chatId = getTelegramLeadsChatId()
  if (!token || !chatId) {
    console.error("Telegram: задайте TELEGRAM_BOT_TOKEN и TELEGRAM_LEADS_CHAT_ID или TELEGRAM_CHAT_ID в .env.production")
    return false
  }
  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    })
    const data = await response.json()
    if (!data.ok) {
      console.error("Telegram sendMessage failed:", JSON.stringify(data))
    }
    return data.ok === true
  } catch (error) {
    console.error("Telegram error:", error)
    return false
  }
}

async function sendEmailToCompany(data: {
  name: string
  email: string
  phone: string
  date: string
  time: string
}): Promise<boolean> {
  const transport = createLeadMailTransport()
  const from = getSmtpFromAddress()
  const to = getSmtpToAddress()
  if (!transport || !from || !to) {
    console.warn("SMTP: задайте SMTP_PASSWORD и SMTP_EMAIL или SMTP_USER — письмо в компанию пропущено")
    return false
  }
  try {
    await transport.sendMail({
      from,
      to,
      subject: `Новая заявка на звонок: ${data.name}`,
      html: `
        <h2>Новая заявка на звонок</h2>
        <p><strong>Имя:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Телефон:</strong> ${data.phone}</p>
        <p><strong>Дата и время:</strong> ${data.date} в ${data.time}</p>
        <p><strong>Источник:</strong> yappix.ru</p>
        <p><strong>Дата заявки:</strong> ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}</p>
      `,
    })
    return true
  } catch (error) {
    console.error("Email error:", error)
    return false
  }
}

async function sendConfirmationEmail(data: {
  name: string
  email: string
  date: string
  time: string
}): Promise<boolean> {
  const transport = createLeadMailTransport()
  const from = getSmtpFromAddress()
  if (!transport || !from) {
    console.warn("SMTP: задайте SMTP_PASSWORD и SMTP_EMAIL или SMTP_USER — подтверждение клиенту пропущено")
    return false
  }
  try {
    await transport.sendMail({
      from,
      to: data.email,
      subject: "Подтверждение бронирования звонка — YappiX",
      html: `
        <h2>Здравствуйте, ${data.name}!</h2>
        <p>Спасибо за интерес к YappiX! Мы получили вашу заявку на звонок.</p>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Запланированное время:</strong></p>
          <p style="font-size: 18px; color: #6b21a8;">${data.date} в ${data.time}</p>
        </div>
        <p>Мы свяжемся с вами в указанное время для 30-минутной консультации.</p>
        <p>Если у вас возникли вопросы, свяжитесь с нами:</p>
        <ul>
          <li>Телефон: <a href="tel:+79950955593">+7 995 095 55 93</a></li>
          <li>Email: <a href="mailto:sales@yappix.ru">sales@yappix.ru</a></li>
          <li>Telegram: <a href="https://t.me/yappix_bot">@yappix_bot</a></li>
        </ul>
        <p>С уважением,<br>Команда YappiX</p>
      `,
    })
    return true
  } catch (error) {
    console.error("Confirmation email error:", error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { name, email, phone, date, time } = data

    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json({ error: "Заполните все обязательные поля" }, { status: 400 })
    }

    // Форматируем дату для читаемости
    const dateObj = new Date(date)
    const formattedDate = dateObj.toLocaleDateString("ru-RU", {
      weekday: "long",
      day: "numeric",
      month: "long",
    })

    const safeName = escapeTelegramHtml(String(name))
    const safeEmail = escapeTelegramHtml(String(email))
    const safePhone = escapeTelegramHtml(String(phone))
    const safeDateLine = escapeTelegramHtml(`${formattedDate} в ${time}`)

    // Format message for Telegram (все пользовательские поля — escape для HTML parse_mode)
    const telegramMessage = `
📞 <b>Новая заявка на звонок!</b>

👤 <b>Имя:</b> ${safeName}
📧 <b>Email:</b> ${safeEmail}
📱 <b>Телефон:</b> ${safePhone}

📅 <b>Дата и время:</b>
${safeDateLine}

🌐 Источник: yappix.ru
⏰ Заявка создана: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}
    `.trim()

    // Send to Telegram first (most reliable)
    const telegramResult = await sendToTelegram(telegramMessage)
    console.log("Telegram sent:", telegramResult)

    // Send email to company
    const emailResult = await sendEmailToCompany({ name, email, phone, date, time })
    console.log("Email to company sent:", emailResult)

    // Send confirmation email to customer
    const confirmationResult = await sendConfirmationEmail({
      name,
      email,
      date: formattedDate,
      time,
    })
    console.log("Confirmation email sent:", confirmationResult)

    // At least Telegram should work
    if (!telegramResult) {
      return NextResponse.json(
        { error: "Ошибка отправки. Позвоните: +7 995 095 55 93" },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "Звонок забронирован! Мы свяжемся с вами в указанное время.",
    })
  } catch (error) {
    console.error("Booking error:", error)
    return NextResponse.json({ error: "Внутренняя ошибка сервера" }, { status: 500 })
  }
}
