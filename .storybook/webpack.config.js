const path = require("path");

module.exports = ({ config }) => {
  // possible optimizations
  /* 
  config.optimization = {
    splitChunks: {
      chunks: "all",
      minSize: 30 * 1024, // 30KB
      maxSize: 1024 * 1024, // 1MB
    },
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: true,
  };
  */

  config.module.rules.push({
    test: /\.css$/,
    exclude: /node_modules/,
    include: path.resolve(process.cwd(), "src"),
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
