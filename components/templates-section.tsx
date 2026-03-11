import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, ExternalLink } from "lucide-react"

const templatesByLocale = {
  ru: [
    { slug: "bankist-ui-kit", title: "Bankist UI Kit", description: "Бесплатный UI Kit для банковских мобильных приложений", image: "/images/usmanoff-cases/1765794633140-vviamyylrzvr3japyiye.mp4", stats: [{ label: "Лайков", value: "2.5K+" }, { label: "Скачиваний", value: "8K+" }], tags: ["Figma", "UI Kit", "Mobile"], link: "/shablony" },
    { slug: "projectorium-cicd", title: "Projectorium", description: "CI/CD платформа с 3D визуализацией в Spline", image: "/m1fjlIfFhD1Rbz3LZBm0KPjCnIc.png", stats: [{ label: "Технологии", value: "Node.js + Python" }, { label: "3D", value: "Spline" }], tags: ["Framer", "3D", "DevOps"], link: "/shablony" },
    { slug: "minimal-portfolio-template", title: "Minimal Portfolio", description: "Минималистичное портфолио для разработчиков", image: "/images/usmanoff-cases/1765793571452-5LXgMXEyVXeZH3OcVnyj6ZWrGY.png", stats: [{ label: "Скачиваний", value: "1K+" }, { label: "Форматы", value: "3 версии" }], tags: ["Next.js", "Framer", "Figma"], link: "/shablony" },
    { slug: "yandex-go-scooters", title: "Yandex Go Scooters", description: "Концепт приложения для аренды самокатов Yandex Go", image: "/images/usmanoff-cases/1765794832056-CEcpn8RuVyfTk0ujNHo9IeBgI6M.png", stats: [{ label: "Просмотров", value: "15K+" }, { label: "Дубликаций", value: "3K+" }], tags: ["Figma", "Mobile", "Transport"], link: "/shablony" },
  ],
  en: [
    { slug: "bankist-ui-kit", title: "Bankist UI Kit", description: "Free UI kit for banking mobile apps", image: "/images/usmanoff-cases/1765794633140-vviamyylrzvr3japyiye.mp4", stats: [{ label: "Likes", value: "2.5K+" }, { label: "Downloads", value: "8K+" }], tags: ["Figma", "UI Kit", "Mobile"], link: "/en/templates" },
    { slug: "projectorium-cicd", title: "Projectorium", description: "CI/CD platform with 3D visualization in Spline", image: "/m1fjlIfFhD1Rbz3LZBm0KPjCnIc.png", stats: [{ label: "Stack", value: "Node.js + Python" }, { label: "3D", value: "Spline" }], tags: ["Framer", "3D", "DevOps"], link: "/en/templates" },
    { slug: "minimal-portfolio-template", title: "Minimal Portfolio", description: "Minimal portfolio template for developers", image: "/images/usmanoff-cases/1765793571452-5LXgMXEyVXeZH3OcVnyj6ZWrGY.png", stats: [{ label: "Downloads", value: "1K+" }, { label: "Formats", value: "3 versions" }], tags: ["Next.js", "Framer", "Figma"], link: "/en/templates" },
    { slug: "yandex-go-scooters", title: "Yandex Go Scooters", description: "Scooter rental app concept for Yandex Go", image: "/images/usmanoff-cases/1765794832056-CEcpn8RuVyfTk0ujNHo9IeBgI6M.png", stats: [{ label: "Views", value: "15K+" }, { label: "Duplicates", value: "3K+" }], tags: ["Figma", "Mobile", "Transport"], link: "/en/templates" },
  ],
}

const templatesHeadByLocale = {
  ru: { headline: "Шаблоны и UI Kits", body: "Бесплатные дизайн-ресурсы для сообщества: UI kits, шаблоны и концепты", cta: "Все шаблоны на LemonSqueezy" },
  en: { headline: "Templates & UI Kits", body: "Free design resources for the community: UI kits, templates and concepts", cta: "All templates on LemonSqueezy" },
}

export function TemplatesSection({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const templates = templatesByLocale[locale]
  const head = templatesHeadByLocale[locale]
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{head.headline}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {head.body}
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 min-[1280px]:grid-cols-3 gap-8">
          {templates.map((template) => (
            <Link key={template.slug} href={template.link} className="group">
              <article className="h-full bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                <div className="relative aspect-video bg-black overflow-hidden">
                  {template.image?.endsWith('.mp4') ? (
                    <video
                      src={template.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <Image
                      src={template.image || "/placeholder.svg"}
                      alt={template.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full">
                    Free
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    {template.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-sm font-bold text-primary">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {template.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
            <Link href="https://yappix.lemonsqueezy.com/checkout" target="_blank" rel="noopener noreferrer">
              {head.cta}
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
