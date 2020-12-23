const { createMacro } = require("babel-plugin-macros");

module.exports = createMacro(tailwindClass);

function tailwindClass({ references, state, babel }) {
  references.default.forEach(referencePath => {
    const [firstArg] = referencePath.parentPath.get("arguments");
    const stringValue = firstArg.node.value;
    const converted = stringValue.split(" ").join("WORKS!");
    const functionCallPath = firstArg.parentPath;
    const strLiteral = babel.types.stringLiteral(converted);
    functionCallPath.replaceWith(strLiteral);
  });
}
