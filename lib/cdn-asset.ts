/**
 * Статика из `public/`: с тем же path на origin или на `NEXT_PUBLIC_CDN_URL` (сборка с cdn.yappix.ru).
 * Для крупных GIF/медиа, чтобы с главной/страниц не тянуть лишний трафик с origin.
 */
export function publicAssetUrl(path: string): string {
  if (!path.startsWith("/")) {
    return path
  }
  const base = process.env.NEXT_PUBLIC_CDN_URL?.replace(/\/$/, "") ?? ""
  return base ? `${base}${path}` : path
}
