import type { Metadata } from "next"
import Link from "next/link"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Bot, Cloud, CreditCard, Server, Search, Share2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "IT Services with AI-First Approach — Development, SEO, DevOps | YappiX",
  description:
    "Full range of AI-accelerated IT services: web development, mobile apps, AI chatbots, SaaS, FinTech, DevOps, SEO, SMM. 7-12x faster delivery.",
  alternates: {
    canonical: "https://yappix.ru/en/services",
  },
  openGraph: {
    title: "IT Services with AI-First Approach — YappiX",
    description: "Full range of AI-accelerated IT services. 7-12x faster delivery.",
    type: "website",
    url: "https://yappix.ru/en/services",
    locale: "en_US",
  },
}

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "AI-first development: landing pages, corporate websites, e-commerce. Cursor AI + v0.dev = 7-12x faster delivery. SEO included.",
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
                IT Services with AI Acceleration
              </h1>
              <p className="text-body-lg mb-8 text-pretty">
                Full-cycle digital product development with an AI-first approach. We use Cursor AI, v0.dev, ChatGPT — delivering 7-12x faster at the same quality. 10+ years of experience, 250+ projects.
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
            <div className="grid md:grid-cols-2 gap-6">
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
