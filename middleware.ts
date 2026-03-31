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

// Статический список: все варианты регистра «llms» кроме /llms.txt (Next требует статический matcher).
// Не использовать redirects() в next.config для этих путей — matching там без учёта регистра и ломает /llms.txt.
export const config = {
  matcher: [
    "/Llms.txt",
    "/lLms.txt",
    "/LLms.txt",
    "/llMs.txt",
    "/LlMs.txt",
    "/lLMs.txt",
    "/LLMs.txt",
    "/llmS.txt",
    "/LlmS.txt",
    "/lLmS.txt",
    "/LLmS.txt",
    "/llMS.txt",
    "/LlMS.txt",
    "/lLMS.txt",
    "/LLMS.txt",
  ],
}
