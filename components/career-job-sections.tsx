import type { ReactNode } from "react"
import type { CareerLocaleBlock } from "@/lib/careers-data"

const LABELS = {
  ru: {
    about: "О вакансии",
    responsibilities: "Что предстоит делать",
    requirements: "Что мы ожидаем",
    niceToHave: "Будет плюсом",
    notAFit: "Кто нам не подойдёт",
    whatWeOffer: "Что мы предлагаем",
    howToApply: "Как откликнуться",
  },
  en: {
    about: "About the role",
    responsibilities: "Responsibilities",
    requirements: "Requirements",
    niceToHave: "Nice to have",
    notAFit: "You may not be a fit if",
    whatWeOffer: "What we offer",
    howToApply: "How to apply",
  },
} as const

function Section({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">{title}</h2>
      {children}
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function CareerJobSections({
  content,
  locale,
}: {
  content: CareerLocaleBlock
  locale: keyof typeof LABELS
}) {
  const L = LABELS[locale]
  return (
    <>
      <Section title={L.about}>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {content.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>
      <Section title={L.responsibilities}>
        <BulletList items={content.responsibilities} />
      </Section>
      <Section title={L.requirements}>
        <BulletList items={content.requirements} />
      </Section>
      <Section title={L.niceToHave}>
        <BulletList items={content.niceToHave} />
      </Section>
      <Section title={L.notAFit}>
        <BulletList items={content.notAFit} />
      </Section>
      <Section title={L.whatWeOffer}>
        <BulletList items={content.whatWeOffer} />
      </Section>
      <Section title={L.howToApply}>
        <p className="text-muted-foreground leading-relaxed">{content.howToApply}</p>
      </Section>
    </>
  )
}
