export const progress = {
  track: {
    base: "relative overflow-hidden bg-gray-300 rounded-2xl",
    size: {
      xs: "h-0.5",
      sm: "h-1",
      lg: "h-2",
      xl: "h-4",
    },
  },
  bar: {
    base: "h-full",
    normal: "transition-all bg-gray-800 rounded-2xl",
    indeterminate:
      "absolute min-w-half bg-gradient-to-r from-transparent via-gray-800 to-transparent animate-progress",
  },
};
