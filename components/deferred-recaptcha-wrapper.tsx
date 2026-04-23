"use client"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { RECAPTCHA_SITE_KEY } from "@/lib/validation"

/**
 * reCAPTCHA оборачивает дерево с первого кадра.
 * Раньше провайдер включался через 5s / по жесту — из‑за смены типа родителя React
 * полностью remount’ил страницу и ловил краши в клиентских компонентах (error.tsx).
 * Скрипт grecaptcha по‑прежнему async/defer — см. scriptProps.
 */
export function DeferredRecaptchaWrapper({ children }: { children: React.ReactNode }) {
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
