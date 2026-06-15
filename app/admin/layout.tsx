import type { Metadata } from 'next'
import { noIndexMetadata } from '@/config/seo'

export const metadata: Metadata = noIndexMetadata

export default function AdminLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return children
}
