import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Templates & UI Kits — Free Resources for Designers | YappiX",
  description:
    "Free templates and UI kits for Figma, Framer and Next.js. Bankist UI Kit (8K+ downloads), Projectorium, Minimal Portfolio. Quality resources for designers and developers.",
  keywords: [
    "figma templates",
    "free ui kit",
    "portfolio template",
    "bankist ui kit",
    "figma community",
    "framer templates",
  ],
  alternates: {
    canonical: "https://yappix.ru/en/templates",
  },
  openGraph: {
    title: "Templates & UI Kits — YappiX",
    description: "Free design resources for the community. UI kits, portfolio templates and concepts.",
    type: "website",
    url: "https://yappix.ru/en/templates",
    siteName: "YappiX",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "YappiX — Templates",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Templates & UI Kits — YappiX",
    description: "Free design resources for the community.",
  },
}

const templates = [
  {
    slug: "coinpulse-crypto",
    title: "CoinPulse — Crypto Dashboard: Figma to Next.js in 30 min",
    category: "Next.js Template",
    description: "Production-ready crypto dashboard template. Figma-to-Next.js conversion in 30 minutes using design tokens and proper markup. CoinGecko API, Recharts, Radix UI.",
    image: "/images/coinpulse/cover.png",
    stats: [
      { label: "Figma → Code", value: "30 min" },
      { label: "Components", value: "40+" },
      { label: "API", value: "CoinGecko" },
    ],
    tags: ["Next.js", "Tailwind", "Figma Tokens", "CoinGecko", "Recharts", "Crypto"],
    features: [
      "Figma mockup with design tokens & auto layout",
      "Converted to Next.js + Tailwind in 30 minutes",
      "CoinGecko API for live cryptocurrency data",
      "Recharts charts, Radix UI components",
      "Open source on GitHub",
    ],
    productUrl: "https://github.com/usmanoffcom/coinpulse",
    productLabel: "Get code on GitHub",
    demoUrl: "https://coin.yappix.ru",
    figmaUrl: "/cryptopulse_assets/CoinPules - CryptoMarket.fig",
  },
  {
    slug: "bankist-ui-kit",
    title: "Bankist — Banking App UI Kit",
    category: "UI Kit",
    description: "Free UI Kit for banking mobile applications. 20+ screens, full set of components with states.",
    image: "/images/usmanoff-cases/1765794633140-vviamyylrzvr3japyiye.mp4",
    stats: [
      { label: "Likes", value: "2.5K+" },
      { label: "Downloads", value: "8K+" },
      { label: "Screens", value: "20+" },
    ],
    tags: ["Figma", "UI Kit", "Mobile", "Finance"],
    features: [
      "20+ ready-made screens",
      "All components with states",
      "Responsive design",
      "Free for commercial use",
    ],
  },
  {
    slug: "projectorium-cicd",
    title: "Projectorium — CI/CD Platform Landing",
    category: "Framer Template",
    description: "Modern landing for a DevOps product with 3D visualization in Spline. Fully animated in Framer.",
    image: "/m1fjlIfFhD1Rbz3LZBm0KPjCnIc.png",
    stats: [
      { label: "3D Elements", value: "Spline" },
      { label: "Animations", value: "15+" },
      { label: "Format", value: "Framer" },
    ],
    tags: ["Framer", "3D", "Spline", "DevOps"],
    features: [
      "3D visualization in Spline",
      "Fully animated",
      "Responsive version",
      "Ready to deploy",
    ],
  },
  {
    slug: "minimal-portfolio-template",
    title: "Minimal Portfolio — Developer Template",
    category: "Multi-Format",
    description: "Minimalist portfolio in three formats: Figma for design, Framer for no-code, and Next.js for full control.",
    image: "/images/usmanoff-cases/1765793571452-5LXgMXEyVXeZH3OcVnyj6ZWrGY.png",
    stats: [
      { label: "Downloads", value: "1K+" },
      { label: "Formats", value: "3 versions" },
      { label: "Rating", value: "4.9/5" },
    ],
    tags: ["Next.js", "Framer", "Figma", "Portfolio"],
    features: [
      "3 formats: Figma, Framer, Next.js",
      "Clean, reusable code",
      "SEO-optimized",
      "Open source on GitHub",
    ],
  },
  {
    slug: "yandex-go-scooters",
    title: "Yandex Go — Scooter App Design",
    category: "Figma Concept",
    description: "Scooter rental app design concept for Figma Community. Search flow, QR scanning, navigation, ride screen.",
    image: "/images/usmanoff-cases/1765794832056-CEcpn8RuVyfTk0ujNHo9IeBgI6M.png",
    stats: [
      { label: "Views", value: "15K+" },
      { label: "Duplications", value: "3K+" },
      { label: "Flow", value: "5 screens" },
    ],
    tags: ["Figma", "Mobile", "Transport", "UX"],
    features: [
      "5 key screens",
      "Scooter QR scanning",
      "Active ride screen",
      "Yandex brand style",
    ],
  },
]

export default function TemplatesEnPage() {
  return (
    <>
      <HeaderEn />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full text-green-400 font-medium text-sm mb-6">
                <Download className="w-4 h-4" />
                All templates are free
              </div>
              <h1 className="text-display text-foreground mb-6 text-balance">
                Templates & UI Kits
              </h1>
              <p className="text-body-lg text-pretty">
                Free design resources for the community: UI kits, portfolio templates and concepts.
                All projects are available for commercial use.
              </p>
            </div>
          </div>
        </section>

        {/* Templates Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {templates.map((template, idx) => (
                <article
                  key={template.slug}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-border">
                      {template.image?.endsWith(".mp4") ? (
                        <video
                          src={template.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          title={template.title}
                          className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                      ) : (
                        <Image
                          src={template.image}
                          alt={template.title || "YappiX template"}
                          fill
                          sizes="(max-width: 1024px) 100vw, 574px"
                          className="object-cover object-top"
                        />
                      )}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-green-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                        Free
                      </div>
                    </div>
                  </div>
                  <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="text-sm text-primary font-medium">{template.category}</span>
                    <h2 className="text-headline text-foreground mt-2 mb-4">
                      {template.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">{template.description}</p>

                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-card border border-border rounded-xl">
                      {template.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <p className="text-lg font-bold text-primary">{stat.value}</p>
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    <ul className="space-y-2 mb-6">
                      {template.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {template.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button size="lg" asChild>
                        <Link href={`/en/cases/${template.slug}`}>
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      {template.productUrl && (
                        <Button size="lg" variant="outline" asChild>
                          <a href={template.productUrl} target="_blank" rel="noopener noreferrer">
                            {template.productLabel ?? "Download"}
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      )}
                      {template.demoUrl && (
                        <Button size="lg" variant="outline" asChild>
                          <a href={template.demoUrl} target="_blank" rel="noopener noreferrer">
                            Live Demo
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      )}
                      {template.figmaUrl && (
                        <Button size="lg" variant="outline" asChild>
                          <a href={template.figmaUrl} download>
                            Download Figma
                            <Download className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-headline text-foreground mb-4">
              Want More Templates?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Follow new releases on Figma Community and our site. New UI kits and templates coming soon.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <Link
                  href="https://yappix.lemonsqueezy.com/checkout"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LemonSqueezy Store
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link
                  href="https://www.figma.com/@usmanoff"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Figma Community
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterEn />
    </>
  )
}
