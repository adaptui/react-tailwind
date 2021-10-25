module.exports = {
  framework: "@storybook/react",
  features: { storyStoreV7: true, babelModeV7: true },
  stories: ["../src/*/stories/*.stories.@(ts|tsx)"],
  addons: [
    "storybook-addon-preview",
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
};
