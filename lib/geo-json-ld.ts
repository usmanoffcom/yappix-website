import type { GeoCity } from "@/lib/geo-landing-data"

type FaqPair = { question: string; answer: string }

export function buildGeoStructuredData(params: {
  geo: GeoCity
  locale: "ru" | "en"
  pageUrl: string
  faq: FaqPair[]
  homeLabel: string
}): object {
  const { geo, locale, pageUrl, faq, homeLabel } = params
  const isRu = locale === "ru"
  const pageName = isRu ? geo.metaTitleRu : geo.metaTitleEn
  const pageDesc = isRu ? geo.metaDescRu : geo.metaDescEn
  const country = isRu ? geo.countryRu : geo.countryEn
  const siteUrl = "https://yappix.ru"
  const homeUrl = isRu ? siteUrl : `${siteUrl}/en`

  const faqEntities = faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }))

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: homeLabel,
      item: homeUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: pageName,
      item: pageUrl,
    },
  ]

  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": `${pageUrl}#localbusiness`,
    name: `YappiX — ${country}`,
    image: `${siteUrl}/logo.png`,
    telephone: geo.phone,
    email: geo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: isRu ? geo.addressRu : geo.addressEn,
      addressCountry: geo.countryCode,
    },
    areaServed: { "@type": "Country", name: geo.countryEn },
    url: pageUrl,
    openingHours: "Mo-Su 00:00-24:00",
    priceRange: "$$",
  }

  const webPage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageName,
    description: pageDesc,
    inLanguage: isRu ? "ru-RU" : "en-US",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "YappiX",
      url: siteUrl,
    },
    about: {
      "@type": "Service",
      name: isRu ? `Разработка ПО и сайтов — ${country}` : `Software & web development — ${geo.countryEn}`,
      areaServed: geo.countryEn,
      provider: { "@id": `${pageUrl}#localbusiness` },
    },
  }

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: breadcrumbItems,
  }

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqEntities,
  }

  return {
    "@context": "https://schema.org",
    "@graph": [webPage, breadcrumb, faqPage, localBusiness],
  }
}
