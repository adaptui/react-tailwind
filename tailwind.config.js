const { kebabCase } = require("lodash");
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette")
  .default;

const components = require("./components");

function componentPlugin({ addComponents, theme }) {
  const getComponentCSSObject = components => {
    const componentNames = Object.keys(components);

    const getThemeValues = (component, name, prop) => {
      if (!component[prop] || !component) return {};

      return Object.keys(component[prop])
        .map(s => `${kebabCase(name)}-${s}`)
        .reduce((prev, curr) => {
          return {
            ...prev,
            [`.${curr}`]: {
              [`@apply ${theme(
                `components.${name}.${prop}.${curr.replace(`${name}-`, "")}`,
              )}`]: {},
            },
          };
        }, {});
    };

    const getPropThemeValue = (name, prop) => {
      return {
        [`.${kebabCase(name)}-${prop}`]: {
          [`@apply ${theme(`components.${name}.${prop}`)}`]: {},
        },
      };
    };

    const getComponentClasses = componentNames => {
      return componentNames.reduce((prev, name) => {
        const base = getPropThemeValue(name, "base");
        const sizeKeys = getThemeValues(components[name], name, "size");
        const variantKeys = getThemeValues(components[name], name, "variant");
        const stokeKeys = getThemeValues(components[name], name, "stroke");

        return {
          ...prev,
          ...base,
          ...sizeKeys,
          ...variantKeys,
          ...stokeKeys,
          ...getPropThemeValue("buttonGroup", "attached"),
          ...getPropThemeValue("button", "prefix"),
          ...getPropThemeValue("button", "suffix"),
          ...getPropThemeValue("tag", "prefix"),
          ...getPropThemeValue("tag", "suffix"),
        };
      }, {});
    };

    let c = getComponentClasses(componentNames);
    console.log(c);
    addComponents(c);
  };

  getComponentCSSObject(components);
}

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
      zIndex: {
        1: 1,
      },
      button: {
        variant: {
          primary: "bg-green:500",
          secondary: "bg-green-500",
        },
      },
    },
    components: components,
  },
  variants: {
    extend: {
      cursor: ["disabled"],
      opacity: ["disabled"],
    },
  },
  plugins: [
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

      addUtilities(utilities, variants("borderColor"));
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
      };

      addUtilities(utilities);
    }),
    plugin(componentPlugin),
  ],
};
