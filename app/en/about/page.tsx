import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { Button } from "@/components/ui/button"
import { Award, Users, Rocket, Globe, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About YappiX — Skolkovo Residents | IT Studio",
  description:
    "YappiX — Full-cycle IT studio. Skolkovo residents since 2020. Offices in Russia, USA, Turkey, Serbia, Kazakhstan. 250+ projects, 50+ specialists.",
  alternates: {
    canonical: "https://yappix.ru/en/about",
  },
  openGraph: {
    title: "About YappiX — Skolkovo Residents",
    description: "Full-cycle IT studio. Skolkovo residents. 250+ projects, offices in 5 countries.",
    type: "website",
    url: "https://yappix.ru/en/about",
    locale: "en_US",
  },
}

const stats = [
  { value: "250+", label: "Projects", icon: Rocket },
  { value: "50+", label: "Specialists", icon: Users },
  { value: "5", label: "Offices", icon: Globe },
  { value: "10+", label: "Years of Experience", icon: Award },
]

const milestones = [
  { year: "2015", title: "Founded", description: "Studio launch, first projects on PhoneGap and Angular" },
  { year: "2017", title: "Grants", description: "Received government innovation grants and patents" },
  { year: "2019", title: "Investment", description: "Raised 1st investment round for YappiX CMS" },
  { year: "2021", title: "Skolkovo & Growth", description: "Received Skolkovo resident status, raised 2nd investment round for scaling" },
  { year: "2022", title: "Global Expansion", description: "Entered international markets, opened offices in USA and Turkey" },
  { year: "2025", title: "AI Transformation", description: "Implemented AI tools across all processes, offices in 5 locations, team scaling" },
]

const values = [
  {
    title: "Speed",
    description: "We use AI for 7x-12x development acceleration. MVP in 7 days is a reality, not marketing.",
  },
  {
    title: "Quality",
    description: "We don't sacrifice quality for speed. Code review, tests, CI/CD — standard on all projects.",
  },
  {
    title: "Transparency",
    description: "Fixed price in the contract. Trial week with money-back guarantee. Regular demos.",
  },
  {
    title: "Partnership",
    description: "Not just contractors — partners. We advise on how to do better, even if it's not in our favor.",
  },
]

const clients = [
  { name: "Sber", logo: "/Logos/001.svg" },
  { name: "Yandex", logo: "/Logos/002.svg" },
  { name: "VK", logo: "/Logos/003.svg" },
  { name: "Tinkoff", logo: "/Logos/004.svg" },
  { name: "MTS", logo: "/Logos/005.svg" },
  { name: "Ozon", logo: "/Logos/006.svg" },
  { name: "Wildberries", logo: "/Logos/007.svg" },
  { name: "Rostelecom", logo: "/Logos/008.svg" },
  { name: "RZD", logo: "/Logos/009.svg" },
  { name: "Gazprom", logo: "/Logos/010.svg" },
  { name: "Rosatom", logo: "/Logos/001.svg" },
  { name: "X5 Group", logo: "/Logos/002.svg" },
]

export default function AboutEnPage() {
  return (
    <>
      <HeaderEn />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-display text-foreground mb-6 text-balance">
                  Building Digital Products Faster with AI
                </h1>
                <p className="text-body-lg mb-8 text-pretty">
                  YappiX — full-cycle IT studio. Skolkovo residents. We use AI tools for 7-12x development acceleration without compromising quality.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link href="/en/contact">Start a Project</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/en/cases">View Case Studies</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden bg-black/50">
                <video
                  src="/yappix_2026.mp4"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-contain"
                  aria-label="YappiX Team — video"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-headline text-foreground mb-8">Founder</h2>
              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src="/images/image1.png"
                    alt="Renat Usmanov"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Renat Usmanov</h3>
                  <p className="text-primary mb-4">CEO & Product Designer</p>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Founder of YappiX and product designer with 10+ years of experience. Specializing in the full cycle: from UX research to design systems and frontend development.
                    </p>
                    <p>
                      In 2025, transitioned to a &quot;one-person company&quot; model, using AI agents to accelerate development. My approach: minimal team, maximum automation, focus on results.
                    </p>
                    <p>
                      <strong>Stack:</strong> Figma, Next.js, TypeScript, Framer, Cursor AI, Claude
                    </p>
                    <div className="flex gap-4 mt-6">
                      <Link href="https://usmanoff.com" target="_blank" className="text-primary hover:underline">
                        Portfolio →
                      </Link>
                      <Link href="https://linkedin.com/in/usmanoffcom" target="_blank" className="text-primary hover:underline">
                        LinkedIn →
                      </Link>
                      <Link href="https://github.com/usmanoffcom" target="_blank" className="text-primary hover:underline">
                        GitHub →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-headline text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              Principles that guide our work with clients and within the team.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="p-6 bg-card border border-border rounded-xl">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-headline text-foreground mb-12">Our Journey</h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Left side - Video */}
              <div className="md:sticky md:top-24 md:self-start">
                <div className="space-y-6">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/LQTnA8tP2B4"
                      title="YAPPIX CMS - Runa Capital"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">YAPPIX CMS & Runa Capital</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      YAPPIX CMS passed the first expert commission of the international venture fund Runa Capital. The team developed a native mobile app builder integrated with a content management system, supporting AR and speech recognition technologies. No programming knowledge required.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The fund representatives found the product very promising, noting its great potential for the global market. Renat Usmanov (YAPPIX CMS founder) was invited to Runa Capital&apos;s headquarters in Silicon Valley for a personal meeting to discuss potential collaboration.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Timeline */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
                <div className="space-y-12">
                  {milestones.map((milestone) => (
                    <div key={milestone.year} className="relative">
                      <div className="absolute left-0 w-8 h-8 bg-primary rounded-full -translate-x-1/2 flex items-center justify-center">
                        <div className="w-3 h-3 bg-background rounded-full" />
                      </div>
                      <div className="pl-12">
                        <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                        <h3 className="text-xl font-semibold text-foreground mt-1">{milestone.title}</h3>
                        <p className="text-muted-foreground mt-2">{milestone.description}</p>
                        {milestone.year === "2017" && (
                          <div className="relative w-full mt-4 rounded-lg overflow-hidden">
                            <Image src="/sk_it/Banner – 2.png" alt="Grants and patents" width={1200} height={300} className="w-full h-auto object-contain" />
                          </div>
                        )}
                        {milestone.year === "2021" && (
                          <div className="relative w-full mt-4 rounded-lg overflow-hidden">
                            <Image src="/sk_it/Banner – 1.png" alt="Skolkovo and investments" width={1200} height={300} className="w-full h-auto object-contain" />
                          </div>
                        )}
                        {milestone.year === "2022" && (
                          <div className="relative w-full mt-4 rounded-lg overflow-hidden">
                            <Image src="/sk_it/Banner.png" alt="International expansion" width={1200} height={300} className="w-full h-auto object-contain" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-headline text-foreground mb-4">Trusted By</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              We&apos;ve worked with top-100 Russian companies and international startups.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {clients.map((client) => (
                <div key={client.name} className="flex items-center justify-center h-20 bg-card border border-border rounded-lg p-4">
                  <Image src={client.logo} alt={client.name} width={120} height={40} className="object-contain max-w-full max-h-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-headline text-foreground mb-12">Why YappiX</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "10+ years of experience — proven solutions",
                "AI tools — 7-12x faster and cheaper development",
                "MVP in 7 days — trial week with money-back guarantee",
                "Offices in 5 countries — convenient time zones",
                "All payment methods — including crypto",
                "250+ projects — experience in any industry",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-background border border-border rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-headline text-foreground mb-4">Ready to Collaborate?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tell us about your project — we&apos;ll suggest a solution and provide exact timelines.
            </p>
            <Button size="lg" asChild>
              <Link href="/en/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <FooterEn />
    </>
  )
}
