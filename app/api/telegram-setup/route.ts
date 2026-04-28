import { NextResponse } from "next/server"
import {
  getTelegramBotToken,
  getTelegramWebhookSecret,
  getTelegramWebhookUrl,
} from "@/lib/telegram-config"

export async function GET() {
  try {
    const token = getTelegramBotToken()
    if (!token) {
      return NextResponse.json(
        { error: "Задайте TELEGRAM_BOT_TOKEN в .env.production" },
        { status: 500 },
      )
    }
    const WEBHOOK_URL = getTelegramWebhookUrl()
    const [webhookInfoRes, meRes, updatesRes] = await Promise.all([
      fetch(`https://api.telegram.org/bot${token}/getWebhookInfo`),
      fetch(`https://api.telegram.org/bot${token}/getMe`),
      fetch(`https://api.telegram.org/bot${token}/getUpdates?limit=5`),
    ])

    const webhookInfo = await webhookInfoRes.json()
    const me = await meRes.json()
    const updates = await updatesRes.json()

    return NextResponse.json({
      success: true,
      webhook_url: WEBHOOK_URL,
      webhook_secret_set: Boolean(getTelegramWebhookSecret()),
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
    const token = getTelegramBotToken()
    const secret = getTelegramWebhookSecret()
    const WEBHOOK_URL = getTelegramWebhookUrl()
    if (!token) {
      return NextResponse.json({ ok: false, error: "TELEGRAM_BOT_TOKEN не задан" }, { status: 500 })
    }
    if (!secret) {
      return NextResponse.json(
        { ok: false, error: "Задайте TELEGRAM_WEBHOOK_SECRET в .env.production (совпадает с secret_token в setWebhook)" },
        { status: 500 },
      )
    }
    const body = new URLSearchParams({
      url: WEBHOOK_URL,
      secret_token: secret,
      drop_pending_updates: "true",
      allowed_updates: JSON.stringify(["message"]),
    })

    const response = await fetch(`https://api.telegram.org/bot${token}/setWebhook`, {
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

