export const textarea = {
  wrapper: "relative inline-flex h-fit",
  base: {
    common:
      "font-normal w-full transition-all appearance-none outline-none disabled:cursor-not-allowed",
    size: {
      sm: "text-cxs rounded-lg px-2 py-[5.5px]",
      md: "text-sm rounded-lg px-2.5 py-[7px]",
      lg: "text-sm rounded-lg px-3 py-2.5",
      xl: "text-base rounded-lg px-3 py-[13px]",
    },
    variant: {
      outline: {
        common:
          "bg-white border border-gray-200 placeholder:text-gray-500 text-gray-700 ",
        interactions:
          "hover:border-gray-300 hover:shadow-sm active:border-gray-400 active:shadow-sm focus-visible:border-gray-400 focus-visible:ring-2 focus-visible:ring-gray-200",
        disabled: "bg-gray-50 shadow-none text-gray-500 ",
        invalid: "border-red-300",
      },
      underline: {
        common:
          "px-0.5 bg-white rounded-none placeholder:text-gray-500 text-gray-700 shadow-input-underline shadow-gray-200",
        interactions:
          "hover:shadow-gray-300 active:shadow-gray-400 focus-visible:shadow-gray-400 ",
        disabled: "placeholder:text-gray-400 text-gray-400 shadow-gray-200",
        invalid: "border-red-300",
      },
      subtle: {
        common:
          "bg-gray-100 text-gray-700 border border-transparent placeholder:text-gray-500",
        interactions:
          "hover:bg-gray-200 active:bg-transparent active:border-gray-300 active:shadow-sm focus-visible:bg-transparent focus-visible:border-gray-400 focus-visible:ring-2 focus-visible:ring-gray-200",
        disabled: "bg-gray-50 text-gray-500 border-gray-200 shadow-none",
        invalid: "border-red-300",
      },
    },
    resize: {
      horizontal: "resize-x",
      vertical: "resize-y",
      both: "resize",
      none: "resize-none",
    },
  },
  icon: {
    common:
      "absolute bottom-2.5 flex items-center justify-center text-gray-400 bg-transparent pointer-events-none right-1 w-[1em] h-[1em]",
    normal: "bottom-1",
    size: {
      sm: "text-xs",
      md: "text-xs",
      lg: "text-xs",
      xl: "text-base",
    },
    invalid: "text-red-500",
  },
  ghost: "invisible absolute overflow-hidden h-0 top-0 left-0 transform-gpu",
};
