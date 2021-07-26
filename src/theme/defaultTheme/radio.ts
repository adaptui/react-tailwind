const field = {
  base: "lib:flex lib:flex-col",
  description: {
    base: "lib:text-gray-500 lib:mt-1 lib:text-sm",
    size: {
      sm: "lib:text-xs",
      md: "lib:text-sm",
      lg: "lib:text-sm",
    },
  },
  text: {
    base: "lib:text-gray-700 lib:select-none lib:font-medium",
    size: {
      sm: "lib:text-xs",
      md: "lib:text-sm lib:leading-4",
      lg: "lib:text-sm lib:leading-5",
    },
  },
};

export const radio = {
  base: "group lib:relative lib:inline-flex lib:space-x-2 lib:items-center lib:align-top lib:cursor-pointer",
  disabled: "lib:cursor-not-allowed",
  input: "peer lib:sr-only",
  icon: {
    base: "lib:inline-flex lib:items-center lib:justify-center lib:flex-shrink-0 lib:align-top lib:self-start lib:select-none lib:transition-all lib:rounded-full lib:ring-0 lib:ring-gray-300 peer-focus:ring-2",
    size: {
      sm: "lib:w-3.5 lib:h-3.5 lib:text-[0.625rem]",
      md: "lib:w-4 lib:h-4 lib:text-xs",
      lg: "lib:w-5 lib:h-5 lib:text-base",
    },
    state: {
      disabled: "lib:text-gray-400 lib:cursor-not-allowed",
      default: {
        checked: "lib:text-gray-800",
        unchecked: "lib:text-gray-400",
      },
      invalid: {
        checked: "lib:text-red-600 lib:ring lib:ring-red-300",
        unchecked: "lib:text-red-600 lib:ring-red-300",
      },
      hover: {
        checked: "group-hover:lib:text-gray-700",
        unchecked: "group-hover:lib:text-gray-500",
      },
      hover_invalid: {
        checked: "group-hover:lib:text-red-500",
        unchecked: "group-hover:lib:text-red-500",
      },
    },
  },
  field,
};
