export const tag = {
  base: "inline-flex items-center justify-center relative transition-all disabled:cursor-not-allowed outline-none appearance-none select-none whitespace-nowrap align-middle",
  size: {
    sm: {
      default:
        "min-h-5 min-w-5 w-auto px-1.5 border rounded-[5px] text-cxs font-medium",
      prefix: "text-[12px] mr-1",
      suffix: "text-[12px] ml-1",
    },
    md: {
      default:
        "min-h-6 min-w-6 w-auto px-2 border rounded-md text-cxs font-medium",
      prefix: "text-[12px] mr-1",
      suffix: "text-[12px] ml-1",
    },
    lg: {
      default:
        "min-h-7 min-w-7 w-auto px-2 border rounded-md text-sm font-medium",
      prefix: "text-[12px] mr-1",
      suffix: "text-[12px] ml-1",
    },
    xl: {
      default:
        "min-h-9 min-w-9 w-auto px-3 border rounded-lg text-base font-medium",
      prefix: "text-[16px] mr-1.5",
      suffix: "text-[16px] ml-1.5",
    },
  },
  themeColor: {
    base: {
      solid: {
        default: "bg-gray-900 text-white-900 border-transparent",
        hover: "enabled:hover:bg-gray-800",
        active: "enabled:active:bg-gray-700",
        focus: "focus-visible:ring-3 focus-visible:ring-gray-500 ",
        disabled: "disabled:bg-gray-200 disabled:text-gray-500",
      },
      subtle: {
        default: "bg-gray-100 text-gray-800 border-transparent",
        hover: "enabled:hover:bg-gray-200",
        active: "enabled:active:bg-gray-300",
        focus: "focus-visible:ring-3 focus-visible:ring-gray-500 ",
        disabled: "disabled:bg-gray-100 disabled:text-gray-500",
      },
      outline: {
        default: "bg-white-900 text-gray-800 border-gray-400",
        hover: "enabled:hover:border-gray-500 enabled:hover:shadow-sm",
        active: "enabled:active:bg-gray-300 active:border-gray-500",
        focus:
          "focus-visible:border-transparent focus-visible:ring-3 focus-visible:ring-gray-500 ",
        disabled:
          "disabled:bg-white-100 disabled:text-gray-500 disabled:border-gray-400",
      },
    },
    primary: {
      solid: {
        default: "bg-blue-600 text-white-900 border-transparent",
        hover: "enabled:hover:bg-blue-700",
        active: "enabled:active:bg-blue-800",
        focus: "focus-visible:ring-3 focus-visible:ring-blue-500 ",
        disabled: "disabled:bg-blue-100 disabled:text-blue-500",
      },
      subtle: {
        default: "bg-blue-100 text-blue-800 border-transparent",
        hover: "enabled:hover:bg-blue-200",
        active: "enabled:active:bg-blue-300",
        focus: "focus-visible:ring-3 focus-visible:ring-blue-500 ",
        disabled: "disabled:bg-blue-100 disabled:text-blue-500",
      },
      outline: {
        default: "bg-white-900 text-blue-800 border-blue-400",
        hover: "enabled:hover:border-blue-500 enabled:hover:shadow-sm",
        active: "enabled:active:bg-blue-300 active:border-blue-500",
        focus:
          "focus-visible:border-transparent focus-visible:ring-3 focus-visible:ring-blue-500 ",
        disabled:
          "disabled:bg-white-100 disabled:text-blue-500 disabled:border-blue-400",
      },
    },
  },
};
