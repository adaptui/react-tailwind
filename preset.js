const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette")
  .default;
const deepMerge = require("deepmerge");
const { overrideTailwindClasses } = require("tailwind-override");
const { cx } = require("@renderlesskit/react");
const components = require("./styles");

const uiConfigs = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
    },
  },
  components: components,
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
  ],
};

// String assertions
const isString = value =>
  Object.prototype.toString.call(value) === "[object String]";
const isObject = obj => obj && typeof obj === "object";
const ocx = (...classNames) => overrideTailwindClasses(cx(...classNames));

/**
 * Performs a deep merge of `source` into `target`.
 * Mutates `target` only but not its objects and arrays.
 *
 * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
 */
function mergeDeep(target, source) {
  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  Object.keys(source).forEach(key => {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (isString(targetValue) && isString(sourceValue)) {
      target[key] = ocx(targetValue, sourceValue);
    } else if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
}

function arrayMergeFn(destinationArray, sourceArray) {
  return destinationArray.concat(sourceArray).reduce((acc, cur) => {
    if (acc.includes(cur)) return acc;
    return [...acc, cur];
  }, []);
}

function mergeConfigs(tailwindConfig) {
  const { components, plugins, ...uiTailwindConfigs } = uiConfigs;
  const {
    components: userComponents,
    plugins: userPlugins,
    ...userTailwindConfigs
  } = tailwindConfig;

  const mergedComponents = mergeDeep(components, userComponents);
  const mergedConfig = deepMerge(uiTailwindConfigs, userTailwindConfigs, {
    arrayMerge: arrayMergeFn,
  });
  const finalConfig = {
    components: mergedComponents,
    ...mergedConfig,
    plugins: [...plugins, ...userPlugins],
  };
  // console.log(
  //   "%c finalConfig",
  //   "color: #99adcc",
  //   finalConfig.theme.extend.spacing,
  // );

  return finalConfig;
}

module.exports = mergeConfigs;
