/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./templates/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'playfair-display': ['Playfair Display', ...defaultTheme.fontFamily.serif],
        'fira-sans': ['Fira Sans', ...defaultTheme.fontFamily.sans],
      },
      // https://tailwindcss.com/docs/typography-plugin#adding-custom-color-themes
      typography: ({ theme }) => ({
        // Note: used for customizing the 'meeting minutes' markdown, see CSS class '.prose-minutes' for where it's used
        minutes: {
          css: {
            '--tw-prose-bullets': theme('colors.pink[400]'), // Note: to see prose specific overrides, go to the `styles.js` file, within the typography plugin's node_modules directory
            '--tw-prose-hr': theme('colors.violet[400]'),
            '--tw-prose-links': theme('colors.blue[600]'),
            h2: {
              textAlign: 'right'
            },
            h3: {
              '--tw-prose-links': theme('colors.black'),
              fontFamily: 'playfair-display',
              padding: '0 5px',
            },
            '.zola-anchor': {
              color: theme('colors.green[500]'),
              marginRight: '2px',
              textDecorationLine: 'none',
            },
            '.anchor-level-3, .anchor-level-4, .anchor-level-5, .anchor-level-6': { display: 'none' },
          }
        },
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

