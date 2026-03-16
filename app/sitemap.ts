import { MetadataRoute } from 'next'
import { blogPosts, blogCategories } from '@/lib/blog-data'
import { casesData } from '@/lib/cases-data'
import { casesDataEn } from '@/lib/cases-data-en'

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
    { url: `${baseUrl}/en`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/en/cases`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/templates`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/en/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/en/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/en/career`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/en/rekvizity`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.6 },
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

  return [
    ...mainPages,
    ...servicesPages,
    ...blogPostsPages,
    ...blogCategoriesPages,
    ...casesPages,
    ...casesEnPages,
  ]
}
