const theme = {
  button: {
    base:
      "font-sans font-semibold bg-blue-500 text-white inline-flex items-center justify-center appearance-none rounded-md transition-all relative whitespace-nowrap align-middle outline-none w-auto select-none disabled:cursor-not-allowed disabled:opacity-40",
    leftIcon: "flex mr-2",
    rightIcon: "flex ml-2",
    spinner: "w-em h-em text-white",
    size: {
      xs: "h-6 min-w-6 text-xs px-2",
      sm: "h-8 min-w-8 text-sm px-3",
      md: "h-10 min-w-10 text-base px-4",
      lg: "h-12 min-w-12 text-lg px-6",
    },
  },
  icon: {
    base:
      "w-em h-em inline-block leading-em flex-shrink-0 text-current align-middle",
  },
  spinner: {
    base:
      "inline-block border-2 border-solid border-current rounded-full animate-spin text-blue-500",
    stroke: {
      transparent: "border-b-transparent border-l-transparent",
      visible: "border-b-gray-200 border-l-gray-200",
    },
    size: {
      xs: "h-3 w-3 ",
      sm: "h-4 w-4 ",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-12 w-12",
    },
  },
  tag: {
    base:
      "font-sans font-semibold bg-gray-100 text-gray-800 inline-flex items-center justify-center appearance-none rounded-md transition-all relative whitespace-nowrap align-middle outline-none w-auto select-none disabled:cursor-not-allowed disabled:opacity-40",
    prefix: "flex mr-2",
    suffix: "flex ml-2",
    size: {
      xs: "h-6 min-w-6 text-xs px-2",
      sm: "h-8 min-w-8 text-sm px-3",
      md: "h-10 min-w-10 text-base px-4",
      lg: "h-12 min-w-12 text-lg px-6",
    },
  },
};

export default theme;
