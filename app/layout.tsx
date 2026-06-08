import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ToastProvider } from '@/contexts/ToastContext'
import { ToastContainer } from '@/components/ToastContainer'
import { brandConfig } from '@/config/brand'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DN Bridge - Software Factory',
  description:
    'Software factory minimalista. Desarrollamos productos propios y proyectos a medida para distintos sectores e industrias.',
  icons: {
    icon: brandConfig.icon.src,
    shortcut: brandConfig.icon.src,
    apple: brandConfig.icon.apple,
  },
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
