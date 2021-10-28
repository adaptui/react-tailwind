const plugin = require("tailwindcss/plugin");

const utilities = plugin(function ({ addUtilities }) {
  const utilities = {
    ".collapse-border > :first-of-type:not(:last-of-type)": {
      "border-top-right-radius": "0px",
      "border-bottom-right-radius": "0px",
      "border-right-width": "0px",
    },
    ".collapse-border > :not(:first-of-type):not(:last-of-type)": {
      "border-radius": "0px",
      "border-right-width": "0px",
      "border-left-width": "0px",
    },
    ".collapse-border > :not(:first-of-type):last-of-type": {
      "border-top-left-radius": "0px",
      "border-bottom-left-radius": "0px",
      "border-left-width": "0px",
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
    ".touch-action-none": {
      "touch-action": "none",
    },
    ".will-change-transform": {
      "will-change": "transform",
    },
    ".will-change-width": {
      "will-change": "width",
    },
  };

  addUtilities(utilities);
});

module.exports = utilities;
