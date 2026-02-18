/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
}
