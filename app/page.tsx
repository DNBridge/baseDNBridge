import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Services from '@/components/Services'
import Technologies from '@/components/Technologies'
import Nosotros from '@/components/Nosotros'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import { HomeJsonLd } from '@/components/JsonLd'
import { seoConfig } from '@/config/seo'

export const metadata: Metadata = {
  title: seoConfig.defaultTitle,
  description: seoConfig.defaultDescription,
  alternates: {
    canonical: seoConfig.siteUrl,
  },
}

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <main className="overflow-x-hidden">
        <Header />
        <Hero />
        <Features />
        <Services />
        <Technologies />
        <Nosotros />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
