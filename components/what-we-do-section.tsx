import Link from "next/link"
import { Rocket, Monitor, Bot, Palette, Users } from "lucide-react"

type Locale = "ru" | "en"

const VIDEO_SRC = "/images/002.mp4"

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
    <section className="glass-subtle py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-headline text-foreground mb-10 text-center md:mb-12">{t.h2}</h2>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <ul className="flex flex-col gap-2 md:gap-3">
            {t.items.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-4 glass rounded-2xl p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 md:p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 md:h-14 md:w-14">
                    <item.icon className="h-6 w-6 text-primary md:h-7 md:w-7" />
                  </div>
                  <span className="text-left text-base font-semibold text-foreground transition-colors group-hover:text-primary md:text-lg">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="relative aspect-video w-full overflow-hidden rounded-2xl glass"
            aria-hidden
          >
            <video
              className="h-full w-full object-cover"
              src={VIDEO_SRC}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
