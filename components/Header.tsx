'use client'

import { useState, useEffect } from 'react'
import ContactModal from './ContactModal'
import BrandLogo from './BrandLogo'
import { useContactModal } from '@/hooks/useContactModal'
import { useActiveSection } from '@/hooks/useActiveSection'
import { heroContent } from '@/config/content'
import { brandConfig } from '@/config/brand'

const NAV_ITEMS = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'tecnologias', label: 'Tecnologías' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'faq', label: 'FAQ' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isOpen, openModal, closeModal, submitContact } = useContactModal()
  const activeSection = useActiveSection(NAV_ITEMS.map((item) => item.id))

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20)
        ticking = false
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>

    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        if (window.innerWidth >= 768) setIsMobileMenuOpen(false)
      }, 150)
    }

    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4">
        <div
          className={`container-custom mx-auto flex items-center justify-between gap-4 rounded-2xl px-4 md:px-6 py-2 md:py-2.5 transition-all duration-500 bg-primary-dark ${
            scrolled
              ? 'border border-white/10 shadow-2xl shadow-primary-dark/30'
              : 'border border-white/5'
          }`}
        >
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex-shrink-0 -my-1 transition-transform duration-300 hover:scale-105"
          >
            <BrandLogo className={brandConfig.logo.headerClassName} priority />
          </a>

          <nav className="hidden lg:flex items-center gap-1 bg-white/5 rounded-xl p-1 border border-white/5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-blue" />
                )}
              </a>
            ))}
          </nav>

          <button
            onClick={openModal}
            className="hidden md:block btn-primary !px-5 !py-2.5 !text-sm"
          >
            <span className="hidden xl:inline">{heroContent.cta.primary.label}</span>
            <span className="xl:hidden">{heroContent.cta.primary.shortLabel}</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-primary-dark/90 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <nav
          className={`absolute top-24 left-4 right-4 bg-surface-card/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary-blue/10 text-primary-blue border border-primary-blue/20'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && <i className="fas fa-circle text-[6px] text-primary-blue" />}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => { openModal(); setIsMobileMenuOpen(false) }}
            className="w-full mt-6 btn-primary"
          >
            {heroContent.cta.primary.label}
          </button>
        </nav>
      </div>

      <ContactModal isOpen={isOpen} onClose={closeModal} onSubmit={submitContact} />
    </>
  )
}
