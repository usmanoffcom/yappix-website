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
    title: "Card2Card — MVP мобильного приложения",
    client: "NDA",
    category: "FinTech",
    description: "Мобильное приложение для переводов с карты на карту по всему миру. Автоматическая комиссия, простой перевод и ничего лишнего.",
    image: "/images/05f1e332931093.589da5ec81ead.gif",
    results: [
      { label: "Разработчиков", value: "14" },
      { label: "Шлюзы", value: "VISA, MC, USDT" },
      { label: "Регионы", value: "4" },
    ],
    tags: ["React Native", "Node.js", "VISA API", "Mastercard"],
  },
  {
    slug: "ai-food-assistant",
    title: "Ассистент заявок — голосовой заказ еды",
    client: "Food Delivery",
    category: "AI",
    description: "Голосовой AI-ассистент для заказа еды без касания экрана. Идеально для водителей за рулём.",
    image: "/images/checkout_ai_2.mp4",
    results: [
      { label: "Конверсия", value: "+40%" },
      { label: "Hands-free", value: "100%" },
      { label: "Время заказа", value: "30 сек" },
    ],
    tags: ["GPT-4", "Voice AI", "Speech Recognition", "Stripe"],
  },
  {
    slug: "myunion-platform",
    title: "MyUnion Pro — платформа управления профсоюзами",
    client: "MyUnion",
    category: "SaaS",
    description: "Полнофункциональное веб-приложение для управления профсоюзами с чат-ботами на базе ИИ.",
    image: "/images/image.png",
    results: [
      { label: "Команда", value: "1 чел" },
      { label: "Срок", value: "3 мес" },
      { label: "Пользователей", value: "50K+" },
    ],
    tags: ["Next.js", "GPT-4", "PostgreSQL", "LangChain"],
  },
  {
    slug: "global-olive-corporation",
    title: "Global Olive Corporation",
    client: "Global Olive",
    category: "E-commerce",
    description: "E-commerce платформа для инвестирования в оливковые деревья с сертификатами владения.",
    image: "/images/image copy.png",
    results: [
      { label: "Инвестиций", value: "$500K+" },
      { label: "Деревьев", value: "1000+" },
      { label: "Конверсия", value: "8%" },
    ],
    tags: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
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
                      {caseItem.image?.endsWith('.mp4') ? (
                        <video
                          src={caseItem.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                      <Image
                        src={caseItem.image || "/placeholder.svg"}
                        alt={caseItem.title}
                        fill
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
