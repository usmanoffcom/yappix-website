import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GeoMoneyPageTemplate } from "@/components/geo-money-page"
import { getGeoMoneyPageBySlug } from "@/lib/geo-money-pages-data"
import { geoMoneyPageMetadata } from "@/lib/geo-money-metadata"

const page = getGeoMoneyPageBySlug("product-team-dlya-russkoyazychnogo-foundera")!

export const metadata = geoMoneyPageMetadata(page)

export default function Page() {
  return (
    <>
      <Header />
      <GeoMoneyPageTemplate page={page} />
      <Footer />
    </>
  )
}
