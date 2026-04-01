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
    <section className="py-10 sm:py-12 md:py-16 border-y border-border bg-card/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base leading-tight">{badge.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
