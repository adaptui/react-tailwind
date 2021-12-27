export const _switch = {
  label: {
    base: "relative inline-flex items-center cursor-pointer align-top",
    only: "hover:bg-gray-100",
    size: {
      sm: "min-h-[26px] px-2 py-[6px] rounded-lg",
      md: "min-h-[30px] px-2.5 py-[7px] rounded-lg",
      lg: "min-h-9 px-3 py-2 rounded-[10px]",
    },
    disabled: "pointer-events-none",
  },
  input: "peer sr-only",
  icon: {
    base: "relative inline-flex items-center justify-start shrink-0 align-top select-none transition-all peer-children",
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
      base: "absolute box-border bg-white transition-all duration-200",
      disabled: "opacity-60",
      size: {
        default: {
          sm: "w-2.5 h-2.5 top-0.5 rounded-full shadow-switch-md peer-children-active:w-3 ",
          md: "w-3 h-3 top-0.5 rounded-full shadow-switch-md peer-children-active:w-[13px] ",
          lg: "w-4 h-4 top-0.5 rounded-full shadow-switch-md peer-children-active:w-[18px] ",
          xl: "w-6 h-6 top-0.5 rounded-full shadow-md peer-children-active:w-[26px] ",
        },
        disabled: {
          sm: "shadow-switch-none",
          md: "shadow-switch-none",
          lg: "shadow-switch-none",
          xl: "shadow-none",
        },
        checked: {
          sm: "left-3 peer-children-active:-ml-0.5",
          md: "left-3 peer-children-active:-ml-px",
          lg: "left-3.5 peer-children-active:-ml-0.5",
          xl: "left-5 peer-children-active:-ml-0.5",
        },
        unChecked: {
          sm: "left-0.5",
          md: "left-0.5",
          lg: "left-0.5",
          xl: "left-0.5",
        },
      },
    },
  },
  text: {
    base: "text-gray-700 font-medium select-none",
    size: {
      sm: "text-cxs mr-2",
      md: "text-sm mr-2",
      lg: "text-base mr-2",
      xl: "text-base mr-3",
    },
  },
  description: {
    base: "text-gray-500 select-none",
    size: {
      sm: "text-cxs mt-1 mr-2",
      md: "text-sm mt-1 mr-2",
      lg: "text-sm mt-1.5 mr-2",
      xl: "text-sm mt-[5px] mr-3",
    },
  },
};
