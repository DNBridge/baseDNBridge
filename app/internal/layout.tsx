import type { Metadata } from 'next'
import { noIndexMetadata } from '@/config/seo'
import { FontAwesomeStyles } from '@/components/FontAwesomeStyles'

export const metadata: Metadata = noIndexMetadata

export default function InternalLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <>
      <FontAwesomeStyles />
      {children}
    </>
  )
}
