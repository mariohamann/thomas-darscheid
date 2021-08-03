const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit', // ⚠ Make sure to have this
  purge: ["./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'serif': 'Piazzolla, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      'sans': 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    },
    extend: {
      colors: {
        primary: colors.yellow,
        secondary: colors.amber
      }
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
