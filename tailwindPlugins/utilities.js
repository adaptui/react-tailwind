const plugin = require("tailwindcss/plugin");

const utilities = plugin(function ({ addUtilities }) {
  const toast = {
    ".toast__container": {
      position: "fixed",
      zIndex: 5000,
      transition: "all 0.4s ease",
      height: "160px",
      maxHeight: "160px",
      width: "420px",
      bottom: "calc(var(--toast-safe-area-gap, 0px) + 5px) !important",
    },
    ".toast__container:hover .stack-toast,\n.stack-toast:hover": {
      transform: `translate3d(
        var(--toast-x-offset),
        calc(
          var(--toast-hover-offset-y) - var(--toast-stack-gap) *
            (var(--toast-index) - 1)
        ),
        0
      )`,
    },
    ".stack-toast": {
      "--toast-x-offset": "-50%",
      "--toast-stack-gap": "20px",
      "--toast-safe-area-gap": "env(safe-area-inset-bottom)",
      position: "absolute",
      maxWidth: "100%",
      width: "max-content",
      bottom: "0",
      left: "50%",
      transition: "all 0.4s ease",
      transform: "translate3d(var(--toast-x-offset), 0, 0)",
      opacity: 0,
    },
    ".stack-toast:not(:last-child)": {
      "--toast-i": "calc(var(--toast-index) - 1)",
      transform: `translate3d(
        var(--toast-x-offset),
        calc(1px - (var(--toast-stack-gap) * var(--toast-i))),
        0
      )
      scale(calc(1 - 0.05 * var(--toast-i)))`,
      opacity: 1,
    },
    ".stack-toast:nth-last-child(n + 4)": {
      pointerEvents: "none",
      opacity: "0 !important",
    },
    ".stack-toast-1": {
      transition: "all 0.4s ease",
      transform: "translate3d(var(--toast-x-offset), 0, 0) !important",
      opacity: "1 !important",
    },
    "@media all and (max-width: 480px)": {
      ".toast__container": {
        width: "100%",
      },
      ".stack-toast": {
        width: "95%",
      },
      ".stack-toast:nth-last-child(n + 3)": {
        pointerEvents: "none",
        opacity: "0 !important",
      },
    },
  };

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
    ".touch-action-none": {
      "touch-action": "none",
    },
    ...toast,
  };

  addUtilities(utilities, ["lib", "DEFAULT", "responsive"]);
});

module.exports = utilities;
