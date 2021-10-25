const BABEL_ENV = process.env.BABEL_ENV;
const isCommonJS = BABEL_ENV !== undefined && BABEL_ENV === "cjs";
const isESM = BABEL_ENV !== undefined && BABEL_ENV === "esm";
const isBuild = !!BABEL_ENV;

module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/env",
      {
        modules: isCommonJS ? "commonjs" : false,
        targets: { esmodules: isESM ? true : undefined },
      },
    ],
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
  ];

  const plugins = [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-logical-assignment-operators", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    "@babel/plugin-transform-shorthand-properties",
    "@babel/plugin-transform-block-scoping",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-syntax-dynamic-import",
    [
      "@babel/plugin-proposal-object-rest-spread",
      {
        loose: true,
        useBuiltIns: true,
      },
    ],
    "@babel/plugin-transform-classes",
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-parameters",
    "@babel/plugin-transform-destructuring",
    "@babel/plugin-transform-spread",
    "@babel/plugin-transform-for-of",
    "babel-plugin-macros",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    [
      "babel-plugin-polyfill-corejs3",
      {
        method: "usage-global",
        absoluteImports: "core-js",
        version: "3.18.3",
      },
    ],
    isBuild
      ? [
          "babel-plugin-jsx-remove-data-test-id",
          { attributes: ["data-testid"] },
        ]
      : {},
  ];

  return {
    presets,
    plugins,
    env: {
      test: {
        presets: [["@babel/env", { targets: { node: "current" } }]],
      },
    },
    ignore: isBuild
      ? [
          "**/*/stories",
          "**/__tests__",
          "**/testUtils.tsx",
          "./renderlesskit.config.ts",
        ]
      : [],
  };
};
