export const _switch = {
  label: {
    base: "relative inline-flex items-center cursor-pointer align-top",
    disabled: "pointer-events-none",
  },
  input: "peer sr-only",
  icon: {
    base: "relative inline-flex items-center justify-start flex-shrink-0 align-top select-none transition-all peer-children",
    description: "self-start",
    size: {
      sm: "h-3.5 w-6 rounded-full",
      md: "h-4 w-[26px] rounded-full",
      lg: "h-5 w-8 rounded-full",
      xl: "h-7 w-[46px] rounded-full",
    },
    unChecked: {
      default: "bg-gray-200",
      hover: "peer-hover:bg-gray-300",
      active: "peer-active:bg-gray-300",
      focus: "peer-focus-visible:ring-2 peer-focus-visible:ring-gray-300",
      disabled: "peer-disabled:bg-gray-300",
    },
    checked: {
      default: "bg-gray-800",
      hover: "peer-hover:bg-gray-700",
      active: "peer-active:bg-gray-700",
      focus: "peer-focus-visible:ring-2 peer-focus-visible:ring-gray-300",
      disabled: "peer-disabled:bg-gray-500",
    },
    children: {
      base: "absolute transform transition-all will-change-width bg-white box-border",
      size: {
        default: {
          sm: "w-2.5 h-2.5 rounded-full peer-children-active:w-3 shadow-switch-md",
          md: "w-3 h-3 rounded-full peer-children-active:w-[13px] shadow-switch-md",
          lg: "w-4 h-4 rounded-full peer-children-active:w-[18px] shadow-switch-md",
          xl: "w-6 h-6 rounded-full peer-children-active:w-[26px] shadow-md",
        },
        disabled: {
          sm: "shadow-switch-none",
          md: "shadow-switch-none",
          lg: "shadow-switch-none",
          xl: "shadow-none",
        },
        checked: {
          sm: "left-[calc(100%-2px)] -translate-x-full",
          md: "left-[calc(100%-2px)] -translate-x-full",
          lg: "left-[calc(100%-2px)] -translate-x-full",
          xl: "left-[calc(100%-2px)] -translate-x-full",
        },
        unChecked: {
          sm: "top-0.5 left-0.5",
          md: "top-0.5 left-0.5",
          lg: "top-0.5 left-0.5",
          xl: "top-0.5 left-0.5",
        },
      },
    },
  },
  text: {
    base: "text-gray-700 font-medium select-none",
    size: {
      sm: "text-cxs ml-2",
      md: "text-sm ml-2",
      lg: "text-base ml-2",
      xl: "text-base ml-3",
    },
  },
  description: {
    base: "text-gray-500 select-none",
    size: {
      sm: "text-cxs mt-1 ml-2",
      md: "text-sm mt-1 ml-2",
      lg: "text-sm mt-1.5 ml-2",
      xl: "text-sm mt-[5px] ml-3",
    },
  },
};
