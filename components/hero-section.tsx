"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Play, Sparkles, Zap, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 sm:pt-24 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
          >
            <Badge
              variant="outline"
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-primary/10 border-primary/30 text-primary"
            >
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2" />
              Резиденты Сколково
            </Badge>
            <Badge
              variant="outline"
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-secondary border-border text-muted-foreground"
            >
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2" />
              MVP за 7 дней
            </Badge>
            <Badge
              variant="outline"
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-secondary border-border text-muted-foreground"
            >
              <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2" />
              Гарантия возврата
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-display text-balance mb-5 sm:mb-6"
          >
            <span className="text-foreground">Разрабатываем</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-primary">сложные продукты</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-foreground">быстрее с AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 text-pretty"
          >
            Веб-сайты, мобильные приложения, AI-решения, SaaS и FinTech продукты. Используем AI-агенты и deep coding для
            10x ускорения разработки. Офисы в России, США, Турции и Сербии.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Button size="lg" asChild className="text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14">
              <Link href="#contact">
                Начать проект
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14 bg-transparent"
            >
              <Link href="#cases">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Смотреть кейсы
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-14 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t border-border"
          >
            {[
              { value: "150+", label: "Проектов" },
              { value: "10x", label: "Быстрее с AI" },
              { value: "$5M+", label: "Привлечено инвестиций" },
              { value: "4", label: "Страны присутствия" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
