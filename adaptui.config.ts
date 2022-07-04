import { extendTheme } from "./src";

export const theme = extendTheme({
  // This only affects the Storybook
  extend: {
    button: {
      themeColor: {
        base: {
          tertiary: { default: "bg-purple-600 text-white-900" },
        },
      },
      size: {
        xxl: {
          base: "h-14 min-w-14 px-6 rounded-xl text-xl",
        },
      },
    },
  },
});

export default theme;
