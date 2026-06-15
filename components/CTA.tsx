'use client'

import ContactModal from './ContactModal'
import { useContactModal } from '@/hooks/useContactModal'
import { ctaContent } from '@/config/content'
import Icon from './ui/Icon'
import AnimatedSection from './ui/AnimatedSection'

export default function CTA() {
  const { isOpen, openModal, closeModal, submitContact } = useContactModal()

  const scrollToNosotros = () => {
    document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-primary-dark" />
      <div className="absolute inset-0 bg-mesh-dark pointer-events-none" />
      <div className="orb w-[600px] h-[600px] bg-primary-blue/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #4F46E5, #1A1060, #FF5C00, #FFB347)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 6s ease infinite',
        }}
      />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-badge mb-6">{ctaContent.badge}</span>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {ctaContent.title.before}{' '}
              <span className="gradient-text">{ctaContent.title.highlight}</span>
            </h2>

            <p className="text-lg text-[#E8E8FF]/70 mb-8 leading-relaxed max-w-xl mx-auto">
              {ctaContent.subtitle}
            </p>

            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 text-sm text-[#E8E8FF]/60">
              {ctaContent.trustPoints.map((point) => (
                <li key={point} className="inline-flex items-center gap-2">
                  <Icon name="fas fa-check" className="text-accent-orange w-3.5 h-3.5" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openModal} className="btn-primary text-lg !px-10">
                {ctaContent.cta.primary.label}
                <Icon name={ctaContent.cta.primary.icon} className="ml-2 w-5 h-5" />
              </button>
              <button onClick={scrollToNosotros} className="btn-secondary text-lg !px-10">
                {ctaContent.cta.secondary.label}
                <Icon name={ctaContent.cta.secondary.icon} className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <ContactModal isOpen={isOpen} onClose={closeModal} onSubmit={submitContact} />
    </section>
  )
}
