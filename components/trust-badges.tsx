import { Award, Building2, Rocket, Globe } from "lucide-react"

const badges = [
  {
    icon: Building2,
    title: "Резиденты Сколково",
    description: "Официальный статус с 2020",
  },
  {
    icon: Award,
    title: "Гранты и инвестиции",
    description: "Проекты привлекли раунды",
  },
  {
    icon: Rocket,
    title: "AI-First подход",
    description: "AI-агенты в разработке",
  },
  {
    icon: Globe,
    title: "4 офиса по миру",
    description: "США, Россия, Турция, Сербия",
  },
]

export function TrustBadges() {
  return (
    <section className="py-10 sm:py-12 md:py-16 border-y border-border bg-card/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3 sm:gap-4">
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
