"use client"

import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BarChart3, BookOpenCheck, FileCheck2, LifeBuoy, LockKeyhole, MessageSquareWarning, SearchCheck, WalletCards } from "lucide-react"

const contentByLocale = {
  ru: {
    badge: "Экономика автоматизации",
    title: "Где бизнес теряет деньги каждый день",
    subtitle:
      "Мы внедряем автоматизацию и AI-контуры так, чтобы их можно было измерять, контролировать и спокойно эксплуатировать.",
    losses: [
      "Ручной поиск информации в документах и внутренних базах знаний",
      "Проверка договоров, отчётов и комплаенс-операции",
      "Обработка клиентской обратной связи и повторяющихся запросов",
    ],
    contourTitle: "Что входит в управляемый AI-контур",
    contour: [
      "Контроль доступа и ролей",
      "Логирование и объяснимость ответов",
      "Ограничение галлюцинаций и контроль качества",
      "Метрики точности и SLA по процессу",
    ],
    roiTitle: "Как считаем ROI до старта",
    roiBeforeTitle: "До автоматизации",
    roiBefore: ["6 сотрудников", "2 часа в день на ручные операции", "1 500 ₽ средняя стоимость часа", "Потери: 360 000 ₽ / месяц"],
    roiAfterTitle: "После автоматизации",
    roiAfter: ["30–40 минут вместо 2 часов", "Экономия: до 240 000 ₽ / месяц", "Окупаемость: 3–5 месяцев", "Проект не запускаем без финансовой модели"],
    roiSummaryLabel: "Типовой срок окупаемости",
    roiSummaryValue: "3-5 месяцев",
    roiNote: "Запускаем только после проверки финансовой модели.",
    proofTitle: "Как подтверждаем результат",
    proofSubtitle: "Открыто публикуем методики, артефакты и стандарты внедрения по ключевым проектам.",
    proofLinks: [
      { label: "Evidence Hub", description: "Метрики, baseline и артефакты", href: "/evidence" },
      { label: "Security & Compliance", description: "Контроль доступа и контур безопасности", href: "/security-compliance" },
      { label: "SLA & Support", description: "Процессы поддержки и SLA-модель", href: "/sla-support" },
      { label: "ROI Methodology", description: "Финмодель и правила расчёта эффекта", href: "/roi-methodology" },
    ],
  },
  en: {
    badge: "Automation Economics",
    title: "Where Businesses Lose Money Every Day",
    subtitle:
      "We implement automation and AI contours that can be measured, controlled, and reliably operated.",
    losses: [
      "Manual search in documents and internal knowledge bases",
      "Document checks and compliance operations",
      "Customer feedback processing and repetitive request handling",
    ],
    contourTitle: "What a controlled AI contour includes",
    contour: [
      "Role-based access control",
      "Logging and explainable responses",
      "Hallucination control and quality checks",
      "Accuracy metrics and SLA by process",
    ],
    roiTitle: "How we calculate ROI before launch",
    roiBeforeTitle: "Before automation",
    roiBefore: ["6 employees", "2 hours/day for manual operations", "1,500 ₽ average hourly cost", "Losses: 360,000 ₽ / month"],
    roiAfterTitle: "After automation",
    roiAfter: ["30–40 minutes instead of 2 hours", "Savings: up to 240,000 ₽ / month", "Payback period: 3–5 months", "No launch without a financial model"],
    roiSummaryLabel: "Typical payback period",
    roiSummaryValue: "3-5 months",
    roiNote: "We launch only after validating the financial model.",
    proofTitle: "How we validate outcomes",
    proofSubtitle: "We openly publish methodology, artifacts, and delivery standards for priority projects.",
    proofLinks: [
      { label: "Evidence Hub", description: "Metrics, baselines, and verification artifacts", href: "/en/evidence" },
      { label: "Security & Compliance", description: "Access control and security governance", href: "/en/security-compliance" },
      { label: "SLA & Support", description: "Support process and SLA model", href: "/en/sla-support" },
      { label: "ROI Methodology", description: "Financial model and impact calculation rules", href: "/en/roi-methodology" },
    ],
  },
} as const

export function AutomationEconomicsSection({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const t = contentByLocale[locale]
  const lossIcons = [SearchCheck, FileCheck2, MessageSquareWarning]
  const proofIcons = [BookOpenCheck, LockKeyhole, LifeBuoy, WalletCards]

  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-y border-border bg-card/30 bg-[url('/abstract-background-4480x2520-11615.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" aria-hidden="true" />
      <div className="container mx-auto px-4">
        <div className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
          <Badge variant="outline" className="mb-3 sm:mb-4">
            {t.badge}
          </Badge>
          <h2 className="text-headline text-foreground mb-4 sm:mb-5 text-balance">{t.title}</h2>
          <p className="text-body-lg text-pretty">{t.subtitle}</p>
        </div>

        <div className="grid min-[1100px]:grid-cols-3 gap-6 mb-8">
          {t.losses.map((item, index) => {
            const Icon = lossIcons[index] ?? BarChart3
            return (
            <div key={item} className="p-5 rounded-xl border border-border bg-background/95">
              <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <p className="text-sm sm:text-base text-foreground">{item}</p>
            </div>
            )
          })}
        </div>

        <div className="grid min-[1100px]:grid-cols-3 items-start gap-6 mb-8">
          <div className="min-[1100px]:col-span-1 p-5 rounded-xl border border-border bg-background">
            <h3 className="text-lg font-semibold text-foreground mb-4">{t.contourTitle}</h3>
            <ul className="space-y-2">
              {t.contour.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-[1100px]:col-span-2 p-5 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
            <h3 className="text-lg font-semibold text-foreground mb-4">{t.roiTitle}</h3>
            <div className="grid xl:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border/70 bg-background/80 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">{t.roiBeforeTitle}</p>
                <ul className="space-y-2">
                  {t.roiBefore.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-primary/30 bg-primary/10 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-foreground mb-3">{t.roiAfterTitle}</p>
                <ul className="space-y-2">
                  {t.roiAfter.map((item) => (
                    <li key={item} className="text-sm text-foreground leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-primary/30 bg-background/70 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="text-xs sm:text-sm text-muted-foreground">{t.roiSummaryLabel}</p>
              <p className="text-base sm:text-lg font-semibold text-primary">{t.roiSummaryValue}</p>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground">{t.roiNote}</p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-background/80 p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{t.proofTitle}</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4">{t.proofSubtitle}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {t.proofLinks.map((link, index) => {
              const Icon = proofIcons[index] ?? BookOpenCheck
              return (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-border bg-card/95 hover:border-primary/50 transition-colors p-4"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary mb-3">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="text-sm text-foreground font-medium">{link.label}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{link.description}</p>
              </Link>
              )
            })}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

