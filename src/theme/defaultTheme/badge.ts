export const badge = {
  base: "inline-flex items-center justify-center relative whitespace-nowrap align-middle transition-all",
  size: {
    sm: {
      base: "min-h-4 min-w-4 w-auto px-1.5 py-px border rounded-2xl text-xs font-medium",
      prefix: "text-[8px] mr-1",
    },
    md: {
      base: "min-h-5 min-w-5 w-auto px-1.5 py-[3px] border rounded-2xl text-xs font-medium",
      prefix: "text-[10px] mr-1",
    },
    lg: {
      base: "min-h-6 min-w-6 w-auto px-2 py-[4.5px] border rounded-2xl text-cxs font-medium",
      prefix: "text-[12px] mr-1",
    },
  },
  themeColor: {
    base: {
      solid: "bg-gray-900 text-white-900 border-transparent",
      subtle: "bg-gray-100 text-gray-800 border-transparent",
      outline: "bg-white-50 text-gray-800 border-gray-400",
    },
    primary: {
      solid: "bg-blue-600 text-white-900 border-transparent",
      subtle: "bg-blue-100 text-blue-800 border-transparent",
      outline: "bg-white-50 text-blue-800 border-blue-400",
    },
    secondary: {
      solid: "bg-violet-600 text-white-900 border-transparent",
      sublte: "bg-violet-100 text-violet-800 border-transparent",
      outline: "bg-white-50 text-violet-800 border-violet-400",
    },
    success: {
      solid: "bg-green-600 text-white-900 border-transparent",
      subtle: "bg-green-100 text-green-800 border-transparent",
      outline: "bg-white-50 text-green-800 border-green-400",
    },
    danger: {
      solid: "bg-red-600 text-white-900 border-transparent",
      subtle: "bg-red-100 text-red-800 border-transparent",
      outline: "bg-white-50 text-red-800 border-red-400",
    },
  },
};
