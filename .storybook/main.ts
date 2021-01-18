module.exports = {
  stories: ["../src/**/stories/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  typescript: {
    reactDocgen: false,
  },
};
