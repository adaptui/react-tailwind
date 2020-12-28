const { resolve } = require("path");
const { existsSync } = require("fs");
const resolveTailwindConfig = require("tailwindcss/lib/util/resolveConfig")
  .default;
const defaultTailwindConfig = require("tailwindcss/stubs/defaultConfig.stub");
const { createMacro, MacroError } = require("babel-plugin-macros");

module.exports = createMacro(tailwindClass, { configName: "twin" });

function tailwindClass({ references, state, babel, config }) {
  // const program = state.file.path;
  const isDev =
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "dev" ||
    false;
  state.isDev = isDev;
  state.isProd = !isDev;

  const { configExists, configTailwind } = getConfigTailwindProperties(
    state,
    config,
  );
}

const getConfigTailwindProperties = (state, config) => {
  const sourceRoot = state.file.opts.sourceRoot || ".";
  const configFile = config && config.config;

  const configPath = resolve(sourceRoot, configFile || `./tailwind.config.js`);
  const configExists = existsSync(configPath);
  const configTailwind = configExists
    ? resolveTailwindConfig([require(configPath), defaultTailwindConfig])
    : resolveTailwindConfig([defaultTailwindConfig]);
  if (!configTailwind) {
    throw new MacroError(`Couldn’t find the Tailwind config`);
  }

  return { configPath, configExists, configTailwind };
};
