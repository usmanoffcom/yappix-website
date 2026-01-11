import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getBlogPostBySlug, blogPosts } from "@/lib/blog-data"
import { Calendar, Clock, ArrowLeft, Share2, ArrowRight, Globe, Smartphone, Bot, Server, Search, CreditCard, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

// Маппинг категорий и тегов статей к услугам для перелинковки
// Доступные услуги: razrabotka-sajtov, mobilnye-prilozheniya, ai-chat-boty, saas-paas, seo-prodvizhenie
const relatedServicesMap: Record<string, { slug: string; title: string; icon: any; description: string }[]> = {
  "Разработка": [
    { slug: "razrabotka-sajtov", title: "Разработка сайтов", icon: Globe, description: "Лендинги, корпоративные сайты, e-commerce" },
    { slug: "mobilnye-prilozheniya", title: "Мобильные приложения", icon: Smartphone, description: "iOS, Android, кроссплатформа" },
  ],
  "AI и ML": [
    { slug: "ai-chat-boty", title: "AI-чат-боты", icon: Bot, description: "GPT, RAG, автоматизация поддержки" },
    { slug: "saas-paas", title: "SaaS / PaaS разработка", icon: Server, description: "Облачные платформы и сервисы" },
  ],
  "DevOps": [
    { slug: "saas-paas", title: "SaaS / PaaS разработка", icon: Server, description: "CI/CD, облачная инфраструктура" },
    { slug: "razrabotka-sajtov", title: "Веб-разработка", icon: Globe, description: "Highload, масштабируемые системы" },
  ],
  "SEO": [
    { slug: "seo-prodvizhenie", title: "SEO-продвижение", icon: Search, description: "Яндекс, Google, техническое SEO" },
    { slug: "razrabotka-sajtov", title: "Разработка сайтов", icon: Globe, description: "SEO-ready сайты на Next.js" },
  ],
  "Бизнес": [
    { slug: "razrabotka-sajtov", title: "Разработка сайтов", icon: Globe, description: "Лендинги, корпоративные сайты" },
    { slug: "mobilnye-prilozheniya", title: "Мобильные приложения", icon: Smartphone, description: "MVP за 2-4 недели" },
  ],
  "Новости": [
    { slug: "razrabotka-sajtov", title: "Разработка сайтов", icon: Globe, description: "AI-first подход, 7x-12x быстрее" },
    { slug: "ai-chat-boty", title: "AI-решения", icon: Bot, description: "Чат-боты, автоматизация" },
  ],
}

function getRelatedServices(category: string, tags: string[]) {
  const services = [...(relatedServicesMap[category] || [])]
  
  // Добавляем услуги по тегам
  if (tags.includes("FinTech") || tags.includes("Платежи")) {
    services.push({ slug: "saas-paas", title: "SaaS / PaaS решения", icon: CreditCard, description: "Платёжные системы, финтех" })
  }
  if (tags.includes("MVP") || tags.includes("Стартапы")) {
    services.push({ slug: "mobilnye-prilozheniya", title: "MVP за 7 дней", icon: Rocket, description: "Быстрый запуск продукта" })
  }
  if (tags.includes("SaaS") || tags.includes("Архитектура")) {
    services.push({ slug: "saas-paas", title: "SaaS разработка", icon: Server, description: "Облачные продукты" })
  }
  
  // Убираем дубликаты
  return services.filter((service, index, self) => 
    index === self.findIndex(s => s.slug === service.slug)
  ).slice(0, 3)
}

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return { title: "Статья не найдена" }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.metaDescription,
      images: [post.image],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.image],
    },
    alternates: {
      canonical: `https://yappix.ru/blog/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3)

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Article Header */}
        <article>
          <header className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-transparent">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Все статьи
                </Link>

                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                  {post.category}
                </span>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                  {post.title}
                </h1>

                <p className="text-xl text-muted-foreground mb-8 text-pretty">{post.excerpt}</p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-medium">{post.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{post.author}</p>
                      <p className="text-xs">{post.authorRole}</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.publishedAt).toLocaleDateString("ru-RU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readingTime}
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="container mx-auto px-4 -mt-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-card">
                {post.image?.endsWith(".mp4") ? (
                  <video
                    src={post.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
                )}
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-primary prose-pre:bg-card prose-pre:border prose-pre:border-border">
                <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }} />
              </div>
            </div>
          </div>

          {/* Tags & Share */}
          <div className="pb-12 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Поделиться
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Services - Перелинковка */}
        {(() => {
          const services = getRelatedServices(post.category, post.tags)
          return services.length > 0 ? (
            <section className="py-12 md:py-16 bg-card/50">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">Связанные услуги</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/uslugi/${service.slug}`}
                        className="group flex items-start gap-4 p-4 bg-background border border-border rounded-xl hover:border-primary/50 transition-all"
                      >
                        <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                            {service.title}
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ) : null
        })()}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Похожие статьи</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                    <article className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                      <div className="relative aspect-video bg-muted">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2">{relatedPost.readingTime}</p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Нужна помощь с проектом?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Обсудим вашу задачу и предложим решение. Первая консультация бесплатно.
            </p>
            <Button size="lg" asChild>
              <Link href="/kontakty">Связаться с нами</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />

      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription,
            image: post.image,
            author: {
              "@type": "Organization",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "YappiX",
              logo: {
                "@type": "ImageObject",
                url: "https://yappix.ru/logo.png",
              },
            },
            datePublished: post.publishedAt,
            dateModified: post.updatedAt || post.publishedAt,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://yappix.ru/blog/${slug}`,
            },
          }),
        }}
      />
    </>
  )
}
