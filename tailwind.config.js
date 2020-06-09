/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '1rem',
        lg: '1.5rem',
        xl: '2rem'
      }
    },
    extend: {
      boxShadow: theme => ({
        focus: `0 0 4px 3px ${theme('colors.international-orange')}`,
        error: `1px 1px 36px -6px ${theme('colors.monza')}`
      }),
      colors: {
        cherub: '#F8D7DA',
        'curious-blue': '#1591D5',
        ebony: '#0E0E20',
        'hint-yellow': '#FDFDE2',
        'international-orange': '#FB5604',
        monza: '#C7031E',
        parsley: '#155127',
        zanah: '#D4EDDA'
      },
      fontFamily: {
        'fs-normal': ['Roboto', 'Helvetica Neue', 'sans-serif'],
        'fs-condensed': ['Roboto Condensed', 'Helvetica Neue', 'sans-serif']
      },
      opacity: {
        60: '.6'
      },
      minWidth: theme => ({
        ...theme('width')
      }),
      padding: {
        field: '0.28rem;'
      },
      textShadow: {
        default: '0 2px 5px rgba(0, 0, 0, 0.5)',
        lg: '0 2px 10px rgba(0, 0, 0, 0.5)'
      },
      width: {
        form: {
          md: '20rem',
          lg: '20rem',
          xl: '10rem'
        }
      }
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-typography')({
      ellipsis: true,
      hyphens: true,
      kerning: true,
      textUnset: true,
      componentPrefix: 'c-'
    })
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
