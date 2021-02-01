export const slider = {
  base: "relative",
  wrapper:
    "relative inline-block w-full touch-action-none select-none outline-none",
  track: {
    base:
      "relative w-full cursor-pointer rounded-full overflow-hidden top-1/2 transform translate-y-1/2",
    main: "w-full h-1 bg-gray-300",
    filled: "absolute h-1 bg-gray-800 top-0 ",
  },
  thumb: {
    base: "bottom-0 absolute z-1 flex flex-col items-center ",
    handle:
      "top-1/2 transform translate-y-1/2 w-14px h-14px bg-white flex items-center justify-center rounded-full select-none cursor-pointer shadow-thumb",
  },
};
