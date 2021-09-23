export const alert = {
  base: "flex w-full overflow-hidden px-3 py-2.5 rounded-md",
  icon: "inline-flex box-content flex-shrink-0 mr-2 w-4 h-4 py-0.5",
  body: {
    base: "flex text-sm flex-wrap",
    desktop: "",
    mobile: "flex-col",
  },
  title: "text-gray-800 font-medium mr-2",
  description: {
    base: "text-gray-600",
    desktop: "",
    mobile: "mt-0.5",
  },
  actionsWrapper: {
    base: "ml-auto flex",
    desktop: "",
    mobile: "",
  },
  actionButton: {
    base: "",
    desktop: "-my-1.5",
    mobile: "-ml-3 mt-0.5",
  },
  closeButton: "-my-1.5 -mr-2",
  status: {
    neutral: {
      base: "bg-gray-100",
      icon: "text-gray-800",
      actionButton: "text-gray-800 hover:bg-gray-200",
      closeButton: "text-gray-800 hover:bg-gray-200",
    },
    info: {
      base: "bg-blue-50",
      icon: "text-blue-600",
      actionButton: "text-blue-600 hover:bg-blue-100",
      closeButton: "text-blue-600 hover:bg-blue-100",
    },
    success: {
      base: "bg-green-50",
      icon: "text-green-600",
      actionButton: "text-green-600 hover:bg-green-100",
      closeButton: "text-green-600 hover:bg-green-100",
    },
    warning: {
      base: "bg-orange-50",
      icon: "text-orange-600",
      actionButton: "text-orange-600 hover:bg-orange-100",
      closeButton: "text-orange-600 hover:bg-orange-100",
    },
    error: {
      base: "bg-red-50",
      icon: "text-red-600",
      actionButton: "text-red-600 hover:bg-red-100",
      closeButton: "text-red-600 hover:bg-red-100",
    },
  },
};
