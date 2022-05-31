export const button = {
  base: {
    default:
      "inline-flex items-center justify-center relative transition-all disabled:cursor-not-allowed outline-none appearance-none select-none whitespace-nowrap align-middle",
    notCollapsed:
      "translate-y-0 hover:-translate-y-px active:translate-y-0 will-change-transform",
  },
  variant: {
    default: {
      solid: "bg-gray-800 text-white border border-transparent",
      subtle: "bg-gray-100 text-gray-600 border border-transparent",
      outline: "bg-white text-gray-600 border border-gray-200",
      ghost: "bg-white text-gray-600 border border-transparent",
    },
    hover: {
      solid: "hover:bg-gray-700 hover:z-10",
      subtle: "hover:bg-gray-200 hover:z-10",
      outline: "hover:border-gray-300 hover:shadow-sm hover:z-10",
      ghost: "hover:bg-gray-100 hover:z-10",
    },
    active: {
      solid: "active:bg-gray-800",
      subtle: "active:bg-gray-100",
      outline: "active:bg-gray-100 active:border-gray-300",
      ghost: "active:bg-gray-200",
    },
    focus: {
      solid:
        "focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:z-10",
      subtle:
        "focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:z-10",
      outline:
        "focus-visible:border-gray-300 focus-visible:!border-r-[1px] focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:z-10",
      ghost:
        "focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:z-10",
    },
    disabled: {
      solid: "disabled:bg-gray-100 disabled:text-gray-400",
      subtle: "disabled:bg-gray-100 disabled:text-gray-400",
      outline: "disabled:text-gray-400 disabled:border-gray-200",
      ghost: "disabled:text-gray-400",
    },
  },
  size: {
    default: {
      sm: "min-h-[26px] w-auto min-w-[26px] pb-px px-2 rounded-lg text-cxs font-medium",
      md: "min-h-[30px] w-auto min-w-[30px] px-2.5 rounded-lg text-sm font-medium",
      lg: "min-h-9 w-auto min-w-9 px-3 rounded-[10px] text-sm font-medium",
      xl: "min-h-11 w-auto min-w-11 px-4 rounded-xl text-base font-medium",
    },
    iconOnly: {
      base: {
        sm: "min-h-[26px] rounded-lg w-[26px]",
        md: "min-h-[30px] rounded-lg w-[30px]",
        lg: "min-h-9 rounded-[10px] w-9",
        xl: "min-h-11 rounded-xl w-11",
      },
      spinner: {
        sm: "text-base",
        md: "text-base",
        lg: "text-base",
        xl: "text-xl",
      },
    },
    prefix: {
      sm: "text-xs mr-1.5",
      md: "text-xs mr-1.5",
      lg: "text-xs mr-1.5",
      xl: "text-base mr-1.5",
    },
    suffix: {
      sm: "text-xs ml-1.5",
      md: "text-xs ml-1.5",
      lg: "text-xs ml-1.5",
      xl: "text-base ml-1.5",
    },
  },
};
