export const slider = {
  base: "relative",
  common: {
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
      handle:
        "w-14px h-14px bg-white flex items-center justify-center rounded-full select-none cursor-pointer shadow-thumb",
    },
  },
  horizontal: {
    wrapper: {
      base: "w-full top-0",
    },
    track: {
      base: "w-full top-1/2 transform translate-y-1/2",
      main: "h-1",
      filled: "h-1 top-0",
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
      base: "h-full w-fit left-1",
      main: "w-1 h-full",
      filled: "w-1 top-unset bottom-0 left-1/2 transform -translate-x-1/2",
    },
    thumb: {
      base: "flex-row top-unset left-0",
      handle: "-left-1/2 -transform translate-x-1/2",
    },
  },
};
