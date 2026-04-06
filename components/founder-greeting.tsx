import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const copyByLocale = {
  ru: {
    alt: "Ренат Усманов — founder YappiX",
    name: "Ренат Усманов",
    suffix: " — founder YappiX",
    description:
      "Помогаю предпринимателям быстрее запускать digital-продукты: от идеи и UX/UI до full stack разработки и AI-интеграций.",
    cta: "Подробнее обо мне",
    href: "/founder",
  },
  en: {
    alt: "Renat Usmanov — founder YappiX",
    name: "Renat Usmanov",
    suffix: " — founder YappiX",
    description:
      "I help entrepreneurs launch digital products faster: from idea and UX/UI to full stack development and AI integrations.",
    cta: "More about me",
    href: "/en/founder",
  },
} as const

export function FounderGreeting({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const t = copyByLocale[locale]
  return (
    <section className="flex flex-col justify-center items-center w-full h-fit py-0">
      <div className="container mx-0 flex flex-col w-fit h-fit px-0">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 p-6 sm:p-8 glass rounded-2xl">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/20">
            <Image
              src="/ru.png"
              alt={t.alt}
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-foreground mb-1">
              <span className="font-semibold">{t.name}</span>
              <span className="text-muted-foreground">{t.suffix}</span>
            </p>
            <p className="text-sm text-muted-foreground mb-3">{t.description}</p>
            <Link
              href={t.href}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              {t.cta}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
