const { preset } = require("./preset");

module.exports = preset({
  purge: {
    content: [
      "./src/theme/defaultTheme.tsx",
      "../src/**/stories/*.stories.@(ts|tsx)",
    ],
    // options: {
    //   safelist: {
    //     standard: [
    //       /aria-selected/,
    //       /aria-disabled/,
    //       /is-range-selection/,
    //       /is-range-selection/,
    //       /is-selection-start/,
    //       /is-selection-start/,
    //       /is-selection-end/,
    //       /is-selection-end/,
    //     ],
    //   },
    // },
  },
  theme: {
    extend: {},
  },
  // This only affected the Storybook, doesn't go or merge when used this config as preset
  components: {
    extend: {
      button: {
        variant: {
          tertiary: "bg-purple-600 lib:text-white",
        },
        size: {
          xxl:
            "h-16 min-w-16 text-xl px-8 w-auto font-medium rounded-lg shadow-sm",
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
  },
});
