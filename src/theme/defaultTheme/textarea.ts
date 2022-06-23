export const textarea = {
  wrapper: "relative inline-flex h-fit",
  base: {
    default:
      "w-full transition-all appearance-none outline-none disabled:cursor-not-allowed",
    resize: {
      horizontal: "resize-x",
      vertical: "resize-y",
      both: "resize",
      none: "resize-none",
    },
  },
  spinner: {
    base: "flex items-center justify-center absolute bottom-2.5 right-1 bg-transparent pointer-events-none",
    autoSize: "bottom-1",
  },
  icon: {
    base: "flex items-center justify-center absolute bottom-2.5 right-1 bg-transparent pointer-events-none",
    autoSize: "bottom-1",
  },
  ghost: "invisible absolute overflow-hidden h-0 top-0 left-0 transform-gpu",
  size: {
    sm: {
      base: "text-paragraph-cxs-cxs font-normal rounded-lg px-2 py-[5.5px]",
      icon: "text-xs",
    },
    md: {
      base: "text-paragraph-sm font-normal rounded-lg px-2.5 py-[7px]",
      icon: "text-xs",
    },
    lg: {
      base: "text-paragraph-sm font-normal rounded-lg px-3 py-2.5",
      icon: "text-xs",
    },
    xl: {
      base: "text-paragraph-base font-normal rounded-lg px-3 py-[13px]",
      icon: "text-base",
    },
  },
  variant: {
    outline: {
      default: {
        base: "text-gray-800 placeholder:text-gray-600 bg-white-900 border border-gray-400",
        icon: "text-gray-600",
      },
      hover: {
        base: "hover:placeholder:text-gray-700 hover:border-gray-500 hover:shadow-sm",
        icon: "peer-hover:text-gray-700",
      },
      active: {
        base: "active:placeholder:text-gray-800 active:border-gray-500",
        icon: "peer-active:text-gray-800",
      },
      focus: {
        base: "focus:placeholder:text-gray-800 focus-visible:border-transparent focus-visible:ring-3 focus-visible:ring-gray-500",
        icon: "peer-focus-visible:text-gray-800",
      },
      disabled: {
        base: "placeholder:text-gray-500 bg-gray-100 border-gray-400",
        icon: "text-gray-500",
      },
      invalid: {
        base: "border-red-400",
        icon: "text-red-800",
      },
    },
    subtle: {
      default: {
        base: "text-gray-800 placeholder:text-gray-600 bg-gray-100 border border-transparent",
        icon: "text-gray-600",
      },
      hover: {
        base: "hover:placeholder:text-gray-700 hover:bg-gray-200",
        icon: "peer-hover:text-gray-700 ",
      },
      active: {
        base: "active:placeholder:text-gray-800 active:bg-white-900",
        icon: "peer-active:text-gray-800",
      },
      focus: {
        base: "focus:placeholder:text-gray-800 focus-visible:bg-white-900 focus-visible:ring-3 focus-visible:ring-gray-500",
        icon: "peer-focus-visible:text-gray-800",
      },
      disabled: {
        base: "text-gray-500 placeholder:text-gray-500 bg-gray-100",
        icon: "text-gray-500",
      },
      invalid: {
        base: "bg-red-100",
        icon: "text-red-800",
      },
    },
    underline: {
      default: {
        base: "text-gray-800 placeholder:text-gray-600 border border-x-transparent border-t-transparent border-b-gray-400 rounded-none px-0.5",
        icon: "text-gray-600",
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
