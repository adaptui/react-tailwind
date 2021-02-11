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
  border: "border-2 border-white",
  name: "lib:text-center lib:uppercase lib:text-gray-500",
  icon: "lib:inherit lib:text-gray-500",
  image: "lib:rounded-full lib:w-full lib:h-full lib:object-cover",
  group: {
    base: "lib:inline-flex lib:items-center lib:-space-x-1.5",
    excess: {
      bg: "absolute inset-0 bg-black rounded-full opacity-50",
      text: {
        base:
          "absolute inset-0 flex items-center justify-center text-white rounded-full ",
        size: {
          xs: "lib:text-1 ",
          sm: "lib:text-2",
          md: "lib:text-xxs",
          lg: "lib:text-xs",
          xl: "lib:text-sm",
        },
      },
    },
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
      xs: "lib:text-1 lib:p-px",
      sm: "lib:text-1 lib:p-0.5",
      md: "lib:text-1 lib:p-0.5",
      lg: "lib:text-1.5 lib:p-0.5",
      xl: "lib:text-2 lib:p-0.5",
    },
    online: "lib:text-green-500",
    sleep: "lib:text-gray-500",
    typing: {
      base:
        "lib:flex lib:items-center lib:justify-center lib:bg-gray-500 lib:rounded-full lib:space-x-px",
      size: {
        xs: "lib:h-1 lib:p-px",
        sm: "lib:h-1.5 lib:p-0.5",
        md: "lib:h-1.5 lib:p-0.5",
        lg: "lib:h-1.5 lib:p-0.5",
        xl: "lib:h-2 lib:p-1",
      },
      circle:
        "lib:bg-white lib:w-0.5 lib:h-0.5 lib:rounded-full lib:animate-pulse",
      position: {
        xs: "lib:transform lib:translate-x-1/4 lib:translate-y-1/4",
        sm: "lib:transform lib:translate-x-1/4 lib:translate-y-1/4",
        md: "lib:transform lib:translate-x-1/4 lib:translate-y-1/4",
        lg: "lib:transform lib:translate-x-1",
        xl: "lib:transform lib:translate-x-1",
      },
    },
  },
};
