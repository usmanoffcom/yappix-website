import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Briefcase, Clock, Users, Zap, Heart, Globe, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "Карьера в YappiX — вакансии IT-студии",
  description:
    "Вакансии в YappiX: разработчики, дизайнеры, менеджеры. Работа в Сколково, удалённо или из офисов в США, Турции, Сербии.",
  keywords: ["вакансии разработчик", "работа в IT", "вакансии Сколково", "удалённая работа программист"],
  alternates: {
    canonical: "https://yappix.ru/karera",
  },
}

const benefits = [
  {
    icon: Globe,
    title: "Удалёнка или офис",
    description: "Работайте откуда удобно: дом, коворкинг или офис в 4 странах",
  },
  { icon: Zap, title: "AI-инструменты", description: "Cursor, v0, ChatGPT — работаем с передовыми технологиями" },
  { icon: GraduationCap, title: "Обучение", description: "Бюджет на конференции, курсы, книги. Внутренние митапы" },
  { icon: Heart, title: "ДМС", description: "Расширенная медицинская страховка для вас и семьи" },
  { icon: Clock, title: "Гибкий график", description: "Асинхронная работа, никаких стендапов в 9 утра" },
  { icon: Users, title: "Сильная команда", description: "Работайте с экспертами из топовых компаний" },
]

const vacancies = [
  {
    title: "Senior Frontend Developer",
    department: "Разработка",
    location: "Удалённо / Москва",
    type: "Полная занятость",
    salary: "от 350 000 ₽",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    description: "Разработка клиентской части SaaS-продуктов, работа с AI-инструментами, код-ревью.",
  },
  {
    title: "Middle/Senior Backend Developer",
    department: "Разработка",
    location: "Удалённо / Москва",
    type: "Полная занятость",
    salary: "от 300 000 ₽",
    skills: ["Node.js", "Python", "PostgreSQL", "Redis"],
    description: "Разработка API, интеграции, оптимизация производительности.",
  },
  {
    title: "AI/ML Engineer",
    department: "AI",
    location: "Удалённо",
    type: "Полная занятость",
    salary: "от 400 000 ₽",
    skills: ["Python", "LangChain", "RAG", "Fine-tuning"],
    description: "Разработка AI-агентов, интеграция LLM, построение RAG-систем.",
  },
  {
    title: "DevOps Engineer",
    department: "Инфраструктура",
    location: "Удалённо",
    type: "Полная занятость",
    salary: "от 280 000 ₽",
    skills: ["Kubernetes", "Terraform", "AWS/GCP", "GitLab CI"],
    description: "Настройка CI/CD, управление инфраструктурой, мониторинг.",
  },
  {
    title: "Product Designer",
    department: "Дизайн",
    location: "Удалённо / Москва",
    type: "Полная занятость",
    salary: "от 250 000 ₽",
    skills: ["Figma", "UI/UX", "Design Systems", "Prototyping"],
    description: "Проектирование интерфейсов SaaS-продуктов, работа с дизайн-системами.",
  },
  {
    title: "Project Manager",
    department: "Управление",
    location: "Удалённо / Москва",
    type: "Полная занятость",
    salary: "от 200 000 ₽",
    skills: ["Agile", "Jira", "Коммуникации", "Технический бэкграунд"],
    description: "Управление IT-проектами, коммуникация с клиентами, планирование.",
  },
]

export default function CareerPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Присоединяйтесь к команде YappiX
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Создаём продукты будущего с AI-инструментами. Ищем тех, кто хочет работать на передовой технологий.
              </p>
              <Button size="lg" asChild>
                <a href="#vacancies">Смотреть вакансии</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Почему YappiX</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              Создаём условия, в которых талантливые люди делают лучшую работу в своей жизни.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="p-6 bg-card border border-border rounded-xl">
                  <benefit.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vacancies */}
        <section id="vacancies" className="py-16 md:py-24 bg-card scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Открытые вакансии</h2>
            <p className="text-lg text-muted-foreground mb-12">
              {vacancies.length} позиций в разных направлениях. Не нашли подходящую? Напишите нам.
            </p>
            <div className="space-y-4">
              {vacancies.map((vacancy, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{vacancy.title}</h3>
                        <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                          {vacancy.department}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{vacancy.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {vacancy.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {vacancy.type}
                        </span>
                        <span className="font-medium text-primary">{vacancy.salary}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {vacancy.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button asChild className="shrink-0">
                      <Link href={`/kontakty?vacancy=${encodeURIComponent(vacancy.title)}`}>Откликнуться</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Как проходит найм</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Заявка", description: "Отправьте резюме или ссылку на GitHub/LinkedIn" },
                { step: "02", title: "Скрининг", description: "30-минутный звонок с HR о вас и компании" },
                { step: "03", title: "Техническое", description: "Тестовое задание или live-coding с командой" },
                { step: "04", title: "Оффер", description: "Обсуждение условий и старт работы" },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <span className="text-6xl font-bold text-primary/20">{item.step}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Не нашли подходящую вакансию?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Отправьте резюме — мы свяжемся, когда появится подходящая позиция.
            </p>
            <Button size="lg" asChild>
              <Link href="mailto:hr@yappix.ru">Отправить резюме</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />

      {/* JSON-LD JobPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: vacancies.map((vacancy, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              item: {
                "@type": "JobPosting",
                title: vacancy.title,
                description: vacancy.description,
                hiringOrganization: {
                  "@type": "Organization",
                  name: "YappiX",
                  sameAs: "https://yappix.ru",
                },
                jobLocation: {
                  "@type": "Place",
                  address: vacancy.location,
                },
                employmentType: "FULL_TIME",
                baseSalary: {
                  "@type": "MonetaryAmount",
                  currency: "RUB",
                  value: {
                    "@type": "QuantitativeValue",
                    value: vacancy.salary,
                  },
                },
              },
            })),
          }),
        }}
      />
    </>
  )
}
