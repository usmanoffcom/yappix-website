"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Play, Sparkles, Zap, Shield, Rocket, Globe, TrendingUp, Briefcase } from "lucide-react"
import dynamic from "next/dynamic"
import { useState, useEffect } from "react"

// Lazy load Spline только когда страница полностью загружена и после задержки
const Spline = dynamic(() => import('@splinetool/react-spline').then(m => m.default), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-primary/5 via-primary/3 to-transparent flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  )
})

// Компонент для отложенной загрузки Spline
function LazySpline({ scene, className }: { scene: string; className?: string }) {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Загружаем Spline только после полной загрузки страницы и задержки
    const loadSpline = () => {
      // Используем requestIdleCallback для загрузки в idle время
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          setShouldLoad(true)
        }, { timeout: 5000 })
      } else {
        // Fallback: загружаем через 3 секунды
        setTimeout(() => {
          setShouldLoad(true)
        }, 3000)
      }
    }

    // Проверяем, загружена ли страница
    if (document.readyState === 'complete') {
      loadSpline()
    } else {
      window.addEventListener('load', loadSpline)
      return () => window.removeEventListener('load', loadSpline)
    }
  }, [])

  if (!shouldLoad) {
    return (
      <div className={`w-full h-full bg-gradient-to-br from-primary/5 via-primary/3 to-transparent ${className}`}>
        {/* Animated gradient placeholder */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[100%] animate-[spin_20s_linear_infinite] opacity-30">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-conic from-primary/20 via-transparent to-primary/10" />
          </div>
        </div>
      </div>
    )
  }

  return <Spline scene={scene} />
}

const content = {
  ru: {
    badge1: "AI-автоматизация процессов",
    badge2: "ROI до старта проекта",
    badge3: "Безопасность и SLA",
    h1a: "Автоматизируем процессы ",
    h1b: "и считаем экономику ",
    h1c: "внедрения",
    desc: "Разрабатываем сайты, приложения и AI-контуры для снижения операционных затрат. Проектируем решения с прогнозируемым ROI, контролем доступа, логированием и измеримыми метриками качества.",
    cta1: "Рассчитать экономию",
    cta2: "Обсудить задачу",
    stat1Value: "360 000 ₽",
    stat1Label: "Потери/мес до автоматизации",
    stat2Value: "до 240 000 ₽",
    stat2Label: "Экономия/мес после внедрения",
    stat3Value: "3–5 мес",
    stat3Label: "Средний срок окупаемости",
    stat4Value: "до 70%",
    stat4Label: "Сокращение ручных операций",
    contactHref: "#contact",
    casesHref: "/kontakty",
  },
  en: {
    badge1: "AI process automation",
    badge2: "ROI before project start",
    badge3: "Security and SLA",
    h1a: "We automate processes ",
    h1b: "and calculate the economics ",
    h1c: "of implementation",
    desc: "We build websites, apps and AI contours to cut operational costs. We design solutions with predictable ROI, access control, logging and measurable quality metrics.",
    cta1: "Calculate savings",
    cta2: "Discuss your task",
    stat1Value: "360,000 ₽",
    stat1Label: "Monthly losses before automation",
    stat2Value: "up to 240,000 ₽",
    stat2Label: "Monthly savings after launch",
    stat3Value: "3–5 months",
    stat3Label: "Typical payback period",
    stat4Value: "up to 70%",
    stat4Label: "Reduction in manual operations",
    contactHref: "/en/contact",
    casesHref: "/en/cases",
  },
} as const

export function HeroSection({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const t = content[locale]
  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 sm:pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Spline Background for Mobile/Tablet (< xl) - Lazy loaded */}
      <div className="absolute inset-0 xl:hidden pointer-events-none opacity-30 overflow-hidden">
        <div className="w-full h-[calc(100%+100px)] -mb-[100px]">
          <LazySpline scene="https://prod.spline.design/YMKHOsTacHbgDg3g/scene.splinecode" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid xl:grid-cols-2 gap-8 xl:gap-12 items-center">
          <div className="max-w-5xl xl:max-w-none mx-auto xl:mx-0 text-center xl:text-left relative z-10">
            <div className="flex flex-wrap justify-center xl:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Badge variant="outline" className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-primary/10 border-primary/30 text-primary">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2" />
                {t.badge1}
              </Badge>
              <Badge variant="outline" className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-secondary border-border text-muted-foreground">
                <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2" />
                {t.badge2}
              </Badge>
              <Badge variant="outline" className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-secondary border-border text-muted-foreground">
                <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2" />
                {t.badge3}
              </Badge>
            </div>
            <h1 className="text-display mb-5 sm:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
              <span className="text-foreground">{t.h1a}</span>
              <span className="text-primary">{t.h1b}</span>
              <span className="text-foreground">{t.h1c}</span>
            </h1>
            <p className="text-body-lg max-w-2xl xl:max-w-none mx-auto xl:mx-0 mb-8 sm:mb-10 text-pretty animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              {t.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center xl:justify-start animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              <Button size="lg" asChild className="text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14">
                <Link href={t.contactHref}>
                  {t.cta1}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14 bg-transparent">
                <Link href={t.casesHref}>
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {t.cta2}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Spline 3D Robot (Desktop >= xl) - Lazy loaded */}
          <div className="hidden xl:block relative w-full h-[560px] min-[1280px]:h-[700px] 2xl:h-[800px]">
            <div className="absolute -inset-x-20 2xl:-inset-x-32 -top-10 -bottom-20 overflow-hidden animate-in fade-in zoom-in-90 duration-800 delay-200">
              <LazySpline scene="https://prod.spline.design/YsrhGK1AHO4x8zaQ/scene.splinecode" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 min-[1100px]:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-14 min-[1100px]:mt-8">
          {[
            {
              value: t.stat1Value,
              label: t.stat1Label,
              icon: Briefcase,
              gradient: "from-violet-500 to-purple-600",
              kicker: locale === "en" ? "Before" : "До внедрения",
            },
            {
              value: t.stat2Value,
              label: t.stat2Label,
              icon: Rocket,
              gradient: "from-pink-500 to-rose-600",
              kicker: locale === "en" ? "After" : "После внедрения",
            },
            {
              value: t.stat3Value,
              label: t.stat3Label,
              icon: TrendingUp,
              gradient: "from-emerald-500 to-teal-600",
              kicker: "ROI",
            },
            {
              value: t.stat4Value,
              label: t.stat4Label,
              icon: Globe,
              gradient: "from-blue-500 to-cyan-600",
              kicker: locale === "en" ? "Impact" : "Эффект",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`group relative p-4 sm:p-5 xl:p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-in fade-in slide-in-from-bottom-2 duration-400 ${
                index === 0
                  ? "[animation-delay:500ms]"
                  : index === 1
                    ? "[animation-delay:600ms]"
                    : index === 2
                      ? "[animation-delay:700ms]"
                      : "[animation-delay:800ms]"
              }`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center rounded-full border border-border/60 bg-background/70 px-2.5 py-1 text-[10px] sm:text-xs text-muted-foreground">
                    {stat.kicker}
                  </span>
                  <div className={`inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl xl:text-4xl font-bold text-foreground tracking-tight leading-none">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-2 leading-snug">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
