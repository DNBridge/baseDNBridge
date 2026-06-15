import {
  AlertCircle,
  ArrowRight,
  Boxes,
  Brain,
  CalendarCheck,
  Check,
  CheckCircle,
  ChevronDown,
  Circle,
  Cloud,
  Code,
  Handshake,
  Headphones,
  Heart,
  History,
  Info,
  Laptop,
  Layers,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Network,
  PencilRuler,
  Phone,
  PlayCircle,
  Rocket,
  Server,
  Shield,
  Smartphone,
  Target,
  X,
  type LucideIcon,
} from 'lucide-react'

const ICON_MAP: Record<string, LucideIcon> = {
  'fas fa-calendar-check': CalendarCheck,
  'fas fa-arrow-right': ArrowRight,
  'fas fa-laptop-code': Laptop,
  'fas fa-mobile-screen-button': Smartphone,
  'fas fa-mobile-alt': Smartphone,
  'fas fa-server': Server,
  'fas fa-headset': Headphones,
  'fas fa-play-circle': PlayCircle,
  'fas fa-code': Code,
  'fas fa-cloud': Cloud,
  'fas fa-brain': Brain,
  'fas fa-project-diagram': Network,
  'fas fa-pencil-ruler': PencilRuler,
  'fas fa-cubes': Boxes,
  'fas fa-rocket': Rocket,
  'fas fa-shield-alt': Shield,
  'fas fa-layer-group': Layers,
  'fas fa-history': History,
  'fas fa-bullseye': Target,
  'fas fa-heart': Heart,
  'fas fa-handshake': Handshake,
  'fas fa-check-circle': CheckCircle,
  'fas fa-exclamation-circle': AlertCircle,
  'fas fa-info-circle': Info,
  'fas fa-chevron-down': ChevronDown,
  'fas fa-check': Check,
  'fas fa-times': X,
  'fas fa-bars': Menu,
  'fas fa-circle': Circle,
  'fas fa-envelope': Mail,
  'fas fa-phone': Phone,
  'fas fa-map-marker-alt': MapPin,
  'fas fa-spinner': Loader2,
}

interface IconProps {
  name: string
  className?: string
}

export default function Icon({ name, className = '' }: IconProps) {
  const spin = name.includes('fa-spin')
  const iconKey = name.replace(' fa-spin', '').trim()
  const LucideIcon = ICON_MAP[iconKey]

  if (!LucideIcon) return null

  return (
    <LucideIcon
      className={`inline-block shrink-0 ${spin ? 'animate-spin' : ''} ${className}`.trim()}
      aria-hidden
    />
  )
}
