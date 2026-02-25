import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  width?: number
  height?: number
  href?: string
}

export function Logo({ className, width = 140, height = 40, href = "/" }: LogoProps) {
  return (
    <Link href={href} className={cn("inline-flex items-center shrink-0", className)}>
      <Image
        src="/images/logo-002.png"
        alt="YappiX logo"
        width={width}
        height={height}
        priority
        className="h-8 md:h-10 w-auto max-w-none shrink-0"
      />
    </Link>
  )
}
