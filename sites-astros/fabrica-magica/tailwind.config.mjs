/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#FDF8F0',
        'cream-dark': '#F5EDE0',
        'warm-white': '#FEFCF9',
        verde: { light: '#E8F5E9', DEFAULT: '#2E7D5B', dark: '#1B5E3B' },
        azul: { light: '#E3F2FD', DEFAULT: '#4A90D9', dark: '#2E6DB4' },
        dourado: { light: '#FFF8E1', DEFAULT: '#E8A838', dark: '#C88B20' },
        coral: { light: '#FFF3F0', DEFAULT: '#E07A5F' },
        lavanda: { light: '#F3E8FF', DEFAULT: '#9B72CF' },
        texto: { DEFAULT: '#2D2D2D', muted: '#6B6560', light: '#8A8279' },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'book': '1rem',
      },
    },
  },
  plugins: [],
};
