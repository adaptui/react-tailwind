const nameClass = require('tailwindcss/lib/util/nameClass').default
const { asList } = require('../pluginUtils')

module.exports = function ({ matchUtilities, jit: { theme } }) {
  matchUtilities({
    'grid-rows': (modifier, { theme }) => {
      let value = asList(modifier, theme.gridTemplateRows)

      if (value === undefined) {
        return []
      }

      return { [nameClass('grid-rows', modifier)]: { 'grid-template-rows': value } }
    },
  })
}
