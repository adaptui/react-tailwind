export const slider = {
  wrapper:
    "relative inline-block outline-none select-none touch-action-none w-80",
  track: {
    wrapper: "relative w-full py-1.5 cursor-pointer",
    base: {
      normal: "w-full bg-gray-200 rounded-2xl",
      size: {
        sm: "h-0.5",
        md: "h-1",
        lg: "h-2",
      },
    },
    filled: {
      normal:
        "absolute transform -translate-y-1/2 bg-gray-800 rounded-2xl top-1/2",
      size: {
        sm: "h-0.5",
        md: "h-1",
        lg: "h-2",
      },
    },
  },
  thumb: {
    wrapper: {
      normal:
        "absolute top-0 flex flex-col items-center z-10 focus-within:z-20",
      size: {
        sm: "7px",
        md: "8px",
        lg: "10px",
      },
    },
    container: {
      base: {
        normal:
          "flex items-center justify-center rounded-full select-none touch-action-none cursor-pointer transition-all",
        size: {
          sm: "w-3.5 h-3.5",
          md: "w-4 h-4",
          lg: "w-5 h-5",
        },
      },
      normal:
        "bg-white shadow-csm hover:shadow-thumbHover active:shadow-thumbHover focus-within:ring-2 focus-within:ring-gray-800",
      disabled: "bg-gray-200",
    },
    input: "sr-only",
  },
  icon: {
    size: {
      sm: "text-[10px]",
      md: "text-[10px]",
      lg: "text-xs",
    },
  },
};
