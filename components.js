const components = {
  button: {
    base:
      "font-sans font-semibold text-white inline-flex items-center justify-center appearance-none rounded-md transition-all relative whitespace-nowrap align-middle outline-none w-auto select-none disabled:cursor-not-allowed disabled:opacity-40",
    prefix: "flex mr-2",
    suffix: "flex ml-2",
    spinner: "w-em h-em text-current",
    group: "focus:z-1",
    span: "inline-block cursor-not-allowed",
    variant: {
      primary: "bg-gray-800",
      secondary: "bg-gray-100 text-gray-800",
      link: "text-gray-800",
    },
    size: {
      xs: "h-6 min-w-6 text-xs px-2",
      sm: "h-8 min-w-8 text-sm px-3",
      md: "h-10 min-w-10 text-base px-4",
      lg: "h-12 min-w-12 text-lg px-6",
    },
  },
  badge: {
    base: "font-sans font-medium text-xs rounded-full py-1",
    variant: {
      primary: "text-white bg-gray-800",
      secondary: "text-gray-700 bg-gray-50",
      outline: "bg-white text-gray-800 border border-gray-800",
    },
    size: {
      xs: "text-xs px-2",
      sm: "text-sm px-3",
      md: "text-base px-4",
      lg: "text-lg px-5",
    },
  },
};

module.exports = components;
