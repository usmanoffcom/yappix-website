"use client"

import { Badge } from "@/components/ui/badge"
import { MessageSquare, FileSearch, Code2, Rocket, HeadphonesIcon } from "lucide-react"

const stepsByLocale = {
  ru: [
    { icon: MessageSquare, step: "01", title: "Анализ процесса", description: "Фиксируем текущие операции, узкие места, SLA и стоимость ручного труда", duration: "1-2 дня" },
    { icon: FileSearch, step: "02", title: "Расчёт ROI", description: "Считаем экономику внедрения: потери сейчас, целевые метрики и срок окупаемости", duration: "1-2 дня" },
    { icon: Code2, step: "03", title: "Архитектура и внедрение", description: "Проектируем и внедряем цифровое решение или AI-контур с контролем качества", duration: "2-6 недель" },
    { icon: Rocket, step: "04", title: "Интеграция и запуск", description: "Подключаем CRM/ERP/API, настраиваем роли, логирование, мониторинг и алерты", duration: "3-5 дней" },
    { icon: HeadphonesIcon, step: "05", title: "Поддержка по SLA", description: "Сопровождаем, улучшаем метрики и масштабируем только при подтверждённой экономике", duration: "Постоянно" },
  ],
  en: [
    { icon: MessageSquare, step: "01", title: "Brief & Analysis", description: "Gather requirements, analyze market and competitors, create technical specification", duration: "1-2 days" },
    { icon: FileSearch, step: "02", title: "Prototype & Design", description: "Create interface prototypes, approve design concept and UI kit", duration: "3-5 days" },
    { icon: Code2, step: "03", title: "Development with AI", description: "Code with AI agents and deep coding, test each iteration", duration: "1-4 weeks" },
    { icon: Rocket, step: "04", title: "Launch & Testing", description: "Deploy to production, run load testing", duration: "2-3 days" },
    { icon: HeadphonesIcon, step: "05", title: "Support & Growth", description: "Monitor metrics, improve, scale functionality", duration: "Ongoing" },
  ],
}

const processHeadByLocale = {
  ru: { badge: "Формат работы", headline: "Сначала экономика, потом внедрение", body: "Запускаем AI-проекты только после расчёта ROI. Это снижает риски и делает результат измеримым для бизнеса." },
  en: { badge: "Process", headline: "From Idea to Launch in 7 Days", body: "Our process is optimized with AI tools for maximum speed without losing quality. Trial week with money-back guarantee." },
}

const videoFallback = { ru: "Ваш браузер не поддерживает воспроизведение видео.", en: "Your browser does not support video playback." }

export function ProcessSection({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const steps = stepsByLocale[locale]
  const head = processHeadByLocale[locale]
  const fallback = videoFallback[locale]
  return (
    <section id="process" className="section-padding bg-card/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-3 sm:mb-4">
            {head.badge}
          </Badge>
          <h2 className="text-headline text-foreground mb-4 sm:mb-5 text-balance">{head.headline}</h2>
          <p className="text-body-lg text-pretty">
            {head.body}
          </p>
        </div>

        {/* Video Player */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-16 px-4">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 bg-black/50 shadow-2xl shadow-primary/5 animate-in fade-in slide-in-from-bottom-4 duration-500 hover:shadow-primary/10 transition-shadow">
            <video
              className="w-full h-full object-contain"
              controls
              controlsList="nodownload"
              preload="metadata"
              playsInline
              crossOrigin="anonymous"
            >
              <source src="/Yappix_%20AI-инженерия%20будущего_720p_caption.mp4" type="video/mp4" />
              <track kind="captions" />
              {fallback}
            </video>
          </div>
        </div>

        <div className="max-w-3xl lg:max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index}
              
              
              
              
              className="relative flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-8 sm:pb-10 lg:pb-12 last:pb-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
