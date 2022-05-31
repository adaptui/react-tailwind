/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
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
