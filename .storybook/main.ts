module.exports = {
  stories: ["../src/progress/stories/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  typescript: {
    reactDocgen: false,
  },
};
