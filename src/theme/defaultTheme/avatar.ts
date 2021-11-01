export const avatar = {
  wrapper: {
    base: "relative inline-flex items-center justify-center flex-shrink-0 rounded bg-gray-100",
    circular: "rounded-full",
    size: {
      xs: "h-4 w-4",
      sm: "h-5 w-5",
      md: "h-6 w-6",
      lg: "h-7 w-7",
      xl: "h-8 w-8",
      "2xl": "h-10 w-10",
      "3xl": "h-12 w-12",
    },
  },
  icon: {
    base: "inline-flex items-center justify-center text-gray-600",
    size: {
      xs: "text-[0.625rem]",
      sm: "text-[0.625rem]",
      md: "text-xs",
      lg: "text-xs",
      xl: "text-base",
      "2xl": "text-base",
      "3xl": "text-xl",
    },
  },
  initials: {
    base: "text-gray-600 font-medium text-center uppercase",
    size: {
      xs: "text-xs",
      sm: "text-cxs",
      md: "text-sm",
      lg: "text-sm",
      xl: "text-base",
      "2xl": "text-lg",
      "3xl": "text-xl",
    },
  },
  image: {
    base: "rounded w-full h-full object-cover",
    circular: "rounded-full",
  },
  statusIndicator: {
    base: "absolute flex items-center justify-center bottom-0 right-0",
  },
  statusIndicators: {
    none: {
      base: "",
      size: { xs: "", sm: "", md: "", lg: "", xl: "", "2xl": "" },
    },
    active: {
      base: "text-green-500 ring-1.5 rounded-full",
      size: {
        xs: "text-[4px]",
        sm: "text-[5px]",
        md: "text-[6px]",
        lg: "text-[7px]",
        xl: "text-[8px]",
        "2xl": "text-[10px]",
        "3xl": "text-[11px]",
      },
    },
    sleep: {
      base: "text-gray-500 ring-1.5 rounded-full",
      size: {
        xs: "text-[4px]",
        sm: "text-[5px]",
        md: "text-[6px]",
        lg: "text-[7px]",
        xl: "text-[8px]",
        "2xl": "text-[10px]",
        "3xl": "text-[11px]",
      },
    },
    away: {
      base: "text-gray-500 ring-1.5 rounded-full",
      size: {
        xs: "text-[4px]",
        sm: "text-[5px]",
        md: "text-[6px]",
        lg: "text-[7px]",
        xl: "text-[8px]",
        "2xl": "text-[10px]",
        "3xl": "text-[11px]",
      },
    },
    typing: {
      base: "text-gray-500 ring-1.5 rounded-full",
      size: {
        xs: "w-2",
        sm: "w-[9px]",
        md: "w-2.5",
        lg: "w-[11px]",
        xl: "w-3.5",
        "2xl": "w-4",
        "3xl": "w-[17px]",
      },
    },
  },
  group: {
    base: "inline-flex items-center -space-x-1.5",
    excess: {
      bg: "absolute inset-0 bg-black rounded-full opacity-50",
      text: {
        base: "absolute inset-0 flex items-center justify-center text-white rounded-full font-semibold",
        size: {
          xs: "text-xs",
          sm: "text-xs",
          md: "text-xs",
          lg: "text-xs",
          xl: "text-sm",
        },
      },
    },
  },
};
