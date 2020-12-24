const { get } = require("lodash");
const { cx } = require("@renderlesskit/react");
const { overrideTailwindClasses } = require("tailwind-override");
const { createMacro, MacroError } = require("babel-plugin-macros");
const theme = require("./tailwind.config");

const ocx = (...classNames) => overrideTailwindClasses(cx(...classNames));

module.exports = createMacro(function ({ references, state, babel }) {
  references.default.forEach(referencePath => {
    const [componentPath] = referencePath.parentPath.get("arguments");

    if (!componentPath) {
      throw new MacroError("Expected 1 argument but got 0");
    }

    const argValue = componentPath.node.value;
    if (typeof argValue !== "string") {
      throw new MacroError(
        `Argument expected of type string but got ${typeof argValue}`,
      );
    }

    const themeValue = get(theme, argValue);
    if (typeof themeValue === "undefined") {
      throw new MacroError(
        `Unable to find component classes at path "${argValue}"`,
      );
    }
    const functionCallPath = componentPath.parentPath;

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

    const stringLiterals = args.map(v => {
      return v.node.value;
    });
    let classname = ocx(...stringLiterals);
    const functionCallPath = args[0].parentPath;
    const strLiteral = babel.types.stringLiteral(classname);
    functionCallPath.replaceWith(strLiteral);
  });
}
