import type { Metadata } from "next"
import Link from "next/link"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Bot, Cloud, CreditCard, Server, Search, Share2, ArrowRight, Database, LineChart, Palette, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Website, Mobile, MVP, SaaS & AI Services | YappiX",
  description:
    "Websites and e-commerce, mobile apps, MVP and SaaS, AI assistants and process automation — end-to-end delivery.",
  keywords: [
    "custom website development",
    "corporate website development",
    "e-commerce website development",
    "custom mobile app development",
    "MVP development services",
    "SaaS development services",
    "AI implementation in business",
    "AI chatbot development",
    "business process automation",
  ],
  alternates: {
    canonical: "https://yappix.ru/en/services",
  },
  openGraph: {
    title: "Custom Development, MVP, SaaS and AI Services — YappiX",
    description: "Corporate websites, e-commerce, custom mobile apps, MVP and SaaS, AI chatbots, and process automation.",
    type: "website",
    url: "https://yappix.ru/en/services",
    siteName: "YappiX",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "YappiX" }],
  },
}

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Landing pages, corporate sites, and e-commerce on a modern stack (Next.js, Cursor, v0.dev): short iterations, technical SEO, and performance from day one.",
    tags: ["Next.js", "React", "Cursor AI", "v0.dev"],
    price: "from $690",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform iOS and Android apps with AI acceleration. MVP in 3-4 weeks. App Store and Google Play publishing.",
    tags: ["React Native", "Flutter", "Cursor AI", "Expo"],
    price: "from $2,750",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description:
      "Intelligent assistants powered by GPT-4o, Claude 3.5. RAG systems, fine-tuning. Automate 60-80% of support requests.",
    tags: ["GPT-4o", "Claude", "RAG", "LangChain"],
    price: "from $1,100",
  },
  {
    icon: Cloud,
    title: "SaaS / PaaS",
    description:
      "Cloud products with AI-first approach. MVP in 6-8 weeks. Multi-tenancy, Stripe billing, Kubernetes scaling.",
    tags: ["Kubernetes", "Stripe", "GraphQL", "Cursor AI"],
    price: "from $5,500",
  },
  {
    icon: CreditCard,
    title: "FinTech Solutions",
    description:
      "Payment systems, neobanks, crypto wallets. AI fraud detection, KYC automation. PCI DSS compliance.",
    tags: ["PCI DSS", "AI Fraud", "Blockchain", "Open Banking"],
    price: "from $3,300",
  },
  {
    icon: Server,
    title: "DevOps",
    description:
      "CI/CD, Kubernetes, Terraform with AI automation. Predictive monitoring, 40% cloud cost optimization.",
    tags: ["Kubernetes", "Terraform", "Prometheus", "AI Ops"],
    price: "from $690",
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    description:
      "AI-first SEO: automatic keyword research, AI content, competitor analysis. 200%+ organic traffic growth.",
    tags: ["AI SEO", "Ahrefs", "SurferSEO", "SGE"],
    price: "from $550/mo",
  },
  {
    icon: Share2,
    title: "SMM Marketing",
    description:
      "SMM with AI content: idea generation, copywriting, visuals. VK, Telegram, TikTok, YouTube. Targeting and influencer marketing.",
    tags: ["VK Ads", "Telegram", "TikTok", "AI Content"],
    price: "from $440/mo",
  },
  {
    icon: Database,
    title: "Integrations & API",
    description:
      "Integration with 1C, CRM, ERP, marketplaces. REST, GraphQL, gRPC. AI-powered data flow monitoring.",
    tags: ["1C", "Bitrix24", "Kafka", "GraphQL"],
    price: "from $880",
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description:
      "BI dashboards, predictive analytics, ML models. Transform raw data into actionable business insights.",
    tags: ["Python", "Tableau", "ClickHouse", "ML"],
    price: "from $1,100",
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description:
      "UX research, prototyping, design systems, branding. AI generation speeds up the process 5x.",
    tags: ["Figma", "Framer", "v0.dev", "Midjourney"],
    price: "from $550",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Security audits, pentests, AI threat monitoring. Compliance with GDPR, PCI DSS, SOC 2.",
    tags: ["Pentest", "OWASP", "GDPR", "PCI DSS"],
    price: "from $1,100",
  },
]

export default function ServicesEnPage() {
  return (
    <>
      <HeaderEn />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                AI-First Approach
              </div>
              <h1 className="text-display text-foreground mb-6 text-balance">
                Websites, apps, MVP, SaaS & AI
              </h1>
              <p className="text-body-lg mb-8 text-pretty">
                From landing pages to complex products: web and mobile, cloud services, assistants, and workflow automation. We work as a product engineering partner — with metrics, not checkbox requirements alone.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/en/contact">Start a Project</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/en/cases">View Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group p-6 md:p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground mb-4 text-pretty">{service.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm font-medium text-primary">{service.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 border-t border-border bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Proof & delivery standards</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              We publish practical artifacts for enterprise evaluation: quality metrics, security baseline, SLA model, and ROI methodology.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/en/evidence" className="rounded-xl border border-border bg-card p-4 hover:border-primary/40 transition-colors">
                <p className="font-semibold text-foreground">Evidence Hub</p>
                <p className="text-sm text-muted-foreground mt-2">PSI/Lighthouse baseline and methods</p>
              </Link>
              <Link href="/en/security-compliance" className="rounded-xl border border-border bg-card p-4 hover:border-primary/40 transition-colors">
                <p className="font-semibold text-foreground">Security &amp; Compliance</p>
                <p className="text-sm text-muted-foreground mt-2">Security controls and baseline policy</p>
              </Link>
              <Link href="/en/sla-support" className="rounded-xl border border-border bg-card p-4 hover:border-primary/40 transition-colors">
                <p className="font-semibold text-foreground">SLA &amp; Support</p>
                <p className="text-sm text-muted-foreground mt-2">Operational support and escalation map</p>
              </Link>
              <Link href="/en/roi-methodology" className="rounded-xl border border-border bg-card p-4 hover:border-primary/40 transition-colors">
                <p className="font-semibold text-foreground">ROI Methodology</p>
                <p className="text-sm text-muted-foreground mt-2">How we model AI economics</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 border-t border-border bg-card/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Topics and resources</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Shortcuts to core service and article pages in both languages.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-border bg-background p-5">
                <h3 className="font-semibold text-foreground mb-3">In English</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link className="text-primary hover:underline" href="/en/services">Custom website development</Link></li>
                  <li><Link className="text-primary hover:underline" href="/en/services">Corporate website development</Link></li>
                  <li><Link className="text-primary hover:underline" href="/en/services">E-commerce website development</Link></li>
                  <li><Link className="text-primary hover:underline" href="/en/services">Custom mobile app development</Link></li>
                  <li><Link className="text-primary hover:underline" href="/en/mvp-i-zapusk-produkta">MVP development services</Link></li>
                  <li><Link className="text-primary hover:underline" href="/en/usa/razrabotka-saas-i-lichnyh-kabinetov">SaaS development services</Link></li>
                  <li><Link className="text-primary hover:underline" href="/en/vnedrenie-ai-i-rag">AI implementation in business</Link></li>
                  <li><Link className="text-primary hover:underline" href="/en/vnedrenie-ai-i-rag">AI chatbot development</Link></li>
                  <li><Link className="text-primary hover:underline" href="/en/roi-first-automation">Business process automation</Link></li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-background p-5">
                <h3 className="font-semibold text-foreground mb-3">На русском</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link className="text-primary hover:underline" href="/uslugi/razrabotka-sajtov">Разработка сайтов на заказ</Link></li>
                  <li><Link className="text-primary hover:underline" href="/uslugi/razrabotka-sajtov">Корпоративные сайты</Link></li>
                  <li><Link className="text-primary hover:underline" href="/uslugi/razrabotka-sajtov">Интернет-магазины</Link></li>
                  <li><Link className="text-primary hover:underline" href="/uslugi/mobilnye-prilozheniya">Мобильные приложения на заказ</Link></li>
                  <li><Link className="text-primary hover:underline" href="/mvp-i-zapusk-produkta">Разработка MVP</Link></li>
                  <li><Link className="text-primary hover:underline" href="/uslugi/saas-paas">Разработка SaaS</Link></li>
                  <li><Link className="text-primary hover:underline" href="/vnedrenie-ai-i-rag">Внедрение ИИ в бизнес</Link></li>
                  <li><Link className="text-primary hover:underline" href="/uslugi/ai-chat-boty">AI чат-боты</Link></li>
                  <li><Link className="text-primary hover:underline" href="/avtomatizaciya-s-roi">Автоматизация бизнес-процессов</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-headline text-foreground mb-4">Can{"'"}t Find What You Need?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We work with non-standard tasks. Tell us about your project — we{"'"}ll find a solution.
            </p>
            <Button size="lg" asChild>
              <Link href="/en/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <FooterEn />
    </>
  )
}
