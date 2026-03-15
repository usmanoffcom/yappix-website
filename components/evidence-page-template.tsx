import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { EvidenceLocale, EvidencePageContent, EvidencePageKey } from "@/lib/evidence-pages-content"
import { getEvidencePageContent } from "@/lib/evidence-pages-content"
import { EvidenceArtifactCard } from "@/components/evidence-artifact-card"
import { MetricDefinitionBlock } from "@/components/metric-definition-block"

function getFaqJsonLd(content: EvidencePageContent) {
  if (!content.faqs?.length) return null
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

function getHowToJsonLd(content: EvidencePageContent, locale: EvidenceLocale) {
  if (content.key !== "roi-methodology") return null
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: content.h1,
    description: content.description,
    step: [
      {
        "@type": "HowToStep",
        name: locale === "ru" ? "Зафиксировать baseline" : "Fix baseline",
        text:
          locale === "ru"
            ? "Определить текущие потери, время операций и стоимость часа процесса."
            : "Define current losses, operation time, and hourly process cost.",
      },
      {
        "@type": "HowToStep",
        name: locale === "ru" ? "Построить модель TCO" : "Build TCO model",
        text:
          locale === "ru"
            ? "Учесть внедрение, поддержку, интеграцию и эксплуатационные расходы."
            : "Include implementation, support, integration, and operating costs.",
      },
      {
        "@type": "HowToStep",
        name: locale === "ru" ? "Посчитать payback" : "Calculate payback",
        text:
          locale === "ru"
            ? "Сравнить экономический эффект и затраты по месячным интервалам."
            : "Compare financial impact and costs on monthly intervals.",
      },
    ],
  }
}

export function EvidencePageTemplate({
  locale,
  pageKey,
}: {
  locale: EvidenceLocale
  pageKey: EvidencePageKey
}) {
  const content = getEvidencePageContent(locale, pageKey)
  const faqJsonLd = getFaqJsonLd(content)
  const howToJsonLd = getHowToJsonLd(content, locale)

  return (
    <>
      <main className="pt-20 sm:pt-24">
        <article aria-labelledby="evidence-page-title">
          <section className="pb-10 sm:pb-14 md:pb-16 pt-10 sm:pt-12 md:pt-16">
            <div className="container mx-auto">
              <h1 id="evidence-page-title" className="text-display text-foreground mb-5 text-balance">
                {content.h1}
              </h1>
              <p className="text-body-lg max-w-4xl text-muted-foreground mb-8">{content.intro}</p>
              <Button size="lg" asChild>
                <Link href={content.ctaHref}>
                  {content.ctaLabel}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </section>

          <section className="pb-12 sm:pb-16 md:pb-20">
            <div className="container mx-auto">
              <h2 className="text-title text-foreground mb-3">{content.sections.artifactsTitle}</h2>
              <p className="text-muted-foreground mb-8">{content.sections.artifactsSubtitle}</p>
              <div className="grid lg:grid-cols-2 gap-6">
                {content.artifacts.map((artifact) => (
                  <EvidenceArtifactCard key={artifact.id} artifact={artifact} locale={locale} />
                ))}
              </div>
            </div>
          </section>

          <section className="pb-12 sm:pb-16 md:pb-20">
            <div className="container mx-auto">
              <h2 className="text-title text-foreground mb-4">{content.sections.methodologyTitle}</h2>
              <p className="text-muted-foreground max-w-4xl">{content.sections.methodologyBody}</p>
            </div>
          </section>

          <section className="pb-12 sm:pb-16 md:pb-20">
            <div className="container mx-auto">
              <h2 className="text-title text-foreground mb-6">{content.sections.metricsTitle}</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {content.metrics.map((metric) => (
                  <MetricDefinitionBlock key={metric.metric} metric={metric} locale={locale} />
                ))}
              </div>
            </div>
          </section>

          {content.faqs?.length ? (
            <section className="pb-16 md:pb-20">
              <div className="container mx-auto">
                <h2 className="text-title text-foreground mb-6">{content.sections.faqTitle}</h2>
                <div className="space-y-4">
                  {content.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-xl border border-border bg-card p-5">
                      <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}
        </article>
      </main>

      {faqJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      ) : null}
      {howToJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      ) : null}
    </>
  )
}

