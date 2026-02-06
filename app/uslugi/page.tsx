import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Bot, Cloud, CreditCard, Server, Search, Share2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "IT-услуги с AI-first подходом — Разработка, SEO, DevOps | YappiX",
  description:
    "Полный спектр IT-услуг с AI-ускорением: веб-разработка, мобильные приложения, AI чат-боты, SaaS, FinTech, DevOps, SEO, SMM. Сроки в 7-12 раз быстрее рынка. 10+ лет опыта.",
  keywords: [
    "разработка сайтов AI",
    "создание мобильного приложения цена",
    "AI чат-бот разработка GPT",
    "SaaS разработка под ключ",
    "DevOps услуги Kubernetes",
    "SEO продвижение AI",
    "AI-first разработка",
  ],
  alternates: {
    canonical: "https://yappix.ru/uslugi",
  },
  openGraph: {
    title: "IT-услуги с AI-first подходом — YappiX",
    description: "Полный спектр IT-услуг с AI-ускорением: разработка сайтов, приложений, AI чат-боты. Сроки в 7-12 раз быстрее.",
    type: "website",
    url: "https://yappix.ru/uslugi",
    siteName: "YappiX",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "YappiX — IT-услуги",
      },
    ],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT-услуги с AI-first подходом — YappiX",
    description: "Полный спектр IT-услуг с AI-ускорением. Сроки в 7-12 раз быстрее рынка.",
  },
}

const services = [
  {
    icon: Globe,
    title: "Разработка сайтов",
    slug: "razrabotka-sajtov",
    description:
      "AI-first разработка: лендинги, корпоративные сайты, интернет-магазины. Cursor AI + v0.dev = сроки в 7-12 раз быстрее. SEO из коробки.",
    tags: ["Next.js", "React", "Cursor AI", "v0.dev"],
    price: "от 62 500 ₽",
  },
  {
    icon: Smartphone,
    title: "Мобильные приложения",
    slug: "mobilnye-prilozheniya",
    description:
      "Кроссплатформенные приложения iOS и Android с AI-ускорением. MVP за 3-4 недели. Публикация в App Store и Google Play.",
    tags: ["React Native", "Flutter", "Cursor AI", "Expo"],
    price: "от 250 000 ₽",
  },
  {
    icon: Bot,
    title: "AI чат-боты",
    slug: "ai-chat-boty",
    description:
      "Интеллектуальные ассистенты на GPT-4o, Claude 3.5. RAG-системы, fine-tuning. Автоматизация 60-80% запросов в поддержке.",
    tags: ["GPT-4o", "Claude", "RAG", "LangChain"],
    price: "от 100 000 ₽",
  },
  {
    icon: Cloud,
    title: "SaaS / PaaS",
    slug: "saas-paas",
    description:
      "Облачные продукты с AI-first подходом. MVP за 6-8 недель. Мультитенантность, биллинг Stripe, масштабирование на Kubernetes.",
    tags: ["Kubernetes", "Stripe", "GraphQL", "Cursor AI"],
    price: "от 500 000 ₽",
  },
  {
    icon: CreditCard,
    title: "FinTech решения",
    slug: "fintech",
    description:
      "Платёжные системы, необанки, криптокошельки. AI fraud detection, KYC-автоматизация. PCI DSS, 152-ФЗ, 115-ФЗ.",
    tags: ["PCI DSS", "AI Fraud", "Blockchain", "Open Banking"],
    price: "от 300 000 ₽",
  },
  {
    icon: Server,
    title: "DevOps",
    slug: "devops",
    description:
      "CI/CD, Kubernetes, Terraform с AI-автоматизацией. Предиктивный мониторинг, оптимизация облачных затрат на 40%.",
    tags: ["Kubernetes", "Terraform", "Prometheus", "AI Ops"],
    price: "от 62 500 ₽",
  },
  {
    icon: Search,
    title: "SEO продвижение",
    slug: "seo-prodvizhenie",
    description:
      "AI-first SEO: автоматический сбор семантики, AI-контент, анализ конкурентов. Рост органического трафика от 200%.",
    tags: ["AI SEO", "Ahrefs", "SurferSEO", "SGE"],
    price: "от 50 000 ₽/мес",
  },
  {
    icon: Share2,
    title: "SMM",
    slug: "smm",
    description:
      "SMM с AI-контентом: генерация идей, тексты, визуалы. VK, Telegram, TikTok, YouTube. Таргет и работа с блогерами.",
    tags: ["VK Ads", "Telegram", "TikTok", "AI-контент"],
    price: "от 40 000 ₽/мес",
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                AI-First подход
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                IT-услуги с AI-ускорением
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Полный цикл разработки цифровых продуктов с AI-first подходом. Используем Cursor AI, v0.dev, ChatGPT — 
                разрабатываем в 7-12 раз быстрее при том же качестве. 10+ лет опыта, 250+ проектов.
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
