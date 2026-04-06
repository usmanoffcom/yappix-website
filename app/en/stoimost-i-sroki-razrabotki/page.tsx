import type { Metadata } from "next"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { PillarPageTemplate } from "@/components/pillar-page-template"
import { pillarPagesByLocale } from "@/lib/pillar-pages-data"
import { pillarSocialMetadata } from "@/lib/og-metadata"

const content = pillarPagesByLocale.en["stoimost-sroki"]

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: {
    canonical: `https://yappix.ru${content.canonicalPath}`,
    languages: { "ru-RU": "https://yappix.ru/stoimost-i-sroki-razrabotki" },
  },
  ...pillarSocialMetadata(content, "en_US"),
}

export default function Page() {
  return (
    <>
      <HeaderEn />
      <main className="pt-20">
        <PillarPageTemplate content={content} locale="en" />
      </main>
      <FooterEn />
    </>
  )
}
