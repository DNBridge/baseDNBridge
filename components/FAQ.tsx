'use client'

import { useState } from 'react'
import { faqs } from '@/config/content'
import Icon from './ui/Icon'
import SectionHeader from './ui/SectionHeader'
import AnimatedSection from './ui/AnimatedSection'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-alt py-24 md:py-32">
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeader
            badge="FAQ"
            title={
              <>
                Preguntas{' '}
                <span className="gradient-text">frecuentes</span>
              </>
            }
            subtitle="Respuestas claras sobre qué construimos, cómo trabajamos y qué podés esperar al contactarnos."
          />
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <AnimatedSection key={faq.question} delay={index * 60}>
              <div
                className={`rounded-2xl overflow-hidden transition-all duration-500 border ${
                  activeIndex === index
                    ? 'bg-white border-primary-blue/30 shadow-lg shadow-primary-blue/5'
                    : 'bg-white/60 border-transparent hover:border-medium-gray'
                }`}
              >
                <button
                  className="w-full p-5 md:p-6 flex justify-between items-center gap-4 text-left font-semibold text-primary-dark transition-colors hover:text-primary-blue"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className="text-base md:text-lg">{faq.question}</span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      activeIndex === index
                        ? 'bg-primary-blue text-white rotate-180'
                        : 'bg-light-gray text-dark-gray'
                    }`}
                  >
                    <Icon name="fas fa-chevron-down" className="w-4 h-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-dark-gray leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
