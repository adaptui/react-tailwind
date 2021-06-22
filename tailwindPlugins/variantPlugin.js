const plugin = require("tailwindcss/plugin");
const selectorParser = require("postcss-selector-parser");
const buildSelectorVariant =
  require("tailwindcss/lib/util/buildSelectorVariant").default;

function generatePseudoClassVariant(pseudoClass, selectorPrefix = pseudoClass) {
  return ({ modifySelectors, separator }) => {
    const parser = selectorParser(selectors => {
      selectors.walkClasses(sel => {
        sel.value = `lib${separator}${selectorPrefix}${separator}${sel.value}`;
        sel.parent.insertAfter(
          sel,
          selectorParser.pseudo({ value: `:${pseudoClass}` }),
        );
      });
    });

    return modifySelectors(({ selector }) => parser.processSync(selector));
  };
}

const variantPlugin = plugin(function ({ addVariant, e }) {
  addVariant("lib", ({ container, separator, modifySelectors }) => {
    modifySelectors(({ selector }) => {
      return buildSelectorVariant(selector, "lib", separator, message => {
        throw container.error(message);
      });
    });
  });
  addVariant("lib:hover", generatePseudoClassVariant("hover"));
  addVariant("lib:focus-within", generatePseudoClassVariant("focus-within"));
  addVariant("lib:focus", generatePseudoClassVariant("focus"));
  addVariant("lib:disabled", generatePseudoClassVariant("disabled"));

  function generateDataClassVariant(dataName, dataBool, variant) {
    // lib:aria-selected OR aria-selected
    const variantName = variant ? `${variant}:${dataName}` : dataName;

    addVariant(variantName, ({ modifySelectors, separator }) => {
      const parser = selectorParser(selectors => {
        selectors.walkClasses(sel => {
          const dataClass = `${dataName}${separator}${sel.value}`;

          if (variant) {
            sel.value = `${variant}${separator}${dataClass}`;
          } else {
            sel.value = dataClass;
          }

          if (dataBool) {
            sel.parent.insertAfter(
              sel,
              selectorParser.attribute({ attribute: `data-${dataName}` }),
            );
          } else {
            sel.parent.insertAfter(
              sel,
              selectorParser.attribute({ attribute: `${dataName}="true"` }),
            );
          }
        });
      });

      modifySelectors(({ selector }) => parser.processSync(selector));
    });
  }

  generateDataClassVariant("aria-selected", false);
  generateDataClassVariant("aria-selected", false, "lib");
  generateDataClassVariant("aria-disabled", false);
  generateDataClassVariant("aria-disabled", false, "lib");
  generateDataClassVariant("is-range-selection", true);
  generateDataClassVariant("is-range-selection", true, "lib");
  generateDataClassVariant("is-selection-start", true);
  generateDataClassVariant("is-selection-start", true, "lib");
  generateDataClassVariant("is-selection-end", true);
  generateDataClassVariant("is-selection-end", true, "lib");
});

module.exports = variantPlugin;
