export const input = {
  wrapper: "relative inline-flex",
  base: "peer w-full inline-flex items-center justify-center appearance-none outline-none disabled:cursor-not-allowed disabled:select-none transition",
  prefix:
    "flex items-center justify-center absolute inset-y-0 left-0 bg-transparent pointer-events-none",
  suffix:
    "flex items-center justify-center absolute inset-y-0 right-0 bg-transparent pointer-events-none",
  size: {
    sm: {
      base: {
        default: "h-[26px] text-cxs font-normal rounded-lg",
        withoutAddon: "px-2",
      },
      prefix: "h-[26px] text-xs pl-2 pr-1.5",
      suffix: "h-[26px] text-xs pr-2 pl-1.5",
    },
    md: {
      base: {
        default: "h-[30px] text-sm font-normal rounded-lg",
        withoutAddon: "px-2.5",
      },
      prefix: "h-[30px] text-xs pl-2.5 pr-1.5",
      suffix: "h-[30px] text-xs pr-2.5 pl-1.5",
    },
    lg: {
      base: {
        default: "h-9 text-sm font-normal rounded-[10px]",
        withoutAddon: "px-3",
      },
      prefix: "h-9 text-xs pl-3 pr-1.5",
      suffix: "h-9 text-xs pr-3 pl-1.5",
    },
    xl: {
      base: {
        default: "h-11 text-base font-normal rounded-xl",
        withoutAddon: "px-3",
      },
      prefix: "h-11 text-base pl-3 pr-2",
      suffix: "h-11 text-base pr-3 pl-2",
    },
  },
  variant: {
    outline: {
      default: {
        base: "text-gray-800 placeholder:text-gray-600 bg-white-900 border border-gray-400",
        prefix: "text-gray-600",
        suffix: "text-gray-600",
      },
      hover: {
        base: "hover:placeholder:text-gray-700 hover:border-gray-500 hover:shadow-sm",
        prefix: "peer-hover:text-gray-700 ",
        suffix: "peer-hover:text-gray-700 ",
      },
      active: {
        base: "active:placeholder:text-gray-800 active:border-gray-500",
        prefix: "peer-active:text-gray-800",
        suffix: "peer-active:text-gray-800",
      },
      focus: {
        base: "focus:placeholder:text-gray-800 focus-visible:border-transparent focus-visible:ring-3 focus-visible:ring-gray-500",
        prefix: "peer-focus-visible:text-gray-800",
        suffix: "peer-focus-visible:text-gray-800",
      },
      disabled: {
        base: "placeholder:text-gray-500 bg-gray-100 border-gray-400",
        prefix: "text-gray-500",
        suffix: "text-gray-500",
      },
      invalid: {
        base: "border-red-400",
        prefix: "text-red-800",
        suffix: "text-red-800",
      },
    },
    subtle: {
      default: {
        base: "text-gray-800 placeholder:text-gray-600 bg-gray-100 border border-transparent",
        prefix: "text-gray-600",
        suffix: "text-gray-600",
      },
      hover: {
        base: "hover:placeholder:text-gray-700 hover:bg-gray-200",
        prefix: "peer-hover:text-gray-700 ",
        suffix: "peer-hover:text-gray-700 ",
      },
      active: {
        base: "active:placeholder:text-gray-800 active:bg-white-900",
        prefix: "peer-active:text-gray-800",
        suffix: "peer-active:text-gray-800",
      },
      focus: {
        base: "focus:placeholder:text-gray-800 focus-visible:bg-white-900 focus-visible:ring-3 focus-visible:ring-gray-500",
        prefix: "peer-focus-visible:text-gray-800",
        suffix: "peer-focus-visible:text-gray-800",
      },
      disabled: {
        base: "text-gray-500 placeholder:text-gray-500 bg-gray-100",
        prefix: "text-gray-500",
        suffix: "text-gray-500",
      },
      invalid: {
        base: "bg-red-100",
        prefix: "text-red-800",
        suffix: "text-red-800",
      },
    },
    underline: {
      default: {
        base: "text-gray-800 placeholder:text-gray-600 border border-x-transparent border-t-transparent border-b-gray-400 rounded-none px-0.5",
        prefix: "text-gray-600",
        suffix: "text-gray-600",
      },
      hover: {
        base: "hover:placeholder:text-gray-700 hover:border-b-gray-500",
        prefix: "peer-hover:text-gray-700 ",
        suffix: "peer-hover:text-gray-700 ",
      },
      active: {
        base: "active:placeholder:text-gray-800 active:border-b-gray-600",
        prefix: "peer-active:text-gray-800",
        suffix: "peer-active:text-gray-800",
      },
      focus: {
        base: "focus:placeholder:text-gray-800 focus-visible:border-b-gray-600",
        prefix: "peer-focus-visible:text-gray-800",
        suffix: "peer-focus-visible:text-gray-800",
      },
      disabled: {
        base: "text-gray-500 placeholder:text-gray-500 border-b-gray-400",
        prefix: "text-gray-500",
        suffix: "text-gray-500",
      },
      invalid: {
        base: "border-b-red-500",
        prefix: "text-red-800",
        suffix: "text-red-800",
      },
    },
    ghost: {
      default: {
        base: "text-gray-800 placeholder:text-gray-600 border border-transparent",
        prefix: "text-gray-600",
        suffix: "text-gray-600",
      },
      hover: {
        base: "hover:placeholder:text-gray-700 hover:bg-gray-200",
        prefix: "peer-hover:text-gray-700 ",
        suffix: "peer-hover:text-gray-700 ",
      },
      active: {
        base: "active:placeholder:text-gray-800 active:bg-gray-100",
        prefix: "peer-active:text-gray-800",
        suffix: "peer-active:text-gray-800",
      },
      focus: {
        base: "focus:placeholder:text-gray-800 focus-visible:bg-gray-100 focus-visible:ring-3 focus-visible:ring-gray-500",
        prefix: "peer-focus-visible:text-gray-800",
        suffix: "peer-focus-visible:text-gray-800",
      },
      disabled: {
        base: "text-gray-500 placeholder:text-gray-500",
        prefix: "text-gray-500",
        suffix: "text-gray-500",
      },
      invalid: {
        base: "",
        prefix: "text-red-800",
        suffix: "text-red-800",
      },
    },
  },
};
