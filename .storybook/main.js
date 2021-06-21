module.exports = {
  core: { builder: "storybook-builder-vite" },
  stories: ["../src/*/stories/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  typescript: {
    reactDocgen: false,
  },
};
