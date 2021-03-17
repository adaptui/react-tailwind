const nameClass = require('tailwindcss/lib/util/nameClass').default
const { asValue } = require('../pluginUtils')

module.exports = function ({ matchUtilities, jit: { theme } }) {
  matchUtilities({
    cursor: (modifier, { theme }) => {
      let value = asValue(modifier, theme.cursor)

      if (value === undefined) {
        return []
      }

      return { [nameClass('cursor', modifier)]: { cursor: value } }
    },
  })
}
