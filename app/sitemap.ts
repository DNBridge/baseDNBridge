import type { MetadataRoute } from 'next'
import { seoConfig } from '@/config/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: seoConfig.siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
