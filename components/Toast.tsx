'use client'

import { useEffect, useState } from 'react'
import Icon from './ui/Icon'

// 🎯 Purpose: Define los tipos de notificaciones disponibles
// 💡 Learning: TypeScript enum para type safety
export type ToastType = 'success' | 'error' | 'info'

interface ToastProps {
  message: string
  type?: ToastType
  duration?: number
  onClose: () => void
}

/**
 * 🎯 Purpose: Componente de notificación toast profesional
 * 🏗️ Architecture: Componente presentacional con animaciones
 * 🔧 Support Notes: Se auto-cierra después de la duración especificada
 * 💡 Learning: Usa estados para controlar animaciones de entrada/salida
 */
export default function Toast({ message, type = 'success', duration = 5000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  // Auto-cerrar después de la duración especificada
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  const handleClose = () => {
    setIsExiting(true)
    // Esperar a que termine la animación antes de remover
    setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, 300) // Duración de la animación de salida
  }

  if (!isVisible) return null

  // Configuración de iconos según el tipo
  const icons = {
    success: 'fas fa-check-circle',
    error: 'fas fa-exclamation-circle',
    info: 'fas fa-info-circle',
  } as const

  // Configuración de colores según el tipo
  const colors = {
    success: 'bg-green-50 border-green-500 text-green-800',
    error: 'bg-red-50 border-red-500 text-red-800',
    info: 'bg-blue-50 border-blue-500 text-blue-800',
  }

  const iconColors = {
    success: 'text-green-500',
    error: 'text-red-500',
    info: 'text-blue-500',
  }

  return (
    <div
      className={`
        min-w-[320px] max-w-md
        p-4 rounded-lg shadow-2xl
        border-2 ${colors[type]}
        transform transition-all duration-300 ease-in-out
        ${isExiting ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'}
        flex items-start gap-3
        backdrop-blur-sm
      `}
      role="alert"
      aria-live="polite"
    >
      {/* Icono */}
      <div className={`flex-shrink-0 ${iconColors[type]}`}>
        <Icon name={icons[type]} className="w-6 h-6" />
      </div>

      {/* Mensaje */}
      <div className="flex-1">
        <p className="font-medium text-sm leading-relaxed">{message}</p>
      </div>

      {/* Botón de cerrar */}
      <button
        onClick={handleClose}
        className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Cerrar notificación"
      >
        <Icon name="fas fa-times" className="w-4 h-4" />
      </button>
    </div>
  )
}

