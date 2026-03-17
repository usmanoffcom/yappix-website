import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, X } from "lucide-react"
import {
  Music,
  Palette,
  Layout,
  Rocket,
  TrendingUp,
  Code2,
  Sparkles,
  Brain,
  Lightbulb,
  Zap,
  Search,
  Layers,
  TestTube,
  IterationCcw,
  Clock,
  Users,
  Link2,
  FlaskConical,
  Shrink,
  Eye,
  Target,
  Building2,
  Briefcase,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Renat Usmanov — Founder YappiX & AI-first Product Developer",
  description:
    "Renat Usmanov — Founder YappiX, AI-first product developer, UX/UI and full stack. Helps launch MVP, SaaS, AI solutions and digital products faster.",
  keywords: [
    "Founder YappiX",
    "AI-first developer",
    "AI-first product development",
    "UX/UI and full stack",
    "MVP launch",
    "SaaS development",
    "AI solutions for business",
    "Renat Usmanov",
  ],
  alternates: {
    canonical: "https://yappix.ru/en/founder",
    languages: { "ru-RU": "https://yappix.ru/founder" },
  },
  openGraph: {
    title: "Renat Usmanov — Founder YappiX & AI-first Product Developer",
    description:
      "Founder YappiX. Helps entrepreneurs launch digital products faster: from idea and UX/UI to full stack development, AI integrations and release.",
    type: "profile",
    url: "https://yappix.ru/en/founder",
    siteName: "YappiX",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Renat Usmanov — Founder YappiX" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renat Usmanov — Founder YappiX",
    description: "AI-first product developer, UX/UI and full stack. Helps launch MVP, SaaS, AI solutions faster.",
  },
}

const floatingTags = ["UX/UI", "Full Stack", "AI-first", "Startups", "Accessibility"]

const founderTimelineEn = [
  { icon: Music, title: "Music and visual thinking", description: "Worked with music and sound — this shaped a sense of rhythm, structure and attention to detail." },
  { icon: Palette, title: "Transition to design", description: "Visual thinking naturally led to graphic and web design. Started building interfaces." },
  { icon: Layout, title: "Growth in UX/UI", description: "Dove into user experience and accessibility. Vision challenges led to a deeper understanding of how people interact with products." },
  { icon: Rocket, title: "Startups and product approach", description: "Launched own products: CMS, marketplaces, SaaS. Went through the full cycle from idea to users." },
  { icon: TrendingUp, title: "Raising investment", description: "Raised investment for startups, worked with investors from Russia and the US. Learned unit economics and defending product decisions." },
  { icon: Code2, title: "Back to full stack", description: "AI and accessibility made the path from design to code much simpler. Returned to full stack — Next.js, TypeScript, Node.js." },
  { icon: Sparkles, title: "AI-first methodology", description: "Today I combine all of this: UX/UI + full stack + product strategy + AI acceleration at every stage." },
]

const founderStoryCardsEn = [
  { icon: Brain, title: "Founder mindset", description: "Entrepreneur mindset: from unit economics to go-to-market." },
  { icon: Lightbulb, title: "Product thinking", description: "I see the product as a whole — from UX research to architecture and scaling." },
  { icon: Zap, title: "AI-first delivery", description: "AI speeds up every stage: prototyping, code, tests, documentation." },
]

const founderMethodEn = [
  { icon: Search, title: "Analytics", description: "AI analyzes market, competitors and users. We form hypotheses from data, not intuition." },
  { icon: Layers, title: "UX/UI and prototyping", description: "AI generates interface options, designer picks the best. From wireframe to pixel-perfect 3-5x faster." },
  { icon: Code2, title: "Full stack development", description: "Cursor AI, v0.dev and Copilot speed up coding. One specialist covers frontend, backend and DevOps." },
  { icon: TestTube, title: "Testing and documentation", description: "AI writes tests, generates docs and checks code for vulnerabilities. Quality is a system, not manual labor." },
  { icon: IterationCcw, title: "Fast iterations and launch", description: "MVP in weeks, not months. Quick feedback, quick fixes, fast time to market." },
]

const founderMetricsEn = [
  { value: "20+", label: "years in digital and product" },
  { value: "250+", label: "projects delivered" },
  { value: "5", label: "locations (USA, Russia, Turkey, Serbia, Kazakhstan)" },
  { value: "AI-first", label: "approach to every project" },
  { value: "7-12×", label: "acceleration with AI tools" },
  { value: "Skolkovo", label: "fund resident" },
]

const founderProjectsEn = [
  "YappiX — AI-first delivery company",
  "YAPPIX CMS — proprietary CMS platform",
  "realLaw AI — Legal Tech SaaS for UAE",
  "Priboy Hotels — digital for hotel chain",
  "Jupid — AI dating platform",
  "CoinPulse — crypto portfolio tracker",
]

const founderBenefitsEn = [
  { icon: Clock, title: "Faster time-to-market", description: "AI-first process shortens the path from idea to release by 3-5x compared to the classic approach." },
  { icon: Users, title: "Less hiring overhead", description: "One product loop instead of separate contractors for design, frontend, backend and management." },
  { icon: Link2, title: "Idea and execution alignment", description: "One person understands both UX and code and product — nothing is lost when handing off between teams." },
  { icon: FlaskConical, title: "Fast hypothesis testing", description: "MVP in weeks, not months. You can quickly validate an idea with real users and adjust course." },
  { icon: Shrink, title: "Compact product start", description: "No need to scale headcount at launch. A full product from one specialist with AI acceleration." },
  { icon: Eye, title: "Process transparency", description: "Artifacts at every stage: prototypes, code in repo, documentation. Everything visible and manageable." },
]

const founderAudienceEn = [
  { icon: Rocket, title: "Founders and startups", description: "Need to launch an MVP fast and validate a hypothesis without blowing the budget." },
  { icon: Building2, title: "Companies with a product idea", description: "Have a business problem but no in-house dev team. Need someone to take it to release." },
  { icon: Sparkles, title: "AI-first launch", description: "Want to use AI not as a marketing label but as a real development accelerator." },
  { icon: Target, title: "Product/UX/Full stack loop", description: "Need a strong specialist at the intersection of design, code and product strategy." },
  { icon: Briefcase, title: "Entrepreneurs without a team", description: "Don't want to hire 5 people at launch. Need one loop that covers the full cycle." },
]

const founderFaqEn = [
  { question: "What is an AI-first product developer?", answer: "A specialist who uses AI tools at every stage of product creation: from analytics and prototyping to code, testing and documentation. AI is not a showcase but a working tool that speeds up each stage by 3-12x." },
  { question: "How does your approach differ from an agency?", answer: "An agency is a team of 5-15 people with overhead and long approval chains. My approach is one product loop where I see the product as a whole: UX/UI + code + strategy. Less communication loss, faster results, lower cost." },
  { question: "Do you only do design?", answer: "No. I went from design to full stack development. Today I cover the full cycle: UX research, UI design, frontend (Next.js, React), backend (Node.js), DevOps, AI integrations." },
  { question: "Can you take a project to release?", answer: "Yes. From idea and prototype to production-ready product with deployment, monitoring and documentation. I work as a single delivery loop." },
  { question: "What kinds of products do you work with?", answer: "MVP, SaaS, mobile apps, AI solutions, enterprise products, marketplaces. Industries: FinTech, LegalTech, EdTech, e-commerce, hospitality." },
  { question: "Why is an AI-first approach useful for business?", answer: "AI shortens time-to-market by 3-5x, cuts MVP cost by 40-60% and lets you validate hypotheses faster. You get a working product in weeks, not months." },
]

const usualApproachEn = [
  "Long approval cycles between designer, developer and manager",
  "Loss of intent when handing off mockups to development",
  "Separate contractors for each stage",
  "Months until the first working prototype",
]

const myApproachEn = [
  "One product loop — from idea to release",
  "AI-first process at every stage",
  "3-5x faster from idea to working product",
  "No communication loss between teams",
]

export default function FounderEnPage() {
  return (
    <>
      <HeaderEn />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4">Founder story</Badge>
                <h1 className="text-display text-foreground mb-6 text-balance">
                  Renat Usmanov — Founder YappiX & AI-first product developer
                </h1>
                <p className="text-body-lg mb-8 text-pretty max-w-2xl">
                  I help entrepreneurs and companies launch digital products faster: from idea and UX/UI to full stack development, AI integrations and release.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button size="lg" asChild>
                    <Link href="/en/contact">
                      Discuss a project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/en/cases">View case studies</Link>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {floatingTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative mx-auto lg:mx-0 w-[280px] sm:w-[340px] lg:w-[400px]">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl scale-110" />
                <div className="relative aspect-[3/4] rounded-full overflow-hidden border border-border/50">
                  <Image
                    src="/ru.png"
                    alt="Renat Usmanov — Founder YappiX, AI-first product developer"
                    fill
                    sizes="(max-width: 768px) 280px, 400px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-headline text-foreground mb-6">
                Not just a designer. Not just a developer.
              </h2>
              <div className="space-y-4 text-body-lg text-muted-foreground">
                <p>
                  My path started with music and visual thinking — that shaped a sense of structure and attention to detail. Then I moved into design, grew in UX/UI, launched startups and raised investment.
                </p>
                <p>
                  Vision challenges made me understand accessibility and how people really interact with interfaces. And the rise of AI tools opened the way back into full stack development.
                </p>
                <p>
                  Now all of that — from product thinking and UX to code and AI automation — helps entrepreneurs save resources and build products faster.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {founderStoryCardsEn.map((card) => (
                <div key={card.title} className="p-6 bg-background border border-border rounded-xl">
                  <card.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-headline text-foreground mb-12">My path</h2>
              <div className="relative">
                <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden sm:block" />
                <div className="space-y-8">
                  {founderTimelineEn.map((item, idx) => (
                    <div key={idx} className="flex gap-5 sm:gap-6 group">
                      <div className="relative z-10 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="pt-1">
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Difference */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-headline text-foreground mb-4">I see the product as a whole</h2>
              <p className="text-body-lg text-muted-foreground mb-12 max-w-2xl">
                Most specialists see one layer: design without understanding code, code without understanding UX, AI as a trendy label without a system. My approach is at the intersection of all disciplines.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-background border border-border rounded-xl">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-destructive" />
                    Usual approach
                  </h3>
                  <ul className="space-y-3">
                    {usualApproachEn.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <X className="w-4 h-4 text-destructive/60 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    My approach
                  </h3>
                  <ul className="space-y-3">
                    {myApproachEn.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-first Method */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-headline text-foreground mb-4">How my AI-first approach works</h2>
              <p className="text-body-lg text-muted-foreground mb-12 max-w-2xl">
                AI is not a marketing showcase but a working tool at every stage of product creation.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {founderMethodEn.map((card, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Proof / Metrics */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-headline text-foreground mb-12">
                Experience backed by products and results
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {founderMetricsEn.map((metric, idx) => (
                  <div key={idx} className="p-6 bg-background border border-border rounded-xl text-center">
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-background border border-border rounded-xl">
                <h3 className="font-semibold text-foreground mb-4">Where it was applied</h3>
                <div className="flex flex-wrap gap-2">
                  {founderProjectsEn.map((project) => (
                    <span key={project} className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg">
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-headline text-foreground mb-12">What the entrepreneur gets</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {founderBenefitsEn.map((card, idx) => (
                  <div key={idx} className="p-6 bg-card border border-border rounded-xl">
                    <card.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Audience */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-headline text-foreground mb-12">Who this format works for</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {founderAudienceEn.map((card, idx) => (
                  <div key={idx} className="p-6 bg-background border border-border rounded-xl hover:border-primary/30 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-headline text-foreground mb-12">Frequently asked questions</h2>
              <div className="space-y-4">
                {founderFaqEn.map((item, idx) => (
                  <div key={idx} className="p-6 bg-card border border-border rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary/5 border-t border-primary/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-headline text-foreground mb-4">
                If you need more than a contractor
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Someone who can build the product end-to-end — from idea to production. Let's discuss your task and find the best path to results.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/en/contact">
                    Discuss a project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/en/contact?service=mvp">Request MVP estimate</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterEn />

      {/* Person JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Renat Usmanov",
            alternateName: "Ренат Усманов",
            jobTitle: "Founder & AI-first Product Developer",
            url: "https://yappix.ru/en/founder",
            image: "https://yappix.ru/ru.png",
            worksFor: {
              "@type": "Organization",
              name: "YappiX",
              url: "https://yappix.ru",
            },
            knowsAbout: [
              "AI-first product development",
              "UX/UI Design",
              "Full Stack Development",
              "Startup Building",
              "MVP Development",
              "SaaS Architecture",
            ],
            sameAs: [
              "https://linkedin.com/in/usmanoffcom",
              "https://github.com/usmanoffcom",
            ],
          }),
        }}
      />

      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://yappix.ru/en" },
              { "@type": "ListItem", position: 2, name: "Founder", item: "https://yappix.ru/en/founder" },
            ],
          }),
        }}
      />

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: founderFaqEn.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  )
}
