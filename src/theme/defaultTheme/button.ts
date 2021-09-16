export const button = {
  base: "inline-flex items-center justify-center relative translate-y-0 hover:-translate-y-px active:translate-y-0 transition-all will-change-transform disabled:cursor-not-allowed outline-none appearance-none select-none whitespace-nowrap align-middle",
  variant: {
    default: {
      solid: "bg-gray-800 text-white border border-transparent",
      subtle: "bg-gray-100 text-gray-600 border border-transparent",
      outline: "bg-white text-gray-600 border border-gray-200",
      ghost: "bg-white text-gray-600 border border-transparent",
    },
    hover: {
      solid: "hover:bg-gray-700",
      subtle: "hover:bg-gray-200",
      outline: "hover:border-gray-300 hover:shadow-sm",
      ghost: "hover:bg-gray-100",
    },
    active: {
      solid: "active:bg-gray-800",
      subtle: "active:bg-gray-100",
      outline: "active:bg-gray-100 active:border-gray-300",
      ghost: "active:bg-gray-200",
    },
    focus: {
      solid: "focus-visible:ring-2 focus-visible:ring-gray-300",
      subtle: "focus-visible:ring-2 focus-visible:ring-gray-300",
      outline: "focus-visible:ring-2 focus-visible:ring-gray-200",
      ghost: "focus-visible:ring-2 focus-visible:ring-gray-200",
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
      sm: "h-[26px] px-2 space-x-1.5 rounded-lg text-cxs font-medium w-auto min-w-[26px] pb-px",
      md: "h-[30px] px-2.5 space-x-1.5 rounded-lg text-sm font-medium w-auto min-w-[30px]",
      lg: "h-9 px-3 space-x-1.5 rounded-[10px] text-sm font-medium w-auto min-w-9",
      xl: "h-11 px-4 space-x-1.5 rounded-xl text-base font-medium w-auto min-w-11",
    },
    iconOnly: {
      sm: "h-[26px] rounded-lg text-base w-[26px]",
      md: "h-[30px] rounded-lg text-base w-[30px]",
      lg: "h-9 rounded-[10px] text-base w-9",
      xl: "h-11 rounded-xl text-xl w-11",
    },
  },
  prefix: {
    size: {
      sm: "text-xs",
      md: "text-xs",
      lg: "text-xs",
      xl: "text-base",
    },
  },
  suffix: {
    size: {
      sm: "text-xs",
      md: "text-xs",
      lg: "text-xs",
      xl: "text-base",
    },
  },
  spinner: {
    default: {
      size: {
        sm: "text-xs",
        md: "text-xs",
        lg: "text-xs",
        xl: "text-base",
      },
    },
    iconOnly: {
      size: {
        sm: "text-base",
        md: "text-base",
        lg: "text-base",
        xl: "text-xl",
      },
    },
  },
};
