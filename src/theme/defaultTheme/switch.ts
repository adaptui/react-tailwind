export const _switch = {
  input: "sr-only",
  label: "inline-block leading-normal align-top cursor-pointer",
  labelText: {
    base: "ml-2 text-gray-800",
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  icon: {
    wrapper: {
      base: "inline-flex justify-start flex-shrink-0 rounded-full p-0.5 transition-all",
      size: {
        sm: "h-3.5 w-5",
        md: "h-4 w-[1.625rem]",
        lg: "h-5 w-[2.125rem]",
        xl: "h-6 w-10",
      },
      state: {
        false: "bg-gray-300",
        true: "bg-gray-800",
      },
    },
    content: {
      base: "transition-transform transform bg-white rounded-full shadow",
      size: {
        sm: "h-2.5 w-2.5",
        md: "h-3 w-3",
        lg: "h-4 w-4",
        xl: "h-5 w-5",
      },
      state: {
        true: {
          sm: "translate-x-1.5",
          md: "translate-x-2.5",
          lg: "translate-x-3.5",
          xl: "translate-x-4",
        },
        false: "translate-x-0",
      },
    },
  },
};
