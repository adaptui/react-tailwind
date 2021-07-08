module.exports = {
  features: {
    previewCsfV3: true,
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return config;
  },
  stories: ["../src/*/stories/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-addon-pseudo-states",
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
