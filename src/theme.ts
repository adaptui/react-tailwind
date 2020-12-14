const theme = {
  button: {
    base: "font-sans font-bold inline-block rounded-3xl",
    variants: {
      primary: "text-white bg-blue-500",
      secondary: "text-gray-500 shadow",
    },
    size: {
      small: "text-xs px-2 py-1",
      medium: "text-sm px-4 py-2",
      large: "text-base px-6 py-3",
    },
  },
  calendar: {
    base: "calendar p-3 rounded-md bg-white shadow-lg w-max",
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
          base:
            "calendar__cell text-center rounded-lg text-sm wh32-minmax text-gray-500 font-light",
          abbr: "",
        },
      },
      body: {
        base: "",
        row: "",
        data: {
          base: "calendar__cell text-center rounded-lg text-sm wh32-minmax",
          button: "p-2",
        },
      },
    },
  },
  datepicker: {
    base:
      "datepicker bg-white w-max rounded-md shadow-sm relative inline-block border border-gray-300",
    container: "flex gap-4 justify-between p-2 pr-4 pl-4 rounded-md",
    segment_field: "flex justify-between gap-1",
    segment: "focus:text-blue-500 focus:outline-none font-mono font-normal",
    trigger:
      "text-gray-700 focus:outline-none focus:text-blue-500 relative inline-block",
  },
};

export default theme;
