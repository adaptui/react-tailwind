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
        base: "lib:text-center lib:rounded-lg lib:text-sm lib:h-8 lib:w-8 lib:min-h-8 lib:min-w-8 lib:focus-within:bg-gray-100 lib:focus-within:text-black lib:aria-selected:text-white lib:aria-selected:bg-blue-400 lib:is-range-selection:bg-blue-100 lib:is-range-selection:rounded-none lib:is-range-selection:text-gray-800 lib:is-selection-start:text-white lib:is-selection-start:bg-blue-500 lib:is-selection-end:text-white lib:is-selection-end:bg-blue-500 lib:is-selection-start:rounded-l-lg lib:is-selection-end:rounded-r-lg",
        button: "lib:p-2 lib:outline-none lib:aria-disabled:text-gray-400",
      },
    },
  },
};
