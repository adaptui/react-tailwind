const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette")
  .default;

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
      minHeight: {
        ...defaultTheme.spacing,
      },
      borderBottom: {},
    },
  },
  variants: {
    extend: {
      cursor: ["disabled"],
      opacity: ["disabled"],
      textColor: [
        "aria-selected",
        "aria-disabled",
        "is-range-selection",
        "is-range-start",
        "is-range-end",
      ],
      backgroundColor: [
        "aria-selected",
        "is-range-selection",
        "is-range-start",
        "is-range-end",
      ],
      borderRadius: ["is-range-selection", "is-range-end", "is-range-start"],
    },
  },
  plugins: [
    ({ addUtilities, e, theme, variants }) => {
      const colors = flattenColorPalette(theme("borderColor"));
      delete colors["default"];

      const colorMap = Object.keys(colors).map(color => ({
        [`.border-t-${color}`]: { borderTopColor: colors[color] },
        [`.border-r-${color}`]: { borderRightColor: colors[color] },
        [`.border-b-${color}`]: { borderBottomColor: colors[color] },
        [`.border-l-${color}`]: { borderLeftColor: colors[color] },
      }));
      const utilities = Object.assign({}, ...colorMap);

      addUtilities(utilities, variants("borderColor"));
    },
    plugin(function ({ addVariant, e }) {
      addVariant("aria-selected", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(
            `aria-selected${separator}${className}`,
          )}[aria-selected="true"]`;
        });
      });
    }),
    plugin(function ({ addVariant, e }) {
      addVariant("aria-disabled", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(
            `aria-disabled${separator}${className}`,
          )}[aria-disabled="true"]`;
        });
      });
    }),
    plugin(function ({ addVariant, e }) {
      addVariant("is-range-selection", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(
            `is-range-selection${separator}${className}`,
          )}[data-is-range-selection]`;
        });
      });
    }),
    plugin(function ({ addVariant, e }) {
      addVariant("is-range-start", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(
            `is-range-start${separator}${className}`,
          )}[data-is-selection-start]`;
        });
      });
    }),
    plugin(function ({ addVariant, e }) {
      addVariant("is-range-end", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(
            `is-range-end${separator}${className}`,
          )}[data-is-selection-end]`;
        });
      });
    }),
  ],
};
