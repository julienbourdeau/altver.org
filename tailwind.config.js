const fontFamily = require('tailwindcss/defaultTheme').fontFamily;

fontFamily.body = [...fontFamily.sans]
fontFamily.heading = [...fontFamily.serif]

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.mustache", "./ALTVER.md"],
  theme: {
    fontFamily,
    screens: {
      // 'md': '768px',
      // 'lg': '1024px',
      'md': '1024px',
    },

    extend: {
      colors: {
        'brand': '#e03131',
        'new': '#1971c2',
        'care': '#2f9e44',
        'gray-blue': {
          50: '#FCFCFD',
          100: '#F8F9FC',
          200: '#EAECF5',
          300: '#D5D9EB',
          400: '#B3B8DB',
          500: '#717BBC',
          600: '#4E5BA6',
          700: '#3E4784',
          800: '#363F72',
          900: '#293056',
          950: '#101323'
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
