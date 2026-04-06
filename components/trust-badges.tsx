import { Award, Building2, Rocket, Globe } from "lucide-react"

const badgesByLocale = {
  ru: [
    { icon: Building2, title: "Работаем от бизнес-задачи", description: "Сначала процесс и экономика, затем технология" },
    { icon: Award, title: "Прозрачный ROI", description: "Финансовая модель и критерии окупаемости до старта" },
    { icon: Rocket, title: "Управляемый AI-контур", description: "Доступы, логирование, качество ответов, SLA" },
    { icon: Globe, title: "6 локаций", description: "США, Россия, Германия, Турция, Сербия, Казахстан" },
  ],
  en: [
    { icon: Building2, title: "We start from the business task", description: "Process and economics first, then technology" },
    { icon: Award, title: "Transparent ROI", description: "Financial model and payback criteria before we start" },
    { icon: Rocket, title: "Controlled AI contour", description: "Access control, logging, answer quality, SLA" },
    { icon: Globe, title: "6 locations", description: "USA, Russia, Germany, Turkey, Serbia, Kazakhstan" },
  ],
}

export function TrustBadges({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const badges = badgesByLocale[locale]
  return (
    <section className="py-12 sm:py-16 md:py-20 border-y border-white/[0.06] glass-subtle">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="group relative glass rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">{badge.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
