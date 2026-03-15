import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Clock, Users, Calendar, Quote, ExternalLink } from "lucide-react"
import { getCaseBySlugEn, getAllCaseSlugsEn, casesDataEn } from "@/lib/cases-data-en"
import { GalleryWithLightbox } from "@/components/gallery-lightbox"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllCaseSlugsEn().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseBySlugEn(slug)

  if (!caseStudy) {
    return {
      title: "Case not found | YappiX",
      description: "The requested case study was not found. Explore other YappiX projects.",
      robots: {
        index: false,
        follow: true,
      },
      openGraph: {
        title: "Case not found | YappiX",
        description: "The requested case study was not found. Explore other YappiX projects.",
        type: "website",
        url: `https://yappix.ru/en/cases/${slug}`,
        siteName: "YappiX",
        locale: "en_US",
        images: [
          {
            url: "/og.png",
            width: 1200,
            height: 630,
            alt: "YappiX",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Case not found | YappiX",
        description: "The requested case study was not found. Explore other YappiX projects.",
        images: ["/og.png"],
      },
      alternates: {
        canonical: `https://yappix.ru/en/cases/${slug}`,
      },
    }
  }

  const canonicalUrl = `https://yappix.ru/en/cases/${slug}`
  const ogImageUrl = caseStudy.image.startsWith("http") ? caseStudy.image : `https://yappix.ru${caseStudy.image}`

  return {
    title: `YappiX Case: ${caseStudy.title} | ${caseStudy.category}`,
    description: `${caseStudy.description} Results: ${caseStudy.results.map((r) => `${r.label}: ${r.value}`).join(", ")}`,
    keywords: [caseStudy.category, ...caseStudy.tags, "case study", "portfolio", "YappiX"],
    openGraph: {
      title: `${caseStudy.title} — YappiX case`,
      description: caseStudy.description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
      type: "article",
      url: canonicalUrl,
      siteName: "YappiX",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.title} — YappiX case`,
      description: caseStudy.description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: "index, follow",
  }
}

export default async function CaseStudyEnPage({ params }: Props) {
  const { slug } = await params
  const caseStudy = getCaseBySlugEn(slug)

  if (!caseStudy) {
    notFound()
  }

  const currentIndex = casesDataEn.findIndex((c) => c.slug === slug)
  const prevCase = currentIndex > 0 ? casesDataEn[currentIndex - 1] : null
  const nextCase = currentIndex < casesDataEn.length - 1 ? casesDataEn[currentIndex + 1] : null
  const mediaAfterHero = (caseStudy.videos ?? []).filter((media) => media !== caseStudy.image)
  const isJupidCase = caseStudy.slug === "jupid-platform"
  const mediaRow = isJupidCase ? mediaAfterHero.slice(0, 2) : []
  const mediaRest = isJupidCase ? mediaAfterHero.slice(2) : mediaAfterHero

  return (
    <>
      <HeaderEn />
      <main className="pt-20 sm:pt-24">
        <article aria-labelledby="case-title">
          <div className="container mx-auto py-6 sm:py-8">
            <Button variant="ghost" size="sm" asChild className="gap-2 text-muted-foreground hover:text-foreground">
              <Link href={caseStudy.isTemplate ? "/en/templates" : "/en/cases"}>
                <ArrowLeft className="w-4 h-4" />
                {caseStudy.isTemplate ? "All templates" : "All cases"}
              </Link>
            </Button>
          </div>

          <section className="pb-12 sm:pb-16 md:pb-20">
            <div className="container mx-auto">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4 sm:mb-6">
                  <Badge variant="default">{caseStudy.category}</Badge>
                  <span className="text-caption">{caseStudy.client}</span>
                </div>

                <h1 id="case-title" className="text-display text-foreground mb-4 sm:mb-6 text-balance">
                  {caseStudy.title}
                </h1>

              <p className="text-body-lg mb-6 sm:mb-8 max-w-4xl">{caseStudy.fullDescription}</p>

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
              {caseStudy.projectUrl && (
                <Button size="lg" className="mt-6 gap-2" asChild>
                  <a href={caseStudy.projectUrl} target="_blank" rel="nofollow noopener noreferrer">
                    View project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </section>

        <section className="pb-12 sm:pb-16 md:pb-20">
          <div className="container mx-auto space-y-6">
            <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden bg-card border border-border">
              {caseStudy.image?.endsWith(".mp4") ? (
                <video
                  src={caseStudy.image}
                  autoPlay
                  loop
                  playsInline
                  controls
                  title={caseStudy.title}
                  className="w-full h-auto"
                />
              ) : (
                <Image
                  src={caseStudy.image || "/placeholder.svg"}
                  alt={caseStudy.title || "YappiX case study"}
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority
                />
              )}
            </div>

            {mediaRow.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                {mediaRow.map((media, index) => (
                  <div key={`row-${index}`} className="w-full rounded-xl sm:rounded-2xl overflow-hidden bg-card border border-border">
                    {media.endsWith(".mp4") ? (
                      <video
                        src={media}
                        autoPlay={index === 0}
                        loop
                        playsInline
                        controls
                        title={`${caseStudy.title} — video ${index + 1}`}
                        className="w-full h-auto"
                      />
                    ) : (
                      <Image
                        src={media}
                        alt={`${caseStudy.title} — product preview ${index + 1}`}
                        width={1920}
                        height={1080}
                        className="w-full h-auto"
                        sizes="(max-width: 1280px) 100vw, 1280px"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            {mediaRest.map((media, index) => (
              <div key={index} className="w-full rounded-xl sm:rounded-2xl overflow-hidden bg-card border border-border">
                {media.endsWith(".mp4") ? (
                  <video
                    src={media}
                    autoPlay={mediaRow.length === 0 && index === 0}
                    loop
                    playsInline
                    controls
                    title={`${caseStudy.title} — video ${index + mediaRow.length + 1}`}
                    className="w-full h-auto"
                  />
                ) : (
                  <Image
                    src={media}
                    alt={`${caseStudy.title} — product preview ${index + mediaRow.length + 1}`}
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                )}
              </div>
            ))}
          </div>
        </section>

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

        <section className="pb-12 sm:pb-16 md:pb-20">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-5">Challenge</h2>
                <p className="text-body leading-relaxed">{caseStudy.challenge}</p>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-5">Solution</h2>
                <p className="text-body leading-relaxed">{caseStudy.solution}</p>
              </div>
            </div>
          </div>
        </section>

        {caseStudy.gallery.length > 0 && (
          <section className="pb-12 sm:pb-16 md:pb-20">
            <div className="container mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">Project gallery</h2>
              <GalleryWithLightbox images={caseStudy.gallery} title={caseStudy.title} locale="en" />
            </div>
          </section>
        )}

        <section className="pb-12 sm:pb-16 md:pb-20">
          <div className="container mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Technologies</h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {caseStudy.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs sm:text-sm py-1.5 px-3 sm:px-4">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </section>

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

        <section className="pb-12 sm:pb-16 md:pb-20 border-t border-border pt-8 sm:pt-12">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {prevCase ? (
                <Button variant="outline" size="lg" asChild className="gap-2 justify-start bg-transparent">
                  <Link href={`/en/cases/${prevCase.slug}`}>
                    <ArrowLeft className="w-4 h-4" />
                    <span className="truncate">{prevCase.title}</span>
                  </Link>
                </Button>
              ) : (
                <div />
              )}
              {nextCase && (
                <Button variant="outline" size="lg" asChild className="gap-2 justify-end bg-transparent">
                  <Link href={`/en/cases/${nextCase.slug}`}>
                    <span className="truncate">{nextCase.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </section>

          <section className="section-padding-sm bg-card border-t border-border">
            <div className="container mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Want similar results?</h2>
              <p className="text-body mb-6 sm:mb-8 max-w-xl mx-auto">
                Let&apos;s discuss your project and we&apos;ll show relevant case studies from your industry.
              </p>
              <Button size="lg" asChild>
                <Link href="/en/contact">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </section>
        </article>
      </main>
      <FooterEn />
    </>
  )
}
