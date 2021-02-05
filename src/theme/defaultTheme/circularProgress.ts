export const circularProgress = {
  wrapper: "relative inline-flex",
  bar: {
    size: {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      lg: "w-5 h-5",
      xl: "w-6 h-6",
    },
    indeterminate: "animate-spin",
    track: "text-gray-300",
    innerTrack: {
      base: "text-gray-800 transition-all",
      indeterminate: "animate-circularProgress",
    },
  },
};
