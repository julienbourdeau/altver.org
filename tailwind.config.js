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
        'brand-dark': '#FF8383',
        'new': '#1971c2',
        'new-dark': '#55A1E6',
        'care': '#2f9e44',
        'care-dark': '#3A994C',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
