export const avatar = {
  wrapper: {
    base: "relative inline-flex items-center justify-center rounded-full flex-shrink-0 bg-gray-100",
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
  image: "rounded-full w-full h-full object-cover",
  badge: {
    base: "absolute flex items-center justify-center ring-white rounded-full",
    position: {
      "top-left": "top-0 left-0",
      "top-right": "top-0 right-0",
      "bottom-right": "bottom-0 right-0",
      "bottom-left": "bottom-0 left-0",
    },
    size: {
      xs: "text-[0.25rem] ring-1",
      sm: "text-[0.25rem] ring-1",
      md: "text-[0.25rem] ring-2",
      lg: "text-[0.375rem] ring-2",
      xl: "text-[0.5rem] ring-2",
    },
  },
  status: {
    online: {
      base: "text-green-500 ring-white ring-opacity-100 ring-1.5",
      size: {
        xl: "text-[9px]",
        lg: "text-[7px]",
        md: "text-[5px]",
        sm: "text-[5px]",
        xs: "text-[4px]",
      },
    },
    offline: {
      base: "text-yellow-500 bg-white ring-white ring-opacity-100 ring-1.5",
      size: {
        xl: "text-[9px]",
        lg: "text-[7px]",
        md: "text-[5px]",
        sm: "text-[5px]",
        xs: "text-[4px]",
      },
    },
    typing: {
      base: "flex items-center justify-center bg-gray-500 rounded-full space-x-px",
      size: {
        xs: "h-1 p-px",
        sm: "h-1.5 p-0.5",
        md: "h-1.5 p-0.5",
        lg: "h-1.5 p-0.5",
        xl: "h-2 p-1",
      },
      circle: "bg-white w-0.5 h-0.5 rounded-full animate-pulse",
    },
  },
  border: {
    width: {
      xs: "ring-1",
      sm: "ring-1",
      md: "ring-2",
      lg: "ring-2",
      xl: "ring-2",
    },
    color: "ring-white",
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
