import nodemailer from "nodemailer"

import { serverEnv } from "@/lib/server-env"

/** Nodemailer transport when `SMTP_EMAIL` (или алиас `SMTP_USER`) + `SMTP_PASSWORD` заданы. */
export function createLeadMailTransport(): ReturnType<typeof nodemailer.createTransport> | null {
  const user = serverEnv("SMTP_EMAIL") || serverEnv("SMTP_USER")
  const pass = serverEnv("SMTP_PASSWORD")
  if (!user || !pass) return null

  const host = serverEnv("SMTP_HOST") || "smtp.gmail.com"
  const portRaw = serverEnv("SMTP_PORT") || "587"
  const port = Number(portRaw) || 587

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout: 5000,
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
