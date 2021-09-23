export const badge = {
  base: "inline-flex items-center justify-center relative whitespace-nowrap align-middle transition-all",
  size: {
    sm: "px-1.5 py-px rounded-2xl text-xs font-medium",
    md: "px-1.5 py-[3px] rounded-2xl text-xs font-medium",
    lg: "px-2 py-[4.5px] rounded-2xl text-cxs font-medium",
  },
  variant: {
    solid: {
      default: "bg-gray-800 text-white",
      primary: "bg-blue-500 text-white",
      secondary: "bg-violet-500 text-white",
      success: "bg-emarald-500 text-white",
      danger: "bg-red-500 text-white",
    },
    subtle: {
      default: "bg-gray-100 text-gray-600",
      primary: "bg-blue-50 text-blue-500",
      secondary: "bg-violet-50 text-violet-500",
      success: "bg-emarald-50 text-emarald-500",
      danger: "bg-red-50 text-red-500",
    },
    outline: {
      default: "bg-white text-gray-600 border border-gray-200",
      primary: "bg-white text-blue-500 border border-blue-200",
      secondary: "bg-white text-violet-500 border border-violet-200",
      success: "bg-white text-emarald-500 border border-emarald-200",
      danger: "bg-white text-red-500 border border-red-200",
    },
  },
};
