import { GeoLandingPage } from "@/components/geo-landing-page"
import { geoCities } from "@/lib/geo-landing-data"
import { buildGeoMetadata } from "@/lib/geo-page-metadata"

const geo = geoCities[3]

export const metadata = buildGeoMetadata(geo, "en")

export default function Page() {
  return <GeoLandingPage geo={geo} locale="en" />
}
