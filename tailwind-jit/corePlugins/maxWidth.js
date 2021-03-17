const nameClass = require('tailwindcss/lib/util/nameClass').default
const transformThemeValue = require('tailwindcss/lib/util/transformThemeValue').default
const { asLength } = require('../pluginUtils')

module.exports = function ({ matchUtilities, jit: { theme } }) {
  matchUtilities({
    'max-w': (modifier, { theme }) => {
      let value = asLength(modifier, theme['maxWidth'])

      if (value === undefined) {
        return []
      }

      return { [nameClass('max-w', modifier)]: { 'max-width': value } }
    },
  })
}
