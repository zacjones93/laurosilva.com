const {spacing, fontFamily} = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          0: '#fff',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111',
        },
      },
      fontFamily: {
        sans: ['SF Pro', ...fontFamily.sans],
      },
      typography: theme => ({
        css: {
          color: theme('colors.gray.300'),
          a: {
            color: theme('colors.blue.400'),
            '&:hover': {
              color: theme('colors.blue.600'),
            },
            code: {color: theme('colors.blue.400')},
          },
          blockquote: {
            borderLeftColor: theme('colors.gray.700'),
            color: theme('colors.gray.300'),
          },
          'h2,h3,h4': {
            color: theme('colors.gray.100'),
            'scroll-margin-top': spacing[32],
          },
          hr: {borderColor: theme('colors.gray.700')},
          ol: {
            li: {
              '&:before': {color: theme('colors.gray.500')},
            },
          },
          ul: {
            li: {
              '&:before': {backgroundColor: theme('colors.gray.500')},
            },
          },
          strong: {color: theme('colors.gray.100')},
          thead: {
            th: {
              color: theme('colors.gray.100'),
            },
            borderBottomColor: theme('colors.gray.600'),
          },
          tbody: {
            tr: {
              borderBottomColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
}
