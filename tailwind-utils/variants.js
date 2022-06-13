const plugin = require("tailwindcss/plugin");

const variantPlugin = plugin(function ({ addVariant, config }) {
  addVariant("data-enter", `&[data-enter]`);
  addVariant("data-leave", `&[data-leave]`);

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
  ].map(variant =>
    Array.isArray(variant) ? variant : [variant, `:${variant}`],
  );

  for (let [variantName, state] of pseudoVariants) {
    addVariant(
      `peer-children-${variantName}`,
      `:merge(.peer)${state} ~ .peer-children > &`,
    );
  }
});

module.exports = variantPlugin;
