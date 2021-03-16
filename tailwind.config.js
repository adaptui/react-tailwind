const { preset } = require("./preset");

module.exports = preset({
  purge: {
    content: [
      // "./src/theme/defaultTheme/**/*",
      "./src/**/stories/Button.stories.@(ts|tsx)",
    ],
  },
  theme: {
    extend: {},
  },
});
