const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        em: "1em",
      },
      lineHeight: {
        em: "1em",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
