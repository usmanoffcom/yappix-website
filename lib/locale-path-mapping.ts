import { geoCities } from "@/lib/geo-landing-data"

/** RU geo landing path → EN equivalent */
export function geoRuPathToEn(pathname: string): string | undefined {
  for (const c of geoCities) {
    if (pathname === `/razrabotka-sajtov-${c.slugRu}`) {
      return `/en/software-development-${c.slugEn}`
    }
  }
  return undefined
}

/** EN geo landing path → RU equivalent */
export function geoEnPathToRu(pathname: string): string | undefined {
  for (const c of geoCities) {
    if (pathname === `/en/software-development-${c.slugEn}`) {
      return `/razrabotka-sajtov-${c.slugRu}`
    }
  }
  return undefined
}
