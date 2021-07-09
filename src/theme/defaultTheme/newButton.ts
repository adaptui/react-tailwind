export const newButton = {
  base: "lib:relative lib:inline-flex lib:items-center lib:justify-center lib:font-medium lib:leading-[115%] lib:w-auto lib:outline-none focus-visible:lib:ring-2 lib:ring-gray-300 disabled:lib:text-gray-400 lib:appearance-none lib:whitespace-nowrap lib:align-middle lib:select-none lib:transition-all",
  size: {
    sm: "lib:h-[26px] lib:min-w-[26px] lib:px-2 lib:rounded-lg lib:text-[length:13px]",
    md: "lib:h-[30px] lib:min-w-[30px] lib:px-2.5 lib:rounded-lg lib:text-[length:14px]",
    lg: "lib:h-9 lib:min-w-9 lib:px-3 lib:rounded-[10px] lib:text-sm",
    xl: "lib:h-11 lib:min-w-11 lib:px-4 lib:rounded-xl lib:text-base",
  },
  variant: {
    solid:
      "lib:bg-gray-800 lib:text-white hover:lib:bg-gray-700 disabled:lib:bg-gray-100",
    subtle:
      "lib:bg-gray-100 lib:text-gray-600 hover:lib:bg-gray-200 disabled:lib:bg-gray-100",
    outline:
      "lib:text-gray-600 lib:border lib:border-gray-200 hover:lib:border-gray-300 hover:shadow-sm active:lib:bg-gray-100",
    ghost: "lib:text-gray-600 hover:lib:bg-gray-100  active:lib:bg-gray-200",
  },
  iconOnly: {
    size: {
      sm: "lib:text-base lib:h-[26px] lib:w-[26px] lib:rounded-lg",
      md: "lib:text-base lib:h-[30px] lib:w-[30px] lib:rounded-lg",
      lg: "lib:text-base lib:h-9 lib:w-9 lib:rounded-[10px]",
      xl: "lib:text-xl lib:h-11 lib:w-11 lib:rounded-xl",
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
