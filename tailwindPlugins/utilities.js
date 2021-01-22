const plugin = require("tailwindcss/plugin");

const utilities = plugin(function ({ addUtilities }) {
  const utilities = {
    ".collapse-border > :first-of-type:not(:last-of-type)": {
      "border-top-right-radius": "0px",
      "border-bottom-right-radius": "0px",
    },
    ".collapse-border > :not(:first-of-type):not(:last-of-type)": {
      "border-radius": "0px",
    },
    ".collapse-border > :not(:first-of-type):last-of-type": {
      "border-top-left-radius": "0px",
      "border-bottom-left-radius": "0px",
    },
    ".w-inherit": {
      width: "inherit",
    },
    ".h-inherit": {
      height: "inherit",
    },
    ".inherit": {
      display: "inherit",
    },
  };

  addUtilities(utilities, ["lib", "DEFAULT", "responsive"]);
});

module.exports = utilities;
