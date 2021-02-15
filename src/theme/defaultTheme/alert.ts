export const alert = {
  base:
    "lib:flex lib:w-full lib:overflow-hidden lib:px-3 lib:py-2.5 lib:rounded-md",
  icon:
    "lib:inherit box-content lib:flex-shrink-0 lib:mr-2 lib:w-4 lib:h-4 lib:py-0.5",
  body: {
    base: "lib:flex lib:text-sm",
    mobile: "lib:flex-col",
  },
  title: "lib:text-gray-800 font-medium",
  description: {
    base: "lib:text-gray-600 font-light",
    desktop: "lib:ml-2",
    mobile: "lib:mt-0.5",
  },
  actionsWrapper: { base: "ml-auto flex", desktop: "items-center" },
  actionButton: {
    base: "shadow-none",
    desktop: "-my-1.5",
    mobile: "-ml-3 mt-0.5",
  },
  closeButton: "-my-1.5 -mr-2 shadow-none",
  status: {
    neutral: {
      base: "lib:bg-gray-100",
      icon: "lib:text-gray-800",
      actionButton: "lib:text-gray-800 hover:bg-gray-200",
      closeButton: "lib:text-gray-800 hover:bg-gray-200",
    },
    info: {
      base: "lib:bg-blue-50",
      icon: "lib:text-blue-600",
      actionButton: "lib:text-blue-600 hover:bg-blue-100",
      closeButton: "lib:text-blue-600 hover:bg-blue-100",
    },
    success: {
      base: "lib:bg-green-50",
      icon: "lib:text-green-600",
      actionButton: "lib:text-green-600 hover:bg-green-100",
      closeButton: "lib:text-green-600 hover:bg-green-100",
    },
    warning: {
      base: "lib:bg-orange-50",
      icon: "lib:text-orange-600",
      actionButton: "lib:text-orange-600 hover:bg-orange-100",
      closeButton: "lib:text-orange-600 hover:bg-orange-100",
    },
    error: {
      base: "lib:bg-red-50",
      icon: "lib:text-red-600",
      actionButton: "lib:text-red-600 hover:bg-red-100",
      closeButton: "lib:text-red-600 hover:bg-red-100",
    },
  },
};
