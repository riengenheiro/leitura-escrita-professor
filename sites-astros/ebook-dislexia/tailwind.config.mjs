/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2C3E99',
        'primary-dark': '#1a2570',
        secondary: '#4CAF50',
        'secondary-dark': '#2E7D32',
        accent: '#FF9800',
        surface: '#F7F8FC',
        warm: '#FFF9F0',
      },
      fontFamily: {
        sans: ['Poppins', 'Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
