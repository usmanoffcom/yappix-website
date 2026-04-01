import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { HeaderEn } from "@/components/header-en"
import { HeroSection } from "@/components/hero-section"
import type { GeoCity } from "@/lib/geo-landing-data"

const TrustBadges = dynamic(() => import("@/components/trust-badges").then((m) => ({ default: m.TrustBadges })), { ssr: true })
const FounderGreeting = dynamic(() => import("@/components/founder-greeting").then((m) => ({ default: m.FounderGreeting })), { ssr: true })
const AutomationEconomicsSection = dynamic(() => import("@/components/automation-economics-section").then((m) => ({ default: m.AutomationEconomicsSection })), { ssr: true })
const ServicesSection = dynamic(() => import("@/components/services-section").then((m) => ({ default: m.ServicesSection })), { ssr: true })
const ProcessSection = dynamic(() => import("@/components/process-section").then((m) => ({ default: m.ProcessSection })), { ssr: true })
const CasesSection = dynamic(() => import("@/components/cases-section").then((m) => ({ default: m.CasesSection })), { ssr: true })
const TechStack = dynamic(() => import("@/components/tech-stack").then((m) => ({ default: m.TechStack })), { ssr: true })
const PricingSection = dynamic(() => import("@/components/pricing-section").then((m) => ({ default: m.PricingSection })), { ssr: true })
const ShowcaseGallery = dynamic(() => import("@/components/showcase-gallery").then((m) => ({ default: m.ShowcaseGallery })), { ssr: true })
const TemplatesSection = dynamic(() => import("@/components/templates-section").then((m) => ({ default: m.TemplatesSection })), { ssr: true })
const ContactSection = dynamic(() => import("@/components/contact-section").then((m) => ({ default: m.ContactSection })), { ssr: true })
const Footer = dynamic(() => import("@/components/footer").then((m) => ({ default: m.Footer })), { ssr: true })
const FooterEn = dynamic(() => import("@/components/footer-en").then((m) => ({ default: m.FooterEn })), { ssr: true })

interface Props {
  geo: GeoCity
  locale: "ru" | "en"
}

export function GeoLandingPage({ geo, locale }: Props) {
  const isRu = locale === "ru"
  const headline = isRu ? geo.headlineRu : geo.headlineEn
  const desc = isRu ? geo.descRu : geo.descEn
  const country = isRu ? geo.countryRu : geo.countryEn
  const geoSlug = isRu ? geo.slugRu : geo.slugEn
  const url = isRu
    ? `https://yappix.ru/razrabotka-sajtov-${geo.slugRu}`
    : `https://yappix.ru/en/software-development-${geo.slugEn}`

  return (
    <main className="min-h-screen bg-background">
      {isRu ? <Header /> : <HeaderEn />}
      <HeroSection locale={locale} geoHeadline={headline} geoDesc={desc} />
      <TrustBadges locale={locale} />
      <AutomationEconomicsSection locale={locale} />
      <ServicesSection locale={locale} />
      <ProcessSection locale={locale} />
      <FounderGreeting locale={locale} />
      <CasesSection locale={locale} />
      <TechStack locale={locale} />
      <PricingSection locale={locale} />
      <ShowcaseGallery locale={locale} />
      <TemplatesSection locale={locale} excludeSlugs={["yandex-go-scooters"]} />
      <ContactSection locale={locale} geoPhone={geo.phone} geoSlug={geoSlug} />
      {isRu ? <Footer /> : <FooterEn />}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `YappiX — ${country}`,
            image: "https://yappix.ru/logo.png",
            telephone: geo.phone,
            email: geo.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: isRu ? geo.addressRu : geo.addressEn,
              addressCountry: geo.countryCode,
            },
            areaServed: { "@type": "Country", name: geo.countryEn },
            url,
            openingHours: "Mo-Su 00:00-24:00",
            priceRange: "$$",
          }),
        }}
      />
    </main>
  )
}
