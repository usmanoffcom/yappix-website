import { PrismaClient } from "@prisma/client"
import { blogPosts } from "../lib/blog-data"
import { blogPostsEn } from "../lib/blog-data-en"
import { casesData } from "../lib/cases-data"
import { casesDataEn } from "../lib/cases-data-en"
import { templatesRu } from "../lib/templates-data"

const prisma = new PrismaClient()

const KIND_BLOG = "blog"
const KIND_CASE = "case"
const KIND_TEMPLATE = "template"

function parsePublishedAt(s?: string | null): Date | null {
  if (!s) return null
  const t = Date.parse(s)
  return Number.isNaN(t) ? null : new Date(t)
}

async function main() {
  await prisma.contentDocument.deleteMany({})

  for (let i = 0; i < blogPosts.length; i++) {
    const p = blogPosts[i]
    await prisma.contentDocument.create({
      data: {
        locale: "ru",
        kind: KIND_BLOG,
        slug: p.slug,
        title: p.title,
        category: p.category,
        publishedAt: parsePublishedAt(p.publishedAt),
        sortOrder: i,
        payload: JSON.parse(JSON.stringify(p)) as object,
      },
    })
  }

  for (let i = 0; i < blogPostsEn.length; i++) {
    const p = blogPostsEn[i]
    await prisma.contentDocument.create({
      data: {
        locale: "en",
        kind: KIND_BLOG,
        slug: p.slug,
        title: p.title,
        category: p.category,
        publishedAt: parsePublishedAt(p.publishedAt),
        sortOrder: i,
        payload: JSON.parse(JSON.stringify(p)) as object,
      },
    })
  }

  for (let i = 0; i < casesData.length; i++) {
    const c = casesData[i]
    const y = parseInt(c.year, 10)
    const publishedAt = Number.isFinite(y) ? new Date(y, 0, 1) : null
    await prisma.contentDocument.create({
      data: {
        locale: "ru",
        kind: KIND_CASE,
        slug: c.slug,
        title: c.title,
        category: c.category,
        publishedAt,
        sortOrder: i,
        payload: JSON.parse(JSON.stringify(c)) as object,
      },
    })
  }

  for (let i = 0; i < casesDataEn.length; i++) {
    const c = casesDataEn[i]
    const y = parseInt(c.year, 10)
    const publishedAt = Number.isFinite(y) ? new Date(y, 0, 1) : null
    await prisma.contentDocument.create({
      data: {
        locale: "en",
        kind: KIND_CASE,
        slug: c.slug,
        title: c.title,
        category: c.category,
        publishedAt,
        sortOrder: i,
        payload: JSON.parse(JSON.stringify(c)) as object,
      },
    })
  }

  for (let i = 0; i < templatesRu.length; i++) {
    const t = templatesRu[i]
    await prisma.contentDocument.create({
      data: {
        locale: "ru",
        kind: KIND_TEMPLATE,
        slug: t.slug,
        title: t.title,
        category: t.category,
        publishedAt: null,
        sortOrder: i,
        payload: JSON.parse(JSON.stringify(t)) as object,
      },
    })
  }

  console.log(
    "Seed OK:",
    await prisma.contentDocument.count(),
    "documents (blog ru/en, cases ru/en, templates ru)",
  )
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
