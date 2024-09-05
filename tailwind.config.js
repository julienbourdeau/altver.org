const fontFamily = require('tailwindcss/defaultTheme').fontFamily;

fontFamily.body = [...fontFamily.sans]
fontFamily.heading = [...fontFamily.serif]

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./src/**/*.mustache", "src/**/*.js", "./ALTVER.md"],
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
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
