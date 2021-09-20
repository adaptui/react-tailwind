export const calendar = {
  base: "font-sans p-3 rounded-md bg-white shadow-lg w-max",
  header: {
    base: "flex justify-between",
    title: "text-sm font-bold text-gray-700",
    button: "text-gray-600 w-16px",
  },
  table: {
    base: "p-4 mt-2",
    head: {
      base: "",
      row: "text-center",
      header: {
        base: "text-center rounded-lg text-sm h-8 w-8 min-h-8 min-w-8 text-gray-500 font-light",
        abbr: "",
      },
    },
    body: {
      base: "",
      row: "",
      data: {
        base: "text-center rounded-lg text-sm h-8 w-8 min-h-8 min-w-8 focus-within:bg-gray-100 focus-within:text-black aria-selected:text-white aria-selected:bg-blue-400 is-range-selection:bg-blue-100 is-range-selection:rounded-none is-range-selection:text-gray-800 is-selection-start:text-white is-selection-start:bg-blue-500 is-selection-end:text-white is-selection-end:bg-blue-500 is-selection-start:rounded-l-lg is-selection-end:rounded-r-lg",
        button: "p-2 outline-none aria-disabled:text-gray-400",
      },
    },
  },
};
