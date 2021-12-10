export const input = {
  wrapper: "relative inline-flex",
  main: "appearance-none w-full outline-none px-2 py-1 shadow-sm font-medium placeholder:text-gray-500 placeholder-text-cxs border h-6 border-gray-300 hover:border-gray-400 rounded-md text-gray-800 focus-visible:border-blue-500 focus-visible:shadow-input disabled:bg-gray-100 disabled:shadow-none disabled:cursor-not-allowed disabled:border-gray-300",
  invalid: "border-red-300 hover:border-red-400",
  children: {
    pointerEventsNone: "pointer-events-none",
    base: "flex items-center justify-center text-xs absolute inset-y-0 h-6 text-gray-800 bg-transparent border border-transparent rounded-md focus-within:outline-none focus-within:border-blue-500 focus-within:shadow-input ",
    prefix: "left-0",
    suffix: "right-0",
  },

  group: {
    base: "inline-flex items-center justify-center rounded-md",
    children: {
      base: "inline-flex items-center h-6 text-xs font-medium text-gray-800 border border-gray-300 shadow-sm focus-within:outline-none focus-within:border-blue-500 focus-within:shadow-input focus-within:z-10",
      prefix: "-mr-px rounded-l-md",
      suffix: "-ml-px rounded-r-md",
    },
  },
};
