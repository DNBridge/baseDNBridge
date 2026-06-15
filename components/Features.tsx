'use client'

import { features } from '@/config/content'
import Icon from './ui/Icon'
import SectionHeader from './ui/SectionHeader'
import AnimatedSection from './ui/AnimatedSection'

export default function Features() {
  return (
    <section id="features" className="section-alt py-24 md:py-32">
      <div className="absolute inset-0 bg-mesh-light pointer-events-none" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeader
            badge="Por qué elegirnos"
            title={
              <>
                Experiencia que genera{' '}
                <span className="gradient-text">resultados reales</span>
              </>
            }
            subtitle="Una software factory que combina productos propios y proyectos a medida, con foco en calidad, velocidad y adaptabilidad."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 80}>
              <div className="glass-card p-8 h-full group hover:border-primary-blue/30">
                <div className="w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br from-primary-blue/20 to-accent-violet/10 flex items-center justify-center
                  group-hover:from-primary-blue/30 group-hover:to-accent-violet/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={feature.icon} className="text-primary-blue w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary-dark group-hover:text-primary-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-dark-gray leading-relaxed text-sm">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
