const path = require("path");
const defaultTheme = require("tailwindcss/defaultTheme");

const preset = require("./preset");

module.exports = preset({
  mode: "jit",
  purge: [
    path.resolve(__dirname, "./src/**/*"),
    path.resolve(__dirname, "./renderlesskit.config.ts"),
    path.resolve(__dirname, "./.storybook/**/*"),
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
});
