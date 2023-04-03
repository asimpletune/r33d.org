/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'playfair-display': ['Playfair Display'],
        'fira-sans-thin': ['Fira Sans Thin'],
        'fira-sans-regular': ['Fira Sans Regular'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

