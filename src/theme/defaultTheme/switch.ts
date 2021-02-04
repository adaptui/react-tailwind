export const _switch = {
  label: "lib:inline-block leading-normal lib:align-top lib:cursor-pointer",
  input: "lib:sr-only",
  icon: {
    wrapper: {
      base:
        "lib:inline-flex lib:justify-start lib:flex-shrink-0 lib:rounded-full lib:p-0.5 lib:transition-all",
      size: {
        xs: "lib:h-3.5 lib:w-5",
        sm: "lib:h-4 lib:w-6.5",
        lg: "lib:h-5 lib:w-8.5",
      },
      unchecked: "lib:bg-gray-300",
      checked: "lib:bg-gray-800",
    },
    content: {
      base:
        "lib:transition-transform transform lib:bg-white lib:rounded-full shadow",
      size: {
        xs: "lib:h-2.5 lib:w-2.5",
        sm: "lib:h-3 lib:w-3",
        lg: "lib:h-4 lib:w-4",
      },
      checked: {
        xs: "translate-x-1.5",
        sm: "translate-x-2.5",
        lg: "translate-x-3.5",
      },
      unchecked: "translate-x-0",
    },
  },
};
