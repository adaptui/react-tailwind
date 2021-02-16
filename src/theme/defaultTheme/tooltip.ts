export const tooltip = {
  base:
    "lib:inline-flex lib:items-center lib:justify-center lib:appearance-none lib:transition-all lib:whitespace-nowrap lib:align-middle lib:select-none",
  arrow: {
    base: "lib:fill-current",
    variant: {
      primary: "lib:text-gray-800",
      danger: "lib:text-red-600",
      ghost: "lib:text-white",
    },
  },
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
    danger: "lib:bg-red-600 lib:text-white rounded-md",
    ghost: "lib:text-gray-800 lib:bg-white shadow-md rounded-md",
  },
  icon: {
    xs: "inherit mr-1.5 text-xs",
    sm: "inherit mr-2 text-xs",
    lg: "inherit mr-2 text-base",
  },
};
