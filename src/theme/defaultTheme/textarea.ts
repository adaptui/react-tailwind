export const textarea = {
  wrapper: "relative inline-flex h-fit",
  base: {
    common:
      "font-normal w-full transition-all appearance-none outline-none disabled:cursor-not-allowed",
    size: {
      sm: "text-cxs rounded-lg px-2 py-[5.5px]",
      md: "text-sm rounded-lg px-2.5 py-[7px]",
      lg: "text-sm rounded-lg px-3 py-2.5",
      xl: "text-base rounded-lg px-3 py-[13px]",
    },
    variant: {
      outline: {
        common:
          "bg-white border border-gray-200 placeholder:text-gray-500 text-gray-700 ",
        interactions:
          "hover:border-gray-300 hover:shadow-sm active:border-gray-400 active:shadow-sm focus-visible:border-gray-400 focus-visible:ring-2 focus-visible:ring-gray-200",
        disabled: "bg-gray-50 shadow-none text-gray-500 ",
        invalid: "border-red-300",
      },
      underline: {
        common:
          "px-0.5 bg-white rounded-none placeholder:text-gray-500 text-gray-700 shadow-input-underline shadow-gray-200",
        interactions:
          "hover:shadow-gray-300 active:shadow-gray-400 focus-visible:shadow-gray-400 ",
        disabled: "placeholder:text-gray-400 text-gray-400 shadow-gray-200",
        invalid: "shadow-red-300",
      },
      hover: {
        base: "hover:placeholder:text-gray-700 hover:border-b-gray-500",
        icon: "peer-hover:text-gray-700 ",
      },
      active: {
        base: "active:placeholder:text-gray-800 active:border-b-gray-600",
        icon: "peer-active:text-gray-800",
      },
      focus: {
        base: "focus:placeholder:text-gray-800 focus-visible:border-b-gray-600",
        icon: "peer-focus-visible:text-gray-800",
      },
      disabled: {
        base: "text-gray-500 placeholder:text-gray-500 border-b-gray-400",
        icon: "text-gray-500",
      },
      invalid: {
        base: "border-b-red-500",
        icon: "text-red-800",
      },
    },
  },
};
