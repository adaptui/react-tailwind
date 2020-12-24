const fs = require("fs");
const path = require("path");

const template = `module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
`;

fs.writeFileSync(path.join(process.cwd(), ".storybook", "main.ts"), template, {
  encoding: "utf-8",
});
