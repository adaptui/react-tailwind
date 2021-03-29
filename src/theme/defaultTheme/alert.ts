export const alert = {
  base:
    "lib:flex lib:w-full lib:overflow-hidden lib:px-3 lib:py-2.5 lib:rounded-md",
  icon:
    "lib:inline-flex lib:box-content lib:flex-shrink-0 lib:mr-2 lib:w-4 lib:h-4 lib:py-0.5",
  body: {
    base: "lib:flex lib:text-sm lib:flex-wrap",
    desktop: "",
    mobile: "lib:flex-col",
  },
  title: "lib:text-gray-800 font-medium lib:mr-2",
  description: {
    base: "lib:text-gray-600",
    desktop: "",
    mobile: "lib:mt-0.5",
  },
  actionsWrapper: {
    base: "lib:ml-auto lib:flex",
    desktop: "",
    mobile: "",
  },
  actionButton: {
    base: "",
    desktop: "lib:-my-1.5",
    mobile: "lib:-ml-3 lib:mt-0.5",
  },
  closeButton: "lib:-my-1.5 lib:-mr-2",
  status: {
    neutral: {
      base: "lib:bg-gray-100",
      icon: "lib:text-gray-800",
      actionButton: "text-gray-800 hover:bg-gray-200",
      closeButton: "text-gray-800 hover:bg-gray-200",
    },
    info: {
      base: "lib:bg-blue-50",
      icon: "lib:text-blue-600",
      actionButton: "text-blue-600 hover:bg-blue-100",
      closeButton: "text-blue-600 hover:bg-blue-100",
    },
    success: {
      base: "lib:bg-green-50",
      icon: "lib:text-green-600",
      actionButton: "text-green-600 hover:bg-green-100",
      closeButton: "text-green-600 hover:bg-green-100",
    },
    warning: {
      base: "lib:bg-orange-50",
      icon: "lib:text-orange-600",
      actionButton: "text-orange-600 hover:bg-orange-100",
      closeButton: "text-orange-600 hover:bg-orange-100",
    },
    error: {
      base: "lib:bg-red-50",
      icon: "lib:text-red-600",
      actionButton: "text-red-600 hover:bg-red-100",
      closeButton: "text-red-600 hover:bg-red-100",
    },
  },
};
