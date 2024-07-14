const fontFamily = require('tailwindcss/defaultTheme').fontFamily;

fontFamily.body = ['Bitter', ...fontFamily.serif]
fontFamily.heading = ['Jost', ...fontFamily.sans]

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

    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
