import Link from "next/link"
import Image from "next/image"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Store, Globe, Code, Bot, Cloud, Landmark, Server, Search, Share2, CheckCircle2 } from "lucide-react"

const stats = [
  { value: "260+", label: "Projects" },
  { value: "7x-12x", label: "Faster with AI" },
  { value: "$2.1M+", label: "Investments" },
  { value: "5", label: "Countries" },
]

const services = [
  { icon: Globe, title: "Web Development", desc: "Corporate sites, e-commerce, web apps and portals of any complexity", tags: ["Next.js", "React", "Vue", "Node.js"] },
  { icon: Code, title: "Mobile Apps", desc: "Native and cross-platform applications for iOS and Android", tags: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { icon: Bot, title: "AI & Chatbots", desc: "Intelligent assistants, RAG systems, GPT and LLM integration", tags: ["ChatGPT", "Claude", "LangChain", "RAG"] },
  { icon: Cloud, title: "SaaS / PaaS", desc: "Cloud platforms and services with subscription monetization", tags: ["Multi-tenant", "Billing", "Analytics"] },
  { icon: Landmark, title: "FinTech", desc: "Payment systems, banking, trading platforms, crypto solutions", tags: ["PCI DSS", "KYC/AML", "Blockchain"] },
  { icon: Server, title: "DevOps", desc: "CI/CD pipelines, containerization, cloud infrastructure, monitoring", tags: ["Docker", "Kubernetes", "AWS", "Terraform"] },
  { icon: Search, title: "SEO & Marketing", desc: "Technical optimization, content marketing, Yandex & Google promotion", tags: ["Yandex", "Google", "Content"] },
  { icon: Share2, title: "SMM Marketing", desc: "Social media promotion strategy, targeted advertising", tags: ["VK", "Telegram", "Targeting"] },
]

const cases = [
  {
    title: "realLaw AI — Legal Tech SaaS for UAE",
    category: "SaaS / Legal Tech",
    desc: "Legal-tech SaaS for UAE businesses and lawyers. Full cycle: research, brand, design system, frontend on Next.js/Framer.",
    image: "/images/usmanoff-cases/1765729581244-00001.avif",
    results: ["2025", "UAE", "GPT-4"],
    tags: ["Legal Tech", "SaaS", "Next.js", "Framer"],
    href: "/en/cases",
  },
  {
    title: "MyUnion Pro — AI Trade Union Platform",
    category: "SaaS / AI",
    desc: "Full-stack web application for trade union management with AI-powered chatbots, automated document generation.",
    image: "/images/image.png",
    results: ["50K+ users", "80% AI automation", "-90% processing"],
    tags: ["Next.js", "GPT-4", "PostgreSQL", "LangChain"],
    href: "/en/cases",
  },
  {
    title: "Card2Card — Mobile Payment App MVP",
    category: "FinTech / Mobile",
    desc: "Mobile app for card-to-card transfers worldwide. Automatic fees, simple transfers, nothing extra.",
    image: "/images/05f1e332931093.589da5ec81ead.gif",
    results: ["14 developers", "VISA, MC, USDT", "4 regions"],
    tags: ["React Native", "Node.js", "VISA API"],
    href: "/en/cases",
  },
  {
    title: "Grand Hotels & SPA Priboy",
    category: "Hospitality / Marketing",
    desc: "Full-cycle digital services for a premium hotel chain: development, SEO, SMM on the Black Sea coast.",
    image: "/images/priboy.avif",
    results: ["+180% traffic", "+65% direct bookings", "TOP-3 Yandex"],
    tags: ["Next.js", "SEO", "SMM", "VK Ads"],
    href: "/en/cases",
  },
]

const pricing = [
  {
    name: "MVP Sprint",
    price: "from $690",
    period: "1-2 weeks",
    features: ["Prototype + Design", "Core functionality", "Responsive layout", "1 revision round", "Server deployment", "Trial week"],
    popular: false,
  },
  {
    name: "Product",
    price: "from $2,750",
    period: "4-8 weeks",
    features: ["Everything from MVP", "Extended functionality", "API integrations", "Admin panel", "Analytics & metrics", "3 revision rounds", "Documentation", "1 month support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "from 3 months",
    features: ["Everything from Product", "Microservices architecture", "High load", "Custom integrations", "AI & ML solutions", "DevOps & infrastructure", "SLA 99.9%", "Dedicated team"],
    popular: false,
  },
]

export default function HomeEnPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeaderEn />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Skolkovo Residents</Badge>
              <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">MVP in 7 Days</Badge>
              <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">Money-Back Guarantee</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight text-balance leading-[1.1]">
              We Build Complex Products Faster with AI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl text-pretty">
              Websites, mobile apps, AI solutions, SaaS and FinTech products.
              We use AI agents and deep coding for 7x-12x development acceleration.
              Offices in USA, Russia, Turkey, Serbia and Kazakhstan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/en/contact">
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                <Link href="/en/cases">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Full-Cycle Digital Development</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            From idea to scaling — we deliver projects of any complexity using modern technologies and AI tools
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                <service.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects We{"'"}re Proud Of</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Our clients raise investment rounds and scale businesses thanks to the technology solutions we build
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((caseItem) => (
              <Link key={caseItem.title} href={caseItem.href} className="group">
                <article className="h-full bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                  <div className="relative aspect-video bg-black overflow-hidden">
                    {caseItem.image?.endsWith('.mp4') ? (
                      <video src={caseItem.image} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <Image src={caseItem.image || "/placeholder.svg"} alt={caseItem.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    )}
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">{caseItem.category}</Badge>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{caseItem.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{caseItem.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {caseItem.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
              <Link href="/en/cases">
                All Case Studies
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Templates & UI Kits</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Free design resources for the community: UI kits, portfolio templates and Figma concepts
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/en/templates" className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Store className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Free</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Bankist UI Kit</h3>
              <p className="text-sm text-muted-foreground">Banking app UI Kit for Figma · 8K+ downloads</p>
            </Link>
            <Link href="/en/templates" className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Store className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Free</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Projectorium</h3>
              <p className="text-sm text-muted-foreground">CI/CD landing with 3D Spline · Framer</p>
            </Link>
            <Link href="/en/templates" className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Store className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Free</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Minimal Portfolio</h3>
              <p className="text-sm text-muted-foreground">Figma, Framer & Next.js · 1K+ downloads</p>
            </Link>
            <Link href="/en/templates" className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Store className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Free</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Yandex Go</h3>
              <p className="text-sm text-muted-foreground">Scooter app concept for Figma Community</p>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
              <Link href="/en/templates">
                All Templates
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Trial week with money-back guarantee. All payment methods: Russian cards, international cards, crypto.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan) => (
              <div key={plan.name} className={`p-8 rounded-xl border ${plan.popular ? "border-primary bg-primary/5" : "border-border bg-card"}`}>
                {plan.popular && <Badge className="mb-4">Popular</Badge>}
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-foreground mb-1">{plan.price}</p>
                <p className="text-sm text-muted-foreground mb-6">{plan.period}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                  <Link href="/en/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let{"'"}s Discuss Your Project</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Tell us about your idea — we{"'"}ll suggest the optimal solution and create an implementation plan for free
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/en/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
              <a href="https://t.me/yappix" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </Button>
          </div>
        </div>
      </section>

      <FooterEn />
    </main>
  )
}
