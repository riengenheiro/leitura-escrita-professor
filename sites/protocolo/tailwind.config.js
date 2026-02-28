/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D8FF2',
        'btn-primary': '#1C8C4D',
        'btn-secondary': '#F28705',
        accent: '#F2C849',
        surface: '#F2F2F2',
        'energy': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#1D8FF2',
          600: '#1a7ed9',
          700: '#1565b8',
          800: '#125099',
          900: '#0e3d7a',
        },
        'vitality': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#1C8C4D',
          600: '#167d44',
          700: '#126b3a',
          800: '#0e5930',
          900: '#0a4726',
        },
        'dark': {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a25',
          600: '#252532',
        },
        'light': {
          50: '#ffffff',
          100: '#fefefe',
          200: '#fafafa',
          300: '#f5f5f5',
          400: '#f0f0f0',
        },
        'sunshine': {
          50: '#fffef0',
          100: '#fffce0',
          200: '#fff9c4',
          300: '#fff59d',
          400: '#F2C849',
          500: '#F28705',
          600: '#e67e00',
          700: '#cc6f00',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['DM Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
