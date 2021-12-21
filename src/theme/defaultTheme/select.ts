export const select = {
  wrapper: "relative inline-flex",
  main: {
    base: "peer w-full inline-flex items-center justify-center font-normal appearance-none outline-none disabled:cursor-not-allowed disabled:select-none transition",
    size: {
      sm: {
        base: "h-[26px] text-cxs rounded-lg",
        default: "px-2",
      },
      md: {
        base: "h-[30px] text-sm rounded-lg",
        default: "px-2.5",
      },
      lg: {
        base: "h-9 text-sm rounded-[10px]",
        default: "px-3",
      },
      xl: {
        base: "h-11 text-base rounded-xl",
        default: "px-3",
      },
    },
    variant: {
      outline:
        "bg-transparent border border-gray-200 text-gray-700 placeholder:text-gray-500 hover:shadow-sm hover:border-gray-300 active:border-gray-400 focus-visible:border-gray-400 focus-visible:ring-2 focus-visible:ring-gray-200 disabled:bg-gray-50 disabled:shadow-none",
      subtle:
        "bg-gray-100 text-gray-700 border border-transparent placeholder:text-gray-500 hover:bg-gray-200 active:bg-transparent active:border-gray-300 active:shadow-sm focus-visible:bg-transparent focus-visible:border-gray-400 focus-visible:ring-2 focus-visible:ring-gray-200 disabled:bg-gray-50 disabled:border-gray-200 disabled:shadow-none",
      underline:
        "px-0.5 bg-transparent rounded-none text-gray-700 placeholder:text-gray-500 shadow-input-underline shadow-gray-200 hover:shadow-gray-300 active:shadow-gray-400 focus-visible:shadow-gray-400 disabled:placeholder:text-gray-400 disabled:shadow-gray-200",
      ghost:
        "bg-transparent text-gray-700 placeholder:text-gray-400 hover:bg-gray-100 hover:placeholder:text-gray-500 active:bg-gray-100 active:placeholder:text-gray-500 focus-visible:bg-gray-100 focus-visible:placeholder:text-gray-500 diabled:bg-transparent diabled:placeholder:text-gray-500",
    },
  },
  prefix: {
    base: "flex items-center justify-center absolute inset-y-0 left-0 bg-transparent pointer-events-none",
    size: {
      sm: "h-[26px] text-xs pl-2 pr-1.5",
      md: "h-[30px] text-xs pl-2.5 pr-1.5",
      lg: "h-9 text-xs pl-3 pr-1.5",
      xl: "h-11 text-base pl-3 pr-2",
    },
    variant: {
      outline:
        "text-gray-500 peer-active:text-gray-600 peer-focus-visible:text-gray-600 peer-disabled:text-gray-400",
      subtle:
        "text-gray-500 peer-active:text-gray-600 peer-focus-visible:text-gray-600 peer-disabled:text-gray-400",
      underline:
        "pl-0.5 text-gray-500 peer-active:text-gray-600 peer-focus-visible:text-gray-600 peer-disabled:text-gray-400",
      ghost:
        "text-gray-400 peer-hover:text-gray-500 peer-active:text-gray-500  peer-focus-visible:text-gray-500 peer-disabled:text-gray-400",
    },
  },
  suffix: {
    base: "flex items-center justify-center absolute inset-y-0 right-0 bg-transparent pointer-events-none",
    size: {
      sm: "h-[26px] text-xs pr-2 pl-1.5",
      md: "h-[30px] text-xs pr-2.5 pl-1.5",
      lg: "h-9 text-xs pr-3 pl-1.5",
      xl: "h-11 text-base pr-3 pl-2",
    },
    variant: {
      outline:
        "text-gray-500 peer-active:text-gray-600 peer-focus-visible:text-gray-600 peer-disabled:text-gray-400",
      subtle:
        "text-gray-500 peer-active:text-gray-600 peer-focus-visible:text-gray-600 peer-disabled:text-gray-400",
      underline:
        "pr-0.5 text-gray-500 peer-active:text-gray-600 peer-focus-visible:text-gray-600 peer-disabled:text-gray-400",
      ghost:
        "text-gray-400 peer-hover:text-gray-500 peer-active:text-gray-500  peer-focus-visible:text-gray-500 peer-disabled:text-gray-400",
    },
  },
};
