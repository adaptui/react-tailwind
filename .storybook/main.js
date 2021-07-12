module.exports = {
  features: {
    previewCsfV3: true,
  },
  // core: { builder: "storybook-builder-vite" },
  // async viteFinal(config, { configType }) {
  //   // customize the Vite config here
  //   return config;
  // },
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
};
