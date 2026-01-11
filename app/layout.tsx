import type React from "react"
import type { Metadata, Viewport } from "next"
import { Onest, JetBrains_Mono } from "next/font/google"
import { ChatWidgetWrapper } from "@/components/chat-widget-wrapper"
import { RecaptchaProvider } from "@/components/recaptcha-provider"
import "./globals.css"

// Suppress hydration warnings from browser extensions
const suppressHydrationWarning = true

const _onest = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-onest",
})
const _geistMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://yappix.ru'),
  title: "YappiX — Разработка сайтов, приложений и AI-решений | Резиденты Сколково",
  description:
    "YappiX — IT-студия полного цикла. Разработка веб-сайтов, мобильных приложений, AI-чатов, SaaS, FinTech решений. Резиденты Сколково. MVP за 7 дней с гарантией возврата. Офисы в США, России, Турции, Сербии.",
  keywords: [
    "разработка сайтов",
    "веб-разработка",
    "мобильные приложения",
    "AI чат-боты",
    "искусственный интеллект",
    "SaaS разработка",
    "FinTech",
    "DevOps",
    "SEO продвижение",
    "SMM",
    "IT аутсорсинг",
    "Сколково",
    "веб-студия Москва",
    "разработка MVP",
    "стартап разработка",
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
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'YappiX',
  },
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
    title: "YappiX — Разработка сайтов, приложений и AI-решений",
    description: "IT-студия полного цикла. Резиденты Сколково. MVP за 7 дней с гарантией возврата.",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "YappiX - IT-студия",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YappiX — Разработка сайтов и AI-решений",
    description: "IT-студия полного цикла. Резиденты Сколково. MVP за 7 дней.",
    images: ["/icon-512x512.png"],
  },
  alternates: {
    canonical: "https://yappix.ru",
    languages: {
      "ru-RU": "https://yappix.ru",
      "en-US": "https://yappix.ru/en",
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  generator: 'v0.app'
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
    <html lang="ru">
      <head>
        {/* Yandex.Metrika counter */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');
              ym(95481194, 'init', {webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/95481194" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "YappiX",
              url: "https://yappix.ru",
              logo: "https://yappix.ru/logo.png",
              description: "IT-студия полного цикла. Разработка веб-сайтов, приложений, AI-решений.",
              foundingDate: "2018",
              founders: [
                {
                  "@type": "Person",
                  name: "YappiX Team",
                },
              ],
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
              areaServed: ["RU", "KZ", "BY", "UZ", "AM", "GE", "AZ"],
              serviceType: [
                "Разработка веб-сайтов",
                "Разработка мобильных приложений",
                "AI и машинное обучение",
                "DevOps услуги",
                "SaaS разработка",
                "FinTech решения",
                "SEO продвижение",
                "SMM маркетинг",
              ],
            }),
          }}
        />
      </head>
      <body className={`${_onest.variable} font-sans antialiased`}>
        <RecaptchaProvider>
          {children}
          <ChatWidgetWrapper />
        </RecaptchaProvider>
      </body>
    </html>
  )
}
