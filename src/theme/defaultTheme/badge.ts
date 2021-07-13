export const badge = {
  base: "lib:inline-flex lib:items-center lib:justify-center lib:font-medium lib:whitespace-nowrap lib:align-middle lib:rounded-full lib:transition-all",
  size: {
    sm: "lib:py-px lib:px-1.5 lib:text-xs lib:leading-[115%]",
    md: "lib:py-[3px] lib:px-1.5 lib:text-xs lib:leading-[115%]",
    lg: "lib:py-[4.5px] lib:px-2 lib:text-[length:13px] lib:leading-[100%]",
  },
  variant: {
    solid: {
      default: "lib:bg-gray-800 lib:text-white",
      primary: "lib:bg-blue-500 lib:text-white",
      secondary: "lib:bg-purple-500 lib:text-white",
      success: "lib:bg-emarald-500 lib:text-white",
      danger: "lib:bg-red-500 lib:text-white",
    },
    subtle: {
      default: "lib:bg-gray-100 lib:text-gray-600",
      primary: "lib:bg-blue-50 lib:text-blue-500",
      secondary: "lib:bg-purple-50 lib:text-purple-500",
      success: "lib:bg-emarald-50 lib:text-emarald-500",
      danger: "lib:bg-red-50 lib:text-emarald-500",
    },
    outline: {
      default: "lib:bg-white lib:text-gray-600 lib:ring-1 lib:ring-gray-200",
      primary: "lib:bg-white lib:text-blue-500 lib:ring-1 lib:ring-blue-200",
      secondary:
        "lib:bg-white lib:text-purple-500 lib:ring-1 lib:ring-purple-200",
      success:
        "lib:bg-white lib:text-emarald-500 lib:ring-1 lib:ring-emarald-200",
      danger: "lib:bg-white lib:text-red-500 lib:ring-1 lib:ring-red-200",
    },
  },
};
