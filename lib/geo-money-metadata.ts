import type { Metadata } from "next"
import type { GeoMoneyPage } from "@/lib/geo-money-pages-data"

export function geoMoneyPageMetadata(page: GeoMoneyPage, locale: "ru" | "en" = "ru"): Metadata {
  const url = `https://yappix.ru${page.canonicalPath}`
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.h1,
      description: page.description,
      type: "website",
      url,
      siteName: "YappiX",
      locale: locale === "en" ? "en_US" : "ru_RU",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: page.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.h1,
      description: page.description,
      images: ["/og.png"],
    },
  }
}
