/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        background: '#050505',
        surface: '#0f0f11',
        border: '#202024',
        primary: '#8b5cf6',
        primaryHover: '#7c3aed',
        accent: '#06b6d4',
        textMain: '#fafafa',
        textMuted: '#a1a1aa'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #8b5cf622 0deg, #06b6d422 180deg, #8b5cf622 360deg)',
      },
      animation: {
        'slow-spin': 'spin 15s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
