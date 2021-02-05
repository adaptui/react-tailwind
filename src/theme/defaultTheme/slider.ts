export const slider = {
  base: "lib:relative",
  common: {
    input: "lib:sr-only",
    tooltipContent: "lib:pointer-events-none lib:text-xs",
    wrapper: {
      base:
        "lib:relative lib:inline-block lib:touch-action-none lib:select-none lib:outline-none",
    },
    track: {
      base: "lib:relative lib:top-0 lib:cursor-pointer",
      main: "lib:bg-gray-300 lib:rounded-full",
      filled:
        "lib:absolute lib:bg-gray-800 lib:pointer-events-none lib:rounded-full",
      size: {
        xs: "lib:h-2px",
        sm: "lib:h-4px",
        lg: "lib:h-8px",
      },
    },
    thumb: {
      base:
        "lib:absolute lib:z-1 lib:flex lib:items-center lib:bg-white lib:flex lib:items-center lib:justify-center lib:rounded-full lib:select-none lib:cursor-pointer lib:shadow-thumb lib:text-gray-400 lib:focus-within:ring-2 lib:focus-within:ring-gray-800",
      size: {
        xs: "lib:w-12px lib:h-12px lib:text-xxs",
        sm: "lib:w-16px lib:h-16px lib:text-xs",
        lg: "lib:w-20px lib:h-20px lib:text-sm",
      },
    },
  },
  horizontal: {
    wrapper: {
      base: "lib:w-full lib:top-0",
    },
    track: {
      base: "lib:w-full",
      main: "",
      filled: "",
    },
    thumb: {
      base: "lib:flex-col lib:top-1/4 lib:transform lib:-translate-y-1/4",
    },
  },
  vertical: {
    wrapper: {
      base: "lib:h-full",
    },
    track: {
      base: "lib:h-full lib:w-fit",
      main: "lib:h-full",
      filled: "lib:top-unset lib:bottom-0",
    },
    thumb: {
      base:
        "lib:flex-row lib:top-unset lib:left-1/2 lib:transform lib:-translate-x-1/2",
    },
  },
};
