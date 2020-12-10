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
    cell: "calendar__cell text-center rounded-lg text-sm wh32-minmax",
    weekTitle: `calendar__cell text-center rounded-lg text-sm wh32-minmax text-gray-500 font-light`,
    button: "text-gray-600 w-16px",
  },
};

export default theme;
