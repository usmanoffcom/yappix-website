import { Zap, Link2, Target, FileCheck, Globe } from "lucide-react"

type Locale = "ru" | "en"

const VIDEO_SRC = "/images/001.mp4"

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
    <section className="glass-subtle py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-headline text-foreground mb-10 text-center md:mb-12">{t.h2}</h2>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <ul className="flex flex-col gap-2 md:gap-3">
            {t.reasons.map((item) => (
              <li key={item.text}>
                <div className="flex items-center gap-4 glass rounded-2xl p-4 transition-all duration-300 md:p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 md:h-14 md:w-14">
                    <item.icon className="h-6 w-6 text-primary md:h-7 md:w-7" />
                  </div>
                  <span className="text-left text-base font-medium text-foreground md:text-lg">{item.text}</span>
                </div>
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
