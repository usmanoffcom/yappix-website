import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { blogPosts, blogCategories } from "@/lib/blog-data"
import { Calendar, Clock, ArrowRight } from "lucide-react"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all categories
export async function generateStaticParams() {
  return blogCategories
    .filter((cat) => cat.slug !== "")
    .map((category) => ({
      slug: category.slug,
    }))
}

// Generate metadata for each category
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = blogCategories.find((cat) => cat.slug === params.slug)

  if (!category) {
    return {
      title: "Категория не найдена | YappiX",
    }
  }

  const categoryDescriptions: Record<string, string> = {
    novosti: "Последние новости YappiX: обновления, достижения, партнёрства. Следите за развитием IT-студии.",
    razrabotka: "Статьи о веб-разработке, мобильных приложениях, архитектуре и лучших практиках программирования.",
    "ai-ml": "Искусственный интеллект и машинное обучение: AI-агенты, LLM, RAG-системы, автоматизация бизнеса.",
    devops: "DevOps практики: CI/CD, Kubernetes, Docker, облачная инфраструктура, мониторинг и автоматизация.",
    seo: "SEO-оптимизация для Next.js, React, продвижение в Яндекс и Google, Core Web Vitals.",
    biznes: "Бизнес-статьи: стартапы, инвестиции, масштабирование, продуктовая разработка.",
  }

  return {
    title: `${category.name} — Блог YappiX | Статьи и руководства`,
    description: categoryDescriptions[params.slug] || `Статьи в категории "${category.name}" от IT-студии YappiX`,
    keywords: [category.name, "YappiX блог", "IT статьи", "разработка", "технологии"],
    alternates: {
      canonical: `https://yappix.ru/blog/kategoriya/${params.slug}`,
    },
    openGraph: {
      title: `${category.name} — Блог YappiX`,
      description: categoryDescriptions[params.slug] || `Статьи в категории "${category.name}"`,
      type: "website",
      url: `https://yappix.ru/blog/kategoriya/${params.slug}`,
    },
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = blogCategories.find((cat) => cat.slug === params.slug)

  if (!category) {
    notFound()
  }

  // Filter posts by category
  const categoryPosts = blogPosts.filter(
    (post) => post.category.toLowerCase() === category.name.toLowerCase() ||
              post.category === category.name
  )

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            {/* Breadcrumbs */}
            <nav className="text-sm text-muted-foreground mb-6">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Главная
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/blog" className="hover:text-primary transition-colors">
                    Блог
                  </Link>
                </li>
                <li>/</li>
                <li className="text-foreground">{category.name}</li>
              </ol>
            </nav>

            <h1 className="text-display text-foreground mb-4">
              {category.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {getCategoryDescription(params.slug)}
            </p>

            {/* Category Navigation */}
            <div className="flex flex-wrap gap-2 mt-8">
              <Link href="/blog">
                <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  Все статьи
                </Badge>
              </Link>
              {blogCategories
                .filter((cat) => cat.slug !== "")
                .map((cat) => (
                  <Link key={cat.slug} href={`/blog/kategoriya/${cat.slug}`}>
                    <Badge
                      variant={cat.slug === params.slug ? "default" : "outline"}
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                    >
                      {cat.name}
                    </Badge>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {categoryPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <article className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                      <div className="relative aspect-video bg-muted">
                        {post.image.endsWith(".mp4") ? (
                          <video
                            src={post.image}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            muted
                            loop
                            playsInline
                            autoPlay
                          />
                        ) : (
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                      </div>
                      <div className="p-5">
                        <Badge variant="secondary" className="mb-3">
                          {post.category}
                        </Badge>
                        <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(post.publishedAt).toLocaleDateString("ru-RU", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readingTime}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground mb-4">
                  В этой категории пока нет статей
                </p>
                <Link
                  href="/blog"
                  className="text-primary hover:underline inline-flex items-center gap-2"
                >
                  Смотреть все статьи
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Related Categories */}
        <section className="py-12 md:py-16 bg-card border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-6">Другие категории</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {blogCategories
                .filter((cat) => cat.slug !== "" && cat.slug !== params.slug)
                .map((cat) => {
                  const count = blogPosts.filter(
                    (post) => post.category.toLowerCase() === cat.name.toLowerCase() || post.category === cat.name
                  ).length
                  return (
                    <Link
                      key={cat.slug}
                      href={`/blog/kategoriya/${cat.slug}`}
                      className="p-4 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors text-center"
                    >
                      <div className="font-medium text-foreground">{cat.name}</div>
                      <div className="text-sm text-muted-foreground">{count} статей</div>
                    </Link>
                  )
                })}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* JSON-LD for CollectionPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${category.name} — Блог YappiX`,
            description: getCategoryDescription(params.slug),
            url: `https://yappix.ru/blog/kategoriya/${params.slug}`,
            isPartOf: {
              "@type": "Blog",
              name: "Блог YappiX",
              url: "https://yappix.ru/blog",
            },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: categoryPosts.length,
              itemListElement: categoryPosts.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "BlogPosting",
                  headline: post.title,
                  url: `https://yappix.ru/blog/${post.slug}`,
                  datePublished: post.publishedAt,
                  author: {
                    "@type": "Organization",
                    name: "YappiX",
                  },
                },
              })),
            },
          }),
        }}
      />
    </>
  )
}

function getCategoryDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    novosti: "Следите за последними новостями и достижениями YappiX. Обновления продуктов, партнёрства, участие в грантах и венчурных программах.",
    razrabotka: "Практические руководства по веб-разработке, мобильным приложениям, архитектуре систем. Советы от команды YappiX с опытом 250+ проектов.",
    "ai-ml": "Статьи об искусственном интеллекте и машинном обучении. AI-агенты, LLM-интеграции, RAG-системы, автоматизация бизнес-процессов.",
    devops: "DevOps лучшие практики: CI/CD пайплайны, Kubernetes, Docker, облачная инфраструктура AWS и GCP, мониторинг и observability.",
    seo: "SEO-оптимизация для современных веб-приложений. Next.js, React SSR, Core Web Vitals, продвижение в Яндекс и Google.",
    biznes: "Бизнес и стартапы: привлечение инвестиций, масштабирование, продуктовая разработка, опыт резидента Сколково.",
  }
  return descriptions[slug] || "Статьи и руководства от IT-студии YappiX"
}
