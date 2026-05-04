/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D8FF2',
        'btn-primary': '#1C8C4D',
        'btn-secondary': '#F28705',
        accent: '#F2C849',
        surface: '#F2F2F2',
      },
    },
  },
  plugins: [],
};
