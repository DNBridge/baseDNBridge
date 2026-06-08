/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0A0E27',
        'primary-blue': '#4F46E5',
        'brand-blue': '#8B85F0',
        'accent-orange': '#FF5C00',
        'accent-violet': '#1A1060',
        'accent-yellow': '#FFB347',
        'light-gray': '#E8E8FF',
        'medium-gray': '#D8D8F5',
        'dark-gray': '#5A5A7A',
        surface: {
          DEFAULT: '#060818',
          light: '#E8E8FF',
          card: '#1A1060',
        },
        'color-1': '#E8E8FF',
        'color-2': '#E0E0FA',
        'color-3': '#D4D4F5',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-dark':
          'radial-gradient(at 40% 20%, rgba(79,70,229,0.2) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(26,16,96,0.25) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(255,92,0,0.1) 0px, transparent 50%)',
        'mesh-light':
          'radial-gradient(at 0% 0%, rgba(79,70,229,0.08) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(255,179,71,0.06) 0px, transparent 50%)',
        'brand-gradient':
          'linear-gradient(90deg, #4F46E5 0%, #FF5C00 50%, #FFB347 100%)',
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.8s ease both',
        'fade-in-up': 'fadeInUp 0.8s ease both',
        'fade-in': 'fadeIn 1s ease 0.6s both',
        'gradient-shift': 'gradientShift 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        marquee: 'marquee 40s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.7' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
