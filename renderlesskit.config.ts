import { extendTheme } from "./src/theme/extendTheme";

const theme = extendTheme({
  // This only affected the Storybook, doesn't go or merge when used this config as preset
  extend: {
    button: {
      variant: {
        tertiary: "bg-purple-600 lib:text-white",
      },
      size: {
        xxl: "h-14 min-w-14 px-6 rounded-xl text-xl",
      },
    },
    // alert: {
    //   status: {
    //     info: {
    //       base: "bg-red-500",
    //       icon: "text-white",
    //     },
    //   },
    // },
  },
});

export default theme;
