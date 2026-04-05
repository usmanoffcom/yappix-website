import { Zap, Link2, Target, FileCheck, Globe } from "lucide-react"

type Locale = "ru" | "en"

const copy: Record<Locale, { h2: string; reasons: { icon: typeof Zap; text: string }[] }> = {
  ru: {
    h2: "Почему YappiX",
    reasons: [
      { icon: Zap, text: "AI-first delivery вместо тяжёлой производственной схемы" },
      { icon: Link2, text: "UX + продукт + разработка в одной цепочке" },
      { icon: Target, text: "Фокус на запуск и экономику, а не на количество часов" },
      { icon: FileCheck, text: "Понятные этапы, доказательства и кейсы" },
      { icon: Globe, text: "Работа с русскоязычными и bilingual заказчиками" },
    ],
  },
  en: {
    h2: "Why YappiX",
    reasons: [
      { icon: Zap, text: "AI-first delivery instead of a heavy factory model" },
      { icon: Link2, text: "UX + product + engineering in one chain" },
      { icon: Target, text: "Launch economics over billable hours" },
      { icon: FileCheck, text: "Clear stages, evidence, and case studies" },
      { icon: Globe, text: "Built for Russian-speaking and bilingual buyers in UAE, EU, and the US" },
    ],
  },
}

export function WhyYappixSection({ locale = "ru" }: { locale?: Locale }) {
  const t = copy[locale]
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-headline text-foreground mb-12 text-center">{t.h2}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {t.reasons.map((item) => (
            <div key={item.text} className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl">
              <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
