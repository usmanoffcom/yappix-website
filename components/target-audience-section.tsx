import Link from "next/link"
import { Globe, Building2, Bot } from "lucide-react"

type Locale = "ru" | "en"

const copy: Record<
  Locale,
  { h2: string; lead: string; items: { icon: typeof Globe; title: string; description: string; href: string }[] }
> = {
  ru: {
    h2: "Когда нужен не подрядчик «на код», а команда на запуск",
    lead: "YappiX подключается, когда нужно быстро собрать продуктовую основу: сайт, MVP, кабинет, внутренний сервис или AI-модуль. Мы работаем на стыке UX, продуктовой логики и AI-assisted delivery, чтобы сокращать путь от идеи до рабочего продукта.",
    items: [
      {
        icon: Globe,
        title: "Фаундерам в ОАЭ",
        description: "Когда нужен быстрый запуск и русскоязычная коммуникация.",
        href: "/oae/razrabotka-mvp-v-dubae",
      },
      {
        icon: Building2,
        title: "B2B-компаниям в Европе",
        description: "Когда нужно перестроить продукт, кабинет или внутренние процессы.",
        href: "/eu/perezapusk-digital-produkta",
      },
      {
        icon: Bot,
        title: "Командам, которым нужен AI",
        description: "Когда нужен RAG, AI-ассистент или автоматизация внутренних сценариев.",
        href: "/vnedrenie-ai-i-rag",
      },
    ],
  },
  en: {
    h2: "When you need a launch team—not just “hands for code”",
    lead: "YappiX is a fit when you must ship a real product foundation fast: web, MVP, client area, internal service, or an AI module. We combine UX, product logic, and AI-assisted delivery to shorten the path from idea to working software.",
    items: [
      {
        icon: Globe,
        title: "Founders in the UAE",
        description: "Fast iteration and clear bilingual communication.",
        href: "/en/oae/razrabotka-mvp-v-dubae",
      },
      {
        icon: Building2,
        title: "B2B teams in Europe",
        description: "Relaunch a product, portal, or internal workflows without chaos.",
        href: "/en/eu/perezapusk-digital-produkta",
      },
      {
        icon: Bot,
        title: "Teams that need AI",
        description: "RAG, copilots, and automation with guardrails—not hype.",
        href: "/en/vnedrenie-ai-i-rag",
      },
    ],
  },
}

export function TargetAudienceSection({ locale = "ru" }: { locale?: Locale }) {
  const t = copy[locale]
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-headline text-foreground mb-4">{t.h2}</h2>
          <p className="text-body-lg max-w-3xl mx-auto">{t.lead}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group p-6 md:p-8 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
