import { readFile } from "fs/promises"
import { join } from "path"
import { NextResponse } from "next/server"

/** Отдаёт /llms.txt через App Router — надёжнее, чем только public/ (nginx может не проксировать статику). */
export async function GET() {
  const filePath = join(process.cwd(), "content", "llms.txt")
  const body = await readFile(filePath, "utf-8")
  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=604800, stale-while-revalidate=86400",
    },
  })
}
