import type { Metadata } from "next"
import Link from "next/link"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { Button } from "@/components/ui/button"
import { MapPin, Briefcase, Clock, Users, Zap, Heart, Globe, GraduationCap, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers at YappiX — IT Studio Jobs",
  description:
    "Open positions at YappiX: developers, designers, managers. Work from Skolkovo, remotely, or from locations in USA, Germany, Turkey, Serbia, Kazakhstan.",
  keywords: ["developer jobs", "IT careers", "Skolkovo jobs", "remote developer", "YappiX careers"],
  alternates: {
    canonical: "https://yappix.ru/en/career",
  },
  openGraph: {
    title: "Careers at YappiX — IT Studio Jobs",
    description: "Open positions: developers, designers, managers. Work remotely or from 6 locations.",
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
    title: "Careers at YappiX — IT Studio Jobs",
    description: "Open positions at YappiX. Work from Skolkovo, remotely or from 6 locations.",
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

const vacancies = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote / Moscow",
    type: "Full-time",
    salary: "from 350,000 ₽",
    salaryValue: 350000,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    description: "Building client-side for SaaS products, working with AI tools, code review.",
    datePosted: "2025-01-06",
    validThrough: "2025-03-31",
  },
  {
    title: "Middle/Senior Backend Developer",
    department: "Engineering",
    location: "Remote / Moscow",
    type: "Full-time",
    salary: "from 300,000 ₽",
    salaryValue: 300000,
    skills: ["Node.js", "Python", "PostgreSQL", "Redis"],
    description: "API development, integrations, performance optimization.",
    datePosted: "2025-01-06",
    validThrough: "2025-03-31",
  },
  {
    title: "AI/ML Engineer",
    department: "AI",
    location: "Remote",
    type: "Full-time",
    salary: "from 400,000 ₽",
    salaryValue: 400000,
    skills: ["Python", "LangChain", "RAG", "Fine-tuning"],
    description: "Building AI agents, LLM integration, RAG systems.",
    datePosted: "2025-01-08",
    validThrough: "2025-03-31",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    salary: "from 280,000 ₽",
    salaryValue: 280000,
    skills: ["Kubernetes", "Terraform", "AWS/GCP", "GitLab CI"],
    description: "CI/CD setup, infrastructure management, monitoring.",
    datePosted: "2025-01-05",
    validThrough: "2025-03-31",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote / Moscow",
    type: "Full-time",
    salary: "from 250,000 ₽",
    salaryValue: 250000,
    skills: ["Figma", "UI/UX", "Design Systems", "Prototyping"],
    description: "Designing interfaces for SaaS products, design systems.",
    datePosted: "2025-01-03",
    validThrough: "2025-03-31",
  },
  {
    title: "Project Manager",
    department: "Management",
    location: "Remote / Moscow",
    type: "Full-time",
    salary: "from 200,000 ₽",
    salaryValue: 200000,
    skills: ["Agile", "Jira", "Communication", "Technical background"],
    description: "Managing IT projects, client communication, planning.",
    datePosted: "2025-01-02",
    validThrough: "2025-03-31",
  },
]

export default function CareerPageEn() {
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
                We build products of the future with AI tools. We’re looking for people who want to work at the forefront of technology.
              </p>
              <Button size="lg" asChild>
                <a href="#vacancies">View open positions</a>
              </Button>
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
              {vacancies.length} positions across different areas. Don’t see a fit? Get in touch.
            </p>
            <div className="space-y-4">
              {vacancies.map((vacancy, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{vacancy.title}</h3>
                        <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                          {vacancy.department}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{vacancy.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {vacancy.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {vacancy.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(vacancy.datePosted).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span className="font-medium text-primary">{vacancy.salary}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {vacancy.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button asChild className="shrink-0">
                      <Link href={`/en/contact?vacancy=${encodeURIComponent(vacancy.title)}`}>
                        Apply
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
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
            itemListElement: vacancies.map((vacancy, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              item: {
                "@type": "JobPosting",
                title: vacancy.title,
                description: vacancy.description,
                datePosted: vacancy.datePosted,
                validThrough: vacancy.validThrough,
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
                    addressLocality: vacancy.location.includes("Moscow") ? "Moscow" : "Remote",
                    addressCountry: "RU",
                  },
                },
                jobLocationType: vacancy.location.includes("Remote") ? "TELECOMMUTE" : undefined,
                employmentType: "FULL_TIME",
                baseSalary: {
                  "@type": "MonetaryAmount",
                  currency: "RUB",
                  value: {
                    "@type": "QuantitativeValue",
                    value: vacancy.salaryValue,
                    unitText: "MONTH",
                  },
                },
                skills: vacancy.skills.join(", "),
                industry: "Information Technology",
              },
            })),
          }),
        }}
      />
    </>
  )
}
