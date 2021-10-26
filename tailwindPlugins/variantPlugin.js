const plugin = require("tailwindcss/plugin");
const selectorParser = require("postcss-selector-parser");
const {
  transformAllSelectors,
  updateAllClasses,
} = require("tailwindcss/lib/util/pluginUtils");

function tap(value, mutator) {
  mutator(value);
  return value;
}

function prefixSelector(prefix, selector) {
  const getPrefix =
    typeof prefix === "function"
      ? prefix
      : () => (prefix === undefined ? "" : prefix);

  return selectorParser(selectors => {
    selectors.walkClasses(classSelector => {
      tap(classSelector.value, baseClass => {
        classSelector.value = `${getPrefix("." + baseClass)}${baseClass}`;
      });
    });
  }).processSync(selector);
}

function applyStateToMarker(selector, marker, state, join) {
  let markerIdx = selector.search(new RegExp(`${marker}[:[]`));

  if (markerIdx === -1) {
    return join(marker + state, selector);
  }

  let markerSelector = selector.slice(
    markerIdx,
    selector.indexOf(" ", markerIdx),
  );

  return join(
    marker + state + markerSelector.slice(markerIdx + marker.length),
    selector.replace(markerSelector, ""),
  );
}

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

  let pseudoVariants = [
    // Positional
    ["first", ":first-child"],
    ["last", ":last-child"],
    ["only", ":only-child"],
    ["odd", ":nth-child(odd)"],
    ["even", ":nth-child(even)"],
    "first-of-type",
    "last-of-type",
    "only-of-type",

    // State
    "visited",
    "target",
    ["open", "[open]"],

    // Forms
    "default",
    "checked",
    "indeterminate",
    "placeholder-shown",
    "autofill",
    "required",
    "valid",
    "invalid",
    "in-range",
    "out-of-range",
    "read-only",

    // Content
    "empty",

    // Interactive
    "focus-within",
    "hover",
    "focus",
    "focus-visible",
    "active",
    "disabled",
  ];

  let peerMarker = prefixSelector(config("prefix"), ".peer");
  for (let variant of pseudoVariants) {
    let [variantName, state] = Array.isArray(variant)
      ? variant
      : [variant, `:${variant}`];
    let peerVariantName = `peer-children-${variantName}`;

    addVariant(
      peerVariantName,
      transformAllSelectors(selector => {
        let variantSelector = updateAllClasses(selector, className => {
          if (`.${className}` === peerMarker) return className;
          return `${peerVariantName}${config("separator")}${className}`;
        });

        if (variantSelector === selector) {
          return null;
        }

        return applyStateToMarker(
          variantSelector,
          peerMarker,
          state,
          (marker, selector) =>
            selector.trim().startsWith("~")
              ? `${marker}${selector}`
              : `${marker} ~ .peer-children > ${selector}`,
        );
      }),
    );
  }
});

module.exports = variantPlugin;
