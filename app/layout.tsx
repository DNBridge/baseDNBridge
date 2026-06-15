import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ToastProvider } from '@/contexts/ToastContext'
import { ToastContainer } from '@/components/ToastContainer'
import { buildRootMetadata, seoConfig } from '@/config/seo'

const inter = Inter({ subsets: ['latin'] })

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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <ToastProvider>
          {children}
          <ToastContainer />
        </ToastProvider>
      </body>
    </html>
  )
}
