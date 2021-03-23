export const input = {
  wrapper: "relative inline-flex shadow-sm",
  base:
    "appearance-none w-full outline-none px-2 py-1 text-xs font-medium text-gray-500 border h-6 border-gray-300 hover:border-gray-400 rounded-md focus:text-gray-800 focus:border-blue-500 focus:shadow-input",
  disabled: "bg-gray-100",
  invalid: "border-red-300 hover:border-red-400",
  children: {
    base:
      "flex items-center justify-center text-xs absolute inset-y-0 h-6 px-2 text-gray-800 bg-transparent border border-transparent rounded-md focus:outline-none focus:border-blue-500 focus:shadow-input ",
    prefix: "left-0",
    suffix: "right-0",
  },

  group: {
    base: "inline-flex items-center justify-center rounded-md",
    children: {
      base:
        "inline-flex items-center bg-gray-100 h-6 text-xs font-medium text-gray-800 px-2 border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-input",
      prefix: "-mr-px rounded-l-md",
      suffix: "-ml-px rounded-r-md",
    },
  },
};
