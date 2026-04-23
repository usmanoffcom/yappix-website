import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CareerJobSections } from "@/components/career-job-sections"
import {
  CAREER_SLUGS,
  careerPlainDescription,
  careersBySlug,
  getCareerJob,
} from "@/lib/careers-data"
import { Briefcase, ChevronLeft, Globe, MapPin } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return CAREER_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const job = getCareerJob(slug)
  if (!job) {
    return { title: "Вакансия не найдена | YappiX", robots: { index: false } }
  }
  const c = job.ru
  const canonical = `https://yappix.ru/karera/${job.slug}`
  return {
    title: c.seoTitle,
    description: c.metaDescription,
    keywords: [
      "вакансия",
      "AI",
      "ML",
      "LLM",
      "YappiX",
      job.department.ru,
      ...job.skills.slice(0, 6),
    ],
    alternates: {
      canonical,
      languages: {
        ru: canonical,
        en: `https://yappix.ru/en/career/${job.slug}`,
      },
    },
    openGraph: {
      title: c.seoTitle,
      description: c.metaDescription,
      type: "website",
      url: canonical,
      siteName: "YappiX",
      locale: "ru_RU",
      // alt не дублируем с текстом H1 — иначе часть аудиторов/Вебмастер считает «два H1»
      images: [{ url: "/icon-512x512.png", width: 512, height: 512, alt: "YappiX — вакансия" }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.seoTitle,
      description: c.metaDescription,
      images: ["/icon-512x512.png"],
    },
  }
}

export default async function CareerJobPageRu({ params }: Props) {
  const { slug } = await params
  const job = getCareerJob(slug)
  if (!job) notFound()

  const c = job.ru
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: c.h1,
    description: careerPlainDescription(job, "ru"),
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    hiringOrganization: {
      "@type": "Organization",
      name: "YappiX",
      sameAs: "https://yappix.ru",
      logo: "https://yappix.ru/images/logo.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Москва",
        addressCountry: "RU",
      },
    },
    jobLocationType: "TELECOMMUTE",
    employmentType: "FULL_TIME",
    skills: job.skills.join(", "),
    industry: "Information Technology",
    applicantLocationRequirements: {
      "@type": "Country",
      name: "RU",
    },
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <article className="py-10 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <nav className="mb-8 text-sm text-muted-foreground">
              <Link href="/karera" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
                <ChevronLeft className="w-4 h-4" />
                Все вакансии
              </Link>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">{job.department.ru}</span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0" />
                Сколково / удалённо
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Briefcase className="w-4 h-4 shrink-0" />
                Полная занятость
              </span>
            </div>

            <h1 className="text-display text-foreground mb-6 text-balance">{c.h1}</h1>

            <div className="flex flex-wrap gap-3 mb-10">
              <Button asChild>
                <Link href={`/kontakty?vacancy=${encodeURIComponent(c.h1)}`}>Откликнуться</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={`/en/career/${job.slug}`} className="inline-flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  English version
                </Link>
              </Button>
            </div>

            <CareerJobSections content={c} locale="ru" />
          </div>
        </article>
      </main>
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
