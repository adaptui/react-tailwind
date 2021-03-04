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
      ghost: "lib:text-white lib:hover:text-gray-800 lib:hover:bg-white",
      primary: "lib:text-gray-800 lib:bg-white",
      secondary: "lib:text-white lib:bg-gray-700",
    },
  },
  success: {
    base: "lib:bg-gray-800 lib:text-white",
    body: { description: "lib:text-gray-300" },
    actions: {
      button: {
        ghost: "lib:text-white lib:hover:text-gray-800 lib:hover:bg-white",
        primary: "lib:text-gray-800 lib:bg-white",
        secondary: "lib:text-white lib:bg-gray-700",
      },
    },
  },
  info: {
    base: "lib:bg-blue-600 lib:text-white",
    body: { description: "lib:text-blue-300" },
    actions: {
      button: {
        ghost: "lib:text-white lib:hover:text-blue-800 lib:hover:bg-white",
        primary: "lib:text-blue-800 lib:bg-white",
        secondary: "lib:text-white lib:bg-blue-700",
      },
    },
  },
  warning: {
    base: "lib:bg-orange-500 lib:text-white",
    body: { description: "lib:text-orange-300" },
    actions: {
      button: {
        ghost: "lib:text-white lib:hover:text-orange-80lib:0 hover:bg-white",
        primary: "lib:text-orange-800 lib:bg-white",
        secondary: "lib:text-white lib:bg-orange-700",
      },
    },
  },
  error: {
    base: "lib:bg-red-600 lib:text-white",
    body: { description: "lib:text-red-300" },
    actions: {
      button: {
        ghost: "lib:text-white lib:hover:text-red-800 hlib:over:bg-white",
        primary: "lib:text-red-800 lib:bg-white",
        secondary: "lib:text-white lib:bg-red-700",
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
