import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, ExternalLink } from "lucide-react"

const templates = [
  {
    slug: "bankist-ui-kit",
    title: "Bankist UI Kit",
    description: "Бесплатный UI Kit для банковских мобильных приложений",
    image: "/images/usmanoff-cases/1765794633140-vviamyylrzvr3japyiye.mp4",
    stats: [
      { label: "Лайков", value: "2.5K+" },
      { label: "Скачиваний", value: "8K+" },
    ],
    tags: ["Figma", "UI Kit", "Mobile"],
    link: "/shablony",
  },
  {
    slug: "projectorium-cicd",
    title: "Projectorium",
    description: "CI/CD платформа с 3D визуализацией в Spline",
    image: "/images/usmanoff-cases/1765783956944-p1.png",
    stats: [
      { label: "Технологии", value: "Node.js + Python" },
      { label: "3D", value: "Spline" },
    ],
    tags: ["Framer", "3D", "DevOps"],
    link: "/shablony",
  },
  {
    slug: "minimal-portfolio-template",
    title: "Minimal Portfolio",
    description: "Минималистичное портфолио для разработчиков",
    image: "/images/usmanoff-cases/1765793571452-5LXgMXEyVXeZH3OcVnyj6ZWrGY.png",
    stats: [
      { label: "Скачиваний", value: "1K+" },
      { label: "Форматы", value: "3 версии" },
    ],
    tags: ["Next.js", "Framer", "Figma"],
    link: "/shablony",
  },
  {
    slug: "yandex-go-scooters",
    title: "Yandex Go Scooters",
    description: "Концепт приложения для аренды самокатов Yandex Go",
    image: "/images/usmanoff-cases/1765794832056-CEcpn8RuVyfTk0ujNHo9IeBgI6M.png",
    stats: [
      { label: "Просмотров", value: "15K+" },
      { label: "Дубликаций", value: "3K+" },
    ],
    tags: ["Figma", "Mobile", "Transport"],
    link: "/shablony",
  },
]

export function TemplatesSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Шаблоны и UI Kits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Бесплатные дизайн-ресурсы для сообщества: UI kits, шаблоны и концепты
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
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
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <Image
                      src={template.image || "/placeholder.svg"}
                      alt={template.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
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
            <Link href="https://yappix.lemonsqueezy.com/" target="_blank" rel="noopener noreferrer">
              Все шаблоны на LemonSqueezy
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
