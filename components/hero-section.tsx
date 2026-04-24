import Link from "next/link"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { HeroDesktopSpline, HeroMobileRobotBg } from "@/components/hero-client"

const content = {
  ru: {
    badge1: "MVP за 7 дней",
    headline: "AI-first разработка продуктов для бизнеса",
    desc: "Помогаем фаундерам и компаниям запускать MVP, SaaS, клиентские кабинеты и AI-автоматизацию без тяжёлого enterprise-цикла и бесконечной пересборки.",
    cta1: "Обсудить проект",
    cta2: "Посмотреть кейсы",
    contactHref: "/kontakty",
    casesHref: "/kejsy",
  },
  en: {
    badge1: "MVP in 7 days",
    headline: "AI-first product engineering for serious launches",
    desc: "We help founders and teams ship MVPs, SaaS, client portals, and AI automation without a heavy enterprise cycle or endless rebuilds.",
    cta1: "Discuss your project",
    cta2: "View case studies",
    contactHref: "/en/contact",
    casesHref: "/en/cases",
  },
} as const

const heroBtnBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] [&_svg]:pointer-events-none [&_svg]:shrink-0 text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14"

export function HeroSection({
  locale = "ru",
  geoHeadline,
  geoDesc,
}: {
  locale?: "ru" | "en"
  geoHeadline?: string
  geoDesc?: string
}) {
  const base = content[locale]
  const t = geoHeadline ? { ...base, headline: geoHeadline, desc: geoDesc ?? base.desc } : base

  return (
    <section
      className="relative min-h-[100svh] flex items-center pt-28 sm:pt-32 md:pt-36 pb-12 overflow-hidden bg-black"
      data-hero-section
    >
      <HeroMobileRobotBg locale={locale} />

      <div className="container mx-auto relative z-10">
        <div className="grid xl:grid-cols-2 gap-8 xl:gap-12 items-center">
          <div className="max-w-5xl xl:max-w-none mx-auto xl:mx-0 text-center xl:text-left relative z-10">
            <div
              className="flex flex-wrap justify-center xl:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500"
              data-hero-badges
            >
              <span
                className={cn(
                  "inline-flex items-center border px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-md",
                  "bg-primary/10 border-primary/30 text-primary backdrop-blur-sm",
                )}
              >
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2" aria-hidden />
                {t.badge1}
              </span>
            </div>

            <h1
              className="text-headline text-foreground mb-5 sm:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100"
              data-hero-headline
            >
              {t.headline}
            </h1>

            <p className="text-body-lg max-w-2xl xl:max-w-none mx-auto xl:mx-0 mb-8 sm:mb-10 text-pretty animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              {t.desc}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center xl:justify-start animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              <Link
                href={t.contactHref}
                className={cn(
                  heroBtnBase,
                  "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
                )}
              >
                {t.cta1}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" aria-hidden />
              </Link>
              <Link
                href={t.casesHref}
                className={cn(
                  heroBtnBase,
                  "border border-white/10 bg-white/[0.05] backdrop-blur-sm shadow-xs hover:bg-white/[0.1] hover:text-accent-foreground active:bg-white/[0.08] bg-transparent",
                )}
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" aria-hidden />
                {t.cta2}
              </Link>
            </div>
          </div>

          <div className="hidden xl:block relative w-full h-[560px] min-[1280px]:h-[700px] 2xl:h-[800px] xl:self-end">
            <HeroDesktopSpline />
          </div>
        </div>
      </div>
    </section>
  )
}
