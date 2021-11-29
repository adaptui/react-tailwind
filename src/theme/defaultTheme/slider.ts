export const slider = {
  wrapper:
    "relative inline-block outline-none select-none touch-action-none w-80",
  track: {
    wrapper: "relative w-full py-2 cursor-pointer",
    base: "w-full h-1 bg-gray-200 rounded-2xl",
    filled:
      "absolute h-1 transform -translate-y-1/2 bg-gray-800 rounded-2xl top-1/2",
  },
  thumb: {
    wrapper:
      "absolute top-0.5 flex flex-col items-center z-10 focus-within:z-20",
    container:
      "flex items-center justify-center w-4 h-4 bg-white shadow-csm rounded-full select-none touch-action-none cursor-pointer hover:shadow-thumbHover active:shadow-thumbHover disabled:shadow-none disabled:bg-gray-200 focus-within:ring-2 focus-within:ring-gray-800 transition-all",
    input: "sr-only",
  },
};
