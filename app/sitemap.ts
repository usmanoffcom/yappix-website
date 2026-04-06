import { MetadataRoute } from 'next'
import { blogPosts, blogCategories } from '@/lib/blog-data'
import { blogPostsEn } from '@/lib/blog-data-en'
import { casesData } from '@/lib/cases-data'
import { casesDataEn } from '@/lib/cases-data-en'
import { geoCities } from '@/lib/geo-landing-data'
import { geoMoneyPages } from '@/lib/geo-money-pages-data'
import { geoMoneyPagesEn } from '@/lib/geo-money-pages-data-en'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yappix.ru'

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/uslugi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kejsy`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/o-kompanii`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakty`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/founder`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shablony`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/karera`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rekvizity`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/oferta`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/politika-konfidencialnosti`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/en/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/en/oferta`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
    { url: `${baseUrl}/process`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/ai-first-razrabotka`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/mvp-i-zapusk-produkta`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/vnedrenie-ai-i-rag`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/cto-as-a-service`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/stoimost-i-sroki-razrabotki`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/kejsy-i-metodologiya`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/en`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/en/cases`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/templates`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/en/founder`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/en/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/en/career`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/en/rekvizity`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.6 },
    { url: `${baseUrl}/en/process`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${baseUrl}/en/ai-first-razrabotka`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/en/mvp-i-zapusk-produkta`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/en/vnedrenie-ai-i-rag`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/en/cto-as-a-service`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/en/stoimost-i-sroki-razrabotki`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/en/kejsy-i-metodologiya`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/evidence`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/security-compliance`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/sla-support`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/roi-methodology`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/evidence`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/security-compliance`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/en/sla-support`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/en/roi-methodology`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/avtomatizaciya-s-roi`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/upravlyaemyj-ai-kontur`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/rag-poisk-po-baze-znanij`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/en/roi-first-automation`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/en/controlled-ai-contour`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/en/rag-enterprise-knowledge-search`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/en/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ]

  // Services pages - используем реальные slug'и из servicesData
  const servicesSlugs = [
    'razrabotka-sajtov',
    'mobilnye-prilozheniya',
    'ai-chat-boty',
    'saas-paas',
    'fintech',
    'devops',
    'seo-prodvizhenie',
    'smm',
    'integracii-i-api',
    'analitika-dannyh',
    'ux-ui-dizajn',
    'kiberbezopasnost',
  ]

  const servicesPages: MetadataRoute.Sitemap = servicesSlugs.map((slug) => ({
    url: `${baseUrl}/uslugi/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog posts
  const blogPostsPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // EN blog posts
  const blogPostsEnPages: MetadataRoute.Sitemap = blogPostsEn.map((post) => ({
    url: `${baseUrl}/en/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog categories
  const blogCategoriesPages: MetadataRoute.Sitemap = blogCategories
    .filter((cat) => cat.slug !== '')
    .map((category) => ({
      url: `${baseUrl}/blog/kategoriya/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))

  // Cases pages (RU)
  const casesPages: MetadataRoute.Sitemap = casesData.map((caseItem) => ({
    url: `${baseUrl}/kejsy/${caseItem.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Cases pages (EN)
  const casesEnPages: MetadataRoute.Sitemap = casesDataEn.map((caseItem) => ({
    url: `${baseUrl}/en/cases/${caseItem.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const geoPages: MetadataRoute.Sitemap = geoCities.flatMap((city) => [
    {
      url: `${baseUrl}/razrabotka-sajtov-${city.slugRu}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/software-development-${city.slugEn}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ])

  const geoMoneyPagesUrls: MetadataRoute.Sitemap = geoMoneyPages.map((page) => ({
    url: `${baseUrl}${page.canonicalPath}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const geoMoneyPagesEnUrls: MetadataRoute.Sitemap = geoMoneyPagesEn.map((page) => ({
    url: `${baseUrl}${page.canonicalPath}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [
    ...mainPages,
    ...servicesPages,
    ...blogPostsPages,
    ...blogPostsEnPages,
    ...blogCategoriesPages,
    ...casesPages,
    ...casesEnPages,
    ...geoPages,
    ...geoMoneyPagesUrls,
    ...geoMoneyPagesEnUrls,
  ]
}
