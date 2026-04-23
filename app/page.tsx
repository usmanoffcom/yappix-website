import nextDynamic from "next/dynamic"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { WhyYappixSection } from "@/components/why-yappix-section"
import { FinalCtaSection } from "@/components/final-cta-section"

/** Статическая страница: один цельный HTML без долгого RSC-стрима — меньше обрывов через Cloudflare/nginx. */
export const dynamic = "force-static"

/** Подтверждение сайта в Дзене (метатег только на главной). */
export const metadata: Metadata = {
  verification: {
    other: {
      "zen-verification": "gxCJ5AJ2zfZ0UQpIUydvz3MK1KYOz5n8kcTKeXFVYS9sk8g0SL1uIB74gLnlkik5",
    },
  },
}

const TrustBadges = nextDynamic(() => import("@/components/trust-badges").then((m) => ({ default: m.TrustBadges })), { ssr: true })
const FounderGreeting = nextDynamic(() => import("@/components/founder-greeting").then((m) => ({ default: m.FounderGreeting })), { ssr: true })
const ServicesSection = nextDynamic(() => import("@/components/services-section").then((m) => ({ default: m.ServicesSection })), { ssr: true })
const ProcessSection = nextDynamic(() => import("@/components/process-section").then((m) => ({ default: m.ProcessSection })), { ssr: true })
const CasesSection = nextDynamic(() => import("@/components/cases-section").then((m) => ({ default: m.CasesSection })), { ssr: true })
const TechStack = nextDynamic(() => import("@/components/tech-stack").then((m) => ({ default: m.TechStack })), { ssr: true })
const PricingSection = nextDynamic(() => import("@/components/pricing-section").then((m) => ({ default: m.PricingSection })), { ssr: true })
const ShowcaseGallery = nextDynamic(() => import("@/components/showcase-gallery").then((m) => ({ default: m.ShowcaseGallery })), { ssr: true })
const TemplatesSection = nextDynamic(() => import("@/components/templates-section").then((m) => ({ default: m.TemplatesSection })), { ssr: true })
const ContactSection = nextDynamic(() => import("@/components/contact-section").then((m) => ({ default: m.ContactSection })), { ssr: true })
const Footer = nextDynamic(() => import("@/components/footer").then((m) => ({ default: m.Footer })), { ssr: true })

export default function HomePage() {
  return (
    <main className="relative z-0 min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustBadges />
      <TargetAudienceSection />
      <WhatWeDoSection />
      <ServicesSection />
      <ProcessSection />
      <WhyYappixSection />
      <FounderGreeting />
      <CasesSection />
      <TechStack />
      <PricingSection />
      <ShowcaseGallery />
      <TemplatesSection excludeSlugs={["yandex-go-scooters"]} />
      <FinalCtaSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
