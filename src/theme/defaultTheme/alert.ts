export const alert = {
  base:
    "lib:font-sans lib:flex lib:items-center lib:w-full lib:overflow-hidden lib:p-4",
  title:
    "lib:text-gray-800 lib:text-sm lib:leading-4 lib:font-semibold lib:mr-2",
  description: "lib:inline lib:text-gray-600 lib:text-sm lib:leading-4",
  icon: {
    base: "lib:inherit lib:flex-shrink-0 lib:mr-3 lib:w-5 lib:h-5",
    icons: "lib:w-full lib:h-full",
  },
  actionButton: "lib:h-5 bg-transparent lib:px-0",
  status: {
    info: {
      base: "lib:bg-blue-50 ",
      icon: "lib:text-blue-400",
      actionButton: "lib:text-blue-500",
    },
    success: {
      base: "lib:bg-green-50",
      icon: "lib:text-green-400",
      actionButton: "lib:text-green-500",
    },
    warning: {
      base: "lib:bg-orange-50",
      icon: "lib:text-orange-400",
      actionButton: "lib:text-orange-500",
    },
    error: {
      base: "lib:bg-red-50",
      icon: "lib:text-red-400",
      actionButton: "lib:text-red-500",
    },
    offline: {
      base: "lib:bg-purple-50",
      icon: "lib:text-purple-400",
      actionButton: "lib:text-purple-500",
    },
  },
};
