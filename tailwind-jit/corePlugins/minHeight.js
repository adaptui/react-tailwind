const nameClass = require('tailwindcss/lib/util/nameClass').default
const transformThemeValue = require('tailwindcss/lib/util/transformThemeValue').default
const { asLength } = require('../pluginUtils')

module.exports = function ({ matchUtilities, jit: { theme } }) {
  matchUtilities({
    'min-h': (modifier, { theme }) => {
      let value = asLength(modifier, theme['minHeight'])

      if (value === undefined) {
        return []
      }

      return { [nameClass('min-h', modifier)]: { 'min-height': value } }
    },
  })
}
