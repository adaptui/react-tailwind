export const spinner = {
  base: "inline-block border-current animate-spin",
  size: {
    xs: "h-3 w-3 border-[1.5px] border-solid rounded-full",
    sm: "h-3.5 w-3.5 border-[1.5px] border-solid rounded-full",
    md: "h-4 w-4 border-[1.5px] border-solid rounded-full",
    lg: "h-5 w-5 border-[1.5px] border-solid rounded-full",
    em: "h-[1em] w-[1em] border-[1.5px] border-solid rounded-full",
  },
  themeColor: {
    base: "text-gray-800 border-current",
    primary: "text-blue-800 border-current",
    secondary: "text-violet-800 border-current",
    success: "text-green-800 border-current",
    danger: "text-red-800 border-current",
    current: "text-current border-current",
  },
  track: {
    visible: {
      base: "border-b-gray-400 border-l-gray-400",
      primary: "border-b-blue-400 border-l-blue-400",
      secondary: "border-b-violet-400 border-l-violet-400",
      success: "border-b-green-400 border-l-green-400",
      danger: "border-b-red-400 border-l-red-400",
      current: "border-b-gray-400 border-l-gray-400",
    },
    transparent: "border-b-transparent border-l-transparent",
  },
  label: "sr-only",
};
