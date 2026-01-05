import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Clock, Users, Calendar, Quote } from "lucide-react"
import { getCaseBySlug, getAllCaseSlugs, casesData } from "@/lib/cases-data"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseBySlug(slug)

  if (!caseStudy) {
    return { title: "Кейс не найден" }
  }

  return {
    title: `${caseStudy.title} — кейс YappiX | ${caseStudy.category}`,
    description: `${caseStudy.description} Результаты: ${caseStudy.results.map((r) => `${r.label}: ${r.value}`).join(", ")}`,
    keywords: [caseStudy.category, ...caseStudy.tags, "кейс", "портфолио", "YappiX"],
    openGraph: {
      title: `${caseStudy.title} — кейс YappiX`,
      description: caseStudy.description,
      images: [caseStudy.image],
      type: "article",
    },
    alternates: {
      canonical: `https://yappix.ru/kejsy/${slug}`,
    },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const caseStudy = getCaseBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  const currentIndex = casesData.findIndex((c) => c.slug === slug)
  const prevCase = currentIndex > 0 ? casesData[currentIndex - 1] : null
  const nextCase = currentIndex < casesData.length - 1 ? casesData[currentIndex + 1] : null

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.description,
    image: caseStudy.image,
    author: {
      "@type": "Organization",
      name: "YappiX",
    },
    publisher: {
      "@type": "Organization",
      name: "YappiX",
      logo: "https://yappix.ru/images/logo.png",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="pt-20 sm:pt-24">
        {/* Back Button */}
        <div className="container mx-auto py-6 sm:py-8">
          <Button variant="ghost" size="sm" asChild className="gap-2 text-muted-foreground hover:text-foreground">
            <Link href="/kejsy">
              <ArrowLeft className="w-4 h-4" />
              Все кейсы
            </Link>
          </Button>
        </div>

        {/* Hero */}
        <section className="pb-12 sm:pb-16 md:pb-20">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-4 sm:mb-6">
                <Badge variant="default">{caseStudy.category}</Badge>
                <span className="text-caption">{caseStudy.client}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight text-balance">
                {caseStudy.title}
              </h1>

              <p className="text-body-lg max-w-3xl mb-6 sm:mb-8">{caseStudy.fullDescription}</p>

              <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{caseStudy.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>{caseStudy.team}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{caseStudy.year}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Image */}
        <section className="pb-12 sm:pb-16 md:pb-20">
          <div className="container mx-auto">
            <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-card border border-border">
              <Image
                src={caseStudy.image || "/placeholder.svg"}
                alt={caseStudy.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="pb-12 sm:pb-16 md:pb-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {caseStudy.results.map((result, index) => (
                <Card key={index} className="bg-card border-border text-center">
                  <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">
                      {result.value}
                    </p>
                    <p className="text-caption">{result.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="pb-12 sm:pb-16 md:pb-20">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-5">Задача</h2>
                <p className="text-body leading-relaxed">{caseStudy.challenge}</p>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-5">Решение</h2>
                <p className="text-body leading-relaxed">{caseStudy.solution}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="pb-12 sm:pb-16 md:pb-20">
          <div className="container mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">Галерея проекта</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {caseStudy.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden bg-card border border-border"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${caseStudy.title} — скриншот ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="pb-12 sm:pb-16 md:pb-20">
          <div className="container mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Технологии</h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {caseStudy.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs sm:text-sm py-1.5 px-3 sm:px-4">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <section className="pb-12 sm:pb-16 md:pb-20">
            <div className="container mx-auto">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-8 sm:pt-10 pb-8 sm:pb-10 px-6 sm:px-8 lg:px-12">
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-4 sm:mb-6" />
                  <blockquote className="text-lg sm:text-xl md:text-2xl text-foreground mb-6 sm:mb-8 leading-relaxed">
                    {caseStudy.testimonial.text}
                  </blockquote>
                  <div>
                    <p className="font-semibold text-foreground">{caseStudy.testimonial.author}</p>
                    <p className="text-caption">{caseStudy.testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="pb-12 sm:pb-16 md:pb-20 border-t border-border pt-8 sm:pt-12">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {prevCase ? (
                <Button variant="outline" size="lg" asChild className="gap-2 justify-start bg-transparent">
                  <Link href={`/kejsy/${prevCase.slug}`}>
                    <ArrowLeft className="w-4 h-4" />
                    <span className="truncate">{prevCase.title}</span>
                  </Link>
                </Button>
              ) : (
                <div />
              )}
              {nextCase && (
                <Button variant="outline" size="lg" asChild className="gap-2 justify-end bg-transparent">
                  <Link href={`/kejsy/${nextCase.slug}`}>
                    <span className="truncate">{nextCase.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding-sm bg-card border-t border-border">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Хотите такой же результат?</h2>
            <p className="text-body mb-6 sm:mb-8 max-w-xl mx-auto">
              Обсудим ваш проект и покажем релевантные кейсы из вашей отрасли.
            </p>
            <Button size="lg" asChild>
              <Link href="/kontakty">
                Обсудить проект
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
