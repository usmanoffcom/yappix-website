import type { BlogPost } from "@/lib/blog-data"
import type { BlogPostEn } from "@/lib/blog-data-en"
import { blogPosts, getBlogPostBySlug as getBlogPostBySlugFile } from "@/lib/blog-data"
import { blogPostsEn, getBlogPostBySlugEn as getBlogPostBySlugEnFile } from "@/lib/blog-data-en"
import type { CaseStudy } from "@/lib/cases-data"
import { casesData, getCaseBySlug as getCaseBySlugFile, getAllCaseSlugs as getAllCaseSlugsFile } from "@/lib/cases-data"
import { casesDataEn, getCaseBySlugEn as getCaseBySlugEnFile, getAllCaseSlugsEn as getAllCaseSlugsEnFile } from "@/lib/cases-data-en"
import type { TemplateCard } from "@/lib/templates-data"
import { templatesRu } from "@/lib/templates-data"
import { prisma } from "@/lib/prisma"
import { useCmsDb } from "@/lib/cms/use-cms-db"

const KIND_BLOG = "blog"
const KIND_CASE = "case"
const KIND_TEMPLATE = "template"

/** Сортировка как в файлах: по дате публикации убыв. */
function sortBlogRu(a: BlogPost, b: BlogPost) {
  return Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
}

function sortBlogEn(a: BlogPostEn, b: BlogPostEn) {
  return Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
}

export async function listBlogPostsRu(): Promise<BlogPost[]> {
  if (!useCmsDb()) return [...blogPosts].sort(sortBlogRu)
  const rows = await prisma.contentDocument.findMany({
    where: { locale: "ru", kind: KIND_BLOG },
    orderBy: [{ publishedAt: "desc" }, { sortOrder: "asc" }],
  })
  return rows.map((r) => r.payload as unknown as BlogPost)
}

export async function listBlogPostsEn(): Promise<BlogPostEn[]> {
  if (!useCmsDb()) return [...blogPostsEn].sort(sortBlogEn)
  const rows = await prisma.contentDocument.findMany({
    where: { locale: "en", kind: KIND_BLOG },
    orderBy: [{ publishedAt: "desc" }, { sortOrder: "asc" }],
  })
  return rows.map((r) => r.payload as unknown as BlogPostEn)
}

export async function getBlogPostRu(slug: string): Promise<BlogPost | undefined> {
  if (!useCmsDb()) return getBlogPostBySlugFile(slug)
  const row = await prisma.contentDocument.findUnique({
    where: { locale_kind_slug: { locale: "ru", kind: KIND_BLOG, slug } },
  })
  return row ? (row.payload as unknown as BlogPost) : undefined
}

export async function getBlogPostEn(slug: string): Promise<BlogPostEn | undefined> {
  if (!useCmsDb()) return getBlogPostBySlugEnFile(slug)
  const row = await prisma.contentDocument.findUnique({
    where: { locale_kind_slug: { locale: "en", kind: KIND_BLOG, slug } },
  })
  return row ? (row.payload as unknown as BlogPostEn) : undefined
}

export async function allBlogSlugsRu(): Promise<{ slug: string }[]> {
  if (!useCmsDb()) return blogPosts.map((p) => ({ slug: p.slug }))
  const rows = await prisma.contentDocument.findMany({
    where: { locale: "ru", kind: KIND_BLOG },
    select: { slug: true },
  })
  return rows.map((r) => ({ slug: r.slug }))
}

export async function allBlogSlugsEn(): Promise<{ slug: string }[]> {
  if (!useCmsDb()) return blogPostsEn.map((p) => ({ slug: p.slug }))
  const rows = await prisma.contentDocument.findMany({
    where: { locale: "en", kind: KIND_BLOG },
    select: { slug: true },
  })
  return rows.map((r) => ({ slug: r.slug }))
}

export async function listCasesRu(): Promise<CaseStudy[]> {
  if (!useCmsDb()) return casesData
  const rows = await prisma.contentDocument.findMany({
    where: { locale: "ru", kind: KIND_CASE },
    orderBy: { sortOrder: "asc" },
  })
  return rows.map((r) => r.payload as unknown as CaseStudy)
}

export async function listCasesEn(): Promise<CaseStudy[]> {
  if (!useCmsDb()) return casesDataEn
  const rows = await prisma.contentDocument.findMany({
    where: { locale: "en", kind: KIND_CASE },
    orderBy: { sortOrder: "asc" },
  })
  return rows.map((r) => r.payload as unknown as CaseStudy)
}

export async function getCaseRu(slug: string): Promise<CaseStudy | undefined> {
  if (!useCmsDb()) return getCaseBySlugFile(slug)
  const row = await prisma.contentDocument.findUnique({
    where: { locale_kind_slug: { locale: "ru", kind: KIND_CASE, slug } },
  })
  return row ? (row.payload as unknown as CaseStudy) : undefined
}

export async function getCaseEn(slug: string): Promise<CaseStudy | undefined> {
  if (!useCmsDb()) return getCaseBySlugEnFile(slug)
  const row = await prisma.contentDocument.findUnique({
    where: { locale_kind_slug: { locale: "en", kind: KIND_CASE, slug } },
  })
  return row ? (row.payload as unknown as CaseStudy) : undefined
}

export async function allCaseSlugsRu(): Promise<string[]> {
  if (!useCmsDb()) return getAllCaseSlugsFile()
  const rows = await prisma.contentDocument.findMany({
    where: { locale: "ru", kind: KIND_CASE },
    orderBy: { sortOrder: "asc" },
    select: { slug: true },
  })
  return rows.map((r) => r.slug)
}

export async function allCaseSlugsEn(): Promise<string[]> {
  if (!useCmsDb()) return getAllCaseSlugsEnFile()
  const rows = await prisma.contentDocument.findMany({
    where: { locale: "en", kind: KIND_CASE },
    orderBy: { sortOrder: "asc" },
    select: { slug: true },
  })
  return rows.map((r) => r.slug)
}

export async function listTemplatesRu(): Promise<TemplateCard[]> {
  if (!useCmsDb()) return templatesRu
  const rows = await prisma.contentDocument.findMany({
    where: { locale: "ru", kind: KIND_TEMPLATE },
    orderBy: { sortOrder: "asc" },
  })
  return rows.map((r) => r.payload as unknown as TemplateCard)
}

/** Для sitemap: slug шаблонов (локализованные URL пока только RU /shablony). */
export async function allTemplateSlugsRu(): Promise<string[]> {
  if (!useCmsDb()) return templatesRu.map((t) => t.slug)
  const rows = await prisma.contentDocument.findMany({
    where: { locale: "ru", kind: KIND_TEMPLATE },
    select: { slug: true },
    orderBy: { sortOrder: "asc" },
  })
  return rows.map((r) => r.slug)
}
