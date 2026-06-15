'use client'

import { aboutContent } from '@/config/content'
import Icon from './ui/Icon'
import SectionHeader from './ui/SectionHeader'
import AnimatedSection from './ui/AnimatedSection'

export default function Nosotros() {
  return (
    <section id="nosotros" className="section-light py-24 md:py-32">
      <div className="absolute inset-0 bg-mesh-light pointer-events-none" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeader
            badge="Nuestra historia"
            title={
              <>
                Conoce al equipo detrás de{' '}
                <span className="gradient-text">DNBridge</span>
              </>
            }
            subtitle={aboutContent.subtitle}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {aboutContent.sections.map((section, index) => (
            <AnimatedSection key={section.title} delay={index * 120} className="h-full">
              <div className="glass-card p-8 md:p-10 h-full group hover:border-accent-violet/30">
                <div className="flex items-center gap-4 mb-6">
                  {section.icon && (
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-blue/20 to-accent-violet/10 flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-500">
                      <Icon name={section.icon} className="text-primary-blue w-5 h-5" />
                    </div>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold text-primary-dark">{section.title}</h3>
                </div>

                <div className="space-y-3">
                  {section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-dark-gray leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
