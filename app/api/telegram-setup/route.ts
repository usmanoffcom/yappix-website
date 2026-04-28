import { NextResponse } from "next/server"
import {
  getTelegramBotToken,
  getTelegramWebhookSecret,
  getTelegramWebhookUrl,
} from "@/lib/telegram-config"
import { telegramBotFetch, proxyConfigured } from "@/lib/proxy-fetch"

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
    const [webhookInfoRes, meRes] = await Promise.all([
      telegramBotFetch(`https://api.telegram.org/bot${token}/getWebhookInfo`),
      telegramBotFetch(`https://api.telegram.org/bot${token}/getMe`),
    ])

    const webhookInfo = (await webhookInfoRes.json()) as { ok?: boolean; result?: unknown }
    const me = (await meRes.json()) as { ok?: boolean; result?: unknown }

    return NextResponse.json({
      success: true,
      webhook_url: WEBHOOK_URL,
      proxy: proxyConfigured("telegram"),
      webhook_secret_set: Boolean(getTelegramWebhookSecret()),
      webhook_info: webhookInfo.result,
      bot: me.result,
      setup_hint: "Для установки webhook вызовите POST /api/telegram-setup",
    })
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error)
    console.error("telegram-setup GET:", msg)
    return NextResponse.json(
      {
        error: "Не удалось достучаться до api.telegram.org (часто таймаут с РФ-VDS).",
        detail: msg,
        hint: proxyConfigured("telegram")
          ? "Проверьте TELEGRAM_HTTPS_PROXY / HTTPS_PROXY"
          : "Добавьте TELEGRAM_HTTPS_PROXY в .env.production — см. deploy/VDS.md",
      },
      { status: 500 },
    )
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

    const response = await telegramBotFetch(`https://api.telegram.org/bot${token}/setWebhook`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    })
    const data = (await response.json()) as { ok?: boolean }
    return NextResponse.json(data, { status: data.ok ? 200 : 500 })
  } catch (error) {
    return NextResponse.json({ ok: false, error: "Ошибка установки webhook" }, { status: 500 })
  }
}

