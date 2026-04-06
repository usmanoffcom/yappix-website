import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PillarPageTemplate } from "@/components/pillar-page-template"
import { pillarPagesByLocale } from "@/lib/pillar-pages-data"
import { pillarSocialMetadata } from "@/lib/og-metadata"

const content = pillarPagesByLocale.ru["vnedrenie-ai-rag"]

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: `https://yappix.ru${content.canonicalPath}` },
  ...pillarSocialMetadata(content, "ru_RU"),
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <PillarPageTemplate content={content} locale="ru" />
      </main>
      <Footer />
    </>
  )
}
