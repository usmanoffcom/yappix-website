/**
 * URL для файлов из `public/` (например `/images/...`).
 *
 * `NEXT_PUBLIC_CDN_URL` / `assetPrefix` относятся только к `/_next/static` (чанки, CSS, медиа из бандла).
 * Edge-CDN (cdn.yappix.ru) по типичной схеме **не** отдаёт корень `public/` — отдельный хост + тот же path даёт 404.
 * Картинки и GIF грузим с **origin** (yappix.ru), как отдаёт `next start` + nginx.
 */
export function publicAssetUrl(path: string): string {
  if (!path.startsWith("/")) {
    return path
  }
  return path
}
