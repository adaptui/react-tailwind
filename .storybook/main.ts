module.exports = {
  stories: ["../src/*/stories/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
  typescript: {
    reactDocgen: false,
  },
};
