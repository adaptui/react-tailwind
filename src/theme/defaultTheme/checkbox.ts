export const checkbox = {
  label: {
    base: "relative inline-flex cursor-pointer align-top",
    disabled: "pointer-events-none",
    showMore: { vertical: "flex w-full", horizontal: "flex" },
  },
  input: "peer sr-only",
  icon: "inline-flex items-center justify-center shrink-0 align-top select-none transition-all",
  text: "select-none",
  description: "select-none",
  size: {
    sm: {
      label: "min-h-[26px] px-2 py-[5.5px] rounded-lg",
      icon: "w-3.5 h-3.5 text-[10px] border-[1.5px] rounded",
      text: "text-cxs font-medium ml-1.5",
      description: "text-paragraph-cxs font-normals mt-1 ml-1.5",
    },
    md: {
      label: "min-h-[30px] px-2.5 py-[7px] rounded-lg",
      icon: "w-4 h-4 text-[10px] border-[1.5px] rounded",
      text: "text-sm font-medium ml-2",
      description: "text-paragraph-sm font-normal mt-1.5 ml-2",
    },
    lg: {
      label: "min-h-9 px-3 py-2 rounded-[10px]",
      icon: "w-5 h-5 text-[16px] border-[1.5px] rounded",
      text: "text-base font-medium ml-2",
      description: "text-paragraph-sm font-normal mt-2 ml-2",
    },
  },
  themeColor: {
    base: {
      default: {
        label: "",
        icon: {
          unChecked: "bg-white-50 border-gray-500 text-current",
          checked: "bg-gray-900 border-gray-900 text-white-900",
          indeterminate: "bg-gray-900 border-gray-900 text-white-900",
        },
        text: "text-gray-800",
        description: "text-gray-600",
      },
      hover: {
        label: "hover:bg-gray-200",
        icon: {
          unChecked: "peer-hover:border-gray-600",
          checked: "peer-hover:bg-gray-800 peer-hover:border-gray-800",
          indeterminate: "peer-hover:bg-gray-800 peer-hover:border-gray-800",
        },
        text: "",
        description: "",
      },
      active: {
        label: "",
        icon: {
          unChecked: "peer-active:bg-gray-300 peer-active:border-gray-600",
          checked: "peer-active:bg-gray-700 peer-active:border-gray-700",
          indeterminate: "peer-active:bg-gray-700 peer-active:border-gray-700",
        },
        text: "",
        description: "",
      },
      focus: {
        label: "focus-within:bg-gray-100",
        icon: {
          unChecked:
            "peer-focus-visible:ring-3 peer-focus-visible:ring-grayDark-600 peer-focus-visible:border-transparent",
          checked:
            "peer-focus-visible:ring-3 peer-focus-visible:ring-gray-500 ",
          indeterminate:
            "peer-focus-visible:ring-3 peer-focus-visible:ring-gray-500",
        },
        text: "",
        description: "",
      },
      disabled: {
        label: "",
        icon: {
          unChecked: "peer-disabled:bg-gray-100 peer-disabled:border-gray-400",
          checked:
            "peer-disabled:bg-gray-200 peer-disabled:border-gray-200 peer-disabled:text-gray-500",
          indeterminate:
            "peer-disabled:bg-gray-200 peer-disabled:border-gray-200 peer-disabled:text-gray-500",
        },
        text: "text-gray-500",
        description: "text-gray-500",
      },
    },
    primary: {
      default: {
        label: "",
        icon: {
          unChecked: "bg-white-50 border-blue-500 text-current",
          checked: "bg-blue-600 border-blue-600 text-white-900",
          indeterminate: "bg-blue-600 border-blue-600 text-white-900",
        },
        text: "text-gray-800",
        description: "text-gray-600",
      },
      hover: {
        label: "hover:bg-blue-200",
        icon: {
          unChecked: "peer-hover:border-blue-600",
          checked: "peer-hover:bg-blue-700 peer-hover:border-blue-700",
          indeterminate: "peer-hover:bg-blue-700 peer-hover:border-blue-700",
        },
        text: "",
        description: "",
      },
      active: {
        label: "",
        icon: {
          unChecked: "peer-active:bg-blue-300 peer-active:border-blue-600",
          checked: "peer-active:bg-blue-800 peer-active:border-blue-800",
          indeterminate: "peer-active:bg-blue-800 peer-active:border-blue-800",
        },
        text: "",
        description: "",
      },
      focus: {
        label: "focus-within:bg-blue-100",
        icon: {
          unChecked:
            "peer-focus-visible:ring-3 peer-focus-visible:ring-blue-600 peer-focus-visible:border-transparent",
          checked:
            "peer-focus-visible:ring-3 peer-focus-visible:ring-blue-500 ",
          indeterminate:
            "peer-focus-visible:ring-3 peer-focus-visible:ring-blue-500",
        },
        text: "",
        description: "",
      },
      disabled: {
        label: "",
        icon: {
          unChecked: "peer-disabled:bg-blue-100 peer-disabled:border-blue-400",
          checked:
            "peer-disabled:bg-blue-100 peer-disabled:border-blue-100 peer-disabled:text-blue-500",
          indeterminate:
            "peer-disabled:bg-blue-100 peer-disabled:border-blue-100 peer-disabled:text-blue-500",
        },
        text: "text-gray-500",
        description: "text-gray-500",
      },
    },
    danger: {
      default: {
        label: "",
        icon: {
          unChecked: "bg-white-50 border-red-500 text-current",
          checked: "bg-red-600 border-red-600 text-white-900",
          indeterminate: "bg-red-600 border-red-600 text-white-900",
        },
        text: "text-gray-800",
        description: "text-gray-600",
      },
      hover: {
        label: "hover:bg-red-200",
        icon: {
          unChecked: "peer-hover:border-red-600",
          checked: "peer-hover:bg-red-700 peer-hover:border-red-700",
          indeterminate: "peer-hover:bg-red-700 peer-hover:border-red-700",
        },
        text: "",
        description: "",
      },
      active: {
        label: "",
        icon: {
          unChecked: "peer-active:bg-red-300 peer-active:border-red-600",
          checked: "peer-active:bg-red-800 peer-active:border-red-800",
          indeterminate: "peer-active:bg-red-800 peer-active:border-red-800",
        },
        text: "",
        description: "",
      },
      focus: {
        label: "focus-within:bg-red-100",
        icon: {
          unChecked:
            "peer-focus-visible:ring-3 peer-focus-visible:ring-red-600 peer-focus-visible:border-transparent",
          checked: "peer-focus-visible:ring-3 peer-focus-visible:ring-red-500 ",
          indeterminate:
            "peer-focus-visible:ring-3 peer-focus-visible:ring-red-500",
        },
        text: "",
        description: "",
      },
      disabled: {
        label: "",
        icon: {
          unChecked: "peer-disabled:bg-red-100 peer-disabled:border-red-400",
          checked:
            "peer-disabled:bg-red-100 peer-disabled:border-red-100 peer-disabled:text-red-500",
          indeterminate:
            "peer-disabled:bg-red-100 peer-disabled:border-red-100 peer-disabled:text-red-500",
        },
        text: "text-gray-500",
        description: "text-gray-500",
      },
    },
  },
  group: {
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
    vertical: "flex flex-col items-start",
    horizontal: "flex flex-row w-fit",
    showMore: {
      button: {
        common: { vertical: "justify-start w-full", horizontal: "min-w-max" },
        expanded: { vertical: "!mt-0", horizontal: "!ml-0" },
      },
      content: {
        vertical: "flex flex-col space-y-2 w-full",
        horizontal: "flex flex-row space-x-2",
      },
    },
  },
};
