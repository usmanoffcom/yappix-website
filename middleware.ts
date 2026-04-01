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

// Один паттерн: любой регистр «llms» + .txt (16 вариантов). Канонический /llms.txt ниже не редиректим.
// Не использовать redirects() в next.config — matching без учёта регистра ломает /llms.txt.
export const config = {
  matcher: ["/([Ll])([Ll])([Mm])([Ss])\\.txt"],
}
