export const brandColors = {
  night: '#0A0E27',
  violet: '#1A1060',
  indigo: '#4F46E5',
  fire: '#FF5C00',
  warmYellow: '#FFB347',
  softText: '#E8E8FF',
  white: '#FFFFFF',
} as const

export const brandConfig = {
  colors: brandColors,
  logo: {
    src: '/images/dnbridge-logo-nav.png',
    alt: 'DN Bridge - Software Factory',
    width: 320,
    height: 320,
    headerClassName: 'h-16 sm:h-[4.25rem] md:h-[4.75rem] lg:h-20 w-auto object-contain',
    footerClassName: 'h-20 md:h-24 lg:h-[5.75rem] w-auto object-contain',
  },
  icon: {
    src: '/icon.png',
    apple: '/apple-icon.png',
    background: brandColors.night,
  },
} as const
