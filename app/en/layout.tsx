import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://yappix.ru"),
  title: "YappiX — AI-first product engineering (UAE · Europe · US)",
  description:
    "AI-first product engineering for founders and B2B teams: MVP and SaaS, AI/RAG, and a transparent delivery process — from Dubai to Europe and the US.",
  keywords: [
    "AI-first development",
    "MVP development",
    "SaaS development",
    "RAG implementation",
    "CTO as a Service",
    "product engineering",
    "UAE",
    "Europe",
    "United States",
    "startup development",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yappix.ru/en",
    siteName: "YappiX",
    title: "YappiX — AI-first product engineering (UAE · Europe · US)",
    description:
      "Ship web products, MVPs, and AI-powered systems with a transparent process — distributed team, clear artifacts, measurable outcomes.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "YappiX — IT studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
    title: "YappiX — AI-first product engineering",
    description: "MVP, SaaS, AI/RAG, and delivery you can inspect — UAE, Europe, US.",
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
