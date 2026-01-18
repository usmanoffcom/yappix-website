"use client"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { RECAPTCHA_SITE_KEY } from "@/lib/validation"

export function RecaptchaProvider({ children }: { children: React.ReactNode }) {
  if (!RECAPTCHA_SITE_KEY) {
    // Если ключ не задан, просто рендерим children без провайдера
    return <>{children}</>
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "body", // Изменено с "head" на "body" для лучшей совместимости
      }}
      language="ru"
      useRecaptchaNet={false}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}
