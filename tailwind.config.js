const preset = require("./preset");

module.exports = preset({
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      spacing: {
        "2em": "2em", // for testing
      },
    },
  },
  components: {},
  variants: {
    extend: {
      cursor: ["active"], // for testing
    },
  },
  plugins: [],
});
