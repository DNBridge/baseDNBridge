import Image from 'next/image'
import { brandConfig } from '@/config/brand'

interface BrandLogoProps {
  className?: string
  priority?: boolean
}

const ASPECT = brandConfig.logo.width / brandConfig.logo.height

export default function BrandLogo({
  className = 'h-14 md:h-[4.75rem] w-auto object-contain',
  priority = false,
}: BrandLogoProps) {
  const intrinsicHeight = 76
  const intrinsicWidth = Math.round(ASPECT * intrinsicHeight)

  return (
    <Image
      src={brandConfig.logo.src}
      alt={brandConfig.logo.alt}
      width={intrinsicWidth}
      height={intrinsicHeight}
      className={className}
      priority={priority}
      fetchPriority={priority ? 'high' : undefined}
    />
  )
}
