export const progress = {
  wrapper:
    "inline-flex flex-row flex-wrap justify-between items-center align-top w-full",
  size: {
    sm: {
      label: "mb-3 text-cxs font-medium",
      hint: "ml-3 mb-3 text-cxs font-medium",
      track: "w-full h-0.5 rounded-[20px] z-10",
      bar: "h-full rounded-[20px]",
    },
    md: {
      label: "mb-3 text-sm font-medium",
      hint: "ml-3 mb-3 text-sm font-medium",
      track: "w-full h-1 rounded-[20px] z-10",
      bar: "h-full rounded-[20px]",
    },
    lg: {
      label: "mb-3 text-sm font-medium",
      hint: "ml-3 mb-3 text-sm font-medium",
      track: "w-full h-2 rounded-[20px] z-10",
      bar: "h-full rounded-[20px]",
    },
    xl: {
      label: "mb-3 text-sm font-medium",
      hint: "ml-3 mb-3 text-sm font-medium",
      track: "w-full h-3 rounded-[20px] z-10",
      bar: "h-full rounded-[20px]",
    },
  },
  themeColor: {
    base: {
      label: "text-gray-900",
      hint: "text-gray-600",
      track: "bg-gray-100",
      bar: "bg-gray-900",
    },
    primary: {
      label: "text-gray-900",
      hint: "text-gray-600",
      track: "bg-blue-100",
      bar: "bg-blue-600",
    },
  },
  label: "flex-1 text-left",
  hint: "",
  track: "relative overflow-hidden ",
  bar: {
    base: "transition-all",
    indeterminate: "min-w-[50%] animate-progress",
  },
};
