import type { ReactNode } from 'react'

interface SectionHeaderProps {
  badge: string
  title: ReactNode
  subtitle: string
  dark?: boolean
  centered?: boolean
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  dark = false,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <span className="section-badge mb-4">
        {badge}
      </span>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight ${
          dark ? 'text-white' : 'text-primary-dark'
        }`}
      >
        {title}
      </h2>
      <p
        className={`max-w-2xl text-lg leading-relaxed ${centered ? 'mx-auto' : ''} ${
          dark ? 'text-white/70' : 'text-dark-gray'
        }`}
      >
        {subtitle}
      </p>
    </div>
  )
}
