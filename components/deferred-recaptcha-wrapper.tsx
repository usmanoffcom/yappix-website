"use client"

import { useState, useEffect } from "react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { RECAPTCHA_SITE_KEY } from "@/lib/validation"

// Отложенная загрузка снижает TBT на десктопе (reCAPTCHA ~41 KB CSS блокирует поток)
const DEFER_MS = 5000

export function DeferredRecaptchaWrapper({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false

    const trigger = () => {
      if (!cancelled) setReady(true)
    }

    const t = setTimeout(trigger, DEFER_MS)

    const onInteraction = () => {
      trigger()
      window.removeEventListener("scroll", onInteraction, { capture: true })
      window.removeEventListener("mousemove", onInteraction, { capture: true })
      window.removeEventListener("touchstart", onInteraction, { capture: true })
      window.removeEventListener("keydown", onInteraction, { capture: true })
    }

    window.addEventListener("scroll", onInteraction, { once: true, passive: true, capture: true })
    window.addEventListener("mousemove", onInteraction, { once: true, passive: true, capture: true })
    window.addEventListener("touchstart", onInteraction, { once: true, passive: true, capture: true })
    window.addEventListener("keydown", onInteraction, { once: true, passive: true, capture: true })

    return () => {
      cancelled = true
      clearTimeout(t)
      window.removeEventListener("scroll", onInteraction, { capture: true })
      window.removeEventListener("mousemove", onInteraction, { capture: true })
      window.removeEventListener("touchstart", onInteraction, { capture: true })
      window.removeEventListener("keydown", onInteraction, { capture: true })
    }
  }, [])

  if (!ready) {
    return <>{children}</>
  }

  if (!RECAPTCHA_SITE_KEY) {
    return <>{children}</>
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={RECAPTCHA_SITE_KEY}
      scriptProps={{ async: true, defer: true, appendTo: "body" }}
      language="ru"
      useRecaptchaNet={false}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}
