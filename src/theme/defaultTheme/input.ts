export const input = {
  wrapper: "lib:relative lib:inline-flex lib:shadow-sm",
  base:
    "lib:appearance-none lib:w-full lib:outline-none lib:px-2 lib:py-1 lib:text-xs lib:font-medium lib:text-gray-500 lib:border lib:h-6 lib:border-gray-300 lib:hover:border-gray-400 lib:rounded-md lib:focus:text-gray-800 lib:focus:border-blue-500 lib:focus:shadow-input",
  disabled: "lib:bg-gray-100",
  invalid: "lib:border-red-300 lib:hover:border-red-400",
  children: {
    base:
      "lib:flex lib:items-center lib:justify-center lib:text-xs lib:absolute lib:inset-y-0 lib:h-6 lib:px-2 lib:text-gray-800 lib:bg-transparent lib:border lib:border-transparent lib:rounded-md lib:focus:outline-none lib:focus:border-blue-500 lib:focus:shadow-input ",
    prefix: "lib:left-0",
    suffix: "lib:right-0",
  },

  group: {
    base: "lib:inline-flex lib:items-center lib:justify-center lib:rounded-md",
    children: {
      base:
        "lib:inline-flex lib:items-center lib:bg-gray-100 lib:h-6 lib:text-xs lib:font-medium lib:text-gray-800 lib:px-2 lib:border lib:border-gray-300 lib:shadow-sm lib:focus:outline-none lib:focus:border-blue-500 lib:focus:shadow-input lib:focus:z-10",
      prefix: "lib:-mr-px lib:rounded-l-md",
      suffix: "lib:-ml-px lib:rounded-r-md",
    },
  },
};
