export const progress = {
  track: {
    base: "lib:relative lib:overflow-hidden lib:bg-gray-300 lib:rounded-2xl",
    size: {
      sm: "lib:h-0.5",
      md: "lib:h-1",
      lg: "lib:h-2",
      xl: "lib:h-4",
    },
  },
  bar: {
    base: "lib:h-full",
    normal: "lib:transition-all lib:bg-gray-800 lib:rounded-2xl",
    indeterminate:
      "lib:absolute lib:min-w-[50%] lib:bg-gradient-to-r lib:from-transparent lib:via-gray-800 lib:to-transparent lib:animate-progress",
  },
};
