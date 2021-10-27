export const meter = {
  wrapper:
    "inline-flex flex-row flex-wrap justify-between items-center align-top w-full",
  label: {
    base: "flex-1 text-left mb-3 text-gray-700 font-medium",
    size: {
      sm: "text-cxs",
      md: "text-sm",
      lg: "text-sm",
      xl: "text-sm",
    },
  },
  hint: {
    base: "ml-3 mb-3 text-gray-500 ",
    size: {
      sm: "text-cxs",
      md: "text-sm",
      lg: "text-sm",
      xl: "text-sm",
    },
  },
  track: {
    base: "w-full relative overflow-hidden bg-gray-200 rounded-2xl z-10",
    size: {
      sm: "h-0.5",
      md: "h-1",
      lg: "h-2",
      xl: "h-3",
    },
  },
  bar: {
    base: "h-full bg-gray-800 transition-all",
  },
};
