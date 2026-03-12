import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL('https://yappix.ru'),
  title: "YappiX — We automate software and web service development and calculate the economics of AI implementation",
  description:
    "We automate software and web service development processes and calculate the economics of AI implementation. Full-cycle IT studio. Skolkovo residents. MVP in 7 days with money-back guarantee.",
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
    title: "YappiX — We automate software and web service development and calculate the economics of AI implementation",
    description: "We automate software and web service development and calculate the economics of AI implementation. Skolkovo residents. MVP in 7 days with money-back guarantee.",
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
    title: "YappiX — We automate software and web service development and the economics of AI implementation",
    description: "We automate software and web service development and calculate the economics of AI implementation. Skolkovo residents.",
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
