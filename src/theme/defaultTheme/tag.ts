export const tag = {
  base: "inline-flex items-center justify-center relative transition-all disabled:cursor-not-allowed outline-none appearance-none select-none whitespace-nowrap align-middle",
  variant: {
    default: {
      solid: "bg-gray-800 text-white border border-transparent",
      subtle: "bg-gray-100 text-gray-600 border border-transparent",
      outline: "bg-white text-gray-600 border border-gray-300",
    },
    hover: {
      solid: "hover:bg-gray-700",
      subtle: "hover:bg-gray-200",
      outline: "hover:border-gray-300 hover:shadow-sm",
    },
    active: {
      solid: "active:bg-gray-800",
      subtle: "active:bg-gray-100",
      outline: "active:bg-gray-100 active:border-gray-300",
    },
    focus: {
      solid:
        "focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:z-10",
      subtle:
        "focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:z-10",
      outline:
        "focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:z-10",
    },
    disabled: {
      solid: "disabled:bg-gray-100 disabled:text-gray-400",
      subtle: "disabled:bg-gray-100 disabled:text-gray-400",
      outline: "disabled:text-gray-400 disabled:border-gray-200",
    },
  },
  size: {
    default: {
      sm: "min-h-5 w-auto min-w-5 px-1.5 rounded-[5px] text-cxs font-medium",
      md: "min-h-6 w-auto min-w-6 px-2 rounded-md text-cxs font-medium",
      lg: "min-h-7 w-auto min-w-7 px-2 rounded-md text-sm font-medium",
      xl: "min-h-9 w-auto min-w-9 px-3 rounded-lg text-base font-medium",
    },
    prefix: {
      sm: "text-xs mr-1",
      md: "text-xs mr-1",
      lg: "text-xs mr-1",
      xl: "text-base mr-1",
    },
    suffix: {
      sm: "text-xs ml-1",
      md: "text-xs ml-1",
      lg: "text-xs ml-1",
      xl: "text-base ml-1.5",
    },
  },
};
