import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Кейсы и портфолио — проекты YappiX",
  description:
    "Портфолио IT-студии YappiX: веб-сайты, мобильные приложения, AI-решения, SaaS-платформы. Реальные результаты и метрики.",
  keywords: ["портфолио разработки", "кейсы веб-студии", "примеры сайтов", "IT проекты"],
  alternates: {
    canonical: "https://yappix.ru/kejsy",
  },
}

const cases = [
  {
    slug: "fintech-marketplace",
    title: "Финансовый маркетплейс",
    client: "FinHub",
    category: "FinTech",
    description: "Платформа для сравнения и оформления финансовых продуктов: кредиты, вклады, страховки.",
    image: "/placeholder.svg?height=600&width=800",
    results: [
      { label: "Рост конверсии", value: "+340%" },
      { label: "Срок разработки", value: "4 мес" },
      { label: "MAU", value: "500K" },
    ],
    tags: ["Next.js", "PostgreSQL", "Stripe", "Kubernetes"],
  },
  {
    slug: "ai-support-bot",
    title: "AI-ассистент для банка",
    client: "Топ-10 банк РФ",
    category: "AI",
    description: "Интеллектуальный чат-бот для службы поддержки: отвечает на 80% вопросов без оператора.",
    image: "/placeholder.svg?height=600&width=800",
    results: [
      { label: "Автоматизация", value: "82%" },
      { label: "Экономия", value: "₽15M/год" },
      { label: "NPS", value: "+25 п.п." },
    ],
    tags: ["GPT-4", "LangChain", "RAG", "Python"],
  },
  {
    slug: "ecommerce-platform",
    title: "Маркетплейс электроники",
    client: "TechStore",
    category: "E-commerce",
    description: "Полный редизайн и миграция интернет-магазина с 1С-Битрикс на современный стек.",
    image: "/placeholder.svg?height=600&width=800",
    results: [
      { label: "Скорость", value: "+400%" },
      { label: "Конверсия", value: "+65%" },
      { label: "SEO трафик", value: "+180%" },
    ],
    tags: ["Next.js", "Medusa", "Algolia", "Vercel"],
  },
  {
    slug: "saas-hr-platform",
    title: "HR-платформа",
    client: "PeopleFirst",
    category: "SaaS",
    description: "SaaS-платформа для управления персоналом: найм, онбординг, оценка, аналитика.",
    image: "/placeholder.svg?height=600&width=800",
    results: [
      { label: "B2B клиентов", value: "200+" },
      { label: "ARR", value: "$2M" },
      { label: "Retention", value: "94%" },
    ],
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    slug: "mobile-delivery-app",
    title: "Приложение доставки еды",
    client: "FoodRush",
    category: "Mobile",
    description: "Кроссплатформенное приложение для заказа еды с real-time трекингом и интеграцией с ресторанами.",
    image: "/placeholder.svg?height=600&width=800",
    results: [
      { label: "Скачиваний", value: "1M+" },
      { label: "Рейтинг", value: "4.8★" },
      { label: "Заказов/день", value: "50K" },
    ],
    tags: ["React Native", "Firebase", "Node.js", "Stripe"],
  },
  {
    slug: "corporate-portal",
    title: "Корпоративный портал",
    client: "Крупный ритейлер",
    category: "Enterprise",
    description: "Внутренний портал для 15 000 сотрудников: новости, документы, заявки, аналитика.",
    image: "/placeholder.svg?height=600&width=800",
    results: [
      { label: "Пользователей", value: "15K" },
      { label: "DAU", value: "8K" },
      { label: "Интеграций", value: "12" },
    ],
    tags: ["Next.js", "SharePoint", "MS Graph", "Azure"],
  },
]

const categories = ["Все", "FinTech", "AI", "E-commerce", "SaaS", "Mobile", "Enterprise"]

export default function CasesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Наши кейсы
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                100+ проектов в разных отраслях: от стартапов до корпораций из топ-100. Показываем реальные результаты с
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
                    <div className="relative aspect-video bg-muted">
                      <Image
                        src={caseItem.image || "/placeholder.svg"}
                        alt={caseItem.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
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
                <p className="text-4xl font-bold text-foreground mb-2">3x</p>
                <p className="text-muted-foreground">Быстрее с AI</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Хотите такой же результат?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Обсудим ваш проект и покажем релевантные кейсы из вашей отрасли.
            </p>
            <Button size="lg" asChild>
              <Link href="/kontakty">Обсудить проект</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
