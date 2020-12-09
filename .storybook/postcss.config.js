const path = require("path");

module.exports = {
  exec: true,
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
