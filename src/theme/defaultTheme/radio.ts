export const radio = {
  base:
    "lib:relative lib:inline-flex lib:items-center lib:align-top lib:cursor-pointer",
  disabled: "lib:cursor-not-allowed",
  input: "lib:sr-only",
  icon: {
    base:
      "lib:inline-flex lib:items-center lib:justify-center lib:flex-shrink-0 lib:align-top lib:select-none lib:transition-all mr-2",
    size: {
      xs: "lib:w-3.5 lib:h-3.5 lib:text-xxs",
      sm: "lib:w-4 lib:h-4 lib:text-xs",
      lg: "lib:w-5 lib:h-5 lib:text-base",
    },
    unchecked: "lib:text-gray-400",
    checked: "lib:text-gray-800",
    disabled: "lib:text-gray-400",
  },
  label: {
    base: "lib:ml-2 lib:text-gray-600 lib:select-none",
    size: {
      xs: "lib:text-xs",
      sm: "lib:text-sm",
      lg: "lib:text-sm",
    },
  },
};
