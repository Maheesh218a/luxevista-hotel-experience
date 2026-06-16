/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fbf8f1',
          100: '#f5efe0',
          200: '#eadab7',
          300: '#dfc086',
          400: '#d4af37', // Gold
          500: '#c59b27',
          600: '#a87c1c',
          700: '#865f19',
          800: '#714e1a',
          900: '#60411a',
          950: '#37220b',
        },
        dark: {
          bg: '#0F172A',
          card: '#1E293B',
          text: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
