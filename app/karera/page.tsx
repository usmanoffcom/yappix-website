import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Briefcase, Clock, Users, Zap, Heart, Globe, GraduationCap, Calendar } from "lucide-react"
import { careerPlainDescription, careersListOrdered } from "@/lib/careers-data"

export const metadata: Metadata = {
  title: "Карьера в YappiX — вакансии AI Research, ML Systems, Data & Evaluation",
  description:
    "YappiX ищет Senior AI Research Engineer, ML Systems / Infrastructure Engineer и AI Data & Evaluation Engineer: новые архитектуры ИИ, LLM, GPU-инфраструктура, датасеты и evaluation. Удалённо / Сколково.",
  keywords: [
    "вакансии AI",
    "ML engineer",
    "LLM",
    "PyTorch",
    "YappiX",
    "удалённая работа",
    "Сколково",
  ],
  alternates: {
    canonical: "https://yappix.ru/karera",
    languages: {
      ru: "https://yappix.ru/karera",
      en: "https://yappix.ru/en/career",
    },
  },
  openGraph: {
    title: "Карьера в YappiX — вакансии AI Research, ML Systems, Data & Evaluation",
    description:
      "Три направления: AI Research, ML Infrastructure, AI Data & Evaluation. Удалённо / Сколково.",
    type: "website",
    url: "https://yappix.ru/karera",
    siteName: "YappiX",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "YappiX — Карьера",
      },
    ],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Карьера в YappiX — вакансии AI Research, ML Systems, Data & Evaluation",
    description: "AI-first R&D: архитектуры ИИ, инфраструктура LLM, датасеты и evaluation.",
  },
}

const benefits = [
  {
    icon: Globe,
    title: "Удалёнка или локация",
    description: "Работайте откуда удобно: дом, коворкинг или локации в 6 странах",
  },
  { icon: Zap, title: "AI-инструменты", description: "Cursor, v0, ChatGPT — работаем с передовыми технологиями" },
  { icon: GraduationCap, title: "Обучение", description: "Бюджет на конференции, курсы, книги. Внутренние митапы" },
  { icon: Heart, title: "ДМС", description: "Расширенная медицинская страховка для вас и семьи" },
  { icon: Clock, title: "Гибкий график", description: "Асинхронная работа, никаких стендапов в 9 утра" },
  { icon: Users, title: "Сильная команда", description: "Работайте с экспертами из топовых компаний" },
]

export default function CareerPage() {
  const vacancies = careersListOrdered

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 pb-12 md:pb-12 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-display text-foreground mb-6 text-balance">
                Присоединяйтесь к команде YappiX
              </h1>
              <p className="text-body-lg mb-8 text-pretty">
                Строим AI-first продукты и R&D: новые архитектуры ИИ, LLM, инфраструктура и честная evaluation. Ищем
                инженеров, которые доводят гипотезы до работающих систем.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a href="#vacancies">Смотреть вакансии</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/en/career">Careers in English</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-headline text-foreground mb-4">Почему YappiX</h2>
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
            <h2 className="text-headline text-foreground mb-4">Открытые вакансии</h2>
            <p className="text-lg text-muted-foreground mb-12">
              {vacancies.length} позиции в AI / R&D. Подробные описания — на отдельных страницах (SEO). Не подошло?
              Напишите нам.
            </p>
            <div className="space-y-4">
              {vacancies.map((job) => {
                const summary = job.ru.metaDescription
                return (
                  <div
                    key={job.slug}
                    className="p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">{job.ru.h1}</h3>
                          <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                            {job.department.ru}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{summary}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 shrink-0" />
                            Сколково / удалённо
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4 shrink-0" />
                            Полная занятость
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 shrink-0" />
                            {new Date(job.datePosted).toLocaleDateString("ru-RU", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                        <Button variant="outline" asChild>
                          <Link href={`/karera/${job.slug}`}>Подробнее</Link>
                        </Button>
                        <Button asChild>
                          <Link href={`/kontakty?vacancy=${encodeURIComponent(job.ru.h1)}`}>Откликнуться</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-headline text-foreground mb-12">Как проходит найм</h2>
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
            <h2 className="text-headline text-foreground mb-4">Не нашли подходящую вакансию?</h2>
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
            itemListElement: vacancies.map((job, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              item: {
                "@type": "JobPosting",
                title: job.ru.h1,
                description: careerPlainDescription(job, "ru").slice(0, 8000),
                datePosted: job.datePosted,
                validThrough: job.validThrough,
                hiringOrganization: {
                  "@type": "Organization",
                  name: "YappiX",
                  sameAs: "https://yappix.ru",
                  logo: "https://yappix.ru/images/logo.png",
                },
                jobLocation: {
                  "@type": "Place",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Москва",
                    addressCountry: "RU",
                  },
                },
                jobLocationType: "TELECOMMUTE",
                employmentType: "FULL_TIME",
                skills: job.skills.join(", "),
                industry: "Information Technology",
                url: `https://yappix.ru/karera/${job.slug}`,
              },
            })),
          }),
        }}
      />
    </>
  )
}
