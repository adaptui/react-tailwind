export const input = {
  wrapper: "lib:relative lib:inline-flex",
  base: "lib:appearance-none lib:w-full lib:outline-none lib:px-2 lib:py-1 lib:text-xs lib:shadow-sm lib:font-medium lib:placeholder-text-gray-500 lib:border lib:h-6 lib:border-gray-300 hover:lib:border-gray-400 lib:rounded-md lib:text-gray-800 focus-visible:lib:border-blue-500 focus-visible:lib:shadow-input disabled:lib:bg-gray-100 disabled:lib:shadow-none disabled:lib:cursor-not-allowed disabled:lib:border-gray-300",
  invalid: "lib:border-red-300 hover:lib:border-red-400",
  children: {
    pointerEventsNone: "lib:pointer-events-none",
    base: "lib:flex lib:items-center lib:justify-center lib:text-xs lib:absolute lib:inset-y-0 lib:h-6 lib:text-gray-800 lib:bg-transparent lib:border lib:border-transparent lib:rounded-md focus-within:lib:outline-none focus-within:lib:border-blue-500 focus-within:lib:shadow-input ",
    prefix: "lib:left-0",
    suffix: "lib:right-0",
  },

  group: {
    base: "lib:inline-flex lib:items-center lib:justify-center lib:rounded-md",
    children: {
      base: "lib:inline-flex lib:items-center lib:h-6 lib:text-xs lib:font-medium lib:text-gray-800 lib:border lib:border-gray-300 lib:shadow-sm focus-within:lib:outline-none focus-within:lib:border-blue-500 focus-within:lib:shadow-input focus-within:lib:z-10",
      prefix: "lib:-mr-px lib:rounded-l-md",
      suffix: "lib:-ml-px lib:rounded-r-md",
    },
  },
};
