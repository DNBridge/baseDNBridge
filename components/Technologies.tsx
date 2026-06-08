'use client'

import { techStacks, workMethodology } from '@/config/content'
import SectionHeader from './ui/SectionHeader'
import AnimatedSection from './ui/AnimatedSection'

function StackCard({ stack, delay = 0 }: { stack: typeof techStacks[number]; delay?: number }) {
  return (
    <AnimatedSection delay={delay}>
      <div className="glass-card-dark p-6 md:p-8 h-full group hover:border-primary-blue/40">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-12 h-12 rounded-xl bg-primary-blue/15 flex items-center justify-center flex-shrink-0
            group-hover:bg-primary-blue/25 transition-colors duration-300">
            <i className={`${stack.icon} text-primary-blue text-xl`} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-brand-blue transition-colors duration-300">
              {stack.title}
            </h3>
            <p className="text-sm text-white/50 mt-1 leading-relaxed">{stack.subtitle}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {stack.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide
                bg-white/5 border border-white/10 text-white/75
                group-hover:border-primary-blue/30 group-hover:text-white transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function Technologies() {
  return (
    <section id="tecnologias" className="section-dark py-24 md:py-32">
      <div className="absolute inset-0 bg-mesh-dark pointer-events-none" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeader
            dark
            badge="Stack & Metodología"
            title={
              <>
                Tecnología sólida,{' '}
                <span className="gradient-text">proceso claro</span>
              </>
            }
            subtitle="Stack principal probado en producción y una forma de trabajo ágil que mantiene al cliente informado en cada sprint."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {techStacks.map((stack, index) => (
            <StackCard key={stack.title} stack={stack} delay={index * 80} />
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection delay={techStacks.length * 80}>
            <div className="brand-divider max-w-xs mx-auto mb-8" />
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
              Cómo trabajamos
            </p>
            <StackCard stack={workMethodology} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
