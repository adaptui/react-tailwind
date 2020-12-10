const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      spacing: {
        em: "1em",
      },
      lineHeight: {
        em: "1em",
      },
      minWidth: {
        ...defaultTheme.spacing,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
