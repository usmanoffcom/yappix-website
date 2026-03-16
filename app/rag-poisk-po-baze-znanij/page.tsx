import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PillarPageTemplate } from "@/components/pillar-page-template"
import { pillarPagesByLocale } from "@/lib/pillar-pages-data"

const content = pillarPagesByLocale.ru["rag-search"]

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: `https://yappix.ru${content.canonicalPath}`, languages: { "en-US": "https://yappix.ru/en/rag-enterprise-knowledge-search" } },
  openGraph: { title: content.h1, description: content.description, type: "website", url: `https://yappix.ru${content.canonicalPath}`, siteName: "YappiX", locale: "ru_RU" },
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
