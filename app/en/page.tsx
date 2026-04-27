import dynamic from "next/dynamic"
import { HeaderEn } from "@/components/header-en"
import { HeroSection } from "@/components/hero-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { WhyYappixSection } from "@/components/why-yappix-section"
import { FinalCtaSection } from "@/components/final-cta-section"

const TrustBadges = dynamic(() => import("@/components/trust-badges").then((m) => ({ default: m.TrustBadges })), { ssr: true })
const FounderGreeting = dynamic(() => import("@/components/founder-greeting").then((m) => ({ default: m.FounderGreeting })), { ssr: true })
const ServicesSection = dynamic(() => import("@/components/services-section").then((m) => ({ default: m.ServicesSection })), { ssr: true })
const ProcessSection = dynamic(() => import("@/components/process-section").then((m) => ({ default: m.ProcessSection })), { ssr: true })
const CasesSection = dynamic(() => import("@/components/cases-section").then((m) => ({ default: m.CasesSection })), { ssr: true })
const TechStack = dynamic(() => import("@/components/tech-stack").then((m) => ({ default: m.TechStack })), { ssr: true })
const PricingSection = dynamic(() => import("@/components/pricing-section").then((m) => ({ default: m.PricingSection })), { ssr: true })
const TemplatesSection = dynamic(() => import("@/components/templates-section").then((m) => ({ default: m.TemplatesSection })), { ssr: true })
const ContactSection = dynamic(() => import("@/components/contact-section").then((m) => ({ default: m.ContactSection })), { ssr: true })
const FooterEn = dynamic(() => import("@/components/footer-en").then((m) => ({ default: m.FooterEn })), { ssr: true })

export default function HomeEnPage() {
  return (
    <main className="relative z-0 min-h-screen bg-background">
      <HeaderEn />
      <HeroSection locale="en" />
      <TrustBadges locale="en" />
      <TargetAudienceSection locale="en" />
      <WhatWeDoSection locale="en" />
      <ServicesSection locale="en" />
      <ProcessSection locale="en" />
      <WhyYappixSection locale="en" />
      <FounderGreeting locale="en" />
      <CasesSection locale="en" />
      <TechStack locale="en" />
      <PricingSection locale="en" />
      <TemplatesSection locale="en" excludeSlugs={["yandex-go-scooters"]} />
      <FinalCtaSection locale="en" />
      <ContactSection locale="en" />
      <FooterEn />
    </main>
  )
}
