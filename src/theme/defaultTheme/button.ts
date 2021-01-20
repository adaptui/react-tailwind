export const button = {
  span: "lib:inline-block lib:cursor-not-allowed",
  base:
    "lib:inline-flex lib:items-center lib:justify-center lib:outline-none lib:appearance-none lib:transition-all lib:whitespace-nowrap lib:align-middle lib:select-none lib:disabled:cursor-not-allowed lib:disabled:opacity-40",
  variant: {
    primary: "lib:bg-gray-800 lib:text-white",
    secondary: "lib:bg-gray-100 lib:text-gray-800",
    outline: "lib:text-gray-800 lib:border lib:border-gray-300",
    ghost: "lib:text-gray-800 lib:hover:bg-gray-100",
  },
  size: {
    xs:
      "lib:h-6 lib:w-auto lib:min-w-6 lib:px-2 lib:text-xs lib:font-medium lib:rounded-md lib:shadow-sm",
    sm:
      "lib:h-8 lib:w-auto lib:min-w-8 lib:px-3 lib:text-sm lib:font-medium lib:rounded-md lib:shadow-sm",
    lg:
      "lib:h-10 lib:w-auto lib:min-w-10 lib:px-4 lib:text-sm lib:font-medium lib:rounded-lg lib:shadow-sm",
    xl:
      "lib:h-12 lib:w-auto lib:min-w-12 lib:px-4 lib:text-base lib:font-medium lib:rounded-lg lib:shadow-sm",
  },
  prefix: {
    xs: "lib:inherit lib:mr-1.5",
    sm: "lib:inherit lib:mr-2",
    lg: "lib:inherit lib:mr-2",
    xl: "lib:inherit lib:mr-2",
  },
  suffix: {
    xs: "lib:inherit lib:ml-1.5",
    sm: "lib:inherit lib:ml-2",
    lg: "lib:inherit lib:ml-2",
    xl: "lib:inherit lib:ml-2",
  },
  spinner: "lib:w-em lib:h-em text-current",
  group: "lib:focus:z-1 lib:-mr-px lib:shadow-none",
};
