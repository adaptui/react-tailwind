module.exports = {
  plugins: [
    require("./tailwind-jit/index.js")({}),
    require("postcss-flexbugs-fixes"),
    require("autoprefixer", { flexbox: "no-2009" }),
  ],
};
