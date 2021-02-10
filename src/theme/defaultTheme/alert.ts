export const alert = {
  base:
    "lib:font-sans lib:flex lib:items-center lib:w-full lib:min-h-10 lib:overflow-hidden lib:p-2 lib:px-3 lib:rounded-md",
  title:
    "lib:flex lib:items-centerlib:text-gray-800 lib:text-sm lib:leading-4 lib:font-semibold lib:mr-2",
  description: "lib:inline lib:text-gray-600 lib:text-sm lib:leading-4",
  actionsWrapper: "items-center inherit ml-auto",
  icon: {
    base: "lib:flex-shrink-0 lib:mr-3 lib:w-4 lib:h-4 lib:max-w-4 lib:max-h-4",
    icons: "lib:relative lib:-top-0.5 lib:w-full lib:h-full",
  },
  iconButton: {
    base:
      "lib:text-gray-800 lib:h-5 lib:px-0 bg-transparent lib:min-w-5 lib:ml-2 lib:shadow-none",
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
  },
};
