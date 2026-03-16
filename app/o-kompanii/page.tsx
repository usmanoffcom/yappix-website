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
    "YappiX — AI-first delivery company. Резиденты Сколково. Внедряем автоматизацию и AI-контуры с измеримым ROI. 250+ проектов, 5 локаций.",
  keywords: ["YappiX", "IT компания", "Сколково", "веб-студия", "разработка на заказ", "аутсорсинг"],
  alternates: {
    canonical: "https://yappix.ru/o-kompanii",
  },
  openGraph: {
    title: "О компании YappiX — резиденты Сколково",
    description: "AI-first delivery company. Резиденты Сколково. 250+ проектов, измеримый ROI, прозрачный SLA.",
    type: "website",
    url: "https://yappix.ru/o-kompanii",
    siteName: "YappiX",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "YappiX — О компании",
      },
    ],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "О компании YappiX — резиденты Сколково",
    description: "AI-first delivery company. 250+ проектов, 5 локаций.",
  },
}

const stats = [
  { value: "250+", label: "Проектов", icon: Rocket },
  { value: "5", label: "Локаций", icon: Globe },
  { value: "10+", label: "Лет опыта", icon: Award },
  { value: "AI-first", label: "Модель delivery", icon: Users },
]

const milestones = [
  { year: "2015", title: "Основание", description: "Запуск студии, первые проекты на PhoneGap и Angular" },
  { year: "2017", title: "Гранты", description: "Получение грантов от ФСИ и патентов" },
  { year: "2019", title: "Инвестиции", description: "Привлечение 1-го раунда инвестиций на YappiX CMS" },
  { year: "2021", title: "Сколково и рост", description: "Получили статус резидента Сколково, привлекли 2-й раунд инвестиций для масштабирования" },
  { year: "2022", title: "Международная экспансия", description: "Выход на международный рынок, локации в США и Турции" },
  { year: "2025", title: "AI-трансформация", description: "Внедрение AI-инструментов, 5 локаций, масштабирование delivery" },
]

const values = [
  {
    title: "Скорость",
    description: "Используем AI для 7x-12x ускорения разработки. MVP за 7 дней — реальность, не маркетинг.",
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
  { name: "Сбер", logo: "/Logos/001.svg" },
  { name: "Яндекс", logo: "/Logos/002.svg" },
  { name: "VK", logo: "/Logos/003.svg" },
  { name: "Тинькофф", logo: "/Logos/004.svg" },
  { name: "МТС", logo: "/Logos/005.svg" },
  { name: "Ozon", logo: "/Logos/006.svg" },
  { name: "Wildberries", logo: "/Logos/007.svg" },
  { name: "Ростелеком", logo: "/Logos/008.svg" },
  { name: "РЖД", logo: "/Logos/009.svg" },
  { name: "Газпром", logo: "/Logos/010.svg" },
  { name: "Росатом", logo: "/Logos/001.svg" },
  { name: "X5 Group", logo: "/Logos/002.svg" },
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
                <h1 className="text-display text-foreground mb-6 text-balance">
                  Создаём цифровые продукты быстрее с AI
                </h1>
                <p className="text-body-lg mb-8 text-pretty">
                  YappiX — AI-first delivery company. Резиденты Сколково. Внедряем автоматизацию и AI-контуры
                  с измеримым ROI, контролем качества и прозрачным SLA. Core-команда + проверенная сеть специалистов.
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
              <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden bg-black/50">
                <video
                  src="/yappix_2026.mp4"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  title="Команда YappiX — видео о компании"
                  className="absolute inset-0 w-full h-full object-contain"
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

        {/* Founder */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-headline text-foreground mb-8">Основатель</h2>
              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src="/images/image1.png"
                    alt="Ренат Усманов"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Ренат Усманов</h3>
                  <p className="text-primary mb-4">CEO & Product Designer</p>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Основатель YappiX и продуктовый дизайнер с 10+ годами опыта. Специализируюсь на полном цикле:
                      от UX-исследований до дизайн-системы и фронтенда.
                    </p>
                    <p>
                      В 2025 году перевёл компанию на AI-first delivery: core-команда + сеть проверенных специалистов
                      + AI-ускорение на каждом этапе. Этот подход даёт enterprise-качество с прозрачными SLA и артефактами.
                    </p>
                    <p>
                      <strong>Stack:</strong> Figma, Next.js, TypeScript, Framer, Cursor AI, Claude
                    </p>
                    <div className="flex gap-4 mt-6">
                      <Link href="https://usmanoff.com" target="_blank" className="text-primary hover:underline">
                        Portfolio →
                      </Link>
                      <Link href="https://linkedin.com/in/usmanoffcom" target="_blank" className="text-primary hover:underline">
                        LinkedIn →
                      </Link>
                      <Link href="https://github.com/usmanoffcom" target="_blank" className="text-primary hover:underline">
                        GitHub →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-headline text-foreground mb-4">Наши ценности</h2>
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
            <h2 className="text-headline text-foreground mb-12">Наш путь</h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Left side - Fixed video and description */}
              <div className="md:sticky md:top-24 md:self-start">
                <div className="space-y-6">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/LQTnA8tP2B4"
                      title="YAPPIX CMS - Runa Capital"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">YAPPIX CMS и Runa Capital</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      YAPPIX CMS прошла первую экспертную комиссию международного венчурного фонда Runa Capital. Команда программистов из Набережных Челнов разработала конструктор нативных мобильных приложений в связке с системой управления контентом. Также поддерживает технологии AR и распознавание речи. Не требует от пользователя знания языков программирования.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Продукт показался представителям фонда очень перспективным. Они отметили, что у него есть большой шанс выхода на мировой рынок. Рената Усманова (основатель проекта YAPPIX CMS) была приглашена в штаб-квартиру Runa Capital, расположенную в Кремниевой долине, для личной встречи. На которой планируется обсудить детали возможного сотрудничества.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Scrollable timeline */}
            <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-12">
                {milestones.map((milestone, idx) => (
                  <div
                    key={milestone.year}
                      className="relative"
                  >
                      <div className="absolute left-0 w-8 h-8 bg-primary rounded-full -translate-x-1/2 flex items-center justify-center">
                        <div className="w-3 h-3 bg-background rounded-full" />
                      </div>
                      <div className="pl-12">
                          <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                          <h3 className="text-xl font-semibold text-foreground mt-1">{milestone.title}</h3>
                          <p className="text-muted-foreground mt-2">{milestone.description}</p>
                        {milestone.year === "2017" && (
                          <div className="relative w-full mt-4 rounded-lg overflow-hidden">
                            <Image
                              src="/sk_it/Banner – 2.png"
                              alt="Гранты и патенты"
                              width={1200}
                              height={300}
                              className="w-full h-auto object-contain"
                            />
                        </div>
                      )}
                        {milestone.year === "2021" && (
                          <div className="relative w-full mt-4 rounded-lg overflow-hidden">
                            <Image
                              src="/sk_it/Banner – 1.png"
                              alt="Сколково и инвестиции"
                              width={1200}
                              height={300}
                              className="w-full h-auto object-contain"
                            />
                    </div>
                        )}
                        {milestone.year === "2022" && (
                          <div className="relative w-full mt-4 rounded-lg overflow-hidden">
                            <Image
                              src="/sk_it/Banner.png"
                              alt="Международная экспансия"
                              width={1200}
                              height={300}
                              className="w-full h-auto object-contain"
                            />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-headline text-foreground mb-4">Нам доверяют</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              Работали с компаниями из топ-100 России и международными стартапами.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-center h-20 bg-card border border-border rounded-lg p-4"
                >
                  <Image
                    src={client.logo}
                    alt={client.name || "Логотип партнёра"}
                    width={120}
                    height={40}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-headline text-foreground mb-12">Почему YappiX</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "10+ лет опыта — многолетний опыт разработки и проверенные решения",
                "AI-инструменты — разработка в 7-12 раз быстрее и дешевле",
                "MVP за 7 дней — тестовая неделя с гарантией возврата",
                "Офисы в 5 странах — удобные часовые пояса",
                "Все способы оплаты — включая крипто",
                "250+ проектов — опыт в любой отрасли",
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
            <h2 className="text-headline text-foreground mb-4">Готовы к сотрудничеству?</h2>
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
