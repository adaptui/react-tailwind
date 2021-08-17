export const checkboxNew = {
  label:
    "lib:relative lib:inline-flex lib:items-center lib:justify-center lib:cursor-pointer lib:align-top",
  input: "lib:sr-only",
  icon: {
    base: "lib:inline-flex lib:items-center lib:justify-center lib:flex-shrink-0 lib:align-top lib:select-none lib:transition-all",
    size: {
      sm: "lib:w-3.5 lib:h-3.5 lib:text-[10px] lib:border-[1.5px] lib:rounded",
      md: "lib:w-4 lib:h-4 lib:text-xs lib:border-[1.5px] lib:rounded",
      lg: "lib:w-5 lib:h-5 lib:text-base lib:border-[1.5px] lib:rounded",
    },
    checked: {
      default: "lib:bg-gray-800 lib:border-gray-800 lib:text-white",
    },
    unChecked: {
      default: "lib:bg-white lib:border-gray-400 lib:text-transparent",
    },
    indeterminate: {
      default: "lib:bg-gray-800 lib:border-gray-800 lib:text-white",
    },
  },
};
