const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette")
  .default;

module.exports = {
  purge: ["./src/theme.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      },
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
      zIndex: {
        1: 1,
      },
      border: {
        1.5: "1.5px",
      },
    },
  },
  variants: {
    extend: {
      accessibility: ["def", "DEFAULT", "responsive", "focus-within", "focus"],
      alignContent: ["def", "DEFAULT", "responsive"],
      alignItems: ["def", "DEFAULT", "responsive"],
      alignSelf: ["def", "DEFAULT", "responsive"],
      animation: ["def", "DEFAULT", "responsive"],
      appearance: ["def", "DEFAULT", "responsive"],
      backgroundAttachment: ["def", "DEFAULT", "responsive"],
      backgroundClip: ["def", "DEFAULT", "responsive"],
      backgroundColor: [
        "def",
        "DEFAULT",
        "aria-selected",
        "is-range-selection",
        "is-range-start",
        "is-range-end",
        "responsive",
        "dark",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
      backgroundImage: ["def", "DEFAULT", "responsive"],
      backgroundOpacity: [
        "def",
        "DEFAULT",
        "responsive",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
      backgroundPosition: ["def", "DEFAULT", "responsive"],
      backgroundRepeat: ["def", "DEFAULT", "responsive"],
      backgroundSize: ["def", "DEFAULT", "responsive"],
      borderCollapse: ["def", "DEFAULT", "responsive"],
      borderColor: [
        "def",
        "DEFAULT",
        "responsive",
        "dark",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
      borderOpacity: [
        "def",
        "DEFAULT",
        "responsive",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
      borderRadius: [
        "def",
        "DEFAULT",
        "is-range-selection",
        "is-range-end",
        "is-range-start",
        "responsive",
      ],
      borderStyle: ["def", "DEFAULT", "responsive"],
      borderWidth: ["def", "DEFAULT", "responsive"],
      boxShadow: [
        "def",
        "DEFAULT",
        "responsive",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
      boxSizing: ["def", "DEFAULT", "responsive"],
      clear: ["def", "DEFAULT", "responsive"],
      container: ["def", "DEFAULT", "responsive"],
      cursor: ["def", "DEFAULT", "def-disabled", "disabled", "responsive"],
      display: ["def", "DEFAULT", "responsive"],
      divideColor: ["def", "DEFAULT", "responsive", "dark"],
      divideOpacity: ["def", "DEFAULT", "responsive"],
      divideStyle: ["def", "DEFAULT", "responsive"],
      divideWidth: ["def", "DEFAULT", "responsive"],
      fill: ["def", "DEFAULT", "responsive"],
      flex: ["def", "DEFAULT", "responsive"],
      flexDirection: ["def", "DEFAULT", "responsive"],
      flexGrow: ["def", "DEFAULT", "responsive"],
      flexShrink: ["def", "DEFAULT", "responsive"],
      flexWrap: ["def", "DEFAULT", "responsive"],
      float: ["def", "DEFAULT", "responsive"],
      fontFamily: ["def", "DEFAULT", "responsive"],
      fontSize: ["def", "DEFAULT", "responsive"],
      fontSmoothing: ["def", "DEFAULT", "responsive"],
      fontStyle: ["def", "DEFAULT", "responsive"],
      fontVariantNumeric: ["def", "DEFAULT", "responsive"],
      fontWeight: ["def", "DEFAULT", "responsive"],
      gap: ["def", "DEFAULT", "responsive"],
      gradientColorStops: [
        "def",
        "DEFAULT",
        "responsive",
        "dark",
        "hover",
        "focus",
      ],
      gridAutoColumns: ["def", "DEFAULT", "responsive"],
      gridAutoFlow: ["def", "DEFAULT", "responsive"],
      gridAutoRows: ["def", "DEFAULT", "responsive"],
      gridColumn: ["def", "DEFAULT", "responsive"],
      gridColumnEnd: ["def", "DEFAULT", "responsive"],
      gridColumnStart: ["def", "DEFAULT", "responsive"],
      gridRow: ["def", "DEFAULT", "responsive"],
      gridRowEnd: ["def", "DEFAULT", "responsive"],
      gridRowStart: ["def", "DEFAULT", "responsive"],
      gridTemplateColumns: ["def", "DEFAULT", "responsive"],
      gridTemplateRows: ["def", "DEFAULT", "responsive"],
      height: ["def", "DEFAULT", "responsive"],
      inset: ["def", "DEFAULT", "responsive"],
      justifyContent: ["def", "DEFAULT", "responsive"],
      justifyItems: ["def", "DEFAULT", "responsive"],
      justifySelf: ["def", "DEFAULT", "responsive"],
      letterSpacing: ["def", "DEFAULT", "responsive"],
      lineHeight: ["def", "DEFAULT", "responsive"],
      listStylePosition: ["def", "DEFAULT", "responsive"],
      listStyleType: ["def", "DEFAULT", "responsive"],
      margin: ["def", "DEFAULT", "responsive"],
      maxHeight: ["def", "DEFAULT", "responsive"],
      maxWidth: ["def", "DEFAULT", "responsive"],
      minHeight: ["def", "DEFAULT", "responsive"],
      minWidth: ["def", "DEFAULT", "responsive"],
      objectFit: ["def", "DEFAULT", "responsive"],
      objectPosition: ["def", "DEFAULT", "responsive"],
      opacity: [
        "def",
        "DEFAULT",
        "def-disabled",
        "disabled",
        "responsive",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
      order: ["def", "DEFAULT", "responsive"],
      outline: ["def", "DEFAULT", "responsive", "focus-within", "focus"],
      overflow: ["def", "DEFAULT", "responsive"],
      overscrollBehavior: ["def", "DEFAULT", "responsive"],
      padding: ["def", "DEFAULT", "responsive"],
      placeContent: ["def", "DEFAULT", "responsive"],
      placeItems: ["def", "DEFAULT", "responsive"],
      placeSelf: ["def", "DEFAULT", "responsive"],
      placeholderColor: ["def", "DEFAULT", "responsive", "dark", "focus"],
      placeholderOpacity: ["def", "DEFAULT", "responsive", "focus"],
      pointerEvents: ["def", "DEFAULT", "responsive"],
      position: ["def", "DEFAULT", "responsive"],
      resize: ["def", "DEFAULT", "responsive"],
      ringColor: [
        "def",
        "DEFAULT",
        "responsive",
        "dark",
        "focus-within",
        "focus",
      ],
      ringOffsetColor: [
        "def",
        "DEFAULT",
        "responsive",
        "dark",
        "focus-within",
        "focus",
      ],
      ringOffsetWidth: [
        "def",
        "DEFAULT",
        "responsive",
        "focus-within",
        "focus",
      ],
      ringOpacity: ["def", "DEFAULT", "responsive", "focus-within", "focus"],
      ringWidth: ["def", "DEFAULT", "responsive", "focus-within", "focus"],
      rotate: ["def", "DEFAULT", "responsive", "hover", "focus"],
      scale: ["def", "DEFAULT", "responsive", "hover", "focus"],
      skew: ["def", "DEFAULT", "responsive", "hover", "focus"],
      space: ["def", "DEFAULT", "responsive"],
      stroke: ["def", "DEFAULT", "responsive"],
      strokeWidth: ["def", "DEFAULT", "responsive"],
      tableLayout: ["def", "DEFAULT", "responsive"],
      textAlign: ["def", "DEFAULT", "responsive"],
      textColor: [
        "def",
        "DEFAULT",
        "aria-selected",
        "aria-disabled",
        "is-range-selection",
        "is-range-start",
        "is-range-end",
        "responsive",
        "dark",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
      textDecoration: [
        "def",
        "DEFAULT",
        "responsive",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
      textOpacity: [
        "def",
        "DEFAULT",
        "responsive",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
      textOverflow: ["def", "DEFAULT", "responsive"],
      textTransform: ["def", "DEFAULT", "responsive"],
      transform: ["def", "DEFAULT", "responsive"],
      transformOrigin: ["def", "DEFAULT", "responsive"],
      transitionDelay: ["def", "DEFAULT", "responsive"],
      transitionDuration: ["def", "DEFAULT", "responsive"],
      transitionProperty: ["def", "DEFAULT", "responsive"],
      transitionTimingFunction: ["def", "DEFAULT", "responsive"],
      translate: ["def", "DEFAULT", "responsive", "hover", "focus"],
      userSelect: ["def", "DEFAULT", "responsive"],
      verticalAlign: ["def", "DEFAULT", "responsive"],
      visibility: ["def", "DEFAULT", "responsive"],
      whitespace: ["def", "DEFAULT", "responsive"],
      width: ["def", "DEFAULT", "responsive"],
      wordBreak: ["def", "DEFAULT", "responsive"],
      zIndex: ["def", "DEFAULT", "responsive", "focus-within", "focus"],
    },
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant("def", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`def${separator}${className}`)}`;
        });
      });
    }),
    plugin(function ({ addVariant, e }) {
      addVariant("def-disabled", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`def-disabled${separator}${className}:disabled`)}`;
        });
      });
    }),
    plugin(function ({ addUtilities, e, theme, variants }) {
      const colors = flattenColorPalette(theme("borderColor"));
      delete colors["default"];

      const colorMap = Object.keys(colors).map(color => ({
        [`.border-t-${color}`]: { borderTopColor: colors[color] },
        [`.border-r-${color}`]: { borderRightColor: colors[color] },
        [`.border-b-${color}`]: { borderBottomColor: colors[color] },
        [`.border-l-${color}`]: { borderLeftColor: colors[color] },
      }));
      const utilities = Object.assign({}, ...colorMap);

      addUtilities(utilities, ["def", "DEFAULT", "responsive"]);
    }),
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".collapse-border > :first-of-type:not(:last-of-type)": {
          "border-top-right-radius": "0px",
          "border-bottom-right-radius": "0px",
        },
        ".collapse-border > :not(:first-of-type):not(:last-of-type)": {
          "border-radius": "0px",
        },
        ".collapse-border > :not(:first-of-type):last-of-type": {
          "border-top-left-radius": "0px",
          "border-bottom-left-radius": "0px",
        },
        ".w-inherit": {
          width: "inherit",
        },
        ".h-inherit": {
          height: "inherit",
        },
        ".inherit": {
          display: "inherit",
        },
      };

      addUtilities(utilities, ["def", "DEFAULT", "responsive"]);
    }),
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
