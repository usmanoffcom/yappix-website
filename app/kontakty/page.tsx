import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react"
import { BookingCallBlock } from "@/components/booking-call-block"

export const metadata: Metadata = {
  title: "Контакты YappiX — связаться с нами | IT-студия",
  description:
      "Свяжитесь с YappiX: телефон, email, Telegram. Офисы в Москве, Delaware, Istanbul, Belgrade, Казахстане. Бесплатная консультация по вашему проекту.",
  keywords: ["контакты YappiX", "связаться с веб-студией", "заказать разработку", "консультация по разработке"],
  alternates: {
    canonical: "https://yappix.ru/kontakty",
  },
}

const offices = [
  {
    city: "Москва, Россия",
    address: "Инновационный центр Сколково, Большой бульвар 42, стр. 1",
    phone: "+7 995 095 5593",
    email: "sales@yappix.ru",
    timezone: "UTC+3",
  },
  {
    city: "Delaware, США",
    address: "1209 Orange Street, Wilmington, DE 19801",
    phone: "+1 302 123-4567",
    email: "contact@yappix.studio",
    timezone: "UTC-5",
  },
  {
    city: "Istanbul, Турция",
    address: "Maslak Mahallesi, Büyükdere Caddesi, No: 255",
    phone: "+90 534 087 59 56",
    email: "contact@yappix.studio",
    timezone: "UTC+3",
  },
  {
    city: "Belgrade, Сербия",
    address: "Bulevar Mihajla Pupina 10a, Novi Beograd",
    phone: "+381 63 1780824",
    email: "contact@yappix.studio",
    timezone: "UTC+1",
  },
  {
    city: "Казахстан",
    address: "Алматы",
    phone: "+7 995 095 5593",
    email: "contact@yappix.studio",
    timezone: "UTC+6",
  },
]

const contactMethods = [
  {
    icon: Phone,
    title: "Телефон",
    value: "+7 995 095 55 93",
    description: "Бесплатно по России",
    href: "tel:+79950955593",
  },
  {
    icon: Mail,
    title: "Email",
    value: "sales@yappix.ru",
    description: "Ответим в течение 2 часов",
    href: "mailto:sales@yappix.ru",
  },
  {
    icon: MessageCircle,
    title: "Telegram",
    value: "@yappix_support",
    description: "Быстрые ответы",
    href: "https://t.me/yappix_bot",
  },
  {
    icon: Clock,
    title: "Время работы",
    value: "24/7",
    description: "Благодаря офисам в разных часовых поясах",
    href: null,
  },
]

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Свяжитесь с нами
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Расскажите о вашем проекте — бесплатно проконсультируем, оценим сроки и стоимость. Отвечаем в течение 2
                часов.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {contactMethods.map((method) => (
                <div key={method.title}>
                  {method.href ? (
                    <Link
                      href={method.href}
                      className="block p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                    >
                      <method.icon className="w-6 h-6 text-primary mb-3" />
                      <p className="text-sm text-muted-foreground">{method.title}</p>
                      <p className="font-semibold text-foreground">{method.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
                    </Link>
                  ) : (
                    <div className="p-4 bg-card border border-border rounded-xl">
                      <method.icon className="w-6 h-6 text-primary mb-3" />
                      <p className="text-sm text-muted-foreground">{method.title}</p>
                      <p className="font-semibold text-foreground">{method.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form & Offices */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Оставить заявку</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input id="name" placeholder="Как к вам обращаться" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Компания</Label>
                      <Input id="company" placeholder="Название компании" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="email@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Интересующая услуга</Label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Выберите услугу</option>
                      <option value="web">Разработка сайта</option>
                      <option value="mobile">Мобильное приложение</option>
                      <option value="ai">AI чат-бот</option>
                      <option value="saas">SaaS / PaaS</option>
                      <option value="fintech">FinTech</option>
                      <option value="devops">DevOps</option>
                      <option value="seo">SEO</option>
                      <option value="smm">SMM</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Примерный бюджет</Label>
                    <select
                      id="budget"
                      className="w-full px-3 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Выберите диапазон</option>
                      <option value="100-300">100 000 — 300 000 ₽</option>
                      <option value="300-500">300 000 — 500 000 ₽</option>
                      <option value="500-1000">500 000 — 1 000 000 ₽</option>
                      <option value="1000-3000">1 000 000 — 3 000 000 ₽</option>
                      <option value="3000+">Более 3 000 000 ₽</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Описание проекта *</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о вашем проекте: цели, задачи, желаемые сроки..."
                      rows={5}
                      required
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="privacy" className="mt-1" required />
                    <Label htmlFor="privacy" className="text-sm text-muted-foreground">
                      Согласен на обработку персональных данных в соответствии с{" "}
                      <Link href="/politika-konfidencialnosti" className="text-primary hover:underline">
                        политикой конфиденциальности
                      </Link>
                    </Label>
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Или напишите нам в{" "}
                    <Link href="https://t.me/yappix_bot" className="text-primary hover:underline">
                      Telegram
                    </Link>{" "}
                    — ответим быстрее
                  </p>
                </form>
              </div>

              {/* Offices */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Наши офисы</h2>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div key={office.city} className="p-6 bg-card border border-border rounded-xl">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground">{office.city}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                          <div className="flex flex-wrap gap-4 mt-3 text-sm">
                            <Link
                              href={`tel:${office.phone.replace(/\s/g, "")}`}
                              className="text-primary hover:underline"
                            >
                              {office.phone}
                            </Link>
                            <Link href={`mailto:${office.email}`} className="text-primary hover:underline">
                              {office.email}
                            </Link>
                            <span className="text-muted-foreground">{office.timezone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Booking Call Block */}
                <div className="mt-8">
                  <BookingCallBlock />
                </div>

                {/* Payment Methods */}
                <div className="mt-8 p-6 bg-card border border-border rounded-xl">
                  <h3 className="font-semibold text-foreground mb-4">Способы оплаты</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Банковский перевод", "Карты", "СБП", "PayPal", "USDT/USDC", "Рассрочка"].map((method) => (
                      <span
                        key={method}
                        className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-lg"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Часто задаваемые вопросы</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {[
                {
                  q: "Как быстро вы отвечаете на заявки?",
                  a: "В рабочее время — в течение 2 часов. В выходные — в течение 24 часов.",
                },
                {
                  q: "Можно ли начать работу без предоплаты?",
                  a: "Да, мы предлагаем тестовую неделю с возможностью возврата средств.",
                },
                {
                  q: "Работаете ли с небольшими бюджетами?",
                  a: "Да, минимальный проект — от 62 500 ₽. Для стартапов есть специальные условия.",
                },
                {
                  q: "Есть ли NDA?",
                  a: "Да, подписываем NDA перед обсуждением деталей проекта по запросу клиента.",
                },
              ].map((item) => (
                <div key={item.q} className="p-6 bg-background border border-border rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* JSON-LD LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "YappiX",
            image: "https://yappix.ru/logo.png",
            telephone: "+7-995-095-5593",
            email: "sales@yappix.ru",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Инновационный центр Сколково, Большой бульвар 42",
              addressLocality: "Москва",
              addressCountry: "RU",
            },
            openingHours: "Mo-Su 00:00-24:00",
            priceRange: "$$",
          }),
        }}
      />
    </>
  )
}
