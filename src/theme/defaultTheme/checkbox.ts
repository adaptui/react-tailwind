const field = {
  base: "flex flex-col",
  description: {
    base: "lib:text-gray-500 lib:leading-loose lib:text-sm",
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

export const checkbox = {
  base: "group lib:relative lib:inline-flex lib:space-x-2 lib:items-center lib:align-top lib:cursor-pointer",
  disabled: "lib:cursor-not-allowed",
  input: "peer lib:sr-only",
  icon: {
    base: "lib:inline-flex lib:items-center lib:justify-center lib:flex-shrink-0 lib:align-top lib:self-start lib:rounded lib:select-none lib:transition-all lib:ring-0 lib:ring-gray-300 peer-focus:lib:ring-2",
    size: {
      sm: "lib:w-3.5 lib:h-3.5 lib:text-[0.625rem]",
      md: "lib:w-4 lib:h-4 lib:text-xs",
      lg: "lib:w-5 lib:h-5 lib:text-base",
    },
    state: {
      disabled: "lib:text-gray-400 lib:bg-gray-200 lib:cursor-not-allowed",
      checked: "lib:text-white",
      unchecked: "lib:border-[1.5px] lib:border-solid",
      indeterminate: "lib:text-white",
      checked_valid: "lib:bg-gray-800 group-hover:lib:bg-gray-700",
      unchecked_valid: "lib:border-gray-400 group-hover:lib:border-gray-500",
      indeterminate_valid: "lib:bg-gray-800",
      checked_invalid:
        "lib:bg-red-600 lib:text-white group-hover:lib:bg-red-500 lib:ring-red-300",
      unchecked_invalid:
        "lib:border-red-600 group-hover:lib:border-red-500 lib:ring-red-300",
      indeterminate_invalid:
        "lib:bg-red-600 lib:text-white group-hover:lib:bg-red-500 lib:ring-red-300",
    },
  },
  field,
};
