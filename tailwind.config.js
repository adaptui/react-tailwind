const preset = require("./preset");

module.exports = preset({
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "2em": "2em", // for testing
      },
    },
  },
  components: {
    button: {
      variant: { secondary: "bg-green-500 text-white" }, // for testing
    },
  },
  variants: {
    extend: {
      cursor: ["active"], // for testing
    },
  },
  plugins: [],
});
