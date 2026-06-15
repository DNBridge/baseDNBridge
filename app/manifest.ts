import type { MetadataRoute } from 'next'
import { seoConfig } from '@/config/seo'
import { brandConfig } from '@/config/brand'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seoConfig.siteName,
    short_name: 'DN Bridge',
    description: seoConfig.defaultDescription,
    start_url: '/',
    display: 'standalone',
    background_color: brandConfig.icon.background,
    theme_color: seoConfig.themeColor,
    lang: seoConfig.language,
    icons: [
      {
        src: brandConfig.icon.src,
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: brandConfig.icon.apple,
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
