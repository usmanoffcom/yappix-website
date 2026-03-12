import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { 
  verifyRecaptcha, 
  validateContactForm, 
  formatRussianPhone,
  validateName,
  validateEmail as validateEmailFn,
  validatePhone
} from "@/lib/validation"

// Telegram Bot Config
const TELEGRAM_BOT_TOKEN = "8317760178:AAEUGZWwyAWBaHVW-umTrV29V3FcCTCIRyQ"
const TELEGRAM_CHAT_ID = "-1002757127968"

// SMTP Config for Mail.ru
const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 587,
  secure: false,
  auth: {
    user: "sales@yappix.ru",
    pass: "vfMac3fWX7ElJT71waA6",
  },
  connectionTimeout: 10000,
  greetingTimeout: 5000,
})

async function sendToTelegram(message: string): Promise<boolean> {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    )
    const data = await response.json()
    console.log("Telegram response:", data)
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
  try {
    await transporter.sendMail({
      from: '"YappiX Leads" <sales@yappix.ru>',
      to: "sales@yappix.ru",
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
    console.error("Email error:", error)
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
      return NextResponse.json(
        { error: "Заполните обязательные поля" },
        { status: 400 }
      )
    }

    // 3. Валидация имени
    const nameValidation = validateName(name)
    if (!nameValidation.valid) {
      return NextResponse.json(
        { error: nameValidation.error, field: "name" },
        { status: 400 }
      )
    }

    // 4. Валидация email
    if (email) {
      const emailValidation = validateEmailFn(email)
      if (!emailValidation.valid) {
        return NextResponse.json(
          { error: emailValidation.error, field: "email" },
          { status: 400 }
        )
      }
    }

    // 5. Форматирование и валидация телефона
    let formattedPhone = phone
    if (phone) {
      formattedPhone = formatRussianPhone(phone)
      const phoneValidation = validatePhone(formattedPhone)
      if (!phoneValidation.valid) {
        return NextResponse.json(
          { error: phoneValidation.error, field: "phone" },
          { status: 400 }
        )
      }
      formattedPhone = phoneValidation.formatted || formattedPhone
    }

    // 6. Проверка сообщения на спам
    if (message.length < 10) {
      return NextResponse.json(
        { error: "Сообщение слишком короткое", field: "message" },
        { status: 400 }
      )
    }

    // Format message for Telegram
    const telegramMessage = `
🔔 <b>Новая заявка с сайта!</b>

👤 <b>Имя:</b> ${name}
${email ? `📧 <b>Email:</b> ${email}` : ""}
${formattedPhone ? `📱 <b>Телефон:</b> ${formattedPhone}` : ""}
${company ? `🏢 <b>Компания:</b> ${company}` : ""}

💬 <b>Сообщение:</b>
${message}

🌐 Источник: yappix.ru
📅 ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}
${recaptchaOk ? "✅ reCAPTCHA пройдена" : recaptchaToken ? "⚠️ reCAPTCHA не пройдена" : "⚠️ Без reCAPTCHA"}
    `.trim()

    // Send to Telegram first (most reliable)
    const telegramResult = await sendToTelegram(telegramMessage)
    console.log("Telegram sent:", telegramResult)

    // Try email (may fail)
    let emailResult = false
    if (email) {
      emailResult = await sendEmail({ name, email, phone: formattedPhone, company, message })
      console.log("Email sent:", emailResult)
    }

    // At least Telegram should work
    if (!telegramResult) {
      return NextResponse.json(
        { error: "Ошибка отправки. Позвоните: +7 995 095 55 93" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Заявка отправлена! Мы скоро свяжемся с вами.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    )
  }
}
