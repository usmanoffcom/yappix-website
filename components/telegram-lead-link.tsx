"use client"

import Link from "next/link"
import { reachGoal } from "@/lib/mail-ru-goal"

const TELEGRAM_BOT_URL = "https://t.me/yappix_bot"

type Props = {
  className?: string
  children: React.ReactNode
}

export function TelegramLeadLink({ className, children }: Props) {
  return (
    <Link
      href={TELEGRAM_BOT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => reachGoal("lead")}
    >
      {children}
    </Link>
  )
}
