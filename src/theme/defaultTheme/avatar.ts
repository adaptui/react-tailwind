export const avatar = {
  base:
    "lib:relative lib:inline-flex lib:items-center lib:justify-center lib:rounded-full lib:flex-shrink-0 lib:bg-gray-100",
  size: {
    xs: "lib:text-xxs lib:h-4 lib:w-4",
    sm: "lib:text-xs lib:h-5 lib:w-5",
    md: "lib:text-xs lib:h-6 lib:w-6",
    lg: "lib:text-sm lib:h-8 lib:w-8",
    xl: "lib:text-sm lib:h-10 lib:w-10",
  },
  name: "lib:text-center lib:uppercase lib:text-gray-500",
  icon: "lib:text-gray-500",
  image: "lib:rounded-full lib:w-full lib:h-full lib:object-cover",
  group: {
    base: "lib:flex lib:items-center lib:space-x-2",
  },
  badge: {
    base:
      "lib:absolute lib:flex lib:items-center lib:justify-center bg-white rounded-full",
    position: {
      "top-left": "lib:top-0 lib:left-0",
      "top-right": "lib:top-0 lib:right-0",
      "bottom-right": "lib:bottom-0 lib:right-0",
      "bottom-left": "lib:bottom-0 lib:left-0",
    },
    size: {
      xs: "lib:text-1 p-px",
      sm: "lib:text-1 p-0.5",
      md: "lib:text-1 p-0.5",
      lg: "lib:text-1.5 p-0.5",
      xl: "lib:text-2 p-0.5",
    },
    online: "text-green-500",
    sleep: "text-gray-500",
    typing: {
      base:
        "flex items-center justify-center bg-gray-500 rounded-full space-x-px",
      size: {
        xs: "h-1 p-px",
        sm: "h-1.5 p-0.5",
        md: "h-1.5 p-0.5",
        lg: "h-1.5 p-0.5",
        xl: "h-2 p-1",
      },
      circle: "bg-white w-0.5 h-0.5 rounded-full animate-pulse",
      position: {
        xs: "transform translate-x-1/4 translate-y-1/4",
        sm: "transform translate-x-1/4 translate-y-1/4",
        md: "transform translate-x-1/4 translate-y-1/4",
        lg: "transform translate-x-1",
        xl: "transform translate-x-1",
      },
    },
  },
};
