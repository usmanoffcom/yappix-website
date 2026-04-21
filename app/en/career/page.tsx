import type { Metadata } from "next"
import Link from "next/link"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { Button } from "@/components/ui/button"
import { MapPin, Briefcase, Clock, Users, Zap, Heart, Globe, GraduationCap, Calendar } from "lucide-react"
import { careerPlainDescription, careersListOrdered } from "@/lib/careers-data"

export const metadata: Metadata = {
  title: "Careers at YappiX — AI Research, ML Systems, Data & Evaluation",
  description:
    "YappiX is hiring a Senior AI Research Engineer / Research ML Architect, ML Systems / Infrastructure Engineer (AI/LLM), and AI Data & Evaluation Engineer — new AI architectures, LLM, GPU infra, datasets & evaluation. Remote / Skolkovo.",
  keywords: [
    "AI jobs",
    "ML engineer",
    "LLM",
    "PyTorch",
    "YappiX",
    "remote",
    "Skolkovo",
  ],
  alternates: {
    canonical: "https://yappix.ru/en/career",
    languages: {
      en: "https://yappix.ru/en/career",
      ru: "https://yappix.ru/karera",
    },
  },
  openGraph: {
    title: "Careers at YappiX — AI Research, ML Systems, Data & Evaluation",
    description: "Three tracks: AI Research, ML Infrastructure, AI Data & Evaluation. Remote / Skolkovo.",
    type: "website",
    url: "https://yappix.ru/en/career",
    siteName: "YappiX",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "YappiX — Careers",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at YappiX — AI Research, ML Systems, Data & Evaluation",
    description: "AI-first R&D: architectures, LLM infra, datasets & evaluation.",
  },
}

const benefits = [
  {
    icon: Globe,
    title: "Remote or location",
    description: "Work from wherever suits you: home, coworking, or locations in 6 countries",
  },
  {
    icon: Zap,
    title: "AI tools",
    description: "Cursor, v0, ChatGPT — we work with cutting-edge technologies",
  },
  {
    icon: GraduationCap,
    title: "Learning",
    description: "Budget for conferences, courses, books. Internal meetups and knowledge sharing",
  },
  {
    icon: Heart,
    title: "Health insurance",
    description: "Extended medical insurance for you and your family",
  },
  {
    icon: Clock,
    title: "Flexible schedule",
    description: "Async work, no mandatory 9am standups",
  },
  {
    icon: Users,
    title: "Strong team",
    description: "Work with experts from top companies",
  },
]

export default function CareerPageEn() {
  const vacancies = careersListOrdered

  return (
    <>
      <HeaderEn />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-display text-foreground mb-6 text-balance">
                Join the YappiX team
              </h1>
              <p className="text-body-lg mb-8 text-pretty">
                We build AI-first products and R&D: new AI architectures, LLMs, infrastructure, and rigorous evaluation.
                We’re looking for engineers who turn hypotheses into working systems.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a href="#vacancies">View open positions</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/karera">Вакансии на русском</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-headline text-foreground mb-4">Why YappiX</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              We create conditions where talented people do the best work of their lives.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="p-6 bg-card border border-border rounded-xl">
                  <benefit.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vacancies */}
        <section id="vacancies" className="py-16 md:py-24 bg-card scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-headline text-foreground mb-4">Open positions</h2>
            <p className="text-lg text-muted-foreground mb-12">
              {vacancies.length} roles in AI / R&D. Full SEO-friendly descriptions on dedicated pages. Don’t see a fit?
              Get in touch.
            </p>
            <div className="space-y-4">
              {vacancies.map((job) => {
                const summary = job.en.metaDescription
                return (
                  <div
                    key={job.slug}
                    className="p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">{job.en.h1}</h3>
                          <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                            {job.department.en}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{summary}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 shrink-0" />
                            Skolkovo / remote
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4 shrink-0" />
                            Full-time
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 shrink-0" />
                            {new Date(job.datePosted).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                        <Button variant="outline" asChild>
                          <Link href={`/en/career/${job.slug}`}>Details</Link>
                        </Button>
                        <Button asChild>
                          <Link href={`/en/contact?vacancy=${encodeURIComponent(job.en.h1)}`}>Apply</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-headline text-foreground mb-12">Hiring process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Application",
                  description: "Send your resume or link to GitHub/LinkedIn",
                },
                {
                  step: "02",
                  title: "Screening",
                  description: "30-minute call with HR about you and the company",
                },
                {
                  step: "03",
                  title: "Technical",
                  description: "Take-home task or live coding with the team",
                },
                {
                  step: "04",
                  title: "Offer",
                  description: "Discuss terms and start working together",
                },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <span className="text-6xl font-bold text-primary/20">{item.step}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-headline text-foreground mb-4">
              Don’t see the right role?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Send your resume — we’ll get in touch when a matching position opens up.
            </p>
            <Button size="lg" asChild>
              <Link href="mailto:hr@yappix.ru">Send resume</Link>
            </Button>
          </div>
        </section>
      </main>
      <FooterEn />

      {/* JSON-LD JobPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: vacancies.map((job, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              item: {
                "@type": "JobPosting",
                title: job.en.h1,
                description: careerPlainDescription(job, "en").slice(0, 8000),
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
                    addressLocality: "Moscow",
                    addressCountry: "RU",
                  },
                },
                jobLocationType: "TELECOMMUTE",
                employmentType: "FULL_TIME",
                skills: job.skills.join(", "),
                industry: "Information Technology",
                url: `https://yappix.ru/en/career/${job.slug}`,
              },
            })),
          }),
        }}
      />
    </>
  )
}
