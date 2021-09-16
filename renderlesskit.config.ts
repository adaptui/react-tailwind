import { extendTheme } from "./src/theme/extendTheme";

export const theme = extendTheme({
  // This only affected the Storybook, doesn't go or merge when used this config as preset
  extend: {
    button: {
      variant: {
        default: {
          tertiary: "bg-purple-600 text-white",
        },
      },
      size: {
        default: {
          xxl: "h-14 min-w-14 px-6 rounded-xl text-xl",
        },
      },
    },
  },
});

export default theme;
