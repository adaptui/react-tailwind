export const input = {
  wrapper: "relative inline-flex",
  base: {
    common:
      "peer w-full inline-flex items-center justify-center font-normal appearance-none outline-none disabled:cursor-not-allowed disabled:select-none transition",
    size: {
      sm: {
        common: "h-[26px] text-cxs rounded-lg",
        withoutAddon: "px-2",
      },
      md: {
        common: "h-[30px] text-sm rounded-lg",
        withoutAddon: "px-2.5",
      },
      lg: {
        common: "h-9 text-sm rounded-[10px]",
        withoutAddon: "px-3",
      },
      xl: {
        common: "h-11 text-base rounded-xl",
        withoutAddon: "px-3",
      },
    },
    variant: {
      outline: {
        common:
          "bg-white border border-gray-200 text-gray-700 placeholder:text-gray-500 ",
        interactions:
          "hover:shadow-sm hover:border-gray-300 active:border-gray-400 focus-visible:border-gray-400 focus-visible:ring-2 focus-visible:ring-gray-200",
        disabled: "bg-gray-50",
        invalid: "border-red-300",
      },
      subtle: {
        common:
          "bg-gray-100 text-gray-700 border border-transparent placeholder:text-gray-500 ",
        interactions:
          "hover:bg-gray-200 active:bg-transparent active:border-gray-300 active:shadow-sm focus-visible:bg-transparent focus-visible:border-gray-400 focus-visible:ring-2 focus-visible:ring-gray-200",
        disabled: "bg-gray-50 border-gray-200",
        invalid: "bg-red-50",
      },
      underline: {
        common:
          "px-0.5 bg-white rounded-none text-gray-700 placeholder:text-gray-500 shadow-input-underline shadow-gray-200 ",
        interactions:
          "hover:shadow-gray-300 active:shadow-gray-400 focus-visible:shadow-gray-400",
        disabled: "placeholder:text-gray-400 shadow-gray-200",
        invalid: "shadow-red-300",
      },
      ghost: {
        common: "bg-white text-gray-700 placeholder:text-gray-400",
        interactions:
          "hover:bg-gray-100 hover:placeholder:text-gray-500 active:bg-gray-100 active:placeholder:text-gray-500 focus-visible:bg-gray-100 focus-visible:placeholder:text-gray-500",
        disabled: "bg-white placeholder:text-gray-500",
        invalid: "bg-red-50",
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
        common: "text-gray-500",
        interactions:
          "peer-active:text-gray-600 peer-focus-visible:text-gray-600 peer-disabled:text-gray-400",
        disabled: "text-gray-400",
        invalid: "text-red-500",
      },
      subtle: {
        common: "text-gray-500",
        interactions:
          "peer-active:text-gray-600 peer-focus-visible:text-gray-600",
        disabled: "text-gray-400",
        invalid: "text-red-500",
      },
      underline: {
        common: "pl-0.5 text-gray-500",
        interactions:
          "peer-active:text-gray-600 peer-focus-visible:text-gray-600",
        disabled: "text-gray-400",
        invalid: "text-red-500",
      },
      ghost: {
        common: "text-gray-400",
        interactions:
          "peer-hover:text-gray-500 peer-active:text-gray-500  peer-focus-visible:text-gray-500",
        disabled: "text-gray-400",
        invalid: "text-red-500",
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
        common: "text-gray-500",
        interactions:
          "peer-active:text-gray-600 peer-focus-visible:text-gray-600 peer-disabled:text-gray-400",
        disabled: "text-gray-400",
        invalid: "text-red-500",
      },
      subtle: {
        common: "text-gray-500",
        interactions:
          "peer-active:text-gray-600 peer-focus-visible:text-gray-600",
        disabled: "text-gray-400",
        invalid: "text-red-500",
      },
      underline: {
        common: "pr-0.5 text-gray-500",
        interactions:
          "peer-active:text-gray-600 peer-focus-visible:text-gray-600",
        disabled: "text-gray-400",
        invalid: "text-red-500",
      },
      ghost: {
        common: "text-gray-400",
        interactions:
          "peer-hover:text-gray-500 peer-active:text-gray-500  peer-focus-visible:text-gray-500",
        disabled: "text-gray-400",
        invalid: "text-red-500",
      },
    },
  },
};
