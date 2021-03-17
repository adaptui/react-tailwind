const nameClass = require('tailwindcss/lib/util/nameClass').default
const { asValue } = require('../pluginUtils')

module.exports = function ({ matchUtilities, jit: { theme } }) {
  matchUtilities({
    'ring-opacity': (modifier, { theme }) => {
      let value = asValue(modifier, theme['ringOpacity'])

      if (value === undefined) {
        return []
      }

      return {
        [nameClass('ring-opacity', modifier)]: {
          '--tw-ring-opacity': value,
        },
      }
    },
  })
}
