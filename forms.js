const svgToDataUri = require("mini-svg-data-uri");
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
const { colors, spacing, borderWidth, outline } = defaultTheme;

const forms = plugin(function ({ addComponents, theme }) {
  addComponents({
    ".custom-radio": {
      appearance: "none",
      padding: "0",
      "color-adjust": "exact",
      display: "inline-block",
      "vertical-align": "middle",
      "background-origin": "border-box",
      "user-select": "none",
      "flex-shrink": "0",
      height: spacing[4],
      width: spacing[4],
      color: theme("colors.blue.600", colors.blue[600]),
      "background-color": "#fff",
      "border-color": theme("colors.gray.500", colors.gray[500]),
      "border-width": borderWidth["DEFAULT"],
      "border-radius": "100%",
      "&:focus": {
        outline: outline.none[0],
        "outline-offset": outline.none[1],
        "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
        "--tw-ring-offset-width": "2px",
        "--tw-ring-offset-color": "#fff",
        "--tw-ring-color": theme("colors.blue.600", colors.blue[600]),
        "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
        "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
        "box-shadow": `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)`,
        "border-color": theme("colors.gray.500", colors.gray[500]),
      },
      "&:checked": {
        "border-color": `transparent`,
        "background-color": `currentColor`,
        "background-size": `100% 100%`,
        "background-position": `center`,
        "background-repeat": `no-repeat`,
        "background-image": `url("${svgToDataUri(
          `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`,
        )}")`,
      },
      "&:checked:hover": {
        "border-color": "transparent",
        "background-color": "currentColor",
      },
      "&:checked:focus": {
        "border-color": "transparent",
        "background-color": "currentColor",
      },
      "&:disabled": {
        "border-width": "0px",
        "background-color": theme("colors.gray.200", colors.gray[200]),
        "background-image": `url("${svgToDataUri(
          `<svg viewBox="0 0 16 16" fill="${theme(
            "colors.gray.500",
            colors.gray[500],
          )}" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`,
        )}")`,
      },
    },
  });
});

module.exports = forms;
