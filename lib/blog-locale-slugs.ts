/**
 * Только пары slug EN↔RU для курируемых статей блога.
 * Шапка импортирует этот файл вместо blog-data-en, чтобы не тащить HTML статей в клиентский бандл.
 * Для остальных статей правило: один и тот же slug на /blog/:slug и /en/blog/:slug.
 */
export const blogCuratedEnSlugToRuSlug: Record<string, string> = {
  "ai-ide-2026-comparison": "ai-ide-i-platformy-dlya-koda-2026-sravnenie",
  "why-ai-projects-dont-pay-off": "pochemu-ai-proekty-ne-okupayutsya-i-kak-etogo-izbezhat",
  "website-development-cost-2026": "skolko-stoit-razrabotka-sajta-v-2026",
  "ai-agents-in-business-guide": "ai-agenty-v-biznese-prakticheskoe-rukovodstvo",
  "how-to-order-a-website-2026": "kak-zakazat-sajt-poshagovaya-instrukciya",
  "implementing-ai-in-business-2026": "vnedrenie-iskusstvennogo-intellekta-v-biznes",
  "custom-website-development-guide-2026": "razrabotka-sajtov-na-zakaz-2026",
  "corporate-website-development-playbook": "korporativnye-sajty-dlya-biznesa",
  "ecommerce-development-nextjs-guide": "internet-magaziny-na-nextjs",
  "custom-mobile-app-development-guide": "mobilnye-prilozheniya-na-zakaz-pod-klyuch",
  "mvp-development-roadmap": "razrabotka-mvp-poshagovo",
  "saas-development-for-b2b-guide": "razrabotka-saas-platform-dlya-b2b",
  "ai-implementation-in-business-guide": "vnedrenie-ii-v-biznes-protsessy",
  "ai-chatbot-development-for-business": "ai-chat-boty-dlya-kompaniy",
  "business-process-automation-with-ai": "avtomatizaciya-biznes-processov-s-ai",
}

const curatedBlogPathEnToRu: Record<string, string> = {}
const curatedBlogPathRuToEn: Record<string, string> = {}

for (const [enSlug, ruSlug] of Object.entries(blogCuratedEnSlugToRuSlug)) {
  curatedBlogPathEnToRu[`/en/blog/${enSlug}`] = `/blog/${ruSlug}`
  curatedBlogPathRuToEn[`/blog/${ruSlug}`] = `/en/blog/${enSlug}`
}

export { curatedBlogPathEnToRu, curatedBlogPathRuToEn }
