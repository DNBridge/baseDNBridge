import { faqs, heroContent, services } from '@/config/content'
import { companyConfig } from '@/config/company'
import { seoConfig, absoluteUrl } from '@/config/seo'

function stripHtml(text: string): string {
  return text.replace(/<[^>]*>/g, '')
}

export function buildOrganizationSchema() {
  const sameAs = Object.values(companyConfig.socialMedia).filter(Boolean) as string[]

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${seoConfig.siteUrl}/#organization`,
    name: seoConfig.siteName,
    legalName: seoConfig.legalName,
    url: seoConfig.siteUrl,
    logo: absoluteUrl('/images/dnbridge-logo-nav.png'),
    email: companyConfig.email,
    telephone: [companyConfig.phone, companyConfig.phone2],
    sameAs,
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Córdoba',
        addressCountry: 'AR',
        addressRegion: 'Córdoba',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Bombinhas',
        addressRegion: 'SC',
        addressCountry: 'BR',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: companyConfig.email,
      telephone: companyConfig.phone,
      availableLanguage: ['Spanish', 'Portuguese', 'English'],
    },
  }
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${seoConfig.siteUrl}/#website`,
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.defaultDescription,
    inLanguage: seoConfig.language,
    publisher: {
      '@id': `${seoConfig.siteUrl}/#organization`,
    },
  }
}

export function buildWebPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${seoConfig.siteUrl}/#webpage`,
    url: seoConfig.siteUrl,
    name: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    inLanguage: seoConfig.language,
    isPartOf: {
      '@id': `${seoConfig.siteUrl}/#website`,
    },
    about: {
      '@id': `${seoConfig.siteUrl}/#organization`,
    },
  }
}

export function buildProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${seoConfig.siteUrl}/#service`,
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: heroContent.subtitle,
    image: absoluteUrl('/images/dnbridge-logo.png'),
    email: companyConfig.email,
    telephone: companyConfig.phone,
    areaServed: [
      { '@type': 'Country', name: 'Argentina' },
      { '@type': 'Country', name: 'Brasil' },
    ],
    serviceType: services.map((service) => service.title),
    provider: {
      '@id': `${seoConfig.siteUrl}/#organization`,
    },
  }
}

export function buildFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${seoConfig.siteUrl}/#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(faq.answer),
      },
    })),
  }
}

export function buildHomeJsonLd() {
  return [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    buildWebPageSchema(),
    buildProfessionalServiceSchema(),
    buildFaqSchema(),
  ]
}
