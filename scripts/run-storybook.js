const fs = require("fs");
const path = require("path");
const exec = require("child_process").exec;

const getTemplate = component => `module.exports = {
  stories: ["../src/${component}/stories/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
`;

const componentName = process.argv[2];
fs.writeFileSync(
  path.join(process.cwd(), ".storybook", "main.ts"),
  getTemplate(componentName),
  { encoding: "utf-8" },
);

exec("yarn storybook").stderr.pipe(process.stderr);
