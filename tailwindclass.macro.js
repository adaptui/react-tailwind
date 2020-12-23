const { createMacro } = require("babel-plugin-macros");

const { overrideTailwindClasses } = require("tailwind-override");
const { cx } = require("@renderlesskit/react");
const ocx = (...classNames) => overrideTailwindClasses(cx(...classNames));

const theme = require("./tailwind.config");
const { get } = require("lodash");

module.exports = createMacro(function ({ references, state, babel }) {
  references.default.forEach(referencePath => {
    const [firstArg] = referencePath.parentPath.get("arguments");

    const argValue = firstArg.node.value;
    const themeValue = get(theme, argValue);
    const functionCallPath = firstArg.parentPath;

    if (typeof themeValue === "object") {
      const values = Object.keys(themeValue).map(key => {
        return babel.types.objectProperty(
          babel.types.stringLiteral(key),
          babel.types.stringLiteral(themeValue[key]),
        );
      });
      const obj = babel.types.objectExpression(values);
      functionCallPath.replaceWith(babel.types.parenthesizedExpression(obj));
      return;
    }
    if (typeof themeValue === "string") {
      const strLiteral = babel.types.stringLiteral(themeValue);
      functionCallPath.replaceWith(strLiteral);
      return;
    }
  });
});

// unused
function tailwindOverride({ references, state, babel }) {
  references.default.forEach(referencePath => {
    const args = referencePath.parentPath.get("arguments");

    let stringLiterals = args.map(v => {
      return v.node.value;
    });
    let classname = ocx(...stringLiterals);
    const functionCallPath = args[0].parentPath;
    const strLiteral = babel.types.stringLiteral(classname);
    functionCallPath.replaceWith(strLiteral);
  });
}
