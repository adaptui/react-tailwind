const svgToDataUri = require("mini-svg-data-uri");
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
const { colors } = defaultTheme;

const forms = plugin(function ({ addBase, theme }) {
  addBase({
    [`[type='radio']:disabled`]: {
      "border-width": "0px",
      "background-color": theme("colors.gray.200", colors.gray[200]),
      "background-image": `url("${svgToDataUri(
        `<svg viewBox="0 0 16 16" fill="${theme(
          "colors.gray.500",
          colors.gray[500],
        )}" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`,
      )}")`,
    },
  });
});

module.exports = forms;
