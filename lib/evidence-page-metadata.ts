import type { Metadata } from "next"
import type { EvidenceLocale, EvidencePageKey } from "@/lib/evidence-pages-content"
import { getEvidencePageContent } from "@/lib/evidence-pages-content"

export function buildEvidenceMetadata(locale: EvidenceLocale, key: EvidencePageKey): Metadata {
  const content = getEvidencePageContent(locale, key)
  const canonical = `https://yappix.ru${content.canonicalPath}`
  const ruCanonical = `https://yappix.ru${getEvidencePageContent("ru", key).canonicalPath}`
  const enCanonical = `https://yappix.ru${getEvidencePageContent("en", key).canonicalPath}`

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical,
      languages: {
        "ru-RU": ruCanonical,
        "en-US": enCanonical,
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      type: "website",
      url: canonical,
      siteName: "YappiX",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: content.h1,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: ["/og.png"],
    },
  }
}

