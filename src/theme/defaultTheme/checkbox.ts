export const checkbox = {
  group: {
    vertical: {
      base: "flex flex-col items-start",
      size: {
        sm: "space-y-1",
        md: "space-y-2",
        lg: "space-y-3",
      },
    },
    horizontal: {
      base: "flex flex-row w-fit",
      size: {
        sm: "space-x-4",
        md: "space-x-4",
        lg: "space-x-4",
      },
    },
    showMore: {
      button: {
        base: { vertical: "justify-start w-full", horizontal: "min-w-max" },
        expanded: { vertical: "!mt-0", horizontal: "!ml-0" },
      },
      content: {
        vertical: "flex flex-col space-y-2 w-full",
        horizontal: "flex flex-row space-x-2",
      },
    },
  },
  label: {
    base: "relative inline-flex items-center justify-center cursor-pointer align-top",
    only: "hover:bg-gray-100",
    disabled: "cursor-not-allowed",
    size: {
      sm: "min-h-[26px] px-2 pb-px rounded-lg",
      md: "min-h-[30px] px-2.5 rounded-lg",
      lg: "min-h-11 px-4 rounded-xl",
    },
    showMore: { vertical: "flex w-full", horizontal: "flex" },
  },
  input: "peer sr-only",
  icon: {
    base: "inline-flex items-center justify-center flex-shrink-0 align-top select-none transition-all",
    description: "self-start",
    size: {
      sm: "w-3.5 h-3.5 text-[10px] border-[1.5px] rounded",
      md: "w-4 h-4 text-xs border-[1.5px] rounded",
      lg: "w-5 h-5 text-base border-[1.5px] rounded",
    },
    unChecked: {
      default: "bg-white border-gray-400 text-current",
      hover: "peer-hover:border-gray-500 peer-hover:shadow",
      active: "peer-active:border-gray-400",
      focus: "peer-focus-visible:ring-2 peer-focus-visible:ring-gray-300",
      disabled: "peer-disabled:bg-gray-200 peer-disabled:border-gray-300",
      invalid:
        "bg-white border-red-600 text-current peer-hover:border-red-700 peer-active:border-red-600 peer-focus-visible:ring-2 peer-focus-visible:ring-red-300 peer-disabled:bg-red-200 peer-disabled:border-red-300",
    },
    checked: {
      default: "bg-gray-800 border-gray-800 text-white",
      hover:
        "peer-hover:bg-gray-700 peer-hover:border-gray-700 peer-hover:shadow",
      active: "peer-active:bg-gray-800 peer-active:border-gray-800",
      focus: "peer-focus-visible:ring-2 peer-focus-visible:ring-gray-300",
      disabled:
        "peer-disabled:bg-gray-200 peer-disabled:border-gray-200 peer-disabled:text-gray-400",
      invalid:
        "bg-red-600 border-red-600 text-white peer-hover:bg-red-500 peer-hover:border-red-500 peer-active:bg-red-600 peer-active:border-red-600 peer-focus-visible:ring-2 peer-focus-visible:ring-red-300 peer-disabled:bg-red-200 peer-disabled:border-red-200 peer-disabled:text-red-400",
    },
    indeterminate: {
      default: "bg-gray-800 border-gray-800 text-white",
      hover:
        "peer-hover:bg-gray-700 peer-hover:border-gray-700 peer-hover:shadow",
      active: "peer-active:bg-gray-800 peer-active:border-gray-800",
      focus: "peer-focus-visible:ring-2 peer-focus-visible:ring-gray-300",
      disabled:
        "peer-disabled:bg-gray-200 peer-disabled:border-gray-200 peer-disabled:text-gray-400",
      invalid:
        "bg-red-600 border-red-600 text-white peer-hover:bg-red-500 peer-hover:border-red-500 peer-active:bg-red-600 peer-active:border-red-600 peer-focus-visible:ring-2 peer-focus-visible:ring-red-300 peer-disabled:bg-red-200 peer-disabled:border-red-200 peer-disabled:text-red-400",
    },
  },
  text: {
    base: "text-gray-700 font-medium select-none",
    size: {
      sm: "text-cxs ml-1.5",
      md: "text-sm ml-2",
      lg: "text-base ml-2",
    },
  },
  description: {
    base: "text-gray-500 select-none",
    size: {
      sm: "text-paragraph-cxs mt-1 ml-1.5",
      md: "text-paragraph-sm mt-1.5 ml-2",
      lg: "text-paragraph-sm mt-2 ml-2",
    },
  },
};
