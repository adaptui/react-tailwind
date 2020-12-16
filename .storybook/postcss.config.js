const path = require("path");
const scopify = require("postcss-scopify");
const { kebabCase } = require("lodash");

function addIdScope() {
  return root => {
    const filename = root.source.input.file;

    const isTailwind = path.basename(path.dirname(filename)) === "tailwind";
    if (isTailwind) return scopify("#tailwind")(root);

    const basename = path.basename(filename, ".css");
    const id = kebabCase(basename);
    return scopify(`#${id}`)(root);
  };
}

module.exports = {
  exec: true,
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    addIdScope(),
  ],
};
