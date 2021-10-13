export const _switch = {
  label: {
    base: "relative inline-flex items-center cursor-pointer align-top",
    disabled: "cursor-not-allowed",
  },
  input: "peer sr-only",
  icon: {
    wrapper: {
      base: "inline-flex items-center justify-start flex-shrink-0 align-top select-none transition-all",
      description: "self-start",
      size: {
        sm: "h-3.5 w-5 rounded-full p-0.5",
        md: "h-4 w-[1.625rem] rounded-full p-0.5",
        lg: "h-5 w-[2.125rem] rounded-full p-0.5",
        xl: "h-6 w-10 rounded-full p-0.5",
      },
      checked: "bg-gray-800",
      unChecked: "bg-gray-300",
    },
    content: {
      base: "transition-transform transform bg-white rounded-full shadow",
      size: {
        sm: "h-2.5 w-2.5",
        md: "h-3 w-3",
        lg: "h-4 w-4",
        xl: "h-5 w-5",
      },
      checked: {
        size: {
          sm: "translate-x-1.5",
          md: "translate-x-2.5",
          lg: "translate-x-3.5",
          xl: "translate-x-4",
        },
      },
      unChecked: "translate-x-0",
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
