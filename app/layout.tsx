import type React from "react"
import type { Metadata, Viewport } from "next"
import { Onest, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ChatWidgetWrapper } from "@/components/chat-widget-wrapper"
import { DeferredRecaptchaWrapper } from "@/components/deferred-recaptcha-wrapper"
import "./layout.css"

const _onest = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-onest",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
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
}

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

/** Яндекс.Метрика + Top.Mail.Ru в раннем &lt;head&gt; (строки видны аудиторам без JS-отложенной вставки next/script). */
const YANDEX_METRIKA_ID = 95481194
const MAILRU_TOP_ID = "3749570"
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID?.trim() || ""

const yandexMetrikaHeadScript = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(${YANDEX_METRIKA_ID},"init",{webvisor:true,clickmap:true,referrer:document.referrer,url:typeof location!=="undefined"?location.href:"",accurateTrackBounce:true,trackLinks:true});`

const mailRuTopHeadScript = `var _tmr=window._tmr||(window._tmr=[]);_tmr.push({id:"${MAILRU_TOP_ID}",type:"pageView",start:(new Date()).getTime()});(function(d,w,id){if(d.getElementById(id))return;var ts=d.createElement("script");ts.type="text/javascript";ts.async=true;ts.id=id;ts.src="https://top-fwz1.mail.ru/js/code.js";var f=function(){var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(ts,s)};if(w.opera=="[object Opera]"){d.addEventListener("DOMContentLoaded",f,false)}else{f()}})(document,window,"tmr-code");`

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
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: yandexMetrikaHeadScript }} />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: mailRuTopHeadScript }} />
        {GA_MEASUREMENT_ID ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`} />
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(GA_MEASUREMENT_ID)});`,
              }}
            />
          </>
        ) : null}
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
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<div><img src="https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}" style="position:absolute;left:-9999px" alt="Yandex Metrica" width="1" height="1" /></div>`,
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          <DeferredRecaptchaWrapper>
            {children}
            <ChatWidgetWrapper />
          </DeferredRecaptchaWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
