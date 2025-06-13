/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        sunset: {
          DEFAULT: '#ff6b6b',
          light: '#ff8787',
          dark: '#fa5252',
        },
        electric: {
          DEFAULT: '#ff9f1c',
          light: '#ffb649',
          dark: '#f08c00',
        },
        mint: {
          DEFAULT: '#4ade80',
          light: '#86efac',
          dark: '#22c55e',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 4px 10px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}

