import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import type { PillarPage } from "@/lib/pillar-pages-data"
import { getCaseBySlug } from "@/lib/cases-data"

interface PillarPageTemplateProps {
  content: PillarPage
  locale: "ru" | "en"
}

export function PillarPageTemplate({ content, locale }: PillarPageTemplateProps) {
  const casesBase = locale === "ru" ? "/kejsy" : "/en/cases"
  const servicesBase = locale === "ru" ? "/uslugi" : "/en/services"

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4">
              {locale === "ru" ? "Pillar-страница" : "Pillar Page"}
            </Badge>
            <h1 className="text-display text-foreground mb-6 text-balance">{content.h1}</h1>
            <p className="text-body-lg mb-8 text-pretty">{content.intro}</p>
            <Button size="lg" asChild>
              <Link href={content.ctaHref}>
                {content.ctaLabel}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {content.sections.map((section, idx) => (
        <section key={idx} className={`py-12 md:py-16 ${idx % 2 === 1 ? "bg-card" : ""}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{section.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{section.body}</p>
            </div>
          </div>
        </section>
      ))}

      {content.relatedCases.length > 0 && (
        <section className="py-12 md:py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {locale === "ru" ? "Связанные кейсы" : "Related Cases"}
            </h2>
            <div className="flex flex-wrap gap-3">
              {content.relatedCases.map((slug) => {
                const c = getCaseBySlug(slug)
                const label = c?.title ?? slug
                return (
                  <Button key={slug} variant="outline" asChild className="h-auto min-h-10 max-w-full whitespace-normal text-left py-2 px-4">
                    <Link href={`${casesBase}/${slug}`}>{label}</Link>
                  </Button>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {content.faqs.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              {locale === "ru" ? "Частые вопросы" : "FAQ"}
            </h2>
            <div className="max-w-3xl space-y-6">
              {content.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 bg-card border border-border rounded-xl">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {locale === "ru" ? "Готовы обсудить?" : "Ready to discuss?"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {locale === "ru"
              ? "Оставьте заявку — проведём аудит процесса, рассчитаем ROI и предложим пилотный сценарий."
              : "Leave a request — we'll audit your process, calculate ROI, and propose a pilot scenario."}
          </p>
          <Button size="lg" asChild>
            <Link href={content.ctaHref}>
              {content.ctaLabel}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {content.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: content.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            }),
          }}
        />
      )}
    </>
  )
}
