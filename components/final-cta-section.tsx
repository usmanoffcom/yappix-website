import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

type Locale = "ru" | "en"

const copy: Record<Locale, { h2: string; p: string; primary: string; secondary: string; primaryHref: string; secondaryHref: string }> = {
  ru: {
    h2: "Если продукт надо не обсуждать месяцами, а запускать — давайте смотреть задачу",
    p: "Разберём, что именно нужно: MVP, продуктовый редизайн, AI-модуль или пересборка текущей архитектуры.",
    primary: "Обсудить проект",
    secondary: "Посмотреть кейсы",
    primaryHref: "/kontakty",
    secondaryHref: "/kejsy",
  },
  en: {
    h2: "If the goal is to ship—not to debate for months—let’s scope the work",
    p: "We’ll clarify whether you need an MVP, a product redesign, an AI module, or an architecture reset.",
    primary: "Discuss the project",
    secondary: "Case studies",
    primaryHref: "/en/contact",
    secondaryHref: "/en/cases",
  },
}

export function FinalCtaSection({ locale = "ru" }: { locale?: Locale }) {
  const t = copy[locale]
  return (
    <section className="py-16 md:py-24 bg-primary/5 backdrop-blur-lg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-headline text-foreground mb-4">{t.h2}</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t.p}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href={t.primaryHref}>
              {t.primary}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={t.secondaryHref}>{t.secondary}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
