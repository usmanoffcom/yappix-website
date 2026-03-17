import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, X } from "lucide-react"
import {
  founderTimeline,
  founderStoryCards,
  founderMethod,
  founderMetrics,
  founderProjects,
  founderBenefits,
  founderAudience,
  founderFaq,
  usualApproach,
  myApproach,
} from "@/lib/founder-data"

export const metadata: Metadata = {
  title: "Ренат Усманов — founder YappiX и AI-first product developer",
  description:
    "Ренат Усманов — founder YappiX, AI-first product developer, UX/UI и full stack специалист. Помогает быстрее запускать MVP, SaaS, AI-решения и digital-продукты.",
  keywords: [
    "founder YappiX",
    "AI-first developer",
    "AI-first product development",
    "UX/UI и full stack",
    "запуск MVP",
    "SaaS разработка",
    "AI-решения для бизнеса",
    "Ренат Усманов",
  ],
  alternates: {
    canonical: "https://yappix.ru/founder",
    languages: { "en-US": "https://yappix.ru/en/founder" },
  },
  openGraph: {
    title: "Ренат Усманов — founder YappiX и AI-first product developer",
    description:
      "Founder YappiX. Помогает предпринимателям быстрее запускать digital-продукты: от идеи и UX/UI до full stack разработки, AI-интеграций и релиза.",
    type: "profile",
    url: "https://yappix.ru/founder",
    siteName: "YappiX",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ренат Усманов — founder YappiX" }],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ренат Усманов — founder YappiX",
    description: "AI-first product developer, UX/UI и full stack. Помогает быстрее запускать MVP, SaaS, AI-решения.",
  },
}

const floatingTags = ["UX/UI", "Full Stack", "AI-first", "Startups", "Accessibility"]

export default function FounderPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4">Founder story</Badge>
                <h1 className="text-display text-foreground mb-6 text-balance">
                  Ренат Усманов — founder YappiX и AI-first product developer
                </h1>
                <p className="text-body-lg mb-8 text-pretty max-w-2xl">
                  Помогаю предпринимателям и компаниям быстрее запускать digital-продукты: от идеи и UX/UI до full stack разработки, AI-интеграций и релиза.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button size="lg" asChild>
                    <Link href="/kontakty">
                      Обсудить проект
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/kejsy">Посмотреть кейсы</Link>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {floatingTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative mx-auto lg:mx-0 w-[280px] sm:w-[340px] lg:w-[400px]">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl scale-110" />
                <div className="relative aspect-[3/4] rounded-full overflow-hidden border border-border/50">
                  <Image
                    src="/ru.png"
                    alt="Ренат Усманов — founder YappiX, AI-first product developer"
                    fill
                    sizes="(max-width: 768px) 280px, 400px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-headline text-foreground mb-6">
                Не просто дизайнер. Не просто разработчик.
              </h2>
              <div className="space-y-4 text-body-lg text-muted-foreground">
                <p>
                  Мой путь начался с музыки и визуального мышления — это сформировало
                  чувство структуры и внимание к деталям. Потом пришёл в дизайн, вырос
                  в UX/UI, запускал стартапы и привлекал инвестиции.
                </p>
                <p>
                  Проблемы со зрением заставили глубже понять accessibility и то, как люди
                  реально взаимодействуют с интерфейсами. А появление AI-инструментов
                  открыло путь обратно в full stack разработку.
                </p>
                <p>
                  Теперь весь этот опыт — от продуктового мышления и UX до кода и
                  AI-автоматизации — помогает предпринимателям экономить ресурсы и
                  быстрее создавать продукты.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {founderStoryCards.map((card) => (
                <div key={card.title} className="p-6 bg-background border border-border rounded-xl">
                  <card.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-headline text-foreground mb-12">Мой путь</h2>
              <div className="relative">
                <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden sm:block" />
                <div className="space-y-8">
                  {founderTimeline.map((item, idx) => (
                    <div key={idx} className="flex gap-5 sm:gap-6 group">
                      <div className="relative z-10 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="pt-1">
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Difference */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-headline text-foreground mb-4">Я вижу продукт целиком</h2>
              <p className="text-body-lg text-muted-foreground mb-12 max-w-2xl">
                Большинство специалистов видят один слой: дизайн без понимания кода, код без понимания UX,
                AI как модный ярлык без системы. Мой подход — на стыке всех дисциплин.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-background border border-border rounded-xl">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-destructive" />
                    Обычный подход
                  </h3>
                  <ul className="space-y-3">
                    {usualApproach.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <X className="w-4 h-4 text-destructive/60 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    Мой подход
                  </h3>
                  <ul className="space-y-3">
                    {myApproach.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-first Method */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-headline text-foreground mb-4">Как работает мой AI-first подход</h2>
              <p className="text-body-lg text-muted-foreground mb-12 max-w-2xl">
                AI — не витрина для маркетинга, а рабочий инструмент на всех этапах создания продукта.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {founderMethod.map((card, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Proof / Metrics */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-headline text-foreground mb-12">
                Опыт, подтверждённый продуктами и результатами
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {founderMetrics.map((metric, idx) => (
                  <div key={idx} className="p-6 bg-background border border-border rounded-xl text-center">
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-background border border-border rounded-xl">
                <h3 className="font-semibold text-foreground mb-4">Где это применялось</h3>
                <div className="flex flex-wrap gap-2">
                  {founderProjects.map((project) => (
                    <span key={project} className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg">
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-headline text-foreground mb-12">Что получает предприниматель</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {founderBenefits.map((card, idx) => (
                  <div key={idx} className="p-6 bg-card border border-border rounded-xl">
                    <card.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Audience */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-headline text-foreground mb-12">Кому подходит такой формат работы</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {founderAudience.map((card, idx) => (
                  <div key={idx} className="p-6 bg-background border border-border rounded-xl hover:border-primary/30 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-headline text-foreground mb-12">Частые вопросы</h2>
              <div className="space-y-4">
                {founderFaq.map((item, idx) => (
                  <div key={idx} className="p-6 bg-card border border-border rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary/5 border-t border-primary/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-headline text-foreground mb-4">
                Если вам нужен не просто подрядчик
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                А человек, который умеет собрать продукт целиком — от идеи до production.
                Обсудим вашу задачу и найдём оптимальный путь к результату.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/kontakty">
                    Обсудить проект
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/kontakty?service=mvp">Запросить MVP-оценку</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Person JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ренат Усманов",
            alternateName: "Renat Usmanov",
            jobTitle: "Founder & AI-first Product Developer",
            url: "https://yappix.ru/founder",
            image: "https://yappix.ru/ru.png",
            worksFor: {
              "@type": "Organization",
              name: "YappiX",
              url: "https://yappix.ru",
            },
            knowsAbout: [
              "AI-first product development",
              "UX/UI Design",
              "Full Stack Development",
              "Startup Building",
              "MVP Development",
              "SaaS Architecture",
            ],
            sameAs: [
              "https://linkedin.com/in/usmanoffcom",
              "https://github.com/usmanoffcom",
            ],
          }),
        }}
      />

      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Главная", item: "https://yappix.ru" },
              { "@type": "ListItem", position: 2, name: "Основатель", item: "https://yappix.ru/founder" },
            ],
          }),
        }}
      />

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: founderFaq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  )
}
