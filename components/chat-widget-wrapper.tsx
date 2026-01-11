"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const ChatWidget = dynamic(
  () => import("@/components/chat-widget").then((mod) => mod.ChatWidget),
  { ssr: false, loading: () => null }
)

export function ChatWidgetWrapper() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Откладываем загрузку чата на 3 секунды после загрузки страницы
    const timer = setTimeout(() => {
      setShouldLoad(true)
    }, 3000)

    // Или загружаем при взаимодействии пользователя
    const handleInteraction = () => {
      setShouldLoad(true)
      window.removeEventListener("scroll", handleInteraction)
      window.removeEventListener("mousemove", handleInteraction)
      window.removeEventListener("touchstart", handleInteraction)
    }

    window.addEventListener("scroll", handleInteraction, { once: true, passive: true })
    window.addEventListener("mousemove", handleInteraction, { once: true, passive: true })
    window.addEventListener("touchstart", handleInteraction, { once: true, passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleInteraction)
      window.removeEventListener("mousemove", handleInteraction)
      window.removeEventListener("touchstart", handleInteraction)
    }
  }, [])

  if (!shouldLoad) return null

  return <ChatWidget />
}

