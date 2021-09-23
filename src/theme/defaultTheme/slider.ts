export const slider = {
  common: {
    input: "sr-only",
    wrapper: {
      base: "text-gray-800 relative inline-block touch-action-none select-none outline-none",
    },
    track: {
      base: "relative top-0 cursor-pointer",
      main: "bg-gray-300 rounded-full",
      filled: "absolute bg-current pointer-events-none rounded-full",
    },
    thumb: {
      base: "absolute z-10 flex items-center bg-white justify-center rounded-full select-none cursor-pointer shadow-thumb text-current focus-within:ring-2 focus-within:ring-current",
      size: {
        sm: "w-3 h-3 text-[0.625rem]",
        md: "w-4 h-4 text-xs",
        lg: "w-5 h-5 text-sm",
      },
    },
    minmax: {
      base: "flex  items-center mt-0.5 justify-between text-xs text-gray-400",
      reversed: "flex-row-reverse",
    },
  },
  horizontal: {
    wrapper: {
      base: "w-full top-0",
    },
    track: {
      base: "w-full",
      main: "",
      filled: "",
      size: {
        sm: "h-0.5",
        md: "h-1",
        lg: "h-2",
      },
    },
    thumb: {
      base: "flex-col top-1/4 transform -translate-y-1/4",
    },
  },
  vertical: {
    wrapper: {
      base: "h-full",
    },
    track: {
      base: "h-full w-fit",
      main: "h-full",
      filled: "top-unset bottom-0",
      size: {
        sm: "w-0.5",
        md: "w-1",
        lg: "w-2",
      },
    },
    thumb: {
      base: "flex-row top-unset left-1/2 transform -translate-x-1/2",
    },
  },
};
