import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Bot, Cloud, CreditCard, Server, Search, Share2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Услуги — Разработка сайтов, приложений, AI | YappiX",
  description:
    "Полный спектр IT-услуг: веб-разработка, мобильные приложения, AI чат-боты, SaaS, FinTech, DevOps, SEO, SMM. MVP за 7 дней с гарантией возврата.",
  keywords: [
    "разработка сайтов цена",
    "создание мобильного приложения",
    "AI чат-бот разработка",
    "SaaS разработка",
    "DevOps услуги",
    "SEO продвижение сайта",
  ],
  alternates: {
    canonical: "https://yappix.ru/uslugi",
  },
}

const services = [
  {
    icon: Globe,
    title: "Разработка сайтов",
    slug: "razrabotka-sajtov",
    description:
      "Корпоративные сайты, лендинги, интернет-магазины, порталы. Адаптивный дизайн, высокая производительность, SEO-оптимизация из коробки.",
    tags: ["Next.js", "React", "WordPress", "Shopify"],
    price: "от 150 000 ₽",
  },
  {
    icon: Smartphone,
    title: "Мобильные приложения",
    slug: "mobilnye-prilozheniya",
    description:
      "Нативные и кроссплатформенные приложения для iOS и Android. От идеи до публикации в App Store и Google Play.",
    tags: ["React Native", "Flutter", "Swift", "Kotlin"],
    price: "от 500 000 ₽",
  },
  {
    icon: Bot,
    title: "AI чат-боты",
    slug: "ai-chat-boty",
    description:
      "Интеллектуальные ассистенты на базе GPT, Claude, собственных LLM. Интеграция с CRM, базами знаний, автоматизация поддержки.",
    tags: ["OpenAI", "LangChain", "RAG", "Fine-tuning"],
    price: "от 200 000 ₽",
  },
  {
    icon: Cloud,
    title: "SaaS / PaaS",
    slug: "saas-paas",
    description:
      "Разработка облачных продуктов и платформ. Мультитенантность, биллинг, масштабирование, безопасность корпоративного уровня.",
    tags: ["AWS", "GCP", "Kubernetes", "Terraform"],
    price: "от 1 000 000 ₽",
  },
  {
    icon: CreditCard,
    title: "FinTech решения",
    slug: "fintech",
    description:
      "Платёжные системы, банковские интеграции, криптокошельки, инвестиционные платформы. Соответствие PCI DSS, 152-ФЗ.",
    tags: ["Stripe", "Тинькофф API", "Blockchain", "PCI DSS"],
    price: "от 2 000 000 ₽",
  },
  {
    icon: Server,
    title: "DevOps",
    slug: "devops",
    description:
      "CI/CD пайплайны, контейнеризация, оркестрация, мониторинг, автоскейлинг. Снижение time-to-market и операционных затрат.",
    tags: ["Docker", "Kubernetes", "GitLab CI", "Prometheus"],
    price: "от 100 000 ₽/мес",
  },
  {
    icon: Search,
    title: "SEO продвижение",
    slug: "seo-prodvizhenie",
    description:
      "Комплексное SEO: техническая оптимизация, контент-стратегия, линкбилдинг, локальное SEO. Рост трафика и конверсий.",
    tags: ["Яндекс", "Google", "Аналитика", "Ahrefs"],
    price: "от 80 000 ₽/мес",
  },
  {
    icon: Share2,
    title: "SMM",
    slug: "smm",
    description:
      "Стратегия присутствия в соцсетях, контент-план, таргетированная реклама, работа с блогерами, аналитика эффективности.",
    tags: ["VK", "Telegram", "TikTok", "YouTube"],
    price: "от 60 000 ₽/мес",
  },
]

export default function UslugiPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Услуги IT-разработки
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Полный цикл разработки цифровых продуктов: от идеи до масштабирования. Работаем с AI-инструментами —
                делаем быстрее и качественнее конкурентов.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/kontakty">Обсудить проект</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/kejsy">Смотреть кейсы</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/uslugi/${service.slug}`}
                  className="group p-6 md:p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h2>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-muted-foreground mb-4 text-pretty">{service.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm font-medium text-primary">{service.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Не нашли нужную услугу?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Мы работаем с нестандартными задачами. Расскажите о вашем проекте — найдём решение.
            </p>
            <Button size="lg" asChild>
              <Link href="/kontakty">Связаться с нами</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
