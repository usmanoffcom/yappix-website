import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Lightbulb, Layout, Cpu, CheckSquare, HeartHandshake } from "lucide-react"

export const metadata: Metadata = {
  title: "Как работает YappiX — этапы, сроки, артефакты и delivery-процесс",
  description:
    "Как мы запускаем продукт: от discovery до поддержки. 6 этапов, понятные артефакты на каждой стадии, AI-assisted delivery.",
  alternates: {
    canonical: "https://yappix.ru/process",
  },
  openGraph: {
    title: "Как работает YappiX — этапы, сроки и delivery-процесс",
    description: "6 этапов запуска продукта: discovery, product logic, UX, AI-assisted delivery, QA и поддержка.",
    type: "website",
    url: "https://yappix.ru/process",
    siteName: "YappiX",
    locale: "ru_RU",
  },
}

const stages = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "Разбираемся в задаче, бизнес-контексте и ограничениях. Фиксируем цели, аудиторию и критерии успеха.",
    artifacts: ["Бриф проекта", "Карта пользователей", "Анализ конкурентов", "Scope и ограничения"],
    duration: "2–5 дней",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Product logic",
    description: "Формируем продуктовую структуру: что строим, зачем, для кого. Определяем MVP-scope и приоритеты.",
    artifacts: ["Product brief", "User stories", "Приоритезированный backlog", "Архитектурная схема"],
    duration: "3–5 дней",
  },
  {
    number: "03",
    icon: Layout,
    title: "UX and scope",
    description: "Проектируем UX, создаём прототипы, согласовываем визуальную систему и финальный scope.",
    artifacts: ["Wireframes", "UI-прототип", "Дизайн-система", "Финальный scope"],
    duration: "5–10 дней",
  },
  {
    number: "04",
    icon: Cpu,
    title: "AI-assisted delivery",
    description: "Разработка с AI-ускорением. Итерации каждые 2–3 дня, демо, код-ревью.",
    artifacts: ["Рабочий код", "CI/CD pipeline", "Регулярные демо", "Документация API"],
    duration: "2–8 недель",
  },
  {
    number: "05",
    icon: CheckSquare,
    title: "QA and handoff",
    description: "Тестирование, фикс багов, финальная приёмка. Передача кода, документации и доступов.",
    artifacts: ["Тест-кейсы", "Финальный деплой", "Документация", "Обучение команды"],
    duration: "3–5 дней",
  },
  {
    number: "06",
    icon: HeartHandshake,
    title: "Support / evolution",
    description: "Мониторинг, поддержка, развитие. Помогаем продукту расти после запуска.",
    artifacts: ["SLA и мониторинг", "Roadmap развития", "Регулярные релизы", "Аналитика использования"],
    duration: "Ongoing",
  },
]

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Главная", item: "https://yappix.ru" },
                { "@type": "ListItem", position: 2, name: "Процесс", item: "https://yappix.ru/process" },
              ],
            }),
          }}
        />

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-display text-foreground mb-6">Как мы запускаем продукт</h1>
            <p className="text-body-lg max-w-2xl mx-auto">
              Наша задача — не растягивать проект, а быстро перевести идею в рабочий контур,
              который можно показывать пользователям, инвесторам или команде.
            </p>
          </div>
        </section>

        {/* Stages */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-12 md:space-y-16">
              {stages.map((stage) => (
                <div key={stage.number} className="relative grid md:grid-cols-[80px_1fr] gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20">
                      <stage.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground mt-2 font-mono">{stage.number}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">{stage.title}</h2>
                    <p className="text-muted-foreground mb-4">{stage.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {stage.artifacts.map((a) => (
                        <span key={a} className="inline-flex items-center px-3 py-1 rounded-full bg-card border border-border text-xs text-muted-foreground">
                          {a}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-primary font-medium">{stage.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-headline text-foreground mb-4">Готовы обсудить задачу?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Разберём, что именно нужно: MVP, продуктовый редизайн, AI-модуль или пересборка текущей архитектуры.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/kontakty">
                  Обсудить проект
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/kejsy">Посмотреть кейсы</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
