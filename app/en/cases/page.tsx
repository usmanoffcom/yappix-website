import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Case Studies & Portfolio — YappiX Projects",
  description:
    "YappiX IT studio portfolio: websites, mobile apps, AI solutions, SaaS platforms. Real results and metrics.",
  alternates: {
    canonical: "https://yappix.ru/en/cases",
  },
  openGraph: {
    title: "Case Studies & Portfolio — YappiX",
    description: "IT studio portfolio: websites, mobile apps, AI solutions. Real results.",
    type: "website",
    url: "https://yappix.ru/en/cases",
    locale: "en_US",
  },
}

const cases = [
  {
    slug: "myunion-platform",
    title: "MyUnion Pro — Trade Union Management Platform",
    client: "MyUnion",
    category: "SaaS",
    description: "Full-featured web application for trade union management with AI-powered chatbots and automated document generation.",
    image: "/images/image.png",
    results: [
      { label: "Team", value: "1 person" },
      { label: "Timeline", value: "3 months" },
      { label: "Users", value: "50K+" },
    ],
    tags: ["Next.js", "GPT-4", "PostgreSQL", "LangChain"],
  },
  {
    slug: "reallaw-ai",
    title: "realLaw AI — Legal Tech SaaS for UAE",
    client: "realLaw",
    category: "SaaS",
    description: "Legal-tech SaaS for UAE businesses and lawyers. Full cycle: research, brand, design system, frontend on Next.js/Framer.",
    image: "/images/usmanoff-cases/1765729581244-00001.avif",
    results: [
      { label: "Year", value: "2025" },
      { label: "Platform", value: "Web" },
      { label: "Stack", value: "Next.js + Framer" },
    ],
    tags: ["Legal Tech", "SaaS", "Next.js", "Framer", "UAE"],
  },
  {
    slug: "jupid-platform",
    title: "Jupid — AI Accountant for LLC Setup",
    client: "Jupid",
    category: "FinTech",
    description: "AI accountant for US founders. Create and manage LLC via chat. Product flows, interface, design system.",
    image: "/images/usmanoff-cases/1765730706302-j1.png",
    results: [
      { label: "Year", value: "2025" },
      { label: "Region", value: "USA" },
      { label: "AI", value: "GPT-4" },
    ],
    tags: ["AI", "FinTech", "SaaS", "Accounting", "Framer"],
  },
  {
    slug: "priboy-hotels",
    title: "Grand Hotels & SPA Priboy — Hotel Chain",
    client: "Priboy Hotel Group",
    category: "Marketing",
    description: "Full-cycle digital services for a premium hotel chain: development, SEO, SMM on the Black Sea coast.",
    image: "/images/priboy.avif",
    results: [
      { label: "Traffic Growth", value: "+180%" },
      { label: "Direct Bookings", value: "+65%" },
      { label: "TOP-3 Yandex", value: "85%" },
    ],
    tags: ["Next.js", "SEO", "SMM", "VK Ads"],
  },
  {
    slug: "bridgeinto-platform",
    title: "BridgeInto — Private Business Platform",
    client: "BridgeInto",
    category: "Enterprise",
    description: "Secure business platform for privacy and data control. Brand, UX/UI, design system, product website.",
    image: "/images/usmanoff-cases/1765731821927-b1.mp4",
    results: [
      { label: "Year", value: "2024" },
      { label: "Blockchain", value: "Yes" },
      { label: "Status", value: "Production" },
    ],
    tags: ["SaaS", "Blockchain", "Security", "File Manager"],
  },
  {
    slug: "global-olive-corporation",
    title: "Global Olive Corporation",
    client: "Global Olive",
    category: "E-commerce",
    description: "E-commerce platform for investing in olive trees with ownership certificates.",
    image: "/images/image copy.png",
    results: [
      { label: "Conversion", value: "+35%" },
      { label: "Trees Sold", value: "500+" },
      { label: "Avg. Order", value: "$180" },
    ],
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
  },
  {
    slug: "my-buyer-crm",
    title: "MY BUYER — CRM for Marketplaces",
    client: "MY BUYER",
    category: "E-commerce",
    description: "CRM for managing products from Chinese and CIS marketplaces. UX/UI for web and mobile apps.",
    image: "/images/usmanoff-cases/1765752539773-m1.png",
    results: [
      { label: "Year", value: "2023" },
      { label: "Platforms", value: "Web + iOS" },
      { label: "Users", value: "5K+" },
    ],
    tags: ["CRM", "E-commerce", "iOS", "Web App"],
  },
  {
    slug: "fintech-marketplace",
    title: "Card2Card — Mobile Payment App MVP",
    client: "NDA",
    category: "FinTech",
    description: "Mobile app for card-to-card transfers worldwide. Automatic fees, simple transfers, nothing extra.",
    image: "/images/05f1e332931093.589da5ec81ead.gif",
    results: [
      { label: "Developers", value: "14" },
      { label: "Gateways", value: "VISA, MC, USDT" },
      { label: "Regions", value: "4" },
    ],
    tags: ["React Native", "Node.js", "VISA API", "Mastercard"],
  },
  {
    slug: "ai-food-assistant",
    title: "Order Assistant — Voice Food Ordering",
    client: "Food Delivery",
    category: "AI",
    description: "Voice AI assistant for hands-free food ordering. Perfect for drivers on the road.",
    image: "/images/checkout_ai_2.mp4",
    results: [
      { label: "Conversion", value: "+40%" },
      { label: "Hands-free", value: "100%" },
      { label: "Order Time", value: "30 sec" },
    ],
    tags: ["GPT-4", "Voice AI", "Speech Recognition", "Stripe"],
  },
  {
    slug: "yappix-cms",
    title: "YappiX CMS — Mobile App Builder",
    client: "YappiX (own product)",
    category: "SaaS",
    description: "No-code builder for native mobile apps with CMS. Supported by Microsoft for Startups.",
    image: "/images/yappix.png",
    results: [
      { label: "Grants", value: "FSI + MS" },
      { label: "Investments", value: "2 rounds" },
      { label: "Resident", value: "Skolkovo" },
    ],
    tags: ["React", "Node.js", "Swift", "Kotlin", "No-code"],
  },
]

const categories = ["All", "FinTech", "AI", "E-commerce", "SaaS", "Marketing", "Enterprise"]

export default function CasesEnPage() {
  return (
    <>
      <HeaderEn />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Our Case Studies
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                250+ projects across industries: from startups to top-100 corporations. Real results with metrics.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border sticky top-16 md:top-20 bg-background/80 backdrop-blur-xl z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {cases.map((caseItem) => (
                <Link key={caseItem.slug} href={`/kejsy/${caseItem.slug}`} className="group">
                  <article className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="relative aspect-video bg-black overflow-hidden">
                      {caseItem.image?.endsWith('.mp4') ? (
                        <video
                          src={caseItem.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <Image
                          src={caseItem.image || "/placeholder.svg"}
                          alt={caseItem.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                        {caseItem.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground mb-2">{caseItem.client}</p>
                      <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {caseItem.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{caseItem.description}</p>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        {caseItem.results.map((result) => (
                          <div key={result.label}>
                            <p className="text-lg font-bold text-primary">{result.value}</p>
                            <p className="text-xs text-muted-foreground">{result.label}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {caseItem.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold text-foreground mb-2">+250%</p>
                <p className="text-muted-foreground">Average Metric Growth</p>
              </div>
              <div>
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold text-foreground mb-2">7x-12x</p>
                <p className="text-muted-foreground">Faster with AI</p>
              </div>
              <div>
                <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold text-foreground mb-2">50M+</p>
                <p className="text-muted-foreground">Product Users</p>
              </div>
              <div>
                <ArrowRight className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold text-foreground mb-2">98%</p>
                <p className="text-muted-foreground">Client Recommendation Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Want Similar Results?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let{"'"}s discuss your project and we{"'"}ll show relevant case studies from your industry.
            </p>
            <Button size="lg" asChild>
              <Link href="/en/contact">Start a Project</Link>
            </Button>
          </div>
        </section>
      </main>
      <FooterEn />
    </>
  )
}
