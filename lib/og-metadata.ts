import type { Metadata } from "next"
import type { PillarPage } from "@/lib/pillar-pages-data"

const OG_IMAGE = { url: "/og.png" as const, width: 1200, height: 630 }

/** Open Graph + Twitter cards for pillar pages (shared preview image). */
export function pillarSocialMetadata(
  content: Pick<PillarPage, "h1" | "description" | "canonicalPath">,
  locale: "ru_RU" | "en_US"
): Pick<Metadata, "openGraph" | "twitter"> {
  const url = `https://yappix.ru${content.canonicalPath}`
  return {
    openGraph: {
      title: content.h1,
      description: content.description,
      type: "website",
      url,
      siteName: "YappiX",
      locale,
      images: [{ ...OG_IMAGE, alt: content.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.h1,
      description: content.description,
      images: [OG_IMAGE.url],
    },
  }
}

export type StandardSocialInput = {
  title: string
  description: string
  canonicalUrl: string
  locale: "ru_RU" | "en_US"
  /** og:title when it should differ from `title` */
  ogTitle?: string
  /** og:description when it should differ from `description` */
  ogDescription?: string
}

/** Same OG/Twitter shape for standalone pages (e.g. /process). */
export function standardSocialMetadata(opts: StandardSocialInput): Pick<Metadata, "openGraph" | "twitter"> {
  const ogTitle = opts.ogTitle ?? opts.title
  const ogDesc = opts.ogDescription ?? opts.description
  return {
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      type: "website",
      url: opts.canonicalUrl,
      siteName: "YappiX",
      locale: opts.locale,
      images: [{ ...OG_IMAGE, alt: ogTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDesc,
      images: [OG_IMAGE.url],
    },
  }
}
