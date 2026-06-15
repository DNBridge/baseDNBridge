import type { Metadata } from 'next'
import { brandConfig } from './brand'
import { companyConfig } from './company'

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dnbridge.site').replace(/\/$/, '')

export const seoConfig = {
  siteUrl,
  siteName: 'DN Bridge',
  legalName: companyConfig.name,
  defaultTitle: 'DN Bridge — Software Factory | Desarrollo Web y Apps a Medida',
  titleTemplate: '%s | DN Bridge',
  defaultDescription:
    'Software factory en Argentina y Brasil. Desarrollamos MVPs, plataformas web, apps móviles, APIs e integraciones con metodología ágil. Consulta gratuita.',
  keywords: [
    'software factory',
    'desarrollo de software',
    'desarrollo web',
    'apps móviles',
    'MVP',
    'desarrollo a medida',
    'SaaS',
    'APIs',
    'DevOps',
    'Argentina',
    'Córdoba',
    'Brasil',
    'DN Bridge',
    'DNBridge',
  ],
  locale: 'es_AR',
  language: 'es',
  twitterHandle: '@dnbridge',
  ogImage: {
    path: '/images/dnbridge-logo.png',
    width: 1200,
    height: 630,
    alt: 'DN Bridge — Software Factory',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    bing: process.env.BING_SITE_VERIFICATION,
    yandex: process.env.YANDEX_SITE_VERIFICATION,
  },
  themeColor: brandConfig.icon.background,
} as const

export function absoluteUrl(path: string = ''): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${seoConfig.siteUrl}${normalizedPath === '/' ? '' : normalizedPath}`
}

export function buildRootMetadata(overrides?: Metadata): Metadata {
  const ogImageUrl = absoluteUrl(seoConfig.ogImage.path)

  const verificationEntries = Object.entries(seoConfig.verification).filter(
    ([, value]) => Boolean(value),
  ) as [keyof NonNullable<Metadata['verification']>, string][]

  const verification =
    verificationEntries.length > 0
      ? Object.fromEntries(verificationEntries)
      : undefined

  return {
    metadataBase: new URL(seoConfig.siteUrl),
    title: {
      default: seoConfig.defaultTitle,
      template: seoConfig.titleTemplate,
    },
    description: seoConfig.defaultDescription,
    keywords: [...seoConfig.keywords],
    authors: [{ name: seoConfig.siteName, url: seoConfig.siteUrl }],
    creator: seoConfig.siteName,
    publisher: seoConfig.siteName,
    category: 'technology',
    alternates: {
      canonical: seoConfig.siteUrl,
      languages: {
        'es-AR': seoConfig.siteUrl,
        'es': seoConfig.siteUrl,
      },
    },
    openGraph: {
      type: 'website',
      locale: seoConfig.locale,
      url: seoConfig.siteUrl,
      siteName: seoConfig.siteName,
      title: seoConfig.defaultTitle,
      description: seoConfig.defaultDescription,
      images: [
        {
          url: ogImageUrl,
          width: seoConfig.ogImage.width,
          height: seoConfig.ogImage.height,
          alt: seoConfig.ogImage.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: seoConfig.twitterHandle,
      creator: seoConfig.twitterHandle,
      title: seoConfig.defaultTitle,
      description: seoConfig.defaultDescription,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: brandConfig.icon.src,
      shortcut: brandConfig.icon.src,
      apple: brandConfig.icon.apple,
    },
    manifest: '/manifest.webmanifest',
    ...(verification ? { verification } : {}),
    ...overrides,
  }
}

export const noIndexMetadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}
