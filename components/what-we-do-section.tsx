import Link from "next/link"
import { Rocket, Monitor, Bot, Palette, Users } from "lucide-react"

type Locale = "ru" | "en"

const copy: Record<Locale, { h2: string; items: { icon: typeof Rocket; title: string; href: string }[] }> = {
  ru: {
    h2: "Что мы делаем",
    items: [
      { icon: Rocket, title: "MVP и запуск продукта", href: "/mvp-i-zapusk-produkta" },
      { icon: Monitor, title: "SaaS и личные кабинеты", href: "/usa/razrabotka-saas-i-lichnyh-kabinetov" },
      { icon: Bot, title: "AI automation и RAG", href: "/vnedrenie-ai-i-rag" },
      { icon: Palette, title: "Product redesign и UX-system", href: "/eu/perezapusk-digital-produkta" },
      { icon: Users, title: "CTO as a service", href: "/cto-as-a-service" },
    ],
  },
  en: {
    h2: "What we do",
    items: [
      { icon: Rocket, title: "MVP & product launch", href: "/en/mvp-i-zapusk-produkta" },
      { icon: Monitor, title: "SaaS & client portals", href: "/en/usa/razrabotka-saas-i-lichnyh-kabinetov" },
      { icon: Bot, title: "AI automation & RAG", href: "/en/vnedrenie-ai-i-rag" },
      { icon: Palette, title: "Product redesign & UX", href: "/en/eu/perezapusk-digital-produkta" },
      { icon: Users, title: "CTO as a Service", href: "/en/cto-as-a-service" },
    ],
  },
}

export function WhatWeDoSection({ locale = "ru" }: { locale?: Locale }) {
  const t = copy[locale]
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-headline text-foreground mb-12 text-center">{t.h2}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {t.items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col items-center text-center p-5 md:p-6 bg-background border border-border rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
