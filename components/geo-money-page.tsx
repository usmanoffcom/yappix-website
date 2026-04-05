import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronRight, GitBranch, Layers } from "lucide-react"
import type { GeoMoneyPage } from "@/lib/geo-money-pages-data"
import { getGeoInternalLinkLabel } from "@/lib/geo-money-link-labels"
import { getCaseBySlug } from "@/lib/cases-data"

const regionLabels: Record<string, { ru: string; en: string }> = {
  oae: { ru: "ОАЭ", en: "UAE" },
  eu: { ru: "Европа", en: "Europe" },
  usa: { ru: "США", en: "US" },
}

function RelatedLinkCard({ href, locale }: { href: string; locale: "ru" | "en" }) {
  const { label, kind } = getGeoInternalLinkLabel(href, locale)
  const badge =
    locale === "en" ? (kind === "pillar" ? "Focus" : "Service") : kind === "pillar" ? "Направление" : "Услуга"
  return (
    <Link
      href={href}
      className="group flex flex-col gap-1 p-4 md:p-5 bg-background border border-border rounded-xl hover:border-primary/40 hover:bg-primary/[0.03] transition-all text-left"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-medium text-foreground group-hover:text-primary transition-colors leading-snug">{label}</span>
        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 mt-0.5" />
      </div>
      <Badge variant="secondary" className="w-fit text-[10px] uppercase tracking-wide">
        {badge}
      </Badge>
    </Link>
  )
}

export function GeoMoneyPageTemplate({ page, locale = "ru" }: { page: GeoMoneyPage; locale?: "ru" | "en" }) {
  const regionLabel = regionLabels[page.region]?.[locale] ?? page.region.toUpperCase()
  const homeHref = locale === "en" ? "/en" : "/"
  const homeName = locale === "en" ? "Home" : "Главная"
  const processHref = locale === "en" ? "/en/process" : "/process"
  const casesHref = locale === "en" ? "/en/cases" : "/kejsy"
  const casesCta = locale === "en" ? "All cases" : "Все кейсы"
  const siteBase = "https://yappix.ru"

  const ui =
    locale === "en"
      ? {
          breadcrumbAria: "Breadcrumbs",
          badgeSuffix: " · AI-first product engineering",
          processCtaShort: "How we work",
          processSectionTitle: "Process & artifacts",
          processSectionBody:
            "We run projects in six stages: discovery, product logic, UX and scope, AI-assisted delivery, QA and handoff, support and evolution. At each stage you get clear artifacts and demos — no black box.",
          processButton: "Full YappiX process",
          relatedCasesTitle: "Relevant cases",
          relatedCasesLead: "Projects with a similar context — methodology and artifacts on the case page.",
          relatedLinksTitle: "Related focus areas & services",
          relatedLinksLead: "Go to pillar pages for methodology, or to services for scope and formats.",
          pillarsHeading: "Focus areas",
          servicesHeading: "Services",
          faqTitle: "FAQ",
          finalTitle: "Ready to discuss your project?",
          finalLead:
            "We’ll unpack regional context, the product, and a collaboration format — without a forced scope.",
          allCases: casesCta,
        }
      : {
          breadcrumbAria: "Хлебные крошки",
          badgeSuffix: " · AI-first product engineering",
          processCtaShort: "Как устроен процесс",
          processSectionTitle: "Процесс и артефакты",
          processSectionBody:
            "Мы ведём проект по шести этапам: discovery, продуктовая логика, UX и scope, AI-assisted delivery, QA и передача, поддержка и развитие. На каждом этапе — понятные артефакты и демо, без «чёрного ящика».",
          processButton: "Полное описание процесса YappiX",
          relatedCasesTitle: "Релевантные кейсы",
          relatedCasesLead: "Примеры проектов с похожим контекстом — с методикой и артефактами на странице кейса.",
          relatedLinksTitle: "Связанные направления и услуги",
          relatedLinksLead: "Переходите к pillar-страницам для методики или к услугам — для состава работ и форматов.",
          pillarsHeading: "Направления",
          servicesHeading: "Услуги",
          faqTitle: "Частые вопросы",
          finalTitle: "Готовы обсудить задачу?",
          finalLead: "Разберём контекст региона, продукт и формат сотрудничества — без навязанного scope.",
          allCases: casesCta,
        }

  const casePath = (slug: string) => (locale === "en" ? `/en/cases/${slug}` : `/kejsy/${slug}`)

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: homeName, item: siteBase + (locale === "en" ? "/en" : "") },
              {
                "@type": "ListItem",
                position: 2,
                name: regionLabel,
                item: `${siteBase}/${locale === "en" ? "en/" : ""}${page.region}`,
              },
              { "@type": "ListItem", position: 3, name: page.h1, item: `${siteBase}${page.canonicalPath}` },
            ],
          }),
        }}
      />

      <div className="container mx-auto px-4 pt-4">
        <nav className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground" aria-label={ui.breadcrumbAria}>
          <Link href={homeHref} className="hover:text-foreground transition-colors">
            {homeName}
          </Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span>{regionLabel}</span>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-foreground max-w-[min(100%,28rem)] truncate">{page.h1}</span>
        </nav>
      </div>

      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            {regionLabel}
            {ui.badgeSuffix}
          </Badge>
          <h1 className="text-display text-foreground mb-6 text-balance">{page.h1}</h1>
          <p className="text-body-lg max-w-2xl text-pretty">{page.offer}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild>
              <Link href={page.ctaHref}>
                {page.ctaLabel}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={processHref}>
                <Layers className="w-4 h-4 mr-2" />
                {ui.processCtaShort}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          {page.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <GitBranch className="w-5 h-5 text-primary" />
            <h2 className="text-xl md:text-2xl font-bold text-foreground">{ui.processSectionTitle}</h2>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl">{ui.processSectionBody}</p>
          <Button variant="secondary" asChild>
            <Link href={processHref}>
              {ui.processButton}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {page.relatedCaseSlugs.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-2">{ui.relatedCasesTitle}</h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-2xl">{ui.relatedCasesLead}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {page.relatedCaseSlugs.flatMap((slug) => {
                const c = getCaseBySlug(slug)
                if (!c) return []
                return [
                  <Link
                    key={slug}
                    href={casePath(slug)}
                    className="group p-5 rounded-xl border border-border bg-card hover:border-primary/35 transition-colors"
                  >
                    <p className="text-xs text-muted-foreground mb-1">{c.client}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors leading-snug">{c.title}</p>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{c.description}</p>
                  </Link>,
                ]
              })}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-2">{ui.relatedLinksTitle}</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">{ui.relatedLinksLead}</p>
          {page.relatedPillars.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">{ui.pillarsHeading}</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {page.relatedPillars.map((href, idx) => (
                  <RelatedLinkCard key={`${href}-${idx}`} href={href} locale={locale} />
                ))}
              </div>
            </div>
          )}
          {page.relatedServices.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">{ui.servicesHeading}</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {page.relatedServices.map((href, idx) => (
                  <RelatedLinkCard key={`${href}-${idx}`} href={href} locale={locale} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {page.faqs.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-8">{ui.faqTitle}</h2>
            <div className="space-y-6">
              {page.faqs.map((faq) => (
                <div key={faq.question} className="p-6 bg-card border border-border rounded-xl">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: page.faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: { "@type": "Answer", text: faq.answer },
                  })),
                }),
              }}
            />
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-headline text-foreground mb-4">{ui.finalTitle}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{ui.finalLead}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild>
              <Link href={page.ctaHref}>
                {page.ctaLabel}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={casesHref}>{ui.allCases}</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
