import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL('https://yappix.ru'),
  title: "YappiX — Web Development, Apps & AI Solutions | Skolkovo Residents",
  description:
    "YappiX — Full-cycle IT studio. Web development, mobile apps, AI chatbots, SaaS, FinTech solutions. Skolkovo residents. MVP in 7 days with money-back guarantee. Offices in USA, Russia, Turkey, Serbia.",
  keywords: [
    "web development",
    "mobile apps",
    "AI chatbots",
    "SaaS development",
    "FinTech",
    "DevOps",
    "IT outsourcing",
    "MVP development",
    "startup development",
    "AI solutions",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yappix.ru/en",
    siteName: "YappiX",
    title: "YappiX — Web Development, Apps & AI Solutions",
    description: "Full-cycle IT studio. Skolkovo residents. MVP in 7 days with money-back guarantee.",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "YappiX - IT Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YappiX — Web Development & AI Solutions",
    description: "Full-cycle IT studio. Skolkovo residents. MVP in 7 days.",
  },
  alternates: {
    canonical: "https://yappix.ru/en",
    languages: {
      "ru-RU": "https://yappix.ru",
      "en-US": "https://yappix.ru/en",
    },
  },
}

export default function EnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
