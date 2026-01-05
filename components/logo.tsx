import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export function Logo({ className, width = 140, height = 40 }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <Image
        src="/images/logo-002.png"
        alt="YappiX — IT-студия полного цикла"
        width={width}
        height={height}
        priority
        className="h-8 md:h-10 w-auto"
      />
    </Link>
  )
}
