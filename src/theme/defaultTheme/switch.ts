export const _switch = {
  label: {
    base: "relative inline-flex items-center cursor-pointer align-top",
    disabled: "pointer-events-none",
  },
  input: "peer sr-only",
  icon: {
    base: "relative inline-flex items-center justify-start flex-shrink-0 align-top select-none transition-all",
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
    afterChildren: {
      base: "after:absolute after:transform after:transition-all after:will-change-width after:bg-white",
      size: {
        default: {
          sm: "after:w-[11px] after:h-[11px] after:rounded-full peer-active:after:w-[13px]",
          md: "after:w-[13px] after:h-[13px] after:rounded-full peer-active:after:w-[14px]",
          lg: "after:w-[17px] after:h-[17px] after:rounded-full peer-active:after:w-[19px]",
          // lg: "after:w-[16px] after:h-[16px] after:rounded-full peer-active:after:w-[18px]",
          xl: "after:w-6 after:h-6 after:rounded-full peer-active:after:w-[26px]",
        },
        checked: {
          sm: "after:left-[calc(100%-1.5px)] after:-translate-x-full",
          md: "after:left-[calc(100%-1.5px)] after:-translate-x-full",
          lg: "after:left-[calc(100%-1.5px)] after:-translate-x-full",
          // lg: "after:left-[calc(100%-2px)] after:-translate-x-full",
          xl: "after:left-[calc(100%-2px)] after:-translate-x-full",
        },
        unChecked: {
          sm: "after:top-[1.5px] after:left-[1.5px]",
          md: "after:top-[1.5px] after:left-[1.5px]",
          lg: "after:top-[1.5px] after:left-[1.5px]",
          // lg: "after:top-0.5 after:left-0.5",
          xl: "after:top-0.5 after:left-0.5",
        },
      },
    },
    children: {
      base: "transform transition-all bg-white shadow-md will-change-width",
      size: {
        default: {
          sm: "h-[11px] w-[11px] rounded-full",
          md: "h-[13px] w-[13px] rounded-full",
          lg: "h-[17px] w-[17px] rounded-full",
          xl: "h-6 w-6 rounded-full",
        },
        active: {
          sm: "peer-children-active:w-[13px]",
          md: "peer-children-active:w-[14px]",
          lg: "peer-children-active:w-[19px]",
          xl: "peer-children-active:w-[26px]",
        },
      },
      unChecked: "translate-x-0",
      checked: {
        size: {
          sm: "translate-x-2.5",
          md: "translate-x-2.5",
          lg: "translate-x-3",
          xl: "translate-x-[18px]",
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
