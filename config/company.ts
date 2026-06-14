/**
 * Configuración centralizada de datos de la empresa
 * Actualiza estos valores para reflejar la información real de DNBridge
 */

export interface CompanyConfig {
  name: string
  email: string
  phone: string
  phone2: string
  address: string
  address2: string
  socialMedia: {
    linkedin?: string
    twitter?: string
    github?: string
    instagram?: string
  }
}

export const companyConfig: CompanyConfig = {
  name: 'DNBridge',
  email: 'contacto@dnbridge.site', // Email público de contacto (se muestra en footer y emails)
  phone: '+54 (351) 81840650',
  address: 'Córdoba, Argentina',
  phone2: '+55 (47) 988157843',
  address2: 'Bombhinas,SC Brasil',
  socialMedia: {
    linkedin: 'https://linkedin.com/company/dnbridge',
    twitter: 'https://twitter.com/dnbridge',
    github: 'https://github.com/dnbridge',
    instagram: 'https://instagram.com/dnbridge',
  },
}

/**
 * Configuración de notificaciones
 */
export const notificationConfig = {
  // Email donde llegan las notificaciones de nuevos leads (tu bandeja de entrada)
  teamEmail: 'dnbridgedevs@gmail.com',
  // Email de respuesta automática (ya no se usa con Gmail SMTP, pero se mantiene por compatibilidad)
  autoReplyEmail: 'dnbridgedevs@gmail.com',
}

