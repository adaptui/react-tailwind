const colors = require("./tailwind-utils/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: { matchVariant: true },
  theme: {
    animationDelay: {
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      333: "333ms",
      500: "500ms",
      667: "667ms",
      700: "700ms",
      1000: "1000ms",
    },
    animationDuration: {
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
    },
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: ["12px", "115%"],
        cxs: ["13px", "115%"],
        sm: ["14px", "115%"],
        base: ["16px", "115%"],
        lg: ["18px", "115%"],
        xl: ["20px", "115%"],
        cxl: ["22px", "115%"],
        "2xl": ["24px", "115%"],
        "3xl": ["30px", "115%"],
        "4xl": ["36px", "115%"],
        "5xl": ["48px", "115%"],
        "6xl": ["60px", "115%"],
        "7xl": ["72px", "115%"],
        "8xl": ["96px", "115%"],
        "9xl": ["128px", "115%"],
        "paragraph-xs": ["12px", "150%"],
        "paragraph-cxs": ["13px", "150%"],
        "paragraph-sm": ["14px", "150%"],
        "paragraph-base": ["16px", "150%"],
        "paragraph-lg": ["18px", "150%"],
        "paragraph-xl": ["20px", "150%"],
      },
      ringWidth: {
        1.5: "1.5px",
        2: "2px",
        3: "3px",
      },
      inset: {
        unset: "unset",
      },
      minWidth: {
        ...defaultTheme.spacing,
      },
      minHeight: {
        ...defaultTheme.spacing,
      },
      boxShadow: {
        sm: "0px 1px 2px rgba(0, 0, 0, 0.05)",
        csm: "0px 0px 1px rgba(0, 0, 0, 0.4), 0px 1px 2px rgba(0, 0, 0, 0.15)",
        thumbHover:
          "0px 0px 1px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.05), 0px 3px 5px rgba(0, 0, 0, 0.15)",
        thumb:
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
        "input-underline": "inset 0px -1px 0px #E4E4E7",
        "switch-md":
          "0px 0px 0px 0.5px #FFFFFF, 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "switch-none": "0px 0px 0px 0.5px #FFFFFF",
      },
      animation: {
        progress: "progress 1s ease infinite normal none running",
        circularProgress:
          "circularProgress 2s ease infinite normal none running",
      },
      keyframes: {
        progress: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        circularProgress: {
          "0%": {
            strokeDasharray: "1, 400",
            strokeDashoffset: "0",
          },
          "50%": {
            strokeDasharray: "400, 400",
            strokeDashoffset: "-100",
          },
          "100%": {
            strokeDasharray: "400, 400",
            strokeDashoffset: "-260",
          },
        },
      },
    },
  },
  plugins: [
    require("./tailwind-utils/utilities"),
    require("./tailwind-utils/variants"),
    require("./tailwind-utils/animationDelay"),
    require("./tailwind-utils/animationDuration"),
  ],
};
