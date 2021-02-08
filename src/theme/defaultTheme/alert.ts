export const alert = {
  base:
    "lib:font-sans lib:flex lib:items-center lib:w-full lib:min-h-10 lib:overflow-hidden lib:p-2 lib:px-3 lib:rounded-md",
  title:
    "lib:flex lib:items-center lib:text-gray-800 lib:text-sm lib:leading-4 lib:font-semibold lib:mr-2",
  description: "lib:inline lib:text-gray-600 lib:text-sm lib:leading-4",
  actionsWrapper: "items-center inherit ml-auto",
  icon: {
    base: "flex-shrink-0 mr-3 w-3.5 h-3.5 max-w-3.5 max-h-3.5",
    icons: "relative -top-0.5 lib:w-full lib:h-full",
  },
  iconButton: {
    base: "text-gray-800 h-5 px-0 bg-transparent min-w-5 ml-2 lib:shadow-none",
  },
  actionButton: "lib:h-5 bg-transparent lib:px-0 lib:shadow-none",
  status: {
    info: {
      base: "lib:bg-blue-50",
      icon: "lib:text-blue-400",
      actionButton: "lib:text-blue-500",
      iconButton: "lib:hover:bg-blue-200",
    },
    success: {
      base: "lib:bg-green-50",
      icon: "lib:text-green-400",
      actionButton: "lib:text-green-500",
      iconButton: "lib:hover:bg-green-200",
    },
    warning: {
      base: "lib:bg-orange-50",
      icon: "lib:text-orange-400",
      actionButton: "lib:text-orange-500",
      iconButton: "lib:hover:bg-orange-200",
    },
    error: {
      base: "lib:bg-red-50",
      icon: "lib:text-red-400",
      actionButton: "lib:text-red-500",
      iconButton: "lib:hover:bg-red-200",
    },
    offline: {
      base: "lib:bg-purple-50",
      icon: "lib:text-purple-400",
      actionButton: "lib:text-purple-500",
      iconButton: "lib:hover:bg-purple-200",
    },
  },
};
