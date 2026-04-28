import nodemailer from "nodemailer"

import { serverEnv } from "@/lib/server-env"

function parseBoolEnv(name: string): boolean | undefined {
  const raw = serverEnv(name)
  if (raw === undefined) return undefined
  const s = raw.toLowerCase()
  if (s === "1" || s === "true" || s === "yes") return true
  if (s === "0" || s === "false" || s === "no") return false
  return undefined
}

/**
 * Nodemailer: 465 = SMTPS (TLS с первого байта, secure: true).
 * 587 / 2525 / 25 = обычно STARTTLS (secure: false, requireTLS: true).
 * `SMTP_SECURE` для стандартных портов не нужен и при 587+false не «ломает» соединение.
 */
function tlsForSmtpPort(port: number): { secure: boolean; requireTLS: boolean } {
  if (port === 465) {
    return { secure: true, requireTLS: false }
  }
  if (port === 587 || port === 2525 || port === 25) {
    return { secure: false, requireTLS: true }
  }
  const override = parseBoolEnv("SMTP_SECURE")
  const secure = override !== undefined ? override : false
  return { secure, requireTLS: !secure }
}

/** Nodemailer transport when `SMTP_EMAIL` (или алиас `SMTP_USER`) + `SMTP_PASSWORD` заданы. */
export function createLeadMailTransport(): ReturnType<typeof nodemailer.createTransport> | null {
  const user = serverEnv("SMTP_EMAIL") || serverEnv("SMTP_USER")
  const pass = serverEnv("SMTP_PASSWORD")
  if (!user || !pass) return null

  const host = serverEnv("SMTP_HOST") || "smtp.gmail.com"
  const portRaw = serverEnv("SMTP_PORT") || "587"
  const port = Number(portRaw) || 587

  const { secure, requireTLS } = tlsForSmtpPort(port)

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    requireTLS,
    connectionTimeout: 20000,
    greetingTimeout: 15000,
    socketTimeout: 30000,
  })
}

/** From header; default `"YappiX Leads" <SMTP_EMAIL>`. */
export function getSmtpFromAddress(): string {
  const custom = serverEnv("SMTP_FROM")
  if (custom) return custom
  const email = serverEnv("SMTP_EMAIL") || serverEnv("SMTP_USER")
  return email ? `"YappiX Leads" <${email}>` : ""
}

/** Inbox for lead notifications (defaults to SMTP_EMAIL / SMTP_USER). */
export function getSmtpToAddress(): string {
  return serverEnv("SMTP_TO") || serverEnv("SMTP_EMAIL") || serverEnv("SMTP_USER") || ""
}
