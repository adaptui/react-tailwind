export const button = {
  base:
    "lib:inline-flex lib:items-center lib:justify-center lib:appearance-none lib:transition-all lib:whitespace-nowrap lib:align-middle lib:select-none",
  size: {
    sm:
      "lib:h-6 lib:w-auto lib:min-w-6 lib:px-2 lib:text-xs lib:font-medium lib:rounded-md",
    md:
      "lib:h-8 lib:w-auto lib:min-w-8 lib:px-3 lib:text-sm lib:font-medium lib:rounded-md",
    lg:
      "lib:h-10 lib:w-auto lib:min-w-10 lib:px-4 lib:text-sm lib:font-medium lib:rounded-lg",
    xl:
      "lib:h-12 lib:w-auto lib:min-w-12 lib:px-4 lib:text-base lib:font-medium lib:rounded-lg",
  },
  variant: {
    primary: "lib:bg-gray-800 lib:text-white",
    secondary: "lib:bg-gray-100 lib:text-gray-800",
    outline: "lib:text-gray-800 lib:border lib:border-gray-300",
    ghost: "lib:text-gray-800 lib:hover:bg-gray-100",
  },
  disabled: "lib:cursor-not-allowed lib:opacity-40",
  group: "lib:focus:z-10 lib:-mr-px",
  prefix: {
    sm: "inline-flex mr-1.5",
    md: "inline-flex mr-2",
    lg: "inline-flex mr-2",
    xl: "inline-flex mr-2",
  },
  suffix: {
    sm: "inline-flex ml-1.5",
    md: "inline-flex ml-2",
    lg: "inline-flex ml-2",
    xl: "inline-flex ml-2",
  },
  spinner: "w-[1em] h-[1em] text-current",
};
