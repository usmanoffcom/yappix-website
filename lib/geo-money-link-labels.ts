/** Человекочитаемые подписи для внутренних ссылок на geo/money-страницах */
export const GEO_INTERNAL_LINK_LABELS: Record<
  string,
  { label: string; kind: "pillar" | "service" }
> = {
  "/ai-first-razrabotka": { label: "AI-first разработка", kind: "pillar" },
  "/mvp-i-zapusk-produkta": { label: "MVP и запуск продукта", kind: "pillar" },
  "/vnedrenie-ai-i-rag": { label: "Внедрение AI и RAG", kind: "pillar" },
  "/cto-as-a-service": { label: "CTO as a Service", kind: "pillar" },
  "/stoimost-i-sroki-razrabotki": { label: "Стоимость и сроки разработки", kind: "pillar" },
  "/kejsy-i-metodologiya": { label: "Кейсы и методология", kind: "pillar" },
  "/process": { label: "Процесс работы YappiX", kind: "pillar" },
  "/uslugi/razrabotka-sajtov": { label: "Разработка сайтов и продуктовых веб-систем", kind: "service" },
  "/uslugi/saas-paas": { label: "SaaS, кабинеты и B2B-сервисы", kind: "service" },
  "/uslugi/ai-chat-boty": { label: "AI-ассистенты, RAG и автоматизация", kind: "service" },
  "/uslugi/ux-ui-dizajn": { label: "UX/UI и продуктовый дизайн", kind: "service" },
}

/** Same keys as RU paths (without `/en` prefix) */
export const GEO_INTERNAL_LINK_LABELS_EN: Record<string, { label: string; kind: "pillar" | "service" }> = {
  "/ai-first-razrabotka": { label: "AI-first engineering", kind: "pillar" },
  "/mvp-i-zapusk-produkta": { label: "MVP & product launch", kind: "pillar" },
  "/vnedrenie-ai-i-rag": { label: "AI & RAG implementation", kind: "pillar" },
  "/cto-as-a-service": { label: "CTO as a Service", kind: "pillar" },
  "/stoimost-i-sroki-razrabotki": { label: "Cost & delivery timeline", kind: "pillar" },
  "/kejsy-i-metodologiya": { label: "Cases & methodology", kind: "pillar" },
  "/process": { label: "YappiX delivery process", kind: "pillar" },
  "/uslugi/razrabotka-sajtov": { label: "Websites & web products", kind: "service" },
  "/uslugi/saas-paas": { label: "SaaS & client portals", kind: "service" },
  "/uslugi/ai-chat-boty": { label: "AI assistants, RAG & automation", kind: "service" },
  "/uslugi/ux-ui-dizajn": { label: "UX/UI & product design", kind: "service" },
  "/services": { label: "Services overview", kind: "service" },
  "/contact": { label: "Contact", kind: "service" },
  "/rag-enterprise-knowledge-search": { label: "Enterprise RAG & knowledge search", kind: "pillar" },
  "/controlled-ai-contour": { label: "Controlled AI contour", kind: "pillar" },
}

export function normalizeGeoHref(href: string): string {
  if (href.startsWith("/en/")) return href.slice(3)
  return href
}

export function getGeoInternalLinkLabel(
  href: string,
  locale: "ru" | "en" = "ru",
): { label: string; kind: "pillar" | "service" } {
  const key = normalizeGeoHref(href)
  const table = locale === "en" ? GEO_INTERNAL_LINK_LABELS_EN : GEO_INTERNAL_LINK_LABELS
  const found = table[key]
  if (found) return found
  const fallback = href.replace(/^\//, "").replace(/^en\/?/, "").replace(/\//g, " · ") || href
  return { label: fallback, kind: "service" }
}
