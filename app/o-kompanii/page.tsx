import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Award, Users, Rocket, Globe, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "О компании YappiX — резиденты Сколково | IT-студия",
  description:
    "YappiX — IT-студия полного цикла. Резиденты Сколково с 2020. Офисы в России, США, Турции, Сербии. 100+ проектов, 50+ специалистов.",
  keywords: ["YappiX", "IT компания", "Сколково", "веб-студия", "разработка на заказ", "аутсорсинг"],
  alternates: {
    canonical: "https://yappix.ru/o-kompanii",
  },
}

const stats = [
  { value: "100+", label: "Проектов", icon: Rocket },
  { value: "50+", label: "Специалистов", icon: Users },
  { value: "4", label: "Офиса", icon: Globe },
  { value: "5", label: "Лет опыта", icon: Award },
]

const milestones = [
  { year: "2020", title: "Основание", description: "Запуск студии, первые проекты на React и Node.js" },
  { year: "2021", title: "Сколково", description: "Получили статус резидента Сколково, первый грант" },
  { year: "2022", title: "Международная экспансия", description: "Открыли офисы в США и Турции" },
  { year: "2023", title: "AI-трансформация", description: "Внедрили AI-инструменты, ускорили разработку в 3 раза" },
  { year: "2024", title: "100 проектов", description: "Запустили сотый проект, открыли офис в Сербии" },
  { year: "2025", title: "Сегодня", description: "Развиваем AI-направление, масштабируем команду" },
]

const values = [
  {
    title: "Скорость",
    description: "Используем AI для 3x ускорения разработки. MVP за 7 дней — реальность, не маркетинг.",
  },
  {
    title: "Качество",
    description: "Не жертвуем качеством ради скорости. Code review, тесты, CI/CD — стандарт на всех проектах.",
  },
  {
    title: "Прозрачность",
    description: "Фиксированная цена в договоре. Тестовая неделя с возможностью возврата. Регулярные демо.",
  },
  {
    title: "Партнёрство",
    description: "Не просто исполнители — партнёры. Советуем, как сделать лучше, даже если это не в нашу пользу.",
  },
]

const clients = [
  "Сбер",
  "Яндекс",
  "VK",
  "Тинькофф",
  "МТС",
  "Ozon",
  "Wildberries",
  "Ростелеком",
  "РЖД",
  "Газпром",
  "Росатом",
  "X5 Group",
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                  Создаём цифровые продукты быстрее с AI
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  YappiX — IT-студия полного цикла. Резиденты Сколково. Используем AI-инструменты для 3-кратного
                  ускорения разработки без потери качества.
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
              <div className="relative aspect-square lg:aspect-auto lg:h-[500px]">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Команда YappiX"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Наши ценности</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              Принципы, которыми мы руководствуемся в работе с клиентами и внутри команды.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="p-6 bg-card border border-border rounded-xl">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Наш путь</h2>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-12">
                {milestones.map((milestone, idx) => (
                  <div
                    key={milestone.year}
                    className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="md:w-1/2 md:text-right">
                      {idx % 2 === 0 && (
                        <div className="pl-12 md:pl-0 md:pr-8">
                          <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                          <h3 className="text-xl font-semibold text-foreground mt-1">{milestone.title}</h3>
                          <p className="text-muted-foreground mt-2">{milestone.description}</p>
                        </div>
                      )}
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full -translate-x-0 md:-translate-x-1/2 flex items-center justify-center">
                      <div className="w-3 h-3 bg-background rounded-full" />
                    </div>
                    <div className="md:w-1/2">
                      {idx % 2 !== 0 && (
                        <div className="pl-12 md:pl-8">
                          <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                          <h3 className="text-xl font-semibold text-foreground mt-1">{milestone.title}</h3>
                          <p className="text-muted-foreground mt-2">{milestone.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Нам доверяют</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              Работали с компаниями из топ-100 России и международными стартапами.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {clients.map((client) => (
                <div
                  key={client}
                  className="flex items-center justify-center h-20 bg-card border border-border rounded-lg"
                >
                  <span className="text-muted-foreground font-medium">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Почему YappiX</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Резиденты Сколково — налоговые льготы, гранты",
                "AI-инструменты — разработка в 3 раза быстрее",
                "MVP за 7 дней — тестовая неделя с гарантией возврата",
                "Офисы в 4 странах — удобные часовые пояса",
                "Все способы оплаты — включая крипто",
                "100+ проектов — опыт в любой отрасли",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-background border border-border rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Готовы к сотрудничеству?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Расскажите о вашем проекте — предложим решение и назовём точные сроки.
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
