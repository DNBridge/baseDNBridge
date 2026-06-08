/**
 * Contenido centralizado de la landing page
 * Facilita la actualización y mantenimiento del contenido
 */

export interface Testimonial {
  stars: number
  text: string
  author: string
  role: string
  company: string
  initials: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Service {
  icon: string
  title: string
  description: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface TechStack {
  title: string
  subtitle: string
  icon: string
  technologies: string[]
}

export interface AboutSection {
  title: string
  content: string[]
  icon?: string
}

export interface HeroHighlight {
  icon: string
  label: string
  description: string
}

export const heroContent = {
  badge: 'Consulta gratuita',
  title: {
    before: 'Desarrollamos el',
    highlight: 'software que escala',
    after: 'con tu negocio',
  },
  subtitle:
    'MVPs, plataformas web, apps móviles e integraciones — desde la idea hasta producción, con metodología ágil y entregas concretas.',
  pills: ['Producto propio', 'Desarrollo a demanda'],
  cta: {
    primary: {
      label: 'Agendar consulta',
      shortLabel: 'Consulta',
      icon: 'fas fa-calendar-check',
    },
    secondary: { label: 'Ver servicios', icon: 'fas fa-arrow-right' },
  },
  trustNote: 'Sin compromiso',
  highlights: [
    { icon: 'fas fa-laptop-code', label: 'Web & SaaS', description: 'Plataformas y dashboards' },
    { icon: 'fas fa-mobile-screen-button', label: 'Apps móviles', description: 'iOS y Android' },
    { icon: 'fas fa-server', label: 'APIs & Cloud', description: 'Backend escalable' },
    { icon: 'fas fa-headset', label: 'Soporte', description: 'Post-lanzamiento' },
  ] as HeroHighlight[],
}

export const ctaContent = {
  badge: 'Sin compromiso',
  title: {
    before: '¿Tenés un proyecto en mente?',
    highlight: 'Hablemos',
  },
  subtitle:
    'Contanos tu idea — MVP, producto o sistema a medida —. Queremos escucharte, entender tu contexto y acompañarte con propuestas de mejora desde el primer contacto.',
  cta: {
    primary: { label: 'Agendar consulta', icon: 'fas fa-calendar-check' },
    secondary: { label: 'Ver cómo trabajamos', icon: 'fas fa-play-circle' },
  },
  trustPoints: [
    'Te escuchamos con atención',
    'Propuestas de mejora concretas',
  ],
}

// Testimonios
export const testimonials: Testimonial[] = [
  {
    stars: 5,
    text: 'DNBridge transformó completamente nuestra operación digital. Su equipo entendió nuestras necesidades desde el primer día y entregó una plataforma que superó nuestras expectativas. La implementación fue impecable.',
    author: 'María Rodríguez',
    role: 'CEO',
    company: 'NovaRetail',
    initials: 'MR',
  },
  {
    stars: 5,
    text: 'La calidad del código y la atención al detalle son excepcionales. Trabajar con DNBridge ha sido una experiencia fluida y profesional de principio a fin. Nuestra plataforma interna ahora es el estándar en la empresa.',
    author: 'Jorge García',
    role: 'CTO',
    company: 'LogiFlow Systems',
    initials: 'JG',
  },
  {
    stars: 5,
    text: 'Increíble rapidez y eficiencia. El equipo de DNBridge no solo cumplió con los plazos, sino que también aportó ideas valiosas que mejoraron nuestro producto final. Su capacidad de adaptarse a distintos tipos de proyecto es evidente.',
    author: 'Laura Pérez',
    role: 'Founder',
    company: 'BuildStack Labs',
    initials: 'LP',
  },
]

// Stack tecnológico
export const techStacks: TechStack[] = [
  {
    title: 'Frontend & Backend',
    subtitle: 'React en el frontend y Golang en el backend — stack principal para apps web y APIs escalables',
    icon: 'fas fa-code',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Golang', 'Node.js'],
  },
  {
    title: 'Cloud & DevOps',
    subtitle: 'Infraestructura, despliegue y servicios en la nube',
    icon: 'fas fa-cloud',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    title: 'IA & Integraciones',
    subtitle: 'Modelos, agentes e integraciones inteligentes cuando el proyecto lo requiere',
    icon: 'fas fa-brain',
    technologies: ['OpenAI', 'AWS Bedrock', 'LangChain', 'RAG', 'Embeddings'],
  },
]

export const workMethodology: TechStack = {
  title: 'Metodología de trabajo',
  subtitle: 'Proceso claro, entregas frecuentes y visibilidad total en cada etapa del proyecto',
  icon: 'fas fa-project-diagram',
  technologies: [
    'Agile / Scrum',
    'Sprints iterativos',
    'Code review',
    'CI/CD continuo',
    'Documentación',
    'Comunicación transparente',
  ],
}

function formatStackLine(stack: TechStack): string {
  return `${stack.title} (${stack.technologies.join(', ')})`
}

function technologiesFaqAnswer(): string {
  const stacks = techStacks.map(formatStackLine).join('; ')
  return `Usamos el mismo stack que detallamos en la sección Stack & Metodología: ${stacks}. Elegimos herramientas según lo que cada proyecto necesite, no al revés.`
}

function methodologyFaqAnswer(): string {
  const practices = workMethodology.technologies.join(', ')
  return `Sí, y es parte de cómo trabajamos. Seguimos la metodología que mostramos en Stack & Metodología: ${practices}. Preferimos detectar ajustes temprano, comunicarlos con transparencia y replanificar juntos antes que avanzar en una dirección que ya no sirve.`
}

function qualityFaqAnswer(): string {
  return `Entregamos código mantenible, con buenas prácticas, code review y CI/CD continuo — tal como detallamos en nuestra metodología de trabajo (sección Stack & Metodología). Si surgen bugs dentro del período de soporte acordado, los resolvemos. Nuestro foco está en construir algo sólido, claro y listo para crecer — no en promesas vacías, sino en un trabajo que puedas sostener en el tiempo.`
}

// FAQs
export const faqs: FAQItem[] = [
  {
    question: '¿Qué tipos de proyectos desarrollan?',
    answer:
      'Trabajamos en dos líneas: productos propios que desarrollamos y escalamos internamente, y proyectos a medida para clientes. MVPs, plataformas web, apps móviles, APIs, integraciones, dashboards e infraestructura cloud. Nos adaptamos al contexto y escala de cada negocio.',
  },
  {
    question: '¿Cuánto tiempo toma desarrollar un proyecto?',
    answer:
      'Depende del alcance y la complejidad. Un MVP puede llevar algunas semanas; una plataforma más completa, varios meses. En la consulta inicial entendemos tu idea, definimos prioridades y te proponemos un cronograma realista — con hitos claros y espacio para ajustar el rumbo si el proyecto evoluciona.',
  },
  {
    question: '¿Ofrecen soporte después del lanzamiento?',
    answer:
      'Sí. Acompañamos el post-lanzamiento según lo que cada proyecto necesite: correcciones, mejoras, monitoreo o mantenimiento continuo. Definimos juntos el nivel de soporte en la propuesta, sin paquetes rígidos que no tengan sentido para tu caso.',
  },
  {
    question: '¿Qué tecnologías utilizan?',
    answer: technologiesFaqAnswer(),
  },
  {
    question: '¿Puedo solicitar cambios durante el desarrollo?',
    answer: methodologyFaqAnswer(),
  },
  {
    question: '¿Qué calidad puedo esperar del código y la entrega?',
    answer: qualityFaqAnswer(),
  },
]

// Servicios
export const services: Service[] = [
  {
    icon: 'fas fa-laptop-code',
    title: 'Desarrollo Web',
    description:
      'Aplicaciones web, dashboards y plataformas SaaS con las últimas tecnologías.',
  },
  {
    icon: 'fas fa-mobile-screen-button',
    title: 'Apps Móviles',
    description:
      'Desarrollo nativo e híbrido para iOS y Android, desde MVPs hasta productos en producción.',
  },
  {
    icon: 'fas fa-pencil-ruler',
    title: 'UI/UX Design',
    description:
      'Interfaces limpias y experiencias centradas en el usuario, con enfoque minimalista y funcional.',
  },
  {
    icon: 'fas fa-server',
    title: 'Backend & APIs',
    description:
      'APIs robustas, microservicios, integraciones con sistemas existentes y arquitecturas escalables.',
  },
  {
    icon: 'fas fa-cloud',
    title: 'DevOps & Cloud',
    description:
      'Infraestructura cloud, CI/CD, monitoreo y despliegues automatizados listos para escalar.',
  },
  {
    icon: 'fas fa-cubes',
    title: 'Productos Propios',
    description:
      'Desarrollamos y mantenemos productos de software propios, aplicando aprendizajes de cada proyecto.',
  },
]

// Características
export const features: Feature[] = [
  {
    icon: 'fas fa-rocket',
    title: 'Desarrollo Ágil',
    description:
      'Utilizamos metodologías ágiles para entregar valor rápidamente, con iteraciones constantes y retroalimentación continua.',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Seguridad Integrada',
    description:
      'Implementamos prácticas de seguridad desde el diseño inicial, protegiendo tus datos y los de tus clientes.',
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Experiencias Multiplataforma',
    description:
      'Desarrollamos aplicaciones nativas y web responsivas que funcionan perfectamente en todos los dispositivos.',
  },
  {
    icon: 'fas fa-cloud',
    title: 'Arquitecturas Escalables',
    description:
      'Diseñamos sistemas que crecen con tu negocio, utilizando las mejores prácticas de arquitectura de software.',
  },
  {
    icon: 'fas fa-layer-group',
    title: 'Versatilidad Multi-industria',
    description:
      'Trabajamos en distintos sectores y tipos de producto, eligiendo el stack y la arquitectura adecuada para cada caso.',
  },
  {
    icon: 'fas fa-headset',
    title: 'Soporte Continuo',
    description:
      'Ofrecemos mantenimiento y soporte post-lanzamiento para garantizar el funcionamiento óptimo de tus aplicaciones.',
  },
]

// Sección Nosotros
export const aboutContent = {
  mainTitle: 'Sobre Nosotros',
  subtitle: 'Una startup tecnológica enfocada en construir productos y proyectos de calidad, sin importar el sector ni la escala.',
  sections: [
    {
      title: 'Nuestra Historia',
      content: [
        'Somos una startup de software con equipo reducido, espíritu ágil y muchas ganas de construir. Nacimos con la misión de transformar ideas en productos digitales sólidos y proyectos a medida de alto impacto — con la energía de quien está creciendo y el criterio de quien lleva el craft en serio.',
      ],
      icon: 'fas fa-history',
    },
    {
      title: 'Nuestra Misión',
      content: [
        'Combinamos dos líneas de trabajo: productos propios que resolvemos y escalamos internamente, y proyectos a medida para clientes que necesitan soluciones específicas. Web, mobile, APIs, integraciones — lo que el proyecto requiera.'
      ],
      icon: 'fas fa-bullseye'
    },
    {
      title: 'Qué nos Define',
      content: [
        '<strong>Claridad y enfoque</strong>: Código legible, decisiones simples y entregas que resuelven de verdad. Priorizamos lo que aporta valor, sin complejidad innecesaria.',
        '<strong>Respeto por los tiempos</strong>: En software, los plazos importan. Planificamos con realismo, comunicamos avances con transparencia y nos adaptamos cuando el proyecto evoluciona.',
        '<strong>Adaptabilidad</strong>: Cada proyecto es distinto. Seleccionamos stack, arquitectura y metodología según el contexto, no según un molde fijo.',
      ],
      icon: 'fas fa-heart',
    },
    {
      title: 'Cómo empezamos juntos',
      content: [
        '<strong>1. Discovery</strong>: Escuchamos tu idea, entendemos el contexto de tu negocio y definimos objetivos claros.',
        '<strong>2. Propuesta</strong>: Te presentamos alcance, stack recomendado y plan de trabajo con presupuesto orientativo.',
        '<strong>3. Desarrollo</strong>: Trabajamos en sprints con entregas frecuentes, demos y feedback continuo.',
        '<strong>4. Entrega</strong>: Llevamos el proyecto a producción y te acompañamos en el soporte post-lanzamiento.',
      ],
      icon: 'fas fa-handshake',
    },
  ] as AboutSection[]
}

