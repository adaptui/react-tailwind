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
  badge: {
    base: "text-xs rounded-full",
    variants: {
      primary: "text-white bg-gray-800",
      secondary: "text-white bg-blue-500",
      violet: "text-white bg-purple-500",
      red: "text-white bg-red-600",
      outline: "bg-white text-gray-800 border border-gray-800",
    },
    size: {
      small: "text-xs px-2 py-1",
      medium: "text-sm px-3 py-1",
      large: "text-base px-4 py-1",
    },
  },
};

export default theme;
