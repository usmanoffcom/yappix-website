"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Play, Sparkles, Zap, Shield, Rocket, Globe, TrendingUp, Briefcase } from "lucide-react"
import dynamic from "next/dynamic"
import { Suspense } from "react"

const Spline = dynamic(() => import('@splinetool/react-spline').then(m => m.default), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-primary/5 to-transparent animate-pulse" />
})

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 sm:pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Spline Background for Mobile/Tablet (< 1200px) */}
      <div className="absolute inset-0 xl:hidden pointer-events-none opacity-30 overflow-hidden">
        <div className="w-full h-[calc(100%+100px)] -mb-[100px]">
          <Spline scene="https://prod.spline.design/YMKHOsTacHbgDg3g/scene.splinecode" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid xl:grid-cols-2 gap-8 xl:gap-12 items-center">
          <div className="max-w-5xl xl:max-w-none mx-auto xl:mx-0 text-center xl:text-left relative z-10">
            <div className="flex flex-wrap justify-center xl:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Badge variant="outline" className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-primary/10 border-primary/30 text-primary">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2" />
                Резиденты Сколково
              </Badge>
              <Badge variant="outline" className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-secondary border-border text-muted-foreground">
                <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2" />
                MVP за 7 дней
              </Badge>
              <Badge variant="outline" className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-secondary border-border text-muted-foreground">
                <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2" />
                Гарантия возврата
              </Badge>
            </div>
            <h1 className="text-display mb-5 sm:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
              <span className="text-foreground">Разрабатываем </span>
              <span className="text-primary">сложные продукты </span>
              <span className="text-foreground">быстрее с AI</span>
            </h1>
            <p className="text-body-lg max-w-2xl xl:max-w-none mx-auto xl:mx-0 mb-8 sm:mb-10 text-pretty animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              Веб-сайты, мобильные приложения, AI-решения, SaaS и FinTech продукты. Используем AI-агенты и deep coding для 10x ускорения разработки.
              Офисы в России, США, Турции и Сербии.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center xl:justify-start animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              <Button size="lg" asChild className="text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14">
                <Link href="#contact">
                  Начать проект
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14 bg-transparent">
                <Link href="#cases">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Смотреть кейсы
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Spline 3D Robot (Desktop >= 1200px) */}
          <div className="hidden xl:block relative w-full h-[600px] xl:h-[700px] 2xl:h-[800px]">
            <div className="absolute -inset-x-20 2xl:-inset-x-32 -top-10 -bottom-20 overflow-hidden animate-in fade-in zoom-in-90 duration-800 delay-200">
              <Spline scene="https://prod.spline.design/YsrhGK1AHO4x8zaQ/scene.splinecode" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-14 xl:mt-8">
          {[
            { value: "260+", label: "Проектов", icon: Briefcase, gradient: "from-violet-500 to-purple-600" },
            { value: "10x", label: "Быстрее с AI", icon: Rocket, gradient: "from-pink-500 to-rose-600" },
            { value: "$2.1M+", label: "Инвестиций", icon: TrendingUp, gradient: "from-emerald-500 to-teal-600" },
            { value: "4", label: "Страны", icon: Globe, gradient: "from-blue-500 to-cyan-600" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative p-4 sm:p-5 xl:p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-in fade-in slide-in-from-bottom-2 duration-400"
              style={{ animationDelay: `${500 + 100 * index}ms` }}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className="relative flex items-center gap-3 sm:gap-4">
                <div className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 xl:w-16 xl:h-16 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl xl:text-4xl font-bold text-foreground tracking-tight leading-none">{stat.value}</div>
                  <div className="text-xs sm:text-sm xl:text-base text-muted-foreground mt-1">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
