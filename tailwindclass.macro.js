const { resolve } = require("path");
const { existsSync } = require("fs");
const resolveTailwindConfig = require("tailwindcss/lib/util/resolveConfig")
  .default;
const defaultTailwindConfig = require("tailwindcss/stubs/defaultConfig.stub")
  .default;

const { createMacro, MacroError } = require("babel-plugin-macros");

module.exports = createMacro(tailwindClass);

function tailwindClass({ references, state, babel }) {
  const program = state.file.path;
  const isDev =
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "dev" ||
    false;
  state.isDev = isDev;
  state.isProd = !isDev;

  const { configExists, configTailwind } = getConfigTailwindProperties(state);
  console.log("%c configTailwind", "color: #5200cc", configTailwind);
  console.log("%c configExists", "color: #40fff2", configExists);
}

const getConfigTailwindProperties = state => {
  const sourceRoot = state.file.opts.root || ".";

  const configPath = resolve(sourceRoot, `./tailwind.config.js`);
  const configExists = existsSync(configPath);
  const configTailwind = resolveTailwindConfig([defaultTailwindConfig]);
  if (!configTailwind) {
    throw new MacroError(`Couldn’t find the Tailwind config`);
  }

  return { configPath, configExists, configTailwind };
};
