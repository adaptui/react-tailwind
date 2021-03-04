export const toast = {
  // Base Alert Styles
  base: "lib:flex lib:shadow-lg lib:py-2 lib:px-3 lib:rounded-md lib:w-full",
  content: {
    base: "lib:flex w-full lib:transition-opacity",
    show: "lib:opacity-100",
    hide: "lib:opacity-0",
  },
  icon:
    "lib:inline-flex lib:box-content lib:flex-shrink-0 lib:mr-2 lib:w-4 lib:h-4 lib:py-0.5",
  body: {
    base: "lib:flex lib:flex-col lib:text-sm lib:flex-wrap lib:mr-2",
    title: "lib:font-medium",
    description: "lib:mt-0.5",
  },
  actions: {
    base: "space-x-2 lib:ml-auto lib:flex lib:items-center",
    button: {
      ghost: "",
      primary: "",
      secondary: "",
    },
  },
  success: {
    base: "bg-gray-800 text-white",
    body: { description: "text-gray-300" },
    actions: {
      button: {
        ghost: "text-white hover:text-gray-800 hover:bg-white",
        primary: "text-gray-800 bg-white",
        secondary: "text-white bg-gray-700",
      },
    },
  },
  info: {
    base: "bg-blue-600 text-white",
    body: { description: "text-blue-300" },
    actions: {
      button: {
        ghost: "text-white hover:text-blue-800 hover:bg-white",
        primary: "text-blue-800 bg-white",
        secondary: "text-white bg-blue-700",
      },
    },
  },
  warning: {
    base: "bg-orange-500 text-white",
    body: { description: "text-orange-300" },
    actions: {
      button: {
        ghost: "text-white hover:text-orange-800 hover:bg-white",
        primary: "text-orange-800 bg-white",
        secondary: "text-white bg-orange-700",
      },
    },
  },
  error: {
    base: "bg-red-600 text-white",
    body: { description: "text-red-300" },
    actions: {
      button: {
        ghost: "text-white hover:text-red-800 hover:bg-white",
        primary: "text-red-800 bg-white",
        secondary: "text-white bg-red-700",
      },
    },
  },

  // Default string content styles
  default:
    "lib:flex lib:shadow-lg lib:bg-gray-800 lib:py-2 lib:px-3 lib:text-white lib:rounded-md lib:w-full",

  // Container Vercel Toast animation styles
  container: {
    base:
      "lib:fixed lib:z-50 lib:max-w-sm lib:transition-all lib:duration-300 lib:right-5",
    hovered: "lib:bottom-5",
    notHovered: "lib:bottom-2.5",
  },
  animationWrapper: {
    base:
      "lib:absolute lib:bottom-0 lib:right-0 lib:w-96 lib:transition-all lib:duration-300 lib:transform-gpu",
    visible: "lib:translate-y-0 lib:opacity-100",
    notVisible: "lib:translate-y-20 lib:opacity-0",
  },
  hoverWrapper: "lib:flex lib:transition-all lib:duration-300",
  fill:
    "lib:absolute lib:left-0 lib:right-0 lib:w-full lib:h-full lib:bg-transparent lib:top-full",
};
