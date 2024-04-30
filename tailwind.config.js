const fontFamily = require('tailwindcss/defaultTheme').fontFamily;
fontFamily.sans = ['"Open Sans"', ...fontFamily.sans]
fontFamily.serif = ['Mate', ...fontFamily.serif]

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.mustache", "./ALTVER.md"],
  theme: {
    fontFamily,
    screens: {
      'md': '768px',
      'lg': '1024px',
    },

    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
