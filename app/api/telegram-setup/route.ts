import { NextResponse } from "next/server"

const TELEGRAM_BOT_TOKEN = "8317760178:AAEUGZWwyAWBaHVW-umTrV29V3FcCTCIRyQ"
const TELEGRAM_WEBHOOK_SECRET = "yappix-telegram-webhook-2026"
const WEBHOOK_URL = "https://yappix.ru/api/telegram/webhook"

export async function GET() {
  try {
    const [webhookInfoRes, meRes, updatesRes] = await Promise.all([
      fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getWebhookInfo`),
      fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`),
      fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates?limit=5`),
    ])

    const webhookInfo = await webhookInfoRes.json()
    const me = await meRes.json()
    const updates = await updatesRes.json()

    return NextResponse.json({
      success: true,
      webhook_url: WEBHOOK_URL,
      webhook_info: webhookInfo.result,
      bot: me.result,
      updates: updates.result,
      setup_hint: "Для установки webhook вызовите POST /api/telegram-setup",
    })
  } catch (error) {
    return NextResponse.json({ error: "Ошибка получения данных" }, { status: 500 })
  }
}

export async function POST() {
  try {
    const body = new URLSearchParams({
      url: WEBHOOK_URL,
      secret_token: TELEGRAM_WEBHOOK_SECRET,
      drop_pending_updates: "true",
      allowed_updates: JSON.stringify(["message"]),
    })

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    })
    const data = await response.json()
    return NextResponse.json(data, { status: data.ok ? 200 : 500 })
  } catch (error) {
    return NextResponse.json({ ok: false, error: "Ошибка установки webhook" }, { status: 500 })
  }
}

