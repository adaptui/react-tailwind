const { mergeConfig } = require("vite");

const config = {
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
  async viteFinal(config: any, options: any) {
    return mergeConfig(config, {
      // customize the Vite config here
      build: {
        minify: false,
        sourcemap: false,
      },
    });
  },

  // storyStoreV7 removes the circular dependency issue with Webpack 5
  // So, we added ThemeProvider in preview.jsx and so src/theme should work for HMR
  features: { storyStoreV7: true },
  stories: ["../**/*.stories.@(ts|tsx)"],
  addons: [
    // "storybook-addon-preview",
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

module.exports = config;
