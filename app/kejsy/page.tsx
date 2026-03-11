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

const cases = [
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
    slug: "reallaw-ai",
    title: "realLaw AI — Legal Tech SaaS для ОАЭ",
    client: "realLaw",
    category: "SaaS",
    description: "Legal-tech SaaS для бизнеса и юристов ОАЭ. Полный цикл: исследование, бренд, дизайн-система, фронтенд на Next.js/Framer.",
    image: "/images/usmanoff-cases/1765729581244-00001.avif",
    results: [
      { label: "Год", value: "2025" },
      { label: "Платформа", value: "Web" },
      { label: "Стек", value: "Next.js + Framer" },
    ],
    tags: ["Legal Tech", "SaaS", "Next.js", "Framer", "UAE"],
  },
  {
    slug: "jupid-platform",
    title: "Jupid — AI бухгалтер для запуска LLC",
    client: "Jupid",
    category: "FinTech",
    description: "AI-бухгалтер для основателей из США. Создание и ведение LLC через чат. Продуктовые флоу, интерфейс, дизайн-система.",
    image: "/images/usmanoff-cases/1765730706302-j1.png",
    results: [
      { label: "Год", value: "2025" },
      { label: "Регион", value: "USA" },
      { label: "AI", value: "GPT-4" },
    ],
    tags: ["AI", "FinTech", "SaaS", "Accounting", "Framer"],
  },
  {
    slug: "priboy-hotels",
    title: "Grand Hotels & SPA Priboy — сеть отелей",
    client: "Группа отелей Прибой",
    category: "Marketing",
    description: "Комплексная разработка, техническая поддержка, SEO-продвижение и SMM для сети премиальных отелей.",
    image: "/images/priboy.avif",
    results: [
      { label: "Рост трафика", value: "+180%" },
      { label: "Прямые брони", value: "+65%" },
      { label: "ТОП-3 Яндекс", value: "85%" },
    ],
    tags: ["Next.js", "SEO", "SMM", "VK Ads"],
  },
  {
    slug: "bridgeinto-platform",
    title: "BridgeInto — Приватная бизнес-платформа",
    client: "BridgeInto",
    category: "Enterprise",
    description: "Безопасная бизнес-платформа для приватности и контроля данных. Бренд, UX/UI, дизайн-система, продуктовый сайт.",
    image: "/images/usmanoff-cases/1765731821927-b1.mp4",
    results: [
      { label: "Год", value: "2024" },
      { label: "Блокчейн", value: "Да" },
      { label: "Статус", value: "Продакшн" },
    ],
    tags: ["SaaS", "Blockchain", "Security", "File Manager"],
  },
  {
    slug: "global-olive-corporation",
    title: "Global Olive Corporation",
    client: "Global Olive",
    category: "E-commerce",
    description: "E-commerce платформа для инвестирования в оливковые деревья с сертификатами владения.",
    image: "/images/image copy.png",
    results: [
      { label: "Конверсия", value: "+35%" },
      { label: "Деревьев", value: "500+" },
      { label: "Средний чек", value: "$180" },
    ],
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
  },
  {
    slug: "my-buyer-crm",
    title: "MY BUYER — CRM для маркетплейсов",
    client: "MY BUYER",
    category: "E-commerce",
    description: "CRM для работы с товарами с китайских и СНГ маркетплейсов. UX/UI для веб и мобильных приложений.",
    image: "/images/usmanoff-cases/1765752539773-m1.png",
    results: [
      { label: "Год", value: "2023" },
      { label: "Платформы", value: "Web + iOS" },
      { label: "Пользователей", value: "5K+" },
    ],
    tags: ["CRM", "E-commerce", "iOS", "Web App"],
  },
  {
    slug: "fintech-marketplace",
    title: "Card2Card — MVP мобильного приложения",
    client: "NDA",
    category: "FinTech",
    description: "Мобильное приложение для переводов с карты на карту по всему миру. Автоматическая комиссия, простой перевод.",
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
    slug: "yappix-cms",
    title: "YappiX CMS — конструктор мобильных приложений",
    client: "YappiX (собственный продукт)",
    category: "SaaS",
    description: "No-code конструктор нативных мобильных приложений с CMS. Поддержан Microsoft for Startups.",
    image: "/images/yappix.png",
    results: [
      { label: "Гранты", value: "ФСИ + MS" },
      { label: "Инвестиции", value: "2 раунда" },
      { label: "Резидент", value: "Сколково" },
    ],
    tags: ["React", "Node.js", "Swift", "Kotlin", "No-code"],
  },
]

const categories = ["Все", "FinTech", "AI", "E-commerce", "SaaS", "Marketing", "Enterprise"]

export default function CasesPage() {
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
                <p className="text-4xl font-bold text-foreground mb-2">7x-12x</p>
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
            <h2 className="text-headline text-foreground mb-4">Хотите такой же результат?</h2>
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
