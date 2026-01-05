"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { MessageSquare, FileSearch, Code2, Rocket, HeadphonesIcon } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Бриф и анализ",
    description: "Собираем требования, анализируем рынок и конкурентов, формируем техническое задание",
    duration: "1-2 дня",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Прототип и дизайн",
    description: "Создаём прототипы интерфейсов, утверждаем дизайн-концепцию и UI-kit",
    duration: "3-5 дней",
  },
  {
    icon: Code2,
    step: "03",
    title: "Разработка с AI",
    description: "Пишем код с AI-агентами и deep coding, тестируем каждую итерацию",
    duration: "1-4 недели",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Запуск и тестирование",
    description: "Разворачиваем на продакшене, проводим нагрузочное тестирование",
    duration: "2-3 дня",
  },
  {
    icon: HeadphonesIcon,
    step: "05",
    title: "Поддержка и развитие",
    description: "Мониторим метрики, вносим улучшения, масштабируем функционал",
    duration: "Постоянно",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-card/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-3 sm:mb-4">
            Процесс
          </Badge>
          <h2 className="text-headline text-foreground mb-4 sm:mb-5 text-balance">От идеи до запуска за 7 дней</h2>
          <p className="text-body-lg text-pretty">
            Наш процесс оптимизирован с помощью AI-инструментов для максимальной скорости без потери качества. Тестовая
            неделя с гарантией возврата.
          </p>
        </div>

        <div className="max-w-3xl lg:max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-8 sm:pb-10 lg:pb-12 last:pb-0"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                </div>
                {index < steps.length - 1 && <div className="w-px h-full bg-border mt-3 sm:mt-4" />}
              </div>

              {/* Content */}
              <div className="flex-1 pb-4 sm:pb-6 lg:pb-8 pt-1 sm:pt-2">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2">
                  <span className="text-xs sm:text-sm font-mono text-primary">{step.step}</span>
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-2 py-0.5">
                    {step.duration}
                  </Badge>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-1.5 sm:mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
