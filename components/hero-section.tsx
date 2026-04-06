"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { useState, useEffect, useRef, type ComponentType } from "react"

/** Фоновый робот только после mount — без расхождения SSR/HTML и клиентского бандла (классы Tailwind). */
function HeroMobileRobotBg() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.15] xl:hidden" aria-hidden>
      <Image
        src="/Robot.png"
        alt=""
        width={900}
        height={1200}
        priority
        fetchPriority="high"
        sizes="100vw"
        className="absolute bottom-0 left-1/2 h-[85%] w-auto max-w-none origin-bottom -translate-x-1/2 scale-150 object-contain object-bottom"
      />
    </div>
  )
}

function LazySpline({ scene, className = "" }: { scene: string; className?: string }) {
  const [SplineComp, setSplineComp] = useState<ComponentType<any> | null>(null)
  const [splineLoaded, setSplineLoaded] = useState(false)
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    const load = () => {
      if (!mounted.current) return
      import("@splinetool/react-spline").then((mod) => {
        if (mounted.current) setSplineComp(() => mod.default)
      })
    }
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(load, { timeout: 3000 })
      return () => { mounted.current = false; window.cancelIdleCallback(id) }
    }
    const timer = setTimeout(load, 1500)
    return () => { mounted.current = false; clearTimeout(timer) }
  }, [])

  return (
    <div className={`relative h-full min-h-[1px] w-full min-w-[1px] ${className}`.trim()}>
      <div className={`absolute inset-0 flex items-end justify-center transition-opacity duration-1000 ${splineLoaded ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <Image
          src="/Robot.png"
          alt="YappiX Robot"
          width={900}
          height={900}
          sizes="(min-width: 1280px) 45vw, 0px"
          className="h-[120%] max-h-[900px] w-auto object-contain object-bottom align-bottom drop-shadow-[0_0_40px_rgba(236,72,153,0.3)]"
        />
      </div>
      {SplineComp && (
        <div className={`absolute inset-0 transition-opacity duration-1000 ${splineLoaded ? "opacity-100" : "opacity-0"}`}>
          <SplineComp scene={scene} onLoad={() => setSplineLoaded(true)} />
        </div>
      )}
    </div>
  )
}

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

export function HeroSection({ locale = "ru", geoHeadline, geoDesc }: { locale?: "ru" | "en"; geoHeadline?: string; geoDesc?: string }) {
  const base = content[locale]
  const t = geoHeadline ? { ...base, headline: geoHeadline, desc: geoDesc ?? base.desc } : base
  return (
    <section className="relative min-h-[100svh] flex items-center pt-28 sm:pt-32 md:pt-36 pb-12 overflow-hidden bg-black" data-hero-section suppressHydrationWarning>

      {/* Мобильный / планшет (< xl): робот — только на клиенте, см. HeroMobileRobotBg */}
      <HeroMobileRobotBg />

      <div className="container mx-auto relative z-10">
        <div className="grid xl:grid-cols-2 gap-8 xl:gap-12 items-center">
          <div className="max-w-5xl xl:max-w-none mx-auto xl:mx-0 text-center xl:text-left relative z-10">
            <div
              className="flex flex-wrap justify-center xl:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500"
              data-hero-badges
            >
              <Badge variant="outline" className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-primary/10 border-primary/30 text-primary backdrop-blur-sm">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2" />
                {t.badge1}
              </Badge>
            </div>
            <h1
              className="text-headline text-foreground mb-5 sm:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100"
              data-hero-headline
            >
              {t.headline}
            </h1>
            <p
              className="text-body-lg max-w-2xl xl:max-w-none mx-auto xl:mx-0 mb-8 sm:mb-10 text-pretty animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200"
              data-hero-desc
            >
              {t.desc}
            </p>
            <div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center xl:justify-start animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300"
              data-hero-ctas
            >
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

          {/* Right column: Spline + placeholder (desktop xl+) */}
          <div className="hidden xl:block relative w-full h-[560px] min-[1280px]:h-[700px] 2xl:h-[800px] xl:self-end">
            <div className="absolute -inset-x-20 2xl:-inset-x-32 -top-10 -bottom-20 overflow-hidden animate-in fade-in zoom-in-90 duration-800 delay-200">
              <LazySpline scene="https://prod.spline.design/YsrhGK1AHO4x8zaQ/scene.splinecode" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
