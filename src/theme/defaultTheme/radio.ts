export const radio = {
  base:
    "lib:relative lib:inline-flex lib:items-center lib:align-top lib:cursor-pointer",
  disabled: "lib:cursor-not-allowed",
  input: "lib:sr-only",
  icon: {
    base:
      "lib:inline-flex lib:items-center lib:justify-center lib:flex-shrink-0 lib:align-top lib:select-none lib:transition-all lib:mr-2 lib:rounded-full",
    size: {
      xs: "lib:min-w-3.5 lib:min-h-3.5 lib:text-xxs",
      sm: "lib:min-w-4 lib:min-h-4 lib:text-xs",
      lg: "lib:min-w-5 lib:min-h-5 lib:text-base",
    },
    unchecked: "lib:border-2 lib:border-gray-400",
    checked: "lib:border-5 lib:bg-white lib:border-gray-800",
    disabled: "lib:border-5 lib:bg-gray-400 lib:border-gray-200",
  },
  label: {
    base: "lib:text-gray-600 lib:select-none",
    size: {
      xs: "lib:text-xs",
      sm: "lib:text-sm",
      lg: "lib:text-sm",
    },
  },
};
