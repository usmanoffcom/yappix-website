"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

const plansByLocale = {
  ru: [
    { name: "MVP Sprint", description: "Быстрый запуск минимального продукта", price: "от 62 500 ₽", duration: "1-2 недели", features: ["Прототип + дизайн", "Базовый функционал", "Адаптивная вёрстка", "1 итерация правок", "Деплой на сервер", "Тестовая неделя"], cta: "Начать MVP", popular: false },
    { name: "Product", description: "Полноценный продукт с расширенным функционалом", price: "от 250 000 ₽", duration: "4-8 недель", features: ["Всё из MVP Sprint", "Расширенный функционал", "Интеграции с API", "Админ-панель", "Аналитика и метрики", "3 итерации правок", "Документация", "1 месяц поддержки"], cta: "Обсудить продукт", popular: true },
    { name: "Enterprise", description: "Комплексные решения для крупного бизнеса", price: "Индивидуально", duration: "от 3 месяцев", features: ["Всё из Product", "Микросервисная архитектура", "Высокая нагрузка", "Кастомные интеграции", "AI и ML решения", "DevOps и инфраструктура", "SLA 99.9%", "Выделенная команда"], cta: "Связаться", popular: false },
  ],
  en: [
    { name: "MVP Sprint", description: "Quick launch of a minimal product", price: "from $690", duration: "1-2 weeks", features: ["Prototype + Design", "Core functionality", "Responsive layout", "1 revision round", "Server deployment", "Trial week"], cta: "Start MVP", popular: false },
    { name: "Product", description: "Full product with extended functionality", price: "from $2,750", duration: "4-8 weeks", features: ["Everything from MVP", "Extended functionality", "API integrations", "Admin panel", "Analytics & metrics", "3 revision rounds", "Documentation", "1 month support"], cta: "Discuss Product", popular: true },
    { name: "Enterprise", description: "Complex solutions for large business", price: "Custom", duration: "from 3 months", features: ["Everything from Product", "Microservices architecture", "High load", "Custom integrations", "AI & ML solutions", "DevOps & infrastructure", "SLA 99.9%", "Dedicated team"], cta: "Get in Touch", popular: false },
  ],
}

const pricingHeadByLocale = {
  ru: { badge: "Тарифы", headline: "Прозрачное ценообразование", body: "Тестовая неделя с гарантией возврата средств. Все способы оплаты: РФ, международные карты, крипто.", popular: "Популярный", payment: "Принимаем: Российские карты • SWIFT/SEPA • PayPal • Криптовалюта • Безналичный расчёт для юрлиц" },
  en: { badge: "Pricing", headline: "Transparent Pricing", body: "Trial week with money-back guarantee. All payment methods: Russian cards, international cards, crypto.", popular: "Popular", payment: "We accept: Russian cards • SWIFT/SEPA • PayPal • Cryptocurrency • Invoicing for businesses" },
}

export function PricingSection({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const plans = plansByLocale[locale]
  const head = pricingHeadByLocale[locale]
  const contactHref = locale === "en" ? "/en/contact" : "#contact"
  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-3 sm:mb-4">
            {head.badge}
          </Badge>
          <h2 className="text-headline text-foreground mb-4 sm:mb-5 text-balance">{head.headline}</h2>
          <p className="text-body-lg text-pretty">
            {head.body}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Card
                className={`h-full flex flex-col ${plan.popular ? "border-primary bg-primary/5 relative" : "border-border bg-card"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground text-[10px] sm:text-xs">
                      <Sparkles className="w-3 h-3 mr-1" />
                      {head.popular}
                    </Badge>
                  </div>
                )}
                <CardHeader className="pt-6 sm:pt-8 pb-2">
                  <CardTitle className="text-lg sm:text-xl text-foreground">{plan.name}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col pt-2">
                  <div className="mb-5 sm:mb-6">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                      {plan.price}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1">{plan.duration}</div>
                  </div>

                  <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 flex-1">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2.5 sm:gap-3">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-full h-10 sm:h-11 text-sm"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link href={contactHref}>
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            {head.payment}
          </p>
        </div>
      </div>
    </section>
  )
}
