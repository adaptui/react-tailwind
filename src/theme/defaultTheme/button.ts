export const button = {
  base: {
    default:
      "inline-flex items-center justify-center relative transition-all disabled:cursor-not-allowed outline-none appearance-none select-none whitespace-nowrap align-middle",
    group:
      "translate-y-0 hover:-translate-y-px active:translate-y-0 will-change-transform",
  },
  size: {
    sm: {
      base: "min-h-[26px] min-w-[26px] w-auto py-[5.5px] px-2 border rounded-lg text-cxs font-medium",
      prefix: "text-[12px] mr-1.5",
      suffix: "text-[12px] ml-1.5",
      iconOnly: {
        base: "h-[26px] w-[26px] text-[16px] border rounded-lg",
        icon: "h-4 w-4",
        spinner: "text-[16px]",
      },
    },
    md: {
      base: "min-h-[30px] min-w-[30px] w-auto py-[7px] px-2.5 border rounded-lg text-sm font-medium",
      prefix: "text-[12px] mr-1.5",
      suffix: "text-[12px] ml-1.5",
      iconOnly: {
        base: "h-[30px] w-[30px] text-[16px] border rounded-lg",
        icon: "h-4 w-4",
        spinner: "text-[16px]",
      },
    },
    lg: {
      base: "min-h-9 min-w-9 w-auto py-2.5 px-3 border rounded-[10px] text-sm font-medium",
      prefix: "text-[12px] mr-1.5",
      suffix: "text-[12px] ml-1.5",
      iconOnly: {
        base: "h-9 w-9 text-[16px] border rounded-[10px]",
        icon: "h-4 w-4",
        spinner: "text-[16px]",
      },
    },
    xl: {
      base: "min-h-11 min-w-11 w-auto py-[13px] px-4 border rounded-xl text-base font-medium",
      prefix: "text-[16px] mr-2",
      suffix: "text-[16px] ml-2",
      iconOnly: {
        base: "h-11 w-11 text-[20px] border rounded-xl",
        icon: "h-5 w-5",
        spinner: "text-[20px]",
      },
    },
  },
  themeColor: {
    base: {
      solid: {
        default: "bg-gray-900 text-white-900 border-transparent",
        hover: "enabled:hover:bg-gray-800 enabled:hover:z-10",
        active: "enabled:active:bg-gray-700",
        focus:
          "focus-visible:ring-3 focus-visible:ring-gray-500 focus-visible:z-10",
        disabled: "disabled:bg-gray-200 disabled:text-gray-500",
      },
      subtle: {
        default: "bg-gray-100 text-gray-800 border-transparent",
        hover: "enabled:hover:bg-gray-200 enabled:hover:z-10",
        active: "enabled:active:bg-gray-300",
        focus:
          "focus-visible:ring-3 focus-visible:ring-gray-500 focus-visible:z-10",
        disabled: "disabled:bg-gray-100 disabled:text-gray-500",
      },
      outline: {
        default: "bg-white-900 text-gray-800 border-gray-400",
        hover:
          "enabled:hover:border-gray-500 enabled:hover:shadow-sm enabled:hover:z-10",
        active: "enabled:active:bg-gray-300 active:border-gray-500",
        focus:
          "focus-visible:border-transparent focus-visible:ring-3 focus-visible:ring-gray-500 focus-visible:z-10",
        disabled:
          "disabled:bg-white-100 disabled:text-gray-500 disabled:border-gray-400",
      },
      ghost: {
        default: "bg-transparent text-gray-800 border-transparent",
        hover: "enabled:hover:bg-gray-200 enabled:hover:z-10",
        active: "enabled:active:bg-gray-300",
        focus:
          "focus-visible:bg-gray-100 focus-visible:ring-3 focus-visible:ring-gray-500 focus-visible:z-10",
        disabled: "disabled:text-gray-500",
      },
    },
    primary: {
      solid: {
        default: "bg-blue-600 text-white-900 border-transparent",
        hover: "enabled:hover:bg-blue-700 enabled:hover:z-10",
        active: "enabled:active:bg-blue-800",
        focus:
          "focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:z-10",
        disabled: "disabled:bg-blue-100 disabled:text-blue-500",
      },
      subtle: {
        default: "bg-blue-100 text-blue-800 border-transparent",
        hover: "enabled:hover:bg-blue-200 enabled:hover:z-10",
        active: "enabled:active:bg-blue-300",
        focus:
          "focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:z-10",
        disabled: "disabled:bg-blue-100 disabled:text-blue-500",
      },
      outline: {
        default: "bg-white-900 text-blue-800 border-blue-400",
        hover:
          "enabled:hover:border-blue-500 enabled:hover:shadow-sm enabled:hover:z-10",
        active: "enabled:active:bg-blue-300 active:border-blue-500",
        focus:
          "focus-visible:border-transparent focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:z-10",
        disabled:
          "disabled:bg-white-100 disabled:text-blue-500 disabled:border-blue-400",
      },
      ghost: {
        default: "bg-transparent text-blue-800 border-transparent",
        hover: "enabled:hover:bg-blue-200 enabled:hover:z-10",
        active: "enabled:active:bg-blue-300",
        focus:
          "focus-visible:bg-blue-100 focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:z-10",
        disabled: "disabled:text-blue-500",
      },
    },
    secondary: {
      solid: {
        default: "bg-violet-600 text-white-900 border-transparent",
        hover: "enabled:hover:bg-violet-700 enabled:hover:z-10",
        active: "enabled:active:bg-violet-800",
        focus:
          "focus-visible:ring-3 focus-visible:ring-violet-500 focus-visible:z-10",
        disabled: "disabled:bg-violet-100 disabled:text-violet-500",
      },
      subtle: {
        default: "bg-violet-100 text-violet-800 border-transparent",
        hover: "enabled:hover:bg-violet-200 enabled:hover:z-10",
        active: "enabled:active:bg-violet-300",
        focus:
          "focus-visible:ring-3 focus-visible:ring-violet-500 focus-visible:z-10",
        disabled: "disabled:bg-violet-100 disabled:text-violet-500",
      },
      outline: {
        default: "bg-white-900 text-violet-800 border-violet-400",
        hover:
          "enabled:hover:border-violet-500 enabled:hover:shadow-sm enabled:hover:z-10",
        active: "enabled:active:bg-violet-300 active:border-violet-500",
        focus:
          "focus-visible:border-transparent focus-visible:ring-3 focus-visible:ring-violet-500 focus-visible:z-10",
        disabled:
          "disabled:bg-white-100 disabled:text-violet-500 disabled:border-violet-400",
      },
      ghost: {
        default: "bg-transparent text-violet-800 border-transparent",
        hover: "enabled:hover:bg-violet-200 enabled:hover:z-10",
        active: "enabled:active:bg-violet-300",
        focus:
          "focus-visible:bg-violet-100 focus-visible:ring-3 focus-visible:ring-violet-500 focus-visible:z-10",
        disabled: "disabled:text-violet-500",
      },
    },
    success: {
      solid: {
        default: "bg-green-600 text-white-900 border-transparent",
        hover: "enabled:hover:bg-green-700 enabled:hover:z-10",
        active: "enabled:active:bg-green-800",
        focus:
          "focus-visible:ring-3 focus-visible:ring-green-500 focus-visible:z-10",
        disabled: "disabled:bg-green-100 disabled:text-green-500",
      },
      subtle: {
        default: "bg-green-100 text-green-800 border-transparent",
        hover: "enabled:hover:bg-green-200 enabled:hover:z-10",
        active: "enabled:active:bg-green-300",
        focus:
          "focus-visible:ring-3 focus-visible:ring-green-500 focus-visible:z-10",
        disabled: "disabled:bg-green-100 disabled:text-green-500",
      },
      outline: {
        default: "bg-white-900 text-green-800 border-green-400",
        hover:
          "enabled:hover:border-green-500 enabled:hover:shadow-sm enabled:hover:z-10",
        active: "enabled:active:bg-green-300 active:border-green-500",
        focus:
          "focus-visible:border-transparent focus-visible:ring-3 focus-visible:ring-green-500 focus-visible:z-10",
        disabled:
          "disabled:bg-white-100 disabled:text-green-500 disabled:border-green-400",
      },
      ghost: {
        default: "bg-transparent text-green-800 border-transparent",
        hover: "enabled:hover:bg-green-200 enabled:hover:z-10",
        active: "enabled:active:bg-green-300",
        focus:
          "focus-visible:bg-green-100 focus-visible:ring-3 focus-visible:ring-green-500 focus-visible:z-10",
        disabled: "disabled:text-green-500",
      },
    },
    danger: {
      solid: {
        default: "bg-red-600 text-white-900 border-transparent",
        hover: "enabled:hover:bg-red-700 enabled:hover:z-10",
        active: "enabled:active:bg-red-800",
        focus:
          "focus-visible:ring-3 focus-visible:ring-red-500 focus-visible:z-10",
        disabled: "disabled:bg-red-100 disabled:text-red-500",
      },
      subtle: {
        default: "bg-red-100 text-red-800 border-transparent",
        hover: "enabled:hover:bg-red-200 enabled:hover:z-10",
        active: "enabled:active:bg-red-300",
        focus:
          "focus-visible:ring-3 focus-visible:ring-red-500 focus-visible:z-10",
        disabled: "disabled:bg-red-100 disabled:text-red-500",
      },
      outline: {
        default: "bg-white-900 text-red-800 border-red-400",
        hover:
          "enabled:hover:border-red-500 enabled:hover:shadow-sm enabled:hover:z-10",
        active: "enabled:active:bg-red-300 active:border-red-500",
        focus:
          "focus-visible:border-transparent focus-visible:ring-3 focus-visible:ring-red-500 focus-visible:z-10",
        disabled:
          "disabled:bg-white-100 disabled:text-red-500 disabled:border-red-400",
      },
      ghost: {
        default: "bg-transparent text-red-800 border-transparent",
        hover: "enabled:hover:bg-red-200 enabled:hover:z-10",
        active: "enabled:active:bg-red-300",
        focus:
          "focus-visible:bg-red-100 focus-visible:ring-3 focus-visible:ring-red-500 focus-visible:z-10",
        disabled: "disabled:text-red-500",
      },
    },
  },
  loading: {
    spinner: "absolute flex items-center justify-center",
    children: "opacity-0",
  },
};
