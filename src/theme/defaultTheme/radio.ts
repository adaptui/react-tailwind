const field = {
  base: "flex flex-col",
  description: {
    base: "text-gray-500 mt-1 text-sm",
    size: {
      sm: "ib:text-paragraph-cxs",
      md: "text-sm",
      lg: "text-sm",
    },
  },
  text: {
    base: "text-gray-700 select-none font-medium",
    size: {
      sm: "text-paragraph-cxs",
      md: "text-sm leading-4",
      lg: "text-sm leading-5",
    },
  },
};

export const radio = {
  base: "group relative inline-flex space-x-1.5 items-center align-top cursor-pointer",
  disabled: "cursor-not-allowed",
  input: "peer sr-only",
  icon: {
    base: "inline-flex items-center justify-center flex-shrink-0 align-top self-start select-none transition-all rounded-full ring-0 ring-gray-300 peer-focus-visible:ring-2",
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-xl",
    },
    state: {
      disabled: "text-gray-400 cursor-not-allowed",
      default: {
        checked: "text-gray-800",
        unchecked: "text-gray-400",
      },
      invalid: {
        checked: "text-red-600 ring ring-red-300",
        unchecked: "text-red-600 ring-red-300",
      },
      hover: {
        checked: "group-hover:text-gray-700",
        unchecked: "group-hover:text-gray-500",
      },
      hover_invalid: {
        checked: "group-hover:text-red-500",
        unchecked: "group-hover:text-red-500",
      },
    },
  },
  field,
};
