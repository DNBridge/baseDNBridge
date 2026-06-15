import BrandLogo from './BrandLogo'
import HeaderClient from './HeaderClient'
import { brandConfig } from '@/config/brand'

export default function Header() {
  return (
    <HeaderClient
      logo={
        <a
          href="#"
          className="flex-shrink-0 -my-1 transition-transform duration-300 hover:scale-105"
          aria-label="Volver al inicio"
        >
          <BrandLogo className={brandConfig.logo.headerClassName} priority />
        </a>
      }
    />
  )
}
