import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { RateLimiterMemory } from 'rate-limiter-flexible'
import { prisma } from '@/lib/prisma'
import { sendLeadNotificationEmail, sendConfirmationEmailToLead } from '@/lib/email'

// Schema de validación
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().min(3),
  message: z.string().min(10),
  budget: z.string().optional(),
  website: z.string().max(0).optional(), // Honeypot
})

// Rate limiter: máximo 5 requests por IP cada 15 minutos
const rateLimiter = new RateLimiterMemory({
  points: 5, // Número de requests
  duration: 900, // Por 15 minutos
})

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  const realIP = request.headers.get('x-real-ip')
  if (realIP) {
    return realIP
  }
  return 'unknown'
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request)
    try {
      await rateLimiter.consume(clientIP)
    } catch {
      return NextResponse.json(
        { message: 'Demasiadas solicitudes. Por favor intenta más tarde.' },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Validar datos
    const validatedData = contactSchema.parse(body)

    // Verificar honeypot (si está lleno, es un bot)
    if (validatedData.website && validatedData.website.length > 0) {
      return NextResponse.json({ message: 'Spam detectado' }, { status: 400 })
    }

    // Guardar lead en base de datos
    let lead
    try {
      lead = await prisma.lead.create({
        data: {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone || null,
          company: validatedData.company || null,
          projectType: validatedData.projectType,
          message: validatedData.message,
          budget: validatedData.budget || null,
          source: 'landing-page',
          status: 'new',
        },
      })
    } catch (dbError) {
      console.error('Error al guardar lead en BD:', dbError)
      // Si falla la BD pero tenemos los datos, continuamos con el email
      // para no perder el lead
      lead = null
    }

    // Enviar emails - esperamos un poco para que se completen antes de retornar
    const emailPromises = Promise.all([
      sendLeadNotificationEmail({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company,
        projectType: validatedData.projectType,
        message: validatedData.message,
        budget: validatedData.budget,
      })
        .then((result) => {
          if (result) {
            console.log('[CONTACT API] ✅ Email de notificación enviado exitosamente:', result.messageId)
          } else {
            console.warn('[CONTACT API] ⚠️ Email de notificación retornó null (transporter no disponible)')
          }
          return result
        })
        .catch((error) => {
          console.error('[CONTACT API] ❌ Error al enviar email de notificación:', error)
          return null
        }),
      sendConfirmationEmailToLead({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company,
        projectType: validatedData.projectType,
        message: validatedData.message,
        budget: validatedData.budget,
      })
        .then((result) => {
          if (result) {
            console.log('[CONTACT API] ✅ Email de confirmación enviado exitosamente:', result.messageId)
          } else {
            console.warn('[CONTACT API] ⚠️ Email de confirmación retornó null (transporter no disponible)')
          }
          return result
        })
        .catch((error) => {
          console.error('[CONTACT API] ❌ Error al enviar email de confirmación:', error)
          return null
        }),
    ]).catch((error) => {
      console.error('[CONTACT API] ❌ Error crítico en el proceso de emails:', error)
      return [null, null]
    })

    // 🎯 Esperar máximo 3 segundos para que los emails se envíen
    // Si tardan más, retornamos igual para no hacer la respuesta muy lenta
    const timeoutPromise = new Promise((resolve) => {
      setTimeout(() => resolve([null, null]), 3000)
    })

    try {
      await Promise.race([emailPromises, timeoutPromise])
    } catch (error) {
      console.error('[CONTACT API] Error inesperado esperando emails:', error)
    }

    return NextResponse.json(
      {
        message: '¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.',
        success: true,
        leadId: lead?.id,
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Datos inválidos', errors: error.errors },
        { status: 400 }
      )
    }

    console.error('Error en API de contacto:', error)
    return NextResponse.json(
      { message: 'Error al procesar la solicitud. Por favor intenta más tarde.' },
      { status: 500 }
    )
  }
}

