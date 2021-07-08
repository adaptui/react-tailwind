export const calendar = {
  base: "lib:font-sans lib:p-3 lib:rounded-md lib:bg-white lib:shadow-lg lib:w-max",
  header: {
    base: "lib:flex lib:justify-between",
    title: "lib:text-sm lib:font-bold lib:text-gray-700",
    button: "lib:text-gray-600 lib:w-16px",
  },
  table: {
    base: "lib:p-4 lib:mt-2",
    head: {
      base: "",
      row: "lib:text-center",
      header: {
        base: "lib:text-center lib:rounded-lg lib:text-sm lib:h-8 lib:w-8 lib:min-h-8 lib:min-w-8 lib:text-gray-500 lib:font-light",
        abbr: "",
      },
    },
    body: {
      base: "",
      row: "",
      data: {
        base: "lib:text-center lib:rounded-lg lib:text-sm lib:h-8 lib:w-8 lib:min-h-8 lib:min-w-8 focus-within:lib:bg-gray-100 focus-within:lib:text-black aria-selected:lib:text-white aria-selected:lib:bg-blue-400 is-range-selection:lib:bg-blue-100 is-range-selection:lib:rounded-none is-range-selection:lib:text-gray-800 is-selection-start:lib:text-white is-selection-start:lib:bg-blue-500 is-selection-end:lib:text-white is-selection-end:lib:bg-blue-500 is-selection-start:lib:rounded-l-lg is-selection-end:lib:rounded-r-lg",
        button: "lib:p-2 lib:outline-none aria-disabled:lib:text-gray-400",
      },
    },
  },
};
