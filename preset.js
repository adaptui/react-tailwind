const deepMerge = require("deepmerge");
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

// Autocomplete support
/** @typedef { import('tailwindcss/defaultConfig') } DefaultConfig */
/** @typedef { import('tailwindcss/defaultTheme') } DefaultTheme */

/** @type { DefaultConfig & { theme: { extend: DefaultTheme } } } */
const renderlesskitConfig = {
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        gray: colors.gray,
        emarald: colors.emerald,
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      inset: {
        unset: "unset",
      },
      width: {
        fit: "fit-content",
      },
      height: {
        fit: "fit-content",
      },
      minWidth: {
        ...defaultTheme.spacing,
      },
      minHeight: {
        ...defaultTheme.spacing,
      },
      boxShadow: {
        thumb:
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
        input: "0px 0px 2px rgba(59, 130, 246, 0.6);",
      },
      animation: {
        progress: "progress 1s ease infinite normal none running",
        circularProgress:
          "circularProgress 2s ease infinite normal none running",
      },
      keyframes: {
        progress: {
          "0%": { left: "-40%" },
          "100%": { left: "100%" },
        },
        circularProgress: {
          "0%": {
            strokeDasharray: "1, 400",
            strokeDashoffset: "0",
          },
          "50%": {
            strokeDasharray: "400, 400",
            strokeDashoffset: "-100",
          },
          "100%": {
            strokeDasharray: "400, 400",
            strokeDashoffset: "-260",
          },
        },
      },
    },
  },
  plugins: [
    require("./tailwindPlugins/utilities"),
    require("./tailwindPlugins/variantPlugin"),
  ],
};

function arrayMergeFn(destinationArray, sourceArray) {
  return destinationArray.concat(sourceArray).reduce((acc, cur) => {
    if (acc.includes(cur)) return acc;
    return [...acc, cur];
  }, []);
}

function preset(tailwindConfig) {
  let purge;
  if (Array.isArray(tailwindConfig.purge)) {
    purge = {
      content: tailwindConfig.purge,
    };
  } else {
    purge = tailwindConfig.purge;
  }
  // @ts-ignore
  return deepMerge({ ...tailwindConfig, purge }, renderlesskitConfig, {
    // @ts-ignore
    arrayMerge: arrayMergeFn,
  });
}

module.exports = { preset };
