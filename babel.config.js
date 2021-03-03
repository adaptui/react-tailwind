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
        loose: true,
        targets: {
          esmodules: isESM ? true : undefined,
        },
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ];

  const plugins = [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
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
          "**/__test__",
          "**/testUtils.tsx",
          "./renderlesskit.config.ts",
        ]
      : [],
  };
};
