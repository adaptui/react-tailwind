module.exports = {
  stories: ["../src/*/stories/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@whitespace/storybook-addon-html"],
  typescript: {
    reactDocgen: false,
  },
};
