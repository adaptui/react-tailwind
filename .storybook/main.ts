module.exports = {
  stories: ["../src/circular-progress/stories/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  typescript: {
    reactDocgen: false,
  },
};
