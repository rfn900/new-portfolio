const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Open sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
      mono: ['interstate-mono', 'monospace', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      screens: {
        xs: '330px',
      },
      inset: {
        18: '4.5rem',
      },
      colors: {
        warmGray: colors.stone,
        themeGray: {
          light: '#fdfbf6',
          mediumLight: '#CCCCCB',
          medium: '#303D3F',
          base: '#2D2E32',
          dark: '#282A2D',
          darker: '#24262A',
        },
        altYellow: {
          400: '#F0C149',
        },
        altGreen: {
          400: '#276F6B',
        },
        altOrange: {
          400: '#F2643F',
        },
      },
    },
  },
  plugins: [],
}
