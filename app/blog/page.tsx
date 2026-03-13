import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { blogPosts, blogCategories } from "@/lib/blog-data"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Блог о разработке, AI и технологиях | YappiX",
  description:
    "Статьи о веб-разработке, мобильных приложениях, AI, DevOps, SEO. Практические руководства и кейсы от команды YappiX.",
  keywords: [
    "блог о разработке",
    "статьи о программировании",
    "AI разработка",
    "SEO руководства",
    "веб-разработка статьи",
  ],
  alternates: {
    canonical: "https://yappix.ru/blog",
  },
  openGraph: {
    title: "Блог о разработке, AI и технологиях — YappiX",
    description: "Статьи о веб-разработке, AI, DevOps, SEO. Практические руководства и кейсы.",
    type: "website",
    url: "https://yappix.ru/blog",
    siteName: "YappiX",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "YappiX — Блог",
      },
    ],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Блог о разработке, AI и технологиях — YappiX",
    description: "Статьи о веб-разработке, AI, DevOps, SEO от команды YappiX.",
  },
}

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-display text-foreground mb-6 text-balance">
                Блог YappiX
              </h1>
              <p className="text-body-lg text-pretty">
                Делимся опытом разработки, рассказываем о технологиях и AI. Практические руководства и реальные кейсы.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={category.slug ? `/blog/kategoriya/${category.slug}` : "/blog"}
                  className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <article className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-card">
                  {featuredPost.image?.endsWith(".mp4") ? (
                    <video
                      src={featuredPost.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      title={featuredPost.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title || "Статья блога YappiX"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors text-balance">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 text-pretty">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString("ru-RU", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readingTime}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* Other Posts */}
        <section className="py-12 md:py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-title text-foreground mb-8">Все статьи</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <article className="h-full bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="relative aspect-video bg-muted">
                      {post.image?.endsWith(".mp4") ? (
                        <video
                          src={post.image}
                          autoPlay
                          muted
                          loop
                          playsInline
                          title={post.title}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title || "Статья блога YappiX"}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{post.readingTime}</span>
                        <span className="flex items-center gap-1 group-hover:text-primary transition-colors">
                          Читать <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-headline text-foreground mb-4">Подпишитесь на рассылку</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Новые статьи, кейсы и новости из мира разработки — раз в неделю. Без спама.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Подписаться
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
