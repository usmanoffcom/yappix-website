import type { GeoCity } from "@/lib/geo-landing-data"
import type { GeoFaqItem } from "@/lib/geo-seo-extras"

const copy = {
  ru: {
    heading: "Частые вопросы",
    sub: (country: string) => `Разработка и AI для бизнеса в ${country}`,
  },
  en: {
    heading: "Frequently asked questions",
    sub: (country: string) => `Software and AI services in ${country}`,
  },
}

export function GeoFaqSection({
  geo,
  locale,
  items,
}: {
  geo: GeoCity
  locale: "ru" | "en"
  items: GeoFaqItem[]
}) {
  const isRu = locale === "ru"
  const t = copy[isRu ? "ru" : "en"]
  const countryLabel = isRu ? geo.countryRu : geo.countryEn

  return (
    <section
      className="border-b border-border/60 bg-muted/20"
      aria-labelledby="geo-faq-heading"
    >
      <div className="container mx-auto px-4 py-14 md:py-18 max-w-3xl">
        <div className="mb-8 md:mb-10">
          <h2
            id="geo-faq-heading"
            className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-2"
          >
            {t.heading}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">{t.sub(countryLabel)}</p>
        </div>
        <ul className="space-y-3 list-none p-0 m-0">
          {items.map((item, i) => {
            const q = isRu ? item.qRu : item.qEn
            const a = isRu ? item.aRu : item.aEn
            return (
              <li key={i}>
                <details className="group rounded-lg border border-border/80 bg-background/80 px-4 py-3 open:shadow-sm transition-shadow">
                  <summary className="cursor-pointer list-none font-medium text-foreground pr-6 [&::-webkit-details-marker]:hidden flex items-start justify-between gap-2">
                    <span>{q}</span>
                    <span className="text-muted-foreground shrink-0 text-lg leading-none group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground border-t border-border/50 pt-3">
                    {a}
                  </p>
                </details>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
