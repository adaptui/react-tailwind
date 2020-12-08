const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },

  plugins: [
    plugin(function ({ addComponents, theme }) {
      const buttons = {
        ".button": {
          display: "inline-block",
          fontFamily: theme("fontFamily.sans"),
          borderRadius: theme("borderRadius.3xl"),
          fontWeight: theme("fontWeight.bold"),
        },
        ".button--primary": {
          color: theme("colors.white"),
          backgroundColor: theme("colors.blue.500"),
        },
        ".button--secondary": {
          color: theme("colors.gray.500"),
          backgroundColor: "transparent",
          boxShadow: theme("boxShadow.DEFAULT"),
        },
        ".button--small": {
          fontSize: theme("fontSize.xs"),
          padding: `${theme("spacing.1")} ${theme("spacing.2")}`,
        },
        ".button--medium": {
          fontSize: theme("fontSize.sm"),
          padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
        },
        ".button--large": {
          fontSize: theme("fontSize.base"),
          padding: `${theme("spacing.3")} ${theme("spacing.6")}`,
        },
      };

      addComponents(buttons);
    }),
  ],
};
