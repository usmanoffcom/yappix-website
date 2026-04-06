import type { Metadata } from "next"
import Link from "next/link"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { Button } from "@/components/ui/button"
import { standardSocialMetadata } from "@/lib/og-metadata"
import { ArrowRight, Search, Lightbulb, Layout, Cpu, CheckSquare, HeartHandshake } from "lucide-react"

export const metadata: Metadata = {
  title: "How YappiX works — stages, timelines, artifacts, and delivery",
  description:
    "How we ship products: from discovery to support. Six stages, clear artifacts at each step, AI-assisted delivery without a black box.",
  alternates: {
    canonical: "https://yappix.ru/en/process",
    languages: { "ru-RU": "https://yappix.ru/process" },
  },
  ...standardSocialMetadata({
    title: "How YappiX works — stages, timelines, artifacts, and delivery",
    description:
      "How we ship products: from discovery to support. Six stages, clear artifacts at each step, AI-assisted delivery without a black box.",
    canonicalUrl: "https://yappix.ru/en/process",
    locale: "en_US",
    ogTitle: "How YappiX works — stages, timelines, and delivery",
    ogDescription:
      "Six stages: discovery, product logic, UX and scope, AI-assisted delivery, QA and handoff, support and evolution.",
  }),
}

const stages = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We clarify the problem, business context, and constraints — and align on goals, audience, and success criteria.",
    artifacts: ["Project brief", "User map", "Competitive notes", "Scope boundaries"],
    duration: "2–5 days",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Product logic",
    description: "We shape what we build, why, and for whom — and define MVP scope and priorities.",
    artifacts: ["Product brief", "User stories", "Prioritized backlog", "Architecture sketch"],
    duration: "3–5 days",
  },
  {
    number: "03",
    icon: Layout,
    title: "UX and scope",
    description: "We design UX, build prototypes, align the visual system, and lock the final scope.",
    artifacts: ["Wireframes", "UI prototype", "Design system", "Final scope"],
    duration: "5–10 days",
  },
  {
    number: "04",
    icon: Cpu,
    title: "AI-assisted delivery",
    description: "Engineering with acceleration where it helps — iterations every 2–3 days, demos, code review.",
    artifacts: ["Working code", "CI/CD pipeline", "Regular demos", "API documentation"],
    duration: "2–8 weeks",
  },
  {
    number: "05",
    icon: CheckSquare,
    title: "QA and handoff",
    description: "Testing, bug fixing, acceptance — then handing over code, docs, and access.",
    artifacts: ["Test cases", "Production deploy", "Documentation", "Team onboarding"],
    duration: "3–5 days",
  },
  {
    number: "06",
    icon: HeartHandshake,
    title: "Support / evolution",
    description: "Monitoring, support, and iteration — helping the product grow after launch.",
    artifacts: ["SLA & monitoring", "Evolution roadmap", "Regular releases", "Usage analytics"],
    duration: "Ongoing",
  },
]

export default function ProcessPageEn() {
  return (
    <>
      <HeaderEn />
      <main className="pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://yappix.ru/en" },
                { "@type": "ListItem", position: 2, name: "Process", item: "https://yappix.ru/en/process" },
              ],
            }),
          }}
        />

        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-display text-foreground mb-6">How we launch a product</h1>
            <p className="text-body-lg max-w-2xl mx-auto">
              Our goal is not to stretch the timeline — it’s to turn an idea into a working system you can show to users,
              investors, or your team.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-12 md:space-y-16">
              {stages.map((stage) => (
                <div key={stage.number} className="relative grid md:grid-cols-[80px_1fr] gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20">
                      <stage.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground mt-2 font-mono">{stage.number}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">{stage.title}</h2>
                    <p className="text-muted-foreground mb-4">{stage.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {stage.artifacts.map((a) => (
                        <span
                          key={a}
                          className="inline-flex items-center px-3 py-1 rounded-full bg-card border border-border text-xs text-muted-foreground"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-primary font-medium">{stage.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-headline text-foreground mb-4">Ready to discuss your project?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We’ll clarify what you need — an MVP, a product redesign, an AI module, or a controlled rebuild of your stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/en/contact">
                  Contact us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/en/cases">View cases</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterEn />
    </>
  )
}
