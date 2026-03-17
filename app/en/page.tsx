import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { HeroSection } from "@/components/hero-section"
import { TrustBadges } from "@/components/trust-badges"
import { AutomationEconomicsSection } from "@/components/automation-economics-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { FounderGreeting } from "@/components/founder-greeting"
import { CasesSection } from "@/components/cases-section"
import { TechStack } from "@/components/tech-stack"
import { PricingSection } from "@/components/pricing-section"
import { ShowcaseGallery } from "@/components/showcase-gallery"
import { TemplatesSection } from "@/components/templates-section"
import { ContactSection } from "@/components/contact-section"

export default function HomeEnPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeaderEn />
      <HeroSection locale="en" />
      <TrustBadges locale="en" />
      <AutomationEconomicsSection locale="en" />
      <ServicesSection locale="en" />
      <ProcessSection locale="en" />
      <FounderGreeting locale="en" />
      <CasesSection locale="en" />
      <TechStack locale="en" />
      <PricingSection locale="en" />
      <ShowcaseGallery locale="en" />
      <TemplatesSection locale="en" excludeSlugs={["yandex-go-scooters"]} />
      <ContactSection locale="en" />
      <FooterEn />
    </main>
  )
}
