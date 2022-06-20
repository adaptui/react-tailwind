export const input = {
  wrapper: "relative inline-flex",
  base: {
    common:
      "peer w-full inline-flex items-center justify-center font-normal appearance-none outline-none disabled:cursor-not-allowed disabled:select-none transition",
    size: {
      sm: {
        common: "h-[26px] text-cxs font-normal rounded-lg",
        withoutAddon: "px-2",
      },
      md: {
        common: "h-[30px] text-sm font-normal rounded-lg",
        withoutAddon: "px-2.5",
      },
      lg: {
        common: "h-9 text-sm font-normal rounded-[10px]",
        withoutAddon: "px-3",
      },
      xl: {
        common: "h-11 text-base font-normal rounded-xl",
        withoutAddon: "px-3",
      },
    },
    variant: {
      outline: {
        common:
          "bg-white-900 border border-gray-400 text-gray-800 placeholder:text-gray-600",
        interactions:
          "hover:border-gray-500 hover:placeholder:text-gray-700 hover:shadow-sm active:border-gray-500 active:text-gray-800 active:shadow-sm focus-visible:border-transparent focus-visible:ring-3 focus-visible:ring-gray-500",
        disabled: "bg-gray-100 border-gray-400 text-gray-500",
        invalid: "border-red-400",
      },
      subtle: {
        common:
          "bg-gray-100 border border-transparent text-gray-800 placeholder:text-gray-600",
        interactions:
          "hover:bg-gray-200 hover:placeholder:text-gray-700 active:shadow-sm active:text-gray-800 active:bg-white-900 focus-visible:bg-white-900 focus-visible:border-transparent focus-visible:ring-3 focus-visible:ring-gray-500",
        disabled: "bg-gray-100",
        invalid: "bg-red-50",
      },
      underline: {
        common:
          "px-0.5 bg-white-900 border border-x-transparent border-t-transparent rounded-none  border-b-gray-400 text-gray-800 placeholder:text-gray-600",
        interactions:
          "hover:border-b-gray-500 hover:placeholder:text-gray-700 active:border-b-gray-600 active:text-gray-800 focus-visible:border-b-gray-600",
        disabled: "bg-gray-100 text-gray-500 border-b-gray-400",
        invalid: "border-b-red-500",
      },
      ghost: {
        common:
          "bg-white-900 text-gray-800 placeholder:text-gray-600 border border-transparent",
        interactions:
          "hover:bg-gray-100 hover:placeholder:text-gray-700 active:text-gray-800 focus-visible:bg-gray-100 focus-visible:ring-3 focus-visible:ring-gray-500",
        disabled: "text-gray-500 placeholder:text-gray-500",
        invalid: "",
      },
    },
  },
  prefix: {
    common:
      "flex items-center justify-center absolute inset-y-0 left-0 bg-transparent pointer-events-none",
    size: {
      sm: "h-[26px] text-xs pl-2 pr-1.5",
      md: "h-[30px] text-xs pl-2.5 pr-1.5",
      lg: "h-9 text-xs pl-3 pr-1.5",
      xl: "h-11 text-base pl-3 pr-2",
    },
    variant: {
      outline: {
        common: "text-gray-600",
        interactions:
          "peer-hover:text-gray-700 peer-active:text-gray-800 peer-focus-visible:text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
      },
      subtle: {
        common: "text-gray-600",
        interactions:
          "peer-hover:text-gray-700 peer-active:text-gray-800 peer-focus-visible:text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
      },
      underline: {
        common: "pl-0.5 text-gray-600",
        interactions:
          "peer-hover:text-gray-700 peer-active:text-gray-800 peer-focus-visible:text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
      },
      ghost: {
        common: "text-gray-600",
        interactions:
          "peer-hover:text-gray-700 peer-active:text-gray-800 peer-focus-visible:text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
      },
    },
  },
  suffix: {
    common:
      "flex items-center justify-center absolute inset-y-0 right-0 bg-transparent pointer-events-none",
    size: {
      sm: "h-[26px] text-xs pr-2 pl-1.5",
      md: "h-[30px] text-xs pr-2.5 pl-1.5",
      lg: "h-9 text-xs pr-3 pl-1.5",
      xl: "h-11 text-base pr-3 pl-2",
    },
    variant: {
      outline: {
        common: "text-gray-600",
        interactions:
          "peer-hover:text-gray-700 peer-active:text-gray-800 peer-focus-visible:text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
      },
      subtle: {
        common: "text-gray-600",
        interactions:
          "peer-hover:text-gray-700 peer-active:text-gray-800 peer-focus-visible:text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
      },
      underline: {
        common: "pr-0.5 text-gray-600",
        interactions:
          "peer-hover:text-gray-700 peer-active:text-gray-800 peer-focus-visible:text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
      },
      ghost: {
        common: "text-gray-600",
        interactions:
          "peer-hover:text-gray-700 peer-active:text-gray-800 peer-focus-visible:text-gray-800",
        disabled: "text-gray-500",
        invalid: "text-red-800",
      },
    },
  },
};
