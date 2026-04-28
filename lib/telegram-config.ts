import { serverEnv } from "@/lib/server-env"

/**
 * Если в `.env.production` на VDS не заданы переменные — подставляем те же значения, что
 * раньше были в коде. Иначе пустой секрет ломал webhook: `if (!expected)` → 401 на все апдейты.
 * Для ротации задайте явно `TELEGRAM_*` в env.
 */
const DEFAULT_BOT_TOKEN = "8317760178:AAEUGZWwyAWBaHVW-umTrV29V3FcCTCIRyQ"
const DEFAULT_WEBHOOK_SECRET = "yappix-telegram-webhook-2026"
const DEFAULT_LEADS_CHAT_ID = "-1002757127968"

/** Bot API token (обязателен для Telegram API). */
export function getTelegramBotToken(): string {
  return serverEnv("TELEGRAM_BOT_TOKEN") || DEFAULT_BOT_TOKEN
}

/**
 * ID чата для лидов. Поддерживаются `TELEGRAM_LEADS_CHAT_ID` и алиас `TELEGRAM_CHAT_ID`
 * (как в типовом шаблоне .env).
 */
export function getTelegramLeadsChatId(): string {
  return serverEnv("TELEGRAM_LEADS_CHAT_ID") || serverEnv("TELEGRAM_CHAT_ID") || DEFAULT_LEADS_CHAT_ID
}

/** Должен совпадать с `secret_token` в setWebhook. */
export function getTelegramWebhookSecret(): string {
  return serverEnv("TELEGRAM_WEBHOOK_SECRET") || DEFAULT_WEBHOOK_SECRET
}

/** Публичный URL webhook; иначе из `NEXT_PUBLIC_APP_URL` или прод-домен. */
export function getTelegramWebhookUrl(): string {
  const explicit = serverEnv("TELEGRAM_WEBHOOK_URL")
  if (explicit) return explicit
  const base = serverEnv("NEXT_PUBLIC_APP_URL")?.replace(/\/$/, "")
  if (base && /^https?:\/\//i.test(base)) return `${base}/api/telegram/webhook`
  return "https://yappix.ru/api/telegram/webhook"
}
