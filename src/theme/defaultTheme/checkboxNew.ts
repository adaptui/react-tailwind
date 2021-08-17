export const checkboxNew = {
  label:
    "lib:relative lib:inline-flex lib:items-center lib:justify-center lib:cursor-pointer lib:align-top",
  input: "peer lib:sr-only",
  icon: {
    base: "lib:inline-flex lib:items-center lib:justify-center lib:self-start lib:flex-shrink-0 lib:align-top lib:select-none lib:transition-all",
    size: {
      sm: "lib:w-3.5 lib:h-3.5 lib:text-[10px] lib:border-[1.5px] lib:rounded lib:mr-1.5",
      md: "lib:w-4 lib:h-4 lib:text-xs lib:border-[1.5px] lib:rounded lib:mr-2",
      lg: "lib:w-5 lib:h-5 lib:text-base lib:border-[1.5px] lib:rounded lib:mr-2",
    },
    checked: {
      default: "lib:bg-gray-800 lib:border-gray-800 lib:text-white",
      hover: "peer-hover:lib:bg-gray-700 peer-hover:lib:border-gray-700",
      active: "peer-active:lib:bg-gray-800 peer-active:lib:border-gray-800",
      focus:
        "peer-focus-visible:lib:ring-2 peer-focus-visible:lib:ring-gray-300",
      disabled:
        "peer-disabled:lib:bg-gray-200 peer-disabled:lib:border-gray-200 peer-disabled:lib:text-gray-400",
      invalid:
        "lib:bg-red-600 lib:border-red-600 lib:text-white peer-hover:lib:bg-red-500 peer-hover:lib:border-red-500 peer-active:lib:bg-red-600 peer-active:lib:border-red-600 peer-focus-visible:lib:ring-2 peer-focus-visible:lib:ring-red-300 peer-disabled:lib:bg-red-200 peer-disabled:lib:border-red-200 peer-disabled:lib:text-red-400",
    },
    unChecked: {
      default: "lib:bg-white lib:border-gray-400 lib:text-transparent",
      hover: "peer-hover:lib:border-gray-500",
      active: "peer-active:lib:border-gray-400",
      focus:
        "peer-focus-visible:lib:ring-2 peer-focus-visible:lib:ring-gray-300",
      disabled:
        "peer-disabled:lib:bg-gray-200 peer-disabled:lib:border-gray-300",
      invalid:
        "lib:bg-white lib:border-red-600 lib:text-transparent peer-hover:lib:border-red-700 peer-active:lib:border-red-600 peer-focus-visible:lib:ring-2 peer-focus-visible:lib:ring-red-300 peer-disabled:lib:bg-red-200 peer-disabled:lib:border-red-300",
    },
    indeterminate: {
      default: "lib:bg-gray-800 lib:border-gray-800 lib:text-white",
      hover: "peer-hover:lib:bg-gray-700 peer-hover:lib:border-gray-700",
      active: "peer-active:lib:bg-gray-800 peer-active:lib:border-gray-800",
      focus:
        "peer-focus-visible:lib:ring-2 peer-focus-visible:lib:ring-gray-300",
      disabled:
        "peer-disabled:lib:bg-gray-200 peer-disabled:lib:border-gray-200 peer-disabled:lib:text-gray-400",
      invalid:
        "lib:bg-red-600 lib:border-red-600 lib:text-white peer-hover:lib:bg-red-500 peer-hover:lib:border-red-500 peer-active:lib:bg-red-600 peer-active:lib:border-red-600 peer-focus-visible:lib:ring-2 peer-focus-visible:lib:ring-red-300 peer-disabled:lib:bg-red-200 peer-disabled:lib:border-red-200 peer-disabled:lib:text-red-400",
    },
  },
  text: {
    base: "lib:text-gray-700 lib:font-medium lib:select-none",
    size: {
      sm: "lib:text-cxs",
      md: "lib:text-sm",
      lg: "lib:text-base",
    },
  },
  description: {
    base: "lib:text-gray-500 lib:select-none",
    size: {
      sm: "lib:text-paragraph-cxs lib:mt-1",
      md: "lib:text-paragraph-sm lib:mt-1.5",
      lg: "lib:text-paragraph-sm lib:mt-2",
    },
  },
};
