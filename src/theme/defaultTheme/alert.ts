export const alert = {
  base:
    "lib:flex items-center lib:w-full lib:overflow-hidden lib:px-3 lib:py-2.5 lib:rounded-md",
  icon: "lib:inherit lib:flex-shrink-0 lib:mr-2 lib:w-4 lib:h-4",
  body: {
    base: "lib:flex lib:text-sm flex-1 min-w-0",
    mobile: "lib:flex-col",
  },
  title: "lib:text-gray-800 lib:mr-2",
  description: "lib:text-gray-600",
  itemsCenter: "items-center",
  iconButton: {
    base:
      "lib:text-gray-800 lib:h-4 lib:p-0 bg-transparent lib:min-w-4 lib:ml-2 lib:shadow-none",
  },
  actionButton: "hover:bg-blue-100 -my-2 shadow-none",
  closeButton: "hover:bg-blue-100 -my-2 -mr-2 shadow-none",
  status: {
    neutral: {
      base: "lib:bg-gray-100",
      icon: "lib:text-gray-800",
      actionButton: "lib:text-gray-800",
      iconButton: "lib:hover:bg-gray-200",
    },
    info: {
      base: "lib:bg-blue-50",
      icon: "lib:text-blue-600",
      actionButton: "lib:text-blue-600",
      iconButton: "lib:hover:bg-blue-200",
    },
    success: {
      base: "lib:bg-green-50",
      icon: "lib:text-green-600",
      actionButton: "lib:text-green-600",
      iconButton: "lib:hover:bg-green-200",
    },
    warning: {
      base: "lib:bg-orange-50",
      icon: "lib:text-orange-600",
      actionButton: "lib:text-orange-600",
      iconButton: "lib:hover:bg-orange-200",
    },
    error: {
      base: "lib:bg-red-50",
      icon: "lib:text-red-600",
      actionButton: "lib:text-red-600",
      iconButton: "lib:hover:bg-red-200",
    },
  },
};
