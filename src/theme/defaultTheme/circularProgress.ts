export const circularProgress = {
  wrapper: "relative inline-flex",
  bar: {
    size: {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    },
    indeterminate: "animate-spin",
    track: "text-gray-300",
    innerTrack: {
      base: "text-gray-800 transition-all",
      indeterminate: "animate-circularProgress",
    },
  },
};
