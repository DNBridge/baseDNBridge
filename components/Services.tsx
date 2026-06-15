'use client'

import { services } from '@/config/content'
import Icon from './ui/Icon'
import SectionHeader from './ui/SectionHeader'
import AnimatedSection from './ui/AnimatedSection'

export default function Services() {
  return (
    <section id="servicios" className="section-dark py-24 md:py-32">
      <div className="absolute inset-0 bg-mesh-dark pointer-events-none" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeader
            dark
            badge="Servicios"
            title={
              <>
                Soluciones integrales de{' '}
                <span className="gradient-text">desarrollo</span>
              </>
            }
            subtitle="Desde MVPs hasta plataformas en producción: web, mobile, APIs, cloud y productos propios para distintos tipos de negocio."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              delay={index * 100}
              className={index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <div
                className={`glass-card-dark p-8 h-full group ${
                  index === 0 ? 'lg:row-span-1 bg-gradient-to-br from-primary-blue/10 to-accent-violet/5' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center
                    group-hover:bg-primary-blue/20 transition-all duration-500 group-hover:scale-110">
                    <Icon name={service.icon} className="text-primary-blue w-6 h-6" />
                  </div>
                  <span className="text-white/20 text-4xl font-bold group-hover:text-primary-blue/30 transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
