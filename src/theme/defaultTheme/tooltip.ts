// styles are same as Tag
export const tooltip = {
  base:
    "lib:inline-flex lib:items-center lib:justify-center lib:appearance-none lib:transition-all lib:whitespace-nowrap lib:align-middle lib:select-none",
  arrow: "lib:text-gray-800 lib:fill-current",
  size: {
    xs:
      "lib:h-6 lib:w-auto lib:min-w-6 lib:px-2 lib:text-xs lib:rounded-md lib:font-medium",
    sm:
      "lib:h-8 lib:w-auto lib:min-w-8 lib:px-3 lib:text-sm lib:rounded-md lib:font-medium",
    lg:
      "lib:h-10 lib:w-auto lib:min-w-10 lib:px-4 lib:text-sm lib:rounded-lg lib:font-medium",
  },
  variant: {
    primary: "lib:bg-gray-800 lib:text-white rounded-md",
    secondary: "lib:bg-gray-100 lib:text-gray-800",
    outline: "lib:text-gray-800 lib:border lib:border-gray-300",
    ghost: "lib:text-gray-800 lib:hover:bg-gray-100",
  },
  prefix: {
    xs: "inherit mr-1.5 text-xs",
    sm: "inherit mr-2 text-xs",
    lg: "inherit mr-2 text-base",
  },
  suffix: {
    xs: "inherit ml-1.5 text-xs",
    sm: "inherit ml-2 text-xs",
    lg: "inherit ml-2 text-base",
  },
};
