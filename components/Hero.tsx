'use client'

import ContactModal from './ContactModal'
import Icon from './ui/Icon'
import { useContactModal } from '@/hooks/useContactModal'
import { heroContent } from '@/config/content'

export default function Hero() {
  const { isOpen, openModal, closeModal, submitContact } = useContactModal()

  const scrollToServices = () => {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center section-dark pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-mesh-dark pointer-events-none" />
      <div className="orb w-[500px] h-[500px] bg-primary-blue/20 -top-32 -left-32 animate-float" />
      <div className="orb w-[400px] h-[400px] bg-accent-violet/15 top-1/3 -right-32 animate-float-delayed" />
      <div className="orb w-[300px] h-[300px] bg-accent-orange/10 bottom-0 left-1/3 animate-float" />

      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #4F46E5, #1A1060, #FF5C00, #FFB347)',
          backgroundSize: '300% 300%',
          animation: 'gradientShift 8s ease infinite',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-badge mb-6 animate-fade-in-down">
            {heroContent.badge}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-[1.1] animate-fade-in-up">
            {heroContent.title.before}{' '}
            <span className="gradient-text">{heroContent.title.highlight}</span>
            <br className="hidden sm:block" />
            {' '}{heroContent.title.after}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-6 animate-fade-in-up">
            {heroContent.pills.map((pill, index) => (
              <span
                key={pill}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold text-white ${
                  index === 0 ? 'bg-accent-orange' : 'bg-primary-blue'
                }`}
              >
                {pill}
              </span>
            ))}
          </div>

          <p className="text-base md:text-xl max-w-2xl mx-auto mb-8 text-[#E8E8FF]/80 leading-relaxed animate-fade-in-up">
            {heroContent.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4 animate-fade-in-up">
            <button onClick={openModal} className="btn-primary">
              {heroContent.cta.primary.label}
              <Icon name={heroContent.cta.primary.icon} className="ml-2 w-4 h-4" />
            </button>
            <button onClick={scrollToServices} className="btn-secondary">
              {heroContent.cta.secondary.label}
              <Icon name={heroContent.cta.secondary.icon} className="ml-2 w-4 h-4" />
            </button>
          </div>

          <p className="text-sm text-[#E8E8FF]/50 mb-14 animate-fade-in-up">
            <Icon name="fas fa-check-circle" className="text-accent-orange mr-1.5 w-4 h-4 inline" />
            {heroContent.trustNote}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {heroContent.highlights.map((item) => (
              <div
                key={item.label}
                className="glass-card-dark px-4 py-5 text-center group hover:border-primary-blue/40"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-primary-blue/15 flex items-center justify-center
                  group-hover:bg-primary-blue/25 transition-colors duration-300">
                  <Icon name={item.icon} className="text-primary-blue w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-white mb-0.5">{item.label}</div>
                <div className="text-xs text-white/45">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
        <Icon name="fas fa-chevron-down" className="w-5 h-5" />
      </div>

      <ContactModal isOpen={isOpen} onClose={closeModal} onSubmit={submitContact} />
    </section>
  )
}
