import type { Metadata } from "next"
import type { GeoCity } from "@/lib/geo-landing-data"
import { getGeoSeoExtra } from "@/lib/geo-seo-extras"

const base = "https://yappix.ru"

export function buildGeoMetadata(geo: GeoCity, locale: "ru" | "en"): Metadata {
  const ruUrl = `${base}/razrabotka-sajtov-${geo.slugRu}`
  const enUrl = `${base}/en/software-development-${geo.slugEn}`
  const isRu = locale === "ru"
  const title = isRu ? geo.metaTitleRu : geo.metaTitleEn
  const description = isRu ? geo.metaDescRu : geo.metaDescEn
  const canonical = isRu ? ruUrl : enUrl
  const ogLocale = isRu ? "ru_RU" : "en_US"
  const countryLabel = isRu ? geo.countryRu : geo.countryEn
  const extra = getGeoSeoExtra(geo.slugRu)
  const keywords = extra
    ? isRu
      ? extra.keywordsRu
      : extra.keywordsEn
    : undefined

  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical,
      languages: {
        "ru-RU": ruUrl,
        "en-US": enUrl,
        "x-default": ruUrl,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      siteName: "YappiX",
      locale: ogLocale,
      images: [
        {
          url: "/icon-512x512.png",
          width: 512,
          height: 512,
          alt: `YappiX — ${countryLabel}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}
