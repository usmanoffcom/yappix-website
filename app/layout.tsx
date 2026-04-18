import type React from "react"
import type { Metadata, Viewport } from "next"
import { Onest, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ChatWidgetWrapper } from "@/components/chat-widget-wrapper"
import { DeferredRecaptchaWrapper } from "@/components/deferred-recaptcha-wrapper"
import { GoogleAnalytics } from "@/components/google-analytics"
import { YandexMetrika } from "@/components/yandex-metrika"
import { MailRuTop } from "@/components/mail-ru-top"
import "./layout.css"

const _onest = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-onest",
  display: "swap",
  preload: false,
})
const _geistMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yappix.ru'),
  title: "YappiX — AI-first разработка MVP, SaaS и AI-решений для бизнеса в ОАЭ, Европе и США",
  description:
    "Проектируем и запускаем MVP, SaaS, клиентские кабинеты и AI-автоматизацию для бизнеса. YappiX — команда product development для фаундеров и компаний в ОАЭ, Европе и США.",
  keywords: [
    "разработка сайтов на заказ",
    "корпоративные сайты",
    "интернет-магазины",
    "мобильные приложения на заказ",
    "разработка MVP",
    "разработка SaaS",
    "внедрение ИИ в бизнес",
    "AI чат-боты",
    "автоматизация бизнес-процессов",
    "AI-first разработка",
    "SaaS разработка",
    "AI автоматизация",
    "RAG внедрение",
    "product engineering",
    "CTO as a service",
    "разработка для стартапов",
    "русскоязычная команда разработки ОАЭ",
    "клиентские кабинеты",
    "product development",
    "AI-ассистент для бизнеса",
    "запуск продукта",
    "UX продуктовый дизайн",
  ],
  authors: [{ name: "YappiX" }],
  creator: "YappiX",
  publisher: "YappiX",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/icon.svg', color: '#ec4899' },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://yappix.ru",
    siteName: "YappiX",
    title: "YappiX — AI-first разработка MVP, SaaS и AI-решений для бизнеса в ОАЭ, Европе и США",
    description: "Проектируем и запускаем MVP, SaaS, клиентские кабинеты и AI-автоматизацию для бизнеса. Команда product development для фаундеров в ОАЭ, Европе и США.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "YappiX — AI-first product engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YappiX — AI-first разработка MVP, SaaS и AI-решений для бизнеса",
    description: "Проектируем и запускаем MVP, SaaS, клиентские кабинеты и AI-автоматизацию. Команда product development для фаундеров в ОАЭ, Европе и США.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://yappix.ru",
    languages: {
      "ru-RU": "https://yappix.ru",
      "en-US": "https://yappix.ru/en",
    },
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.yappix.ru" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.yappix.ru" />
        <link rel="dns-prefetch" href="https://mc.yandex.ru" />
        <link rel="dns-prefetch" href="https://top-fwz1.mail.ru" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="YappiX" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "YappiX",
              url: "https://yappix.ru",
              inLanguage: ["ru-RU", "en-US"],
              publisher: { "@type": "Organization", name: "YappiX", url: "https://yappix.ru" },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "YappiX",
              alternateName: "ООО ЯППИКС",
              url: "https://yappix.ru",
              logo: "https://yappix.ru/images/logo-002.png",
              description: "AI-first команда, которая помогает фаундерам и компаниям быстрее запускать и перестраивать digital-продукты: MVP, SaaS, клиентские кабинеты и AI-автоматизацию.",
              foundingDate: "2018",
              founders: [
                {
                  "@type": "Person",
                  name: "Ренат Усманов",
                  jobTitle: "Генеральный директор",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+7-495-128-98-48",
                contactType: "sales",
                availableLanguage: ["Russian", "English"],
              },
              address: [
                {
                  "@type": "PostalAddress",
                  addressCountry: "RU",
                  addressLocality: "Москва",
                  streetAddress: "Сколково",
                },
                {
                  "@type": "PostalAddress",
                  addressCountry: "US",
                  addressLocality: "Delaware",
                },
                {
                  "@type": "PostalAddress",
                  addressCountry: "TR",
                  addressLocality: "Istanbul",
                },
                {
                  "@type": "PostalAddress",
                  addressCountry: "RS",
                  addressLocality: "Belgrade",
                },
              ],
              sameAs: ["https://t.me/yappix", "https://vk.com/yappix", "https://linkedin.com/company/yappix"],
              areaServed: ["AE", "CY", "DE", "US", "RU", "KZ", "RS", "GE", "TR"],
              serviceType: [
                "AI-first product engineering",
                "MVP разработка и запуск",
                "SaaS и клиентские кабинеты",
                "AI-автоматизация и RAG",
                "CTO as a Service",
                "Product redesign и UX",
                "Разработка веб-сайтов",
                "Разработка мобильных приложений",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${_onest.variable} ${_geistMono.variable} ${_onest.className} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          <GoogleAnalytics />
          <YandexMetrika />
          <MailRuTop />
          <DeferredRecaptchaWrapper>
            {children}
            <ChatWidgetWrapper />
          </DeferredRecaptchaWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
