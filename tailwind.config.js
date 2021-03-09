const { preset } = require("./preset");

module.exports = preset({
  purge: {
    content: [
      "./src/theme/defaultTheme/**/*",
      "./src/**/stories/*.stories.@(ts|tsx)",
    ],
  },
  theme: {
    extend: {},
  },
});
