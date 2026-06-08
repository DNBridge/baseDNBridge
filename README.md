# DNBridge Landing Page

Landing page moderna para DNBridge, una software factory minimalista que desarrolla productos propios y proyectos a medida.

## 🚀 Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático para mejor desarrollo
- **Tailwind CSS** - Estilos utilitarios y diseño responsive
- **Font Awesome** - Iconos

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Estructura del Proyecto

```
├── app/
│   ├── layout.tsx       # Layout principal con metadata
│   ├── page.tsx         # Página principal
│   └── globals.css      # Estilos globales con Tailwind
├── components/
│   ├── Header.tsx       # Navegación principal
│   ├── Hero.tsx         # Sección hero
│   ├── Features.tsx     # Características principales
│   ├── Services.tsx     # Servicios ofrecidos
│   ├── Testimonials.tsx # Testimonios de clientes
│   ├── FAQ.tsx          # Preguntas frecuentes
│   ├── CTA.tsx          # Call to action
│   └── Footer.tsx       # Pie de página
└── public/              # Archivos estáticos
```

## 🎨 Personalización

### Colores

Los colores están definidos en `tailwind.config.js`:
- `primary-dark`: #0a2540
- `primary-blue`: #00d4ff
- `accent-orange`: #ff6b35

### Contenido

El contenido está en cada componente. Para modificar textos, edita los componentes en la carpeta `components/`.

## 📱 Responsive Design

El sitio está completamente optimizado para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (hasta 767px)

## 🚀 Build para Producción

```bash
npm run build
npm start
```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 🔧 Características

- ✅ Diseño moderno y profesional
- ✅ Totalmente responsive
- ✅ Animaciones suaves
- ✅ SEO optimizado (Next.js)
- ✅ TypeScript para type safety
- ✅ Tailwind CSS para estilos
- ✅ Componentes reutilizables
- ✅ Software factory — productos y proyectos multi-industria

## 📄 Licencia

Todos los derechos reservados - DNBridge 2025
