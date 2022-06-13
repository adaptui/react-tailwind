/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("./preset")],
  content: ["./src/**/*", "./adaptui.config.ts", "./.storybook/**/*"],

  theme: { extend: {} },

  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
