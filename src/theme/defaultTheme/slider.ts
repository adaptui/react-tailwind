export const slider = {
  common: {
    input: "lib:sr-only",
    wrapper: {
      base: "lib:text-gray-800 lib:relative lib:inline-block touch-action-none lib:select-none lib:outline-none",
    },
    track: {
      base: "lib:relative lib:top-0 lib:cursor-pointer",
      main: "lib:bg-gray-300 lib:rounded-full",
      filled:
        "lib:absolute lib:bg-current lib:pointer-events-none lib:rounded-full",
    },
    thumb: {
      base: "lib:absolute lib:z-10 lib:flex lib:items-center lib:bg-white lib:justify-center lib:rounded-full lib:select-none lib:cursor-pointer lib:shadow-thumb lib:text-current lib:focus-within:ring-2 lib:focus-within:ring-current",
      size: {
        sm: "lib:w-3 lib:h-3 lib:text-[0.625rem]",
        md: "lib:w-4 lib:h-4 lib:text-xs",
        lg: "lib:w-5 lib:h-5 lib:text-sm",
      },
    },
    minmax: {
      base: "flex  items-center mt-0.5 justify-between text-xs text-gray-400",
      reversed: "flex-row-reverse",
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
      size: {
        sm: "lib:h-0.5",
        md: "lib:h-1",
        lg: "lib:h-2",
      },
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
      size: {
        sm: "lib:w-0.5",
        md: "lib:w-1",
        lg: "lib:w-2",
      },
    },
    thumb: {
      base: "lib:flex-row lib:top-unset lib:left-1/2 lib:transform lib:-translate-x-1/2",
    },
  },
};
