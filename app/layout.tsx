import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ToastProvider } from '@/contexts/ToastContext'
import { ToastContainer } from '@/components/ToastContainer'
import { AsyncFontAwesome } from '@/components/AsyncFontAwesome'
import { buildRootMetadata, seoConfig } from '@/config/seo'
import { brandConfig } from '@/config/brand'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = buildRootMetadata()

export const viewport: Viewport = {
  themeColor: seoConfig.themeColor,
  width: 'device-width',
  initialScale: 1,
}

interface RootLayoutProps {
  readonly children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <head>
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link
          rel="preload"
          href={brandConfig.logo.src}
          as="image"
          fetchPriority="high"
        />
      </head>
      <body className={inter.className}>
        <AsyncFontAwesome />
        <ToastProvider>
          {children}
          <ToastContainer />
        </ToastProvider>
      </body>
    </html>
  )
}
