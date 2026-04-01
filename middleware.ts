import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const p = request.nextUrl.pathname
  if (p.toLowerCase() === "/llms.txt" && p !== "/llms.txt") {
    const url = request.nextUrl.clone()
    url.pathname = "/llms.txt"
    return NextResponse.redirect(url, 308)
  }
  return NextResponse.next()
}

// Все 16 регистров llms.txt — только литерал (Next.js не поддерживает spread/import в matcher — сбрасывает config).
export const config = {
  matcher: [
    "/llms.txt",
    "/llmS.txt",
    "/llMs.txt",
    "/llMS.txt",
    "/lLms.txt",
    "/lLmS.txt",
    "/lLMs.txt",
    "/lLMS.txt",
    "/Llms.txt",
    "/LlmS.txt",
    "/LlMs.txt",
    "/LlMS.txt",
    "/LLms.txt",
    "/LLmS.txt",
    "/LLMs.txt",
    "/LLMS.txt",
  ],
}
