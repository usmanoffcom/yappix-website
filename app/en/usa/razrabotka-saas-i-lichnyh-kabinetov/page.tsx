import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { GeoMoneyPageTemplate } from "@/components/geo-money-page"
import { getGeoMoneyPageEnBySlug } from "@/lib/geo-money-pages-data-en"
import { geoMoneyPageMetadata } from "@/lib/geo-money-metadata"

const page = getGeoMoneyPageEnBySlug("razrabotka-saas-i-lichnyh-kabinetov")!

export const metadata = geoMoneyPageMetadata(page, "en")

export default function Page() {
  return (
    <>
      <HeaderEn />
      <GeoMoneyPageTemplate page={page} locale="en" />
      <FooterEn />
    </>
  )
}
