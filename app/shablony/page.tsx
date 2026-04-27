import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, ExternalLink } from "lucide-react"
import { listTemplatesRu } from "@/lib/cms/content-repository"

export const metadata: Metadata = {
  title: "Бесплатные шаблоны и UI Kits для дизайнеров | YappiX",
  description:
    "Бесплатные шаблоны и UI kits для Figma, Framer и Next.js. Bankist UI Kit (8K+ скачиваний), Projectorium, Minimal Portfolio. Качественные ресурсы для дизайнеров и разработчиков.",
  keywords: [
    "шаблоны figma",
    "ui kit бесплатно",
    "шаблон портфолио",
    "bankist ui kit",
    "figma community",
    "framer шаблоны",
  ],
  alternates: {
    canonical: "https://yappix.ru/shablony",
  },
  openGraph: {
    title: "Бесплатные шаблоны и UI Kits | YappiX",
    description: "Бесплатные дизайн-ресурсы для сообщества. UI kits, шаблоны портфолио и концепты.",
    type: "website",
    url: "https://yappix.ru/shablony",
    siteName: "YappiX",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "YappiX — Шаблоны",
      },
    ],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Бесплатные шаблоны и UI Kits | YappiX",
    description: "Бесплатные дизайн-ресурсы для сообщества.",
  },
}

export default async function ShablonyPage() {
  const templates = await listTemplatesRu()
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 pb-12 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full text-green-400 font-medium text-sm mb-6">
                <Download className="w-4 h-4" />
                Все шаблоны бесплатны
              </div>
              <h1 className="text-display text-foreground mb-6 text-balance">
                Шаблоны и UI Kits
              </h1>
              <p className="text-body-lg text-pretty">
                Бесплатные дизайн-ресурсы для сообщества: UI kits, шаблоны портфолио и концепты. 
                Все проекты доступны для коммерческого использования.
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
                      {template.image?.endsWith('.mp4') ? (
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
                          alt={template.title || "Шаблон YappiX"}
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
                        <span key={tag} className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button size="lg" asChild>
                        <Link href={`/kejsy/${template.slug}`}>
                          Посмотреть детали
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      {template.productUrl && (
                        <Button size="lg" variant="outline" asChild>
                          <a href={template.productUrl} target="_blank" rel="noopener noreferrer">
                            {template.productLabel ?? "Скачать шаблон"}
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
                            Скачать Figma
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
              Хотите больше шаблонов?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Следите за новыми релизами в Figma Community и на нашем сайте. 
              Скоро выйдут новые UI kits и шаблоны.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="https://yappix.lemonsqueezy.com/checkout" target="_blank" rel="noopener noreferrer">
                  LemonSqueezy Store
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://www.figma.com/@usmanoff" target="_blank" rel="noopener noreferrer">
                  Figma Community
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
