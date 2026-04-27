import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react"
import { listCasesRu } from "@/lib/cms/content-repository"

const ShowcaseGallery = dynamic(
  () => import("@/components/showcase-gallery").then((m) => ({ default: m.ShowcaseGallery })),
  { ssr: true }
)

export const metadata: Metadata = {
  title: "Кейсы и портфолио — проекты YappiX",
  description:
    "Портфолио IT-студии YappiX: веб-сайты, мобильные приложения, AI-решения, SaaS-платформы. Реальные результаты и метрики.",
  keywords: ["портфолио разработки", "кейсы веб-студии", "примеры сайтов", "IT проекты"],
  alternates: {
    canonical: "https://yappix.ru/kejsy",
  },
  openGraph: {
    title: "Кейсы и портфолио — YappiX",
    description: "Портфолио IT-студии: веб-сайты, мобильные приложения, AI-решения. Реальные результаты.",
    type: "website",
    url: "https://yappix.ru/kejsy",
    siteName: "YappiX",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "YappiX — Портфолио",
      },
    ],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Кейсы и портфолио — YappiX",
    description: "Портфолио IT-студии YappiX. Реальные результаты и метрики проектов.",
  },
}

const categories = ["Все", "FinTech", "AI", "E-commerce", "SaaS", "Marketing", "Enterprise"]

export default async function CasesPage() {
  const cases = await listCasesRu()
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="pt-16 md:pt-24 pb-12 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-display text-foreground mb-6 text-balance">
                Наши кейсы
              </h1>
              <p className="text-body-lg text-pretty">
                250+ проектов в разных отраслях: от стартапов до корпораций из топ-100. Показываем реальные результаты с
                метриками.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border sticky top-16 md:top-20 bg-background/80 backdrop-blur-xl z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {cases.map((caseItem) => (
                <Link key={caseItem.slug} href={`/kejsy/${caseItem.slug}`} className="group">
                  <article className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="relative aspect-video bg-black overflow-hidden">
                      {caseItem.image?.endsWith(".mp4") ? (
                        <video
                          src={caseItem.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          title={caseItem.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <Image
                          key={caseItem.image}
                          src={caseItem.image || "/placeholder.svg"}
                          alt={caseItem.title || "Кейс YappiX"}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                        {caseItem.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground mb-2">{caseItem.client}</p>
                      <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {caseItem.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{caseItem.description}</p>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        {caseItem.results.map((result) => (
                          <div key={result.label}>
                            <p className="text-lg font-bold text-primary">{result.value}</p>
                            <p className="text-xs text-muted-foreground">{result.label}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {caseItem.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold text-foreground mb-2">+250%</p>
                <p className="text-muted-foreground">Средний рост метрик</p>
              </div>
              <div>
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold text-foreground mb-2">AI-first</p>
                <p className="text-muted-foreground">Короче циклы разработки</p>
              </div>
              <div>
                <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold text-foreground mb-2">50M+</p>
                <p className="text-muted-foreground">Пользователей продуктов</p>
              </div>
              <div>
                <ArrowRight className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold text-foreground mb-2">98%</p>
                <p className="text-muted-foreground">Клиентов рекомендуют</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-headline text-foreground mb-4">Хотите такой же результат?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Обсудим ваш проект и покажем релевантные кейсы из вашей отрасли.
            </p>
            <Button size="lg" asChild>
              <Link href="/kontakty">Обсудить проект</Link>
            </Button>
          </div>
        </section>

        <ShowcaseGallery />
      </main>
      <Footer />
    </>
  )
}
