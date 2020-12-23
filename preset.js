const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette")
  .default;
const deepMerge = require("deepmerge");
const { overrideTailwindClasses } = require("tailwind-override");
const { cx } = require("@renderlesskit/react");

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
  components: {
    button: {
      base:
        "font-sans font-semibold text-white inline-flex items-center justify-center appearance-none rounded-md transition-all relative whitespace-nowrap align-middle outline-none w-auto select-none disabled:cursor-not-allowed disabled:opacity-40",
      prefix: "flex mr-2",
      suffix: "flex ml-2",
      spinner: "w-em h-em text-current",
      group: "focus:z-1",
      span: "inline-block cursor-not-allowed",
      variant: {
        primary: "bg-gray-800",
        secondary: "bg-gray-100 text-gray-800",
        link: "text-gray-800",
      },
      size: {
        xs: "h-6 min-w-6 text-xs px-2",
        sm: "h-8 min-w-8 text-sm px-3",
        md: "h-10 min-w-10 text-base px-4",
        lg: "h-12 min-w-12 text-lg px-6",
      },
    },
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

  const componentPlugin = plugin(function ({
    addUtilities,
    addComponents,
    addbase,
    addVariant,
    e,
    prefix,
    theme,
    variants,
    config,
    postcss,
  }) {
    const components = {
      ".button-base": {
        [`@apply ${mergedComponents.button.base}`]: {},
      },
      ".button-primary": {
        [`@apply ${mergedComponents.button.variant.primary}`]: {},
      },
      ".button-secondary": {
        [`@apply ${mergedComponents.button.variant.secondary}`]: {},
      },
      ".button-link": {
        [`@apply ${mergedComponents.button.variant.link}`]: {},
      },
      ".button-xs": {
        [`@apply ${mergedComponents.button.size.xs}`]: {},
      },
      ".button-sm": {
        [`@apply ${mergedComponents.button.size.sm}`]: {},
      },
      ".button-md": {
        [`@apply ${mergedComponents.button.size.md}`]: {},
      },
      ".button-lg": {
        [`@apply ${mergedComponents.button.size.lg}`]: {},
      },
    };

    addComponents(components);
  });

  const mergedConfig = deepMerge(uiTailwindConfigs, userTailwindConfigs, {
    arrayMerge: arrayMergeFn,
  });
  const finalConfig = {
    ...mergedConfig,
    plugins: [...plugins, ...userPlugins, componentPlugin],
  };
  // console.log(
  //   "%c finalConfig",
  //   "color: #99adcc",
  //   finalConfig.theme.extend.spacing,
  // );

  return finalConfig;
}

module.exports = mergeConfigs;
