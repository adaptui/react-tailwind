export const circularProgress = {
  wrapper: "relative inline-flex w-fit",
  size: {
    sm: {
      barWrapper: { base: "w-3.5 h-3.5", hint: " w-11 h-11" },
      hint: "text-xs font-medium",
    },
    md: {
      barWrapper: { base: "w-4 h-4", hint: " w-14 h-14" },
      hint: "text-sm font-medium",
    },
    lg: {
      barWrapper: { base: "w-5 h-5", hint: " w-16 h-16" },
      hint: "text-base font-medium",
    },
    xl: {
      barWrapper: { base: "w-7 h-7", hint: " w-20 h-20" },
      hint: "text-xl font-medium",
    },
  },
  themeColor: {
    base: {
      bar: "text-gray-900",
      track: "text-gray-100",
      hint: "text-gray-900",
    },
    primary: {
      bar: "text-blue-600",
      track: "text-blue-100",
      hint: "text-gray-900",
    },
  },
  barWrapper: {
    base: "",
    indeterminate: "animate-spin",
  },
  track: "",
  bar: {
    base: "transition-all",
    indeterminate: "animate-circularProgress",
  },
  hint: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ",
};
