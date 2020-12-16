const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: require.resolve("postcss-loader"),
        options: {
          config: {
            path: __dirname,
          },
        },
      },
    ],
  });

  return config;
};
