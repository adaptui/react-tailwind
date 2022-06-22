export const radioGroup = {
  vertical: "flex flex-col items-start",
  horizontal: "flex flex-row w-fit",
  size: {
    sm: {
      vertical: "space-y-1",
      horizontal: "space-x-1",
    },
    md: {
      vertical: "space-y-1",
      horizontal: "space-x-1",
    },
    lg: {
      vertical: "space-y-1",
      horizontal: "space-x-1",
    },
  },
  showMore: {
    button: {
      common: {
        vertical: "justify-start w-full",
        horizontal: "min-w-max",
      },
      expanded: { vertical: "!mt-0", horizontal: "!ml-0" },
      lg: "min-h-9 rounded-[10px]",
    },
    content: {
      vertical: "flex flex-col space-y-2 w-full",
      horizontal: "flex flex-row space-x-2",
    },
  },
};
