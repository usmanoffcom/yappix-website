import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { blogPostsEn } from "@/lib/blog-data-en"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog — Development, AI & Technology | YappiX",
  description:
    "Articles on web development, mobile apps, AI, DevOps, SEO. Practical guides and cases from YappiX.",
  keywords: [
    "web development blog",
    "AI implementation",
    "MVP development",
    "SaaS development",
    "Next.js",
    "YappiX",
  ],
  alternates: {
    canonical: "https://yappix.ru/en/blog",
    languages: { "ru-RU": "https://yappix.ru/blog" },
  },
  openGraph: {
    title: "Blog — Development, AI & Technology | YappiX",
    description: "Articles on web development, AI, DevOps, SEO. Practical guides and cases.",
    type: "website",
    url: "https://yappix.ru/en/blog",
    siteName: "YappiX",
    locale: "en_US",
    images: [{ url: "/icon-512x512.png", width: 512, height: 512, alt: "YappiX Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — YappiX",
    description: "Articles on development, AI, DevOps, SEO from YappiX.",
  },
}

export default function EnBlogPage() {
  return (
    <>
      <HeaderEn />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-display text-foreground mb-6 text-balance">
                YappiX Blog
              </h1>
              <p className="text-body-lg text-pretty">
                Development experience, technologies and AI. Practical guides and case studies.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-title text-foreground mb-8">All posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPostsEn.map((post) => (
                <Link key={post.slug} href={`/en/blog/${post.slug}`} className="group">
                  <article className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
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
                          alt={post.title || "YappiX blog post"}
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
                          Read <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 border-t border-border bg-card/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Guides by topic</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Curated English guides aligned with our services and pillar pages.
            </p>
            <div className="rounded-xl border border-border bg-background p-5 max-w-2xl">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-primary hover:underline" href="/en/blog/custom-website-development-guide-2026">
                    Custom website development
                  </Link>
                </li>
                <li>
                  <Link className="text-primary hover:underline" href="/en/blog/corporate-website-development-playbook">
                    Corporate website development
                  </Link>
                </li>
                <li>
                  <Link className="text-primary hover:underline" href="/en/blog/ecommerce-development-nextjs-guide">
                    E-commerce website development
                  </Link>
                </li>
                <li>
                  <Link className="text-primary hover:underline" href="/en/blog/custom-mobile-app-development-guide">
                    Custom mobile app development
                  </Link>
                </li>
                <li>
                  <Link className="text-primary hover:underline" href="/en/blog/mvp-development-roadmap">
                    MVP development services
                  </Link>
                </li>
                <li>
                  <Link className="text-primary hover:underline" href="/en/blog/saas-development-for-b2b-guide">
                    SaaS development services
                  </Link>
                </li>
                <li>
                  <Link className="text-primary hover:underline" href="/en/blog/ai-implementation-in-business-guide">
                    AI implementation in business
                  </Link>
                </li>
                <li>
                  <Link className="text-primary hover:underline" href="/en/blog/ai-chatbot-development-for-business">
                    AI chatbot development
                  </Link>
                </li>
                <li>
                  <Link className="text-primary hover:underline" href="/en/blog/business-process-automation-with-ai">
                    Business process automation
                  </Link>
                </li>
              </ul>
              <p className="mt-5 pt-5 border-t border-border text-sm text-muted-foreground">
                <span lang="ru">Полная версия блога на русском — </span>
                <Link href="/blog" className="text-primary hover:underline">
                  yappix.ru/blog
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterEn />
    </>
  )
}
