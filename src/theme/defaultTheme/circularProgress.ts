export const circularProgress = {
  wrapper: "relative inline-flex w-fit",
  hint: {
    common:
      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium text-gray-900",
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
      xl: "text-xl",
    },
  },
  barWrapper: {
    common: {
      size: {
        sm: "w-3.5 h-3.5",
        md: "w-4 h-4",
        lg: "w-5 h-5",
        xl: "w-7 h-7",
      },
    },
    hint: {
      size: {
        sm: "w-11 h-11",
        md: "w-14 h-14",
        lg: "w-16 h-16",
        xl: "w-20 h-20",
      },
    },
    indeterminate: "animate-spin",
  },
  track: "text-gray-300",
  bar: {
    common: "text-gray-700 transition-all",
    indeterminate: "animate-circularProgress",
  },
};
