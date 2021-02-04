export const slider = {
  base: "relative",
  common: {
    input: "sr-only",
    tooltipContent: "pointer-events-none text-xs",
    wrapper: {
      base: "relative inline-block touch-action-none select-none outline-none",
    },
    track: {
      base: "relative top-0 cursor-pointer rounded-full overflow-hidden",
      main: "bg-gray-300",
      filled: "absolute bg-gray-800 pointer-events-none",
    },
    thumb: {
      base: "absolute z-1 flex items-center",
      handle: {
        base:
          "bg-white flex items-center justify-center rounded-full select-none cursor-pointer shadow-thumb text-gray-400",
        size: {
          xs: "w-12px h-12px text-xxs",
          sm: "w-16px h-16px text-xs",
          lg: "w-20px h-20px text-sm",
        },
      },
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
        xs: "h-2px",
        sm: "h-4px",
        lg: "h-8px",
      },
    },
    thumb: {
      base: "flex-col top-1/4 transform -translate-y-1/4",
      handle: "",
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
        xs: "w-2px",
        sm: "w-4px",
        lg: "w-8px",
      },
    },
    thumb: {
      base: "flex-row top-unset left-1/2 transform -translate-x-1/2",
      handle: "-left-1/2 -transform translate-x-1/2",
    },
  },
};
