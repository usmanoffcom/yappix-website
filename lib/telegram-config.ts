import { serverEnv } from "@/lib/server-env"

/** Bot API token (обязателен для Telegram API). */
export function getTelegramBotToken(): string {
  return serverEnv("TELEGRAM_BOT_TOKEN") || ""
}

/**
 * ID чата для лидов. Поддерживаются `TELEGRAM_LEADS_CHAT_ID` и алиас `TELEGRAM_CHAT_ID`
 * (как в типовом шаблоне .env).
 */
export function getTelegramLeadsChatId(): string {
  return serverEnv("TELEGRAM_LEADS_CHAT_ID") || serverEnv("TELEGRAM_CHAT_ID") || ""
}

/** Должен совпадать с `secret_token` в setWebhook. */
export function getTelegramWebhookSecret(): string {
  return serverEnv("TELEGRAM_WEBHOOK_SECRET") || ""
}

/** Публичный URL webhook; иначе из `NEXT_PUBLIC_APP_URL` или прод-домен. */
export function getTelegramWebhookUrl(): string {
  const explicit = serverEnv("TELEGRAM_WEBHOOK_URL")
  if (explicit) return explicit
  const base = serverEnv("NEXT_PUBLIC_APP_URL")?.replace(/\/$/, "")
  if (base && /^https?:\/\//i.test(base)) return `${base}/api/telegram/webhook`
  return "https://yappix.ru/api/telegram/webhook"
}
