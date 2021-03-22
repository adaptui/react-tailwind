export const input = {
  group: {
    base: "inline-flex items-center justify-center rounded-md",
    prefix:
      "-mr-px inline-flex items-center bg-gray-100 h-6 text-xs font-medium text-gray-800 px-2 border rounded-l-md border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-input focus:z-10",
    suffix:
      "-ml-px inline-flex items-center bg-gray-100 h-6 text-xs font-medium text-gray-800 px-2 border rounded-r-md border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-input focus:z-10",
  },

  input: {
    base: "relative inline-flex shadow-sm",
    input:
      "w-full outline-none px-2 py-1 text-xs font-medium text-gray-500 border h-6 border-gray-300 hover:border-gray-400 rounded-md focus:text-gray-800 focus:border-blue-500 focus:shadow-input",
    disabled: "bg-gray-100",
    invalid: "border-red-300 hover:border-red-400",
    prefix:
      "flex items-center justify-center text-xs absolute inset-y-0 left-0",
    suffix:
      "flex items-center justify-center text-xs absolute inset-y-0 right-0",
  },
  // base:
  //   "block w-full outline-none px-2 py-1 text-xs font-medium text-gray-500 bg-transparent shadow-sm rounded-md border border-gray-300 hover:border-gray-400 focus:text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-60",

  addon: {
    base:
      "flex items-center text-xs rounded-md border border-gray-300 bg-gray-100 text-gray-500",
    prefixPadding: "pl-2",
    suffixPadding: "pr-2",
    prefix: "pr-2",
    suffix: "pl-2",
  },
};
