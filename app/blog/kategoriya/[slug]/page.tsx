import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { blogCategories } from "@/lib/blog-data"
import { listBlogPostsRu } from "@/lib/cms/content-repository"
import { Calendar, Clock, ArrowRight } from "lucide-react"

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

/** Уникальные meta + текст раздела по slug категории (посты хранят category как slug, не как name). */
const CATEGORY_SEO: Record<
  string,
  {
    metaDescription: string
    intro: string
  }
> = {
  "mvp-zapusk": {
    metaDescription:
      "MVP, запуск продукта и time-to-market: гипотезы, scope, метрики успеха, типичные ошибки фаундеров и как выйти на рынок без лишней разработки. Гайды и разборы от команды YappiX (AI-first delivery, ОАЭ, Европа, США).",
    intro:
      "Материалы про MVP и запуск: от проверки идеи до первых пользователей — без бесконечной пересборки и «идеального» релиза в вакууме.",
  },
  "ai-avtomatizaciya": {
    metaDescription:
      "AI, RAG и автоматизация для бизнеса: внедрение ассистентов, поиск по базе знаний, качество ответов, ROI и безопасность контуров. Практические статьи YappiX по LLM, процессам и интеграциям с CRM/ERP.",
    intro:
      "Статьи про внедрение AI и автоматизацию процессов: когда технология окупается, как считать эффект и что важно для безопасного production.",
  },
  "cto-delivery": {
    metaDescription:
      "CTO, delivery и управление разработкой: подрядчики vs продуктовая команда, архитектура, срывы сроков, перезапуск продукта и зрелость процессов. Опыт YappiX в запуске и сопровождении digital-продуктов.",
    intro:
      "Разборы про CTO as a Service, delivery и ответственность за продукт: как не потерять бюджет и сроки на пути к релизу.",
  },
  "stoimost-ekonomika": {
    metaDescription:
      "Стоимость разработки, бюджеты SaaS и экономика AI: из чего складывается цена, как оценить сроки, как считать ROI автоматизации и когда «дешево» обходится дороже. Практические заметки YappiX для фаундеров и заказчиков.",
    intro:
      "Материалы про деньги и сроки: прозрачная модель оценки, типовые статьи расходов и как связать инвестиции в разработку с метриками бизнеса.",
  },
  "oae-biznes-za-rubezhom": {
    metaDescription:
      "ОАЭ, Европа и международный бизнес: запуск MVP, digital-команда для фаундеров за рубежом, нюансы коммуникации и выбора IT-партнёра. Статьи YappiX для компаний в Дубае, ЕС и смежных рынках.",
    intro:
      "Заметки про запуск и сопровождение продуктов, когда команда и клиенты в разных юрисдикциях — и нужен предсказуемый digital-контур.",
  },
  "kejsy-metodologiya": {
    metaDescription:
      "Кейсы, методология и доказательства результата: как читать портфолио, какие артефакты важны на этапах, impact и метрики переработки продукта. Материалы YappiX про честные кейсы и измеримый delivery.",
    intro:
      "Про то, как мы оцениваем проекты, что считаем сильным кейсом и как связываем методологию с реальными цифрами для заказчика.",
  },
  novosti: {
    metaDescription:
      "Новости YappiX: обновления студии, продукты, партнёрства и участие в программах для стартапов. Короткие заметки о том, что происходит в команде и вокруг проектов.",
    intro: "Следите за последними новостями и достижениями YappiX — от обновлений продуктов до партнёрств и грантовых программ.",
  },
  razrabotka: {
    metaDescription:
      "Веб и мобильная разработка, архитектура и инженерные практики: Next.js, React, производительность, безопасность и типовые решения для продуктовых команд. Статьи блога YappiX с упором на практику.",
    intro:
      "Практические руководства по разработке сайтов и приложений, архитектуре систем и инженерным решениям — от команды с сотнями запущенных проектов.",
  },
  "ai-ml": {
    metaDescription:
      "ИИ и ML в продакшене: LLM, RAG, оценка качества ответов, RBAC, логирование и SLO для AI-сервисов. Технические и продуктовые статьи YappiX для команд, которые внедряют модели в реальный бизнес.",
    intro:
      "Статьи об искусственном интеллекте и машинном обучении: от архитектуры RAG до контроля качества и безопасности AI-контуров.",
  },
  biznes: {
    metaDescription:
      "Бизнес, стартапы и продукт: стратегия запуска, юнит-экономика, работа с инвесторами и масштабирование digital-продуктов. Материалы блога YappiX для фаундеров и руководителей.",
    intro: "Бизнес-статьи: стартапы, инвестиции, масштабирование и продуктовая разработка в реальных условиях рынка.",
  },
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
  const { slug } = await params
  const category = blogCategories.find((cat) => cat.slug === slug)

  if (!category) {
    return {
      title: "Категория не найдена | YappiX",
    }
  }

  const seo = CATEGORY_SEO[slug]
  const description =
    seo?.metaDescription ??
    `Статьи и разборы в категории «${category.name}» в блоге YappiX: практические рекомендации по разработке продуктов, AI и запуску для бизнеса в ОАЭ, Европе и США.`

  return {
    title: `${category.name} — блог YappiX: статьи и руководства`,
    description,
    keywords: [category.name, "YappiX блог", "IT статьи", "разработка продуктов", "AI"],
    alternates: {
      canonical: `https://yappix.ru/blog/kategoriya/${slug}`,
    },
    openGraph: {
      title: `${category.name} — блог YappiX`,
      description,
      type: "website",
      url: `https://yappix.ru/blog/kategoriya/${slug}`,
      siteName: "YappiX",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "YappiX" }],
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = blogCategories.find((cat) => cat.slug === slug)

  if (!category) {
    notFound()
  }

  const blogPosts = await listBlogPostsRu()

  // Посты хранят category как slug (например mvp-zapusk), а не как отображаемое имя
  const categoryPosts = blogPosts.filter(
    (post) => post.category === category.slug || post.category === category.name,
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
              {getCategoryIntro(slug)}
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
                      variant={cat.slug === slug ? "default" : "outline"}
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
                            title={post.title}
                            autoPlay
                          />
                        ) : (
                          <Image
                            src={post.image}
                            alt={post.title || "Статья блога YappiX"}
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
                .filter((cat) => cat.slug !== "" && cat.slug !== slug)
                .map((cat) => {
                  const count = blogPosts.filter(
                    (post) => post.category === cat.slug || post.category === cat.name,
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
            description: getCategoryIntro(slug),
            url: `https://yappix.ru/blog/kategoriya/${slug}`,
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

function getCategoryIntro(slug: string): string {
  const seo = CATEGORY_SEO[slug]
  if (seo) return seo.intro
  return "Статьи и руководства от команды YappiX — AI-first product engineering для бизнеса в ОАЭ, Европе и США."
}
