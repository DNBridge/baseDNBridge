'use client'

import { useEffect } from 'react'

const FONT_AWESOME_URL =
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'

export function FontAwesomeStyles() {
  useEffect(() => {
    const existing = document.querySelector<HTMLLinkElement>(`link[href="${FONT_AWESOME_URL}"]`)
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = FONT_AWESOME_URL
    document.head.appendChild(link)
  }, [])

  return null
}
