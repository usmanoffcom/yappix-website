import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { allBlogSlugsEn, getBlogPostEn, listBlogPostsEn } from "@/lib/cms/content-repository"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostEn(slug)
  if (!post) return { title: "Post not found" }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      url: `https://yappix.ru/en/blog/${slug}`,
      siteName: "YappiX",
      title: post.title,
      description: post.metaDescription,
      images: [
        {
          url: post.image.startsWith("http") ? post.image : `https://yappix.ru${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title || "YappiX blog post",
        },
      ],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.image.startsWith("http") ? post.image : `https://yappix.ru${post.image}`],
    },
    alternates: {
      canonical: `https://yappix.ru/en/blog/${slug}`,
      ...(post.ruSlug ? { languages: { "ru-RU": `https://yappix.ru/blog/${post.ruSlug}` } } : {}),
    },
  }
}

export async function generateStaticParams() {
  return allBlogSlugsEn()
}

export default async function EnBlogPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = await getBlogPostEn(slug)
  if (!post) notFound()

  const allEn = await listBlogPostsEn()
  const relatedPosts = allEn.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3)

  return (
    <>
      <HeaderEn />
      <main className="pt-20">
        <article>
          <header className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-transparent">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col gap-3 mb-4">
                  <Link
                    href="/en/blog"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-fit"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    All posts
                  </Link>
                  <span className="inline-block w-fit px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {post.category}
                  </span>
                </div>

                <h1 className="text-display text-foreground mb-6 text-balance">
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
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
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
                    title={post.title}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title || "YappiX blog post"}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </div>
            </div>
          </div>

          <div className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto blog-content">
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .replace(/<h1(\s|>)/gi, "<h2$1")
                      .replace(/<\/h1>/gi, "</h2>")
                      .replace(/<table/g, '<div class="blog-table-scroll"><table')
                      .replace(/<\/table>/g, "</table></div>"),
                  }}
                />
              </div>
            </div>
          </div>

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
                  Share
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto rounded-xl border border-border bg-card p-5">
                <h2 className="text-xl font-semibold text-foreground mb-3">Related pages</h2>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/en/services" className="text-primary hover:underline">YappiX services</Link></li>
                  <li><Link href="/en/mvp-i-zapusk-produkta" className="text-primary hover:underline">MVP development services</Link></li>
                  <li><Link href="/en/vnedrenie-ai-i-rag" className="text-primary hover:underline">AI implementation in business</Link></li>
                  <li><Link href="/en/blog" className="text-primary hover:underline">Blog (EN)</Link></li>
                  <li><Link href="/blog" className="text-primary hover:underline">Блог (RU)</Link></li>
                  {post.ruSlug && (
                    <li>
                      <Link href={`/blog/${post.ruSlug}`} className="text-primary hover:underline">
                        Русская версия этой статьи
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-title text-foreground mb-8">Related posts</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/en/blog/${relatedPost.slug}`} className="group">
                    <article className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                      <div className="relative aspect-video bg-muted">
                        {relatedPost.image?.endsWith(".mp4") ? (
                          <video
                            src={relatedPost.image}
                            autoPlay
                            muted
                            loop
                            playsInline
                            title={relatedPost.title}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title || "YappiX blog post"}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
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

        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-headline text-foreground mb-4">Need help with a project?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We can discuss your task and propose a solution. First consultation is free.
            </p>
            <Button size="lg" asChild>
              <Link href="/en/contact">Contact us</Link>
            </Button>
          </div>
        </section>
      </main>
      <FooterEn />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://yappix.ru/en" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://yappix.ru/en/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: `https://yappix.ru/en/blog/${slug}` },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDescription,
            image: post.image.startsWith("http") ? post.image : `https://yappix.ru${post.image}`,
            author: { "@type": "Organization", name: post.author },
            publisher: {
              "@type": "Organization",
              name: "YappiX",
              logo: { "@type": "ImageObject", url: "https://yappix.ru/logo.png" },
            },
            datePublished: post.publishedAt,
            dateModified: post.updatedAt || post.publishedAt,
            mainEntityOfPage: { "@type": "WebPage", "@id": `https://yappix.ru/en/blog/${slug}` },
          }),
        }}
      />
    </>
  )
}
