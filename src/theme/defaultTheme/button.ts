export const button = {
  base: "lib:relative lib:inline-flex lib:items-center lib:justify-center lib:translate-y-0 hover:lib:-translate-y-px active:lib:translate-y-0 lib:transition-all lib:will-change-transform disabled:cursor-not-allowed lib:outline-none lib:appearance-none lib:select-none lib:whitespace-nowrap lib:align-middle",
  variant: {
    solid:
      "lib:bg-gray-800 lib:text-white hover:lib:bg-gray-700 active:lib:bg-gray-800 focus-visible:lib:ring-2 focus-visible:lib:ring-gray-300 disabled:lib:bg-gray-100 disabled:lib:text-gray-400",
    subtle:
      "lib:bg-gray-100 lib:text-gray-600 hover:lib:bg-gray-200 active:lib:bg-gray-100 focus-visible:lib:ring-2 focus-visible:lib:ring-gray-300 disabled:lib:bg-gray-100 disabled:lib:text-gray-400",
    outline:
      "lib:bg-white lib:text-gray-600 lib:ring-1 lib:ring-gray-200 hover:lib:ring-gray-300 hover:shadow-sm active:lib:bg-gray-100 active:lib:ring-gray-300 focus-visible:lib:ring-2 focus-visible:lib:ring-gray-200 disabled:lib:text-gray-400 disabled:lib:ring-gray-200",
    ghost:
      "lib:bg-white lib:text-gray-600 hover:lib:bg-gray-100 active:lib:bg-gray-200 focus-visible:lib:ring-2 focus-visible:lib:ring-gray-200 disabled:lib:text-gray-400 ",
  },
  size: {
    default: {
      sm: "lib:h-[26px] lib:px-2 lib:space-x-1.5 lib:rounded-lg lib:text-cxs lib:font-medium lib:w-auto lib:min-w-[26px] pb-px",
      md: "lib:h-[30px] lib:px-2.5 lib:space-x-1.5 lib:rounded-lg lib:text-sm lib:font-medium lib:w-auto lib:min-w-[30px]",
      lg: "lib:h-9 lib:px-3 lib:space-x-1.5 lib:rounded-[10px] lib:text-sm lib:font-medium lib:w-auto lib:min-w-9",
      xl: "lib:h-11 lib:px-4 lib:space-x-1.5 lib:rounded-xl lib:text-base lib:font-medium lib:w-auto lib:min-w-11",
    },
    iconOnly: {
      sm: "lib:h-[26px] lib:rounded-lg lib:text-base lib:w-[26px]",
      md: "lib:h-[30px] lib:rounded-lg lib:text-base lib:w-[30px]",
      lg: "lib:h-9 lib:rounded-[10px] lib:text-base lib:w-9",
      xl: "lib:h-11 lib:rounded-xl lib:text-xl lib:w-11",
    },
  },
  suffix: {
    size: {
      sm: "lib:text-xs",
      md: "lib:text-xs",
      lg: "lib:text-xs",
      xl: "lib:text-base",
    },
  },
  prefix: {
    size: {
      sm: "lib:text-xs",
      md: "lib:text-xs",
      lg: "lib:text-xs",
      xl: "lib:text-base",
    },
  },
  spinner: {
    size: {
      sm: "lib:text-xs",
      md: "lib:text-xs",
      lg: "lib:text-xs",
      xl: "lib:text-base",
    },
    iconOnly: {
      size: {
        sm: "lib:text-base",
        md: "lib:text-base",
        lg: "lib:text-base",
        xl: "lib:text-xl",
      },
    },
  },
};
