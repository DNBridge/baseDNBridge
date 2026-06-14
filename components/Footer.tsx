import { companyConfig } from '@/config/company'
import { brandConfig } from '@/config/brand'
import BrandLogo from './BrandLogo'

const FOOTER_LINKS = {
  servicios: [
    { label: 'Desarrollo Web', href: '#servicios' },
    { label: 'Apps Móviles', href: '#servicios' },
    { label: 'Backend & APIs', href: '#servicios' },
    { label: 'UI/UX Design', href: '#servicios' },
    { label: 'DevOps & Cloud', href: '#servicios' },
    { label: 'Productos Propios', href: '#servicios' },
  ],
  empresa: [
    { label: 'Sobre Nosotros', href: '#nosotros' },
    { label: 'Tecnologías', href: '#tecnologias' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8 border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1 flex flex-col items-start">
            <a
              href="#"
              className="inline-flex -my-1 mb-1 transition-transform duration-300 hover:scale-105"
              aria-label="Volver al inicio"
            >
              <BrandLogo className={brandConfig.logo.footerClassName} />
            </a>
            <p className="text-white/50 mb-6 leading-relaxed text-sm max-w-xs -mt-1">
              Productos propios y proyectos a medida para distintos sectores e industrias.
            </p>
            <div className="flex gap-3">
              {[
                { icon: 'fab fa-linkedin-in', url: companyConfig.socialMedia.linkedin },
                { icon: 'fab fa-twitter', url: companyConfig.socialMedia.twitter },
                { icon: 'fab fa-github', url: companyConfig.socialMedia.github },
                { icon: 'fab fa-instagram', url: companyConfig.socialMedia.instagram },
              ]
                .filter((s) => s.url)
                .map((social) => (
                  <a
                    key={social.icon}
                    href={social.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center
                      transition-all duration-300 hover:bg-primary-blue/20 hover:border-primary-blue/40 hover:-translate-y-1"
                  >
                    <i className={`${social.icon} text-white/70 hover:text-primary-blue text-sm`} />
                  </a>
                ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Servicios</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary-blue transition-all duration-300 text-sm inline-flex items-center gap-1 hover:translate-x-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Empresa</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary-blue transition-all duration-300 text-sm inline-flex items-center gap-1 hover:translate-x-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${companyConfig.email}`}
                  className="text-white/60 hover:text-primary-blue transition-colors text-sm inline-flex items-center gap-2"
                >
                  <i className="fas fa-envelope text-primary-blue/60 w-4" />
                  {companyConfig.email}
                </a>
              </li>
              <li className="space-y-2">
                <a
                  href={`tel:${companyConfig.phone.replace(/\s/g, '')}`}
                  className="text-white/60 hover:text-primary-blue transition-colors text-sm inline-flex items-center gap-2"
                >
                  <i className="fas fa-phone text-primary-blue/60 w-4" />
                  {companyConfig.phone}
                </a>
                <p className="text-white/60 text-sm flex items-start gap-2">
                  <i className="fas fa-map-marker-alt text-primary-blue/60 w-4 mt-0.5" />
                  {companyConfig.address}
                </p>
              </li>
              <li className="space-y-2">
                <a
                  href={`tel:${companyConfig.phone2.replace(/\s/g, '')}`}
                  className="text-white/60 hover:text-primary-blue transition-colors text-sm inline-flex items-center gap-2"
                >
                  <i className="fas fa-phone text-primary-blue/60 w-4" />
                  {companyConfig.phone2}
                </a>
                <p className="text-white/60 text-sm flex items-start gap-2">
                  <i className="fas fa-map-marker-alt text-primary-blue/60 w-4 mt-0.5" />
                  {companyConfig.address2}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} DNBridge. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white/70 transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
