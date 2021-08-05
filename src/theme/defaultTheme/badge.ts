export const badge = {
  base: "lib:inline-flex lib:items-center lib:justify-center lib:relative lib:whitespace-nowrap lib:align-middle lib:transition-all",
  size: {
    sm: "lib:px-1.5 lib:py-px lib:rounded-2xl lib:text-xs lib:font-medium",
    md: "lib:px-1.5 lib:py-[3px] lib:rounded-2xl lib:text-xs lib:font-medium",
    lg: "lib:px-2 lib:py-[4.5px] lib:rounded-2xl lib:text-cxs lib:font-medium",
  },
  variant: {
    solid: {
      default: "lib:bg-gray-800 lib:text-white",
      primary: "lib:bg-blue-500 lib:text-white",
      secondary: "lib:bg-violet-500 lib:text-white",
      success: "lib:bg-emarald-500 lib:text-white",
      danger: "lib:bg-red-500 lib:text-white",
    },
    subtle: {
      default: "lib:bg-gray-100 lib:text-gray-600",
      primary: "lib:bg-blue-50 lib:text-blue-500",
      secondary: "lib:bg-violet-50 lib:text-violet-500",
      success: "lib:bg-emarald-50 lib:text-emarald-500",
      danger: "lib:bg-red-50 lib:text-red-500",
    },
    outline: {
      default: "lib:bg-white lib:text-gray-600 lib:border lib:border-gray-200",
      primary: "lib:bg-white lib:text-blue-500 lib:border lib:border-blue-200",
      secondary:
        "lib:bg-white lib:text-violet-500 lib:border lib:border-violet-200",
      success:
        "lib:bg-white lib:text-emarald-500 lib:border lib:border-emarald-200",
      danger: "lib:bg-white lib:text-red-500 lib:border lib:border-red-200",
    },
  },
};
