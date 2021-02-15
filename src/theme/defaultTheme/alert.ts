export const alert = {
  base:
    "lib:font-sans lib:flex lib:w-full lib:overflow-hidden lib:p-3 lib:rounded-md",
  body: {
    base: "flex gap-1.5",
    desktop: "flex-row",
    mobile: "flex-col",
  },
  title:
    "lib:text-gray-800 lib:text-sm lib:leading-4 lib:font-semibold lib:mr-2",
  description: "lib:inline lib:text-gray-600 lib:text-sm lib:leading-4",
  actionsWrapper: "h-fit items-center lib:gap-2 lib:inherit lib:ml-auto",
  itemsCenter: "items-center",
  icon: {
    center: "self-center",
    base: "lib:self-start lib:flex-shrink-0 lib:mr-3 lib:w-4 lib:h-4",
    icons: "lib:relative lib:-top-1.5 lib:w-full lib:h-full",
  },
  iconButton: {
    base:
      "lib:text-gray-800 lib:h-4 lib:p-0 bg-transparent lib:min-w-4 lib:ml-2 lib:shadow-none",
  },
  actionButton: "p-0 text-sm bg-transparent lib:px-0 lib:shadow-none lib:w-fit",
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
