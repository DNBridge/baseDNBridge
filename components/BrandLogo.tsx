import Image from 'next/image'
import { brandConfig } from '@/config/brand'

interface BrandLogoProps {
  className?: string
  priority?: boolean
}

export default function BrandLogo({
  className = 'h-14 md:h-[4.75rem] w-auto object-contain',
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src={brandConfig.logo.src}
      alt={brandConfig.logo.alt}
      width={brandConfig.logo.width}
      height={brandConfig.logo.height}
      className={className}
      priority={priority}
      fetchPriority={priority ? 'high' : undefined}
      sizes={priority ? '(max-width: 1024px) 128px, 169px' : undefined}
    />
  )
}
