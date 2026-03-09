/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        vermelho: '#C0392B',
        'vermelho-hover': '#A93226',
        offwhite: '#FAFAFA',
        azul: '#1C2340',
        verde: '#1A7A4A',
        'verde-light': '#E8F5E9',
        cinza: '#555555',
        'cinza-light': '#999999',
        bege: '#FDF6F0',
        'bege-dark': '#F5EDE3',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
