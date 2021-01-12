const { preset } = require("./preset");

module.exports = preset({
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
