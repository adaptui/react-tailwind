export const circularProgress = {
  wrapper: "lib:relative lib:inline-flex",
  bar: {
    size: {
      xs: "lib:w-3 lib:h-3",
      sm: "lib:w-4 lib:h-4",
      lg: "lib:w-5 lib:h-5",
      xl: "lib:w-6 lib:h-6",
    },
    indeterminate: "lib:animate-spin",
    track: "lib:text-gray-300",
    innerTrack: {
      base: "lib:text-gray-800 lib:transition-all",
      indeterminate: "lib:animate-circularProgress",
    },
  },
};
