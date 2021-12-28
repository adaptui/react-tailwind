const plugin = require("tailwindcss/plugin");

const utilities = plugin(function ({ addUtilities, theme }) {
  const utilities = {
    ".collapse-border > :first-of-type:not(:last-of-type)": {
      "border-top-right-radius": "0px",
      "border-bottom-right-radius": "0px",
    },
    ".collapse-border > :not(:first-of-type):not(:last-of-type)": {
      "border-radius": "0px",
      "margin-left": "-1px",
    },
    ".collapse-border > :not(:first-of-type):last-of-type": {
      "border-top-left-radius": "0px",
      "border-bottom-left-radius": "0px",
      "margin-left": "-1px",
    },
    ".meter-radius > :first-of-type:not(:last-of-type)": {
      "border-top-right-radius": "0px",
      "border-bottom-right-radius": "0px",
    },
    ".meter-radius > :not(:first-of-type):not(:last-of-type)": {
      "border-radius": "0px",
    },
    ".meter-radius > :not(:first-of-type):last-of-type": {
      "border-top-left-radius": "0px",
      "border-bottom-left-radius": "0px",
    },
  };

  addUtilities(utilities);
});

module.exports = utilities;
