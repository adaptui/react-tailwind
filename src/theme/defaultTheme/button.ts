export const button = {
  base: {
    common:
      "inline-flex items-center justify-center relative transition-all disabled:cursor-not-allowed outline-none appearance-none select-none whitespace-nowrap align-middle",
    notCollapsed:
      "translate-y-0 hover:-translate-y-px active:translate-y-0 will-change-transform",
  },
  variant: {
    default: {
      solid:
        "bg-base-solid-background-high-contrast-default text-base-solid-text-default border border-transparent",
      subtle:
        "bg-base-subtle-background-default text-base-sublte-text-default border border-transparent",
      outline:
        "bg-base-outline-background-default text-base-outline-text-default border border-base-outline-border-default",
      ghost: "bg-white text-secondary-600 border border-transparent",
    },
    hover: {
      solid: "hover:bg-base-solid-background-high-contrast-hover hover:z-10",
      subtle: "hover:bg-base-subtle-background-hover hover:z-10",
      outline:
        "hover:border-base-outline-border-hover hover:shadow-sm hover:z-10",
      ghost: "hover:bg-secondary-100 hover:z-10",
    },
    active: {
      solid: "active:bg-base-solid-background-high-contrast-active",
      subtle: "active:bg-base-subtle-background-active",
      outline:
        "active:bg-base-outline-background-active active:border-base-outline-border-active",
      ghost: "active:bg-secondary-200",
    },
    focus: {
      solid:
        "focus-visible:ring-3 focus-visible:ring-base-500 focus-visible:z-10",
      subtle:
        "focus-visible:ring-2 focus-visible:ring-base-500 focus-visible:z-10",
      outline:
        "focus-visible:border-secondary-300 focus-visible:!border-r-[1px] focus-visible:ring-2 focus-visible:ring-base-500 focus-visible:z-10",
      ghost:
        "focus-visible:ring-2 focus-visible:ring-secondary-200 focus-visible:z-10",
    },
    disabled: {
      solid:
        "disabled:bg-base-solid-background-high-contrast-disabled disabled:text-base-solid-text-disabled",
      subtle:
        "disabled:bg-base-subtle-background-disabled disabled:text-base-subtle-text-disabled",
      outline:
        "disabled:bg-base-outline-background-disabled disabled:border-secondary-200",
      ghost: "disabled:text-secondary-400",
    },
  },
  size: {
    common: {
      sm: "min-h-[26px] w-auto min-w-[26px] pb-px px-2 rounded-lg text-cxs font-medium",
      md: "min-h-[30px] w-auto min-w-[30px] px-2.5 rounded-lg text-sm font-medium",
      lg: "min-h-9 w-auto min-w-9 px-3 rounded-[10px] text-sm font-medium",
      xl: "min-h-11 w-auto min-w-11 px-4 rounded-xl text-base font-medium",
    },
    iconOnly: {
      base: {
        sm: "min-h-[26px] rounded-lg w-[26px]",
        md: "min-h-[30px] rounded-lg w-[30px]",
        lg: "min-h-9 rounded-[10px] w-9",
        xl: "min-h-11 rounded-xl w-11",
      },
      spinner: {
        sm: "text-base",
        md: "text-base",
        lg: "text-base",
        xl: "text-xl",
      },
    },
    prefix: {
      sm: "text-xs mr-1.5",
      md: "text-xs mr-1.5",
      lg: "text-xs mr-1.5",
      xl: "text-base mr-1.5",
    },
    suffix: {
      sm: "text-xs ml-1.5",
      md: "text-xs ml-1.5",
      lg: "text-xs ml-1.5",
      xl: "text-base ml-1.5",
    },
  },
};
