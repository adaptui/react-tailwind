export const slider = {
  base: "relative",
  common: {
    tooltipContent: "pointer-events-none text-xs",
    wrapper: {
      base: "relative inline-block touch-action-none select-none outline-none",
    },
    track: {
      base: "relative top-0 cursor-pointer rounded-full overflow-hidden",
      main: "bg-gray-300",
      filled: "absolute bg-gray-800",
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
      base: "w-full top-1/2 transform translate-y-1/2",
      main: "",
      filled: "top-0",
      size: {
        xs: "h-2px",
        sm: "h-4px",
        lg: "h-8px",
      },
    },
    thumb: {
      base: "flex-col bottom-0",
      handle: "top-1/2 transform translate-y-1/2",
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
