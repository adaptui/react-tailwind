const plugin = require("tailwindcss/plugin");
const selectorParser = require("postcss-selector-parser");
const { transformAllSelectors } = require("tailwindcss/lib/util/pluginUtils");

const variantPlugin = plugin(function ({ addVariant, config }) {
  function generateDataClassVariant(dataName, dataBool) {
    const variantName = dataName;

    addVariant(
      variantName,
      transformAllSelectors(selector => {
        const parser = selectorParser(selectors => {
          selectors.walkClasses(sel => {
            const dataClass = `${dataName}${config("separator")}${sel.value}`;

            sel.value = dataClass;

            if (dataBool) {
              sel.parent.insertAfter(
                sel,
                selectorParser.attribute({ attribute: `${dataName}` }),
              );
            } else {
              sel.parent.insertAfter(
                sel,
                selectorParser.attribute({ attribute: `${dataName}="true"` }),
              );
            }
          });
        });

        return parser.processSync(selector);
      }),
    );
  }

  generateDataClassVariant("aria-selected", false);
  generateDataClassVariant("aria-disabled", false);
  generateDataClassVariant("data-is-range-selection", true);
  generateDataClassVariant("data-is-selection-start", true);
  generateDataClassVariant("data-is-selection-end", true);
  generateDataClassVariant("data-enter", true);
  generateDataClassVariant("data-leave", true);
});

module.exports = variantPlugin;
