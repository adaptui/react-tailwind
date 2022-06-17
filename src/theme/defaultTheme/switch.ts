export const _switch = {
  label: {
    base: "relative inline-flex cursor-pointer align-top",
    disabled: "pointer-events-none",
  },
  input: "peer sr-only",
  icon: {
    base: "relative inline-flex items-center justify-center shrink-0 align-top select-none transition-all peer-children",
    children: "absolute box-border transition-all duration-200",
  },
  text: "flex items-center select-none",
  description: "select-none",
  size: {
    sm: {
      label: "min-h-[26px] px-2 py-[5.5px] rounded-lg",
      icon: {
        base: "h-3.5 w-[22px] rounded-full",
        children: {
          default: " h-2.5 w-2.5 peer-children-active:w-3 top-0.5 rounded-full",
          unChecked: "left-0.5",
          checked: "left-2.5 peer-children-active:-ml-0.5",
        },
      },
      text: "text-cxs font-medium mr-1.5",
      description: "text-paragraph-cxs font-normals mt-1 mr-1.5",
    },
    md: {
      label: "min-h-[30px] px-2.5 py-[7px] rounded-lg",
      icon: {
        base: "h-4 w-[26px] rounded-full",
        children: {
          default: "h-3 w-3 peer-children-active:w-[13px] top-0.5 rounded-full",
          unChecked: "left-0.5",
          checked: "left-3 peer-children-active:-ml-0.5",
        },
      },
      text: "text-sm font-medium mr-2",
      description: "text-paragraph-sm font-normal mt-1.5 mr-2",
    },
    lg: {
      label: "min-h-9 px-3 py-2 rounded-[10px]",
      icon: {
        base: "h-5 w-[34px] rounded-full",
        children: {
          default: "h-4 w-4 peer-children-active:w-[18px] top-0.5 rounded-full",
          unChecked: "left-0.5",
          checked: "left-4 peer-children-active:-ml-0.5",
        },
      },
      text: "text-base font-medium mr-2",
      description: "text-paragraph-sm font-normal mt-2 mr-2",
    },
    xl: {
      label: "min-h-11 px-3 py-2 rounded-xl",
      icon: {
        base: "h-[28px] w-[46px] rounded-full",
        children: {
          default: "h-6 w-6 peer-children-active:w-[26px] top-0.5 rounded-full",
          unChecked: "left-0.5",
          checked: "left-5 peer-children-active:-ml-0.5",
        },
      },
      text: "text-base font-medium mr-2",
      description: "text-paragraph-sm font-normal mt-2 mr-2",
    },
  },
  themeColor: {
    base: {
      default: {
        label: "",
        icon: {
          base: {
            unChecked: "bg-gray-400",
            checked: "bg-gray-900",
          },
          children: {
            unChecked: "bg-white-900",
            checked: "bg-white-900",
          },
        },
        text: "text-gray-800",
        description: "text-gray-600",
      },
      hover: {
        label: "hover:bg-gray-200",
        icon: {
          base: {
            unChecked: "peer-hover:bg-gray-500",
            checked: "peer-hover:bg-gray-800",
          },
          children: { unChecked: "", checked: "" },
        },
        text: "",
        description: "",
      },
      active: {
        label: "",
        icon: {
          base: {
            unChecked: "peer-active:bg-gray-600",
            checked: "peer-active:bg-gray-700",
          },
          children: { unChecked: "", checked: "" },
        },
        text: "",
        description: "",
      },
      focus: {
        label: "focus-within:bg-gray-100",
        icon: {
          base: {
            unChecked:
              "peer-focus-visible:ring-3 peer-focus-visible:ring-gray-500",
            checked:
              "peer-focus-visible:ring-3 peer-focus-visible:ring-gray-500",
          },
          children: { unChecked: "", checked: "" },
        },
        text: "",
        description: "",
      },
      disabled: {
        label: "",
        icon: {
          base: {
            unChecked: "peer-disabled:bg-gray-200",
            checked: "peer-disabled:bg-gray-200",
          },
          children: {
            unChecked: "bg-white-900",
            checked: "bg-white-900",
          },
        },
        text: "text-gray-500",
        description: "text-gray-500",
      },
    },
    primary: {
      default: {
        label: "",
        icon: {
          base: {
            unChecked: "bg-blue-400",
            checked: "bg-blue-600",
          },
          children: {
            unChecked: "bg-white-900",
            checked: "bg-white-900",
          },
        },
        text: "text-gray-800",
        description: "text-gray-600",
      },
      hover: {
        label: "hover:bg-blue-200",
        icon: {
          base: {
            unChecked: "peer-hover:bg-blue-500",
            checked: "peer-hover:bg-blue-700",
          },
          children: { unChecked: "", checked: "" },
        },
        text: "",
        description: "",
      },
      active: {
        label: "",
        icon: {
          base: {
            unChecked: "peer-active:bg-blue-600",
            checked: "peer-active:bg-blue-800",
          },
          children: { unChecked: "", checked: "" },
        },
        text: "",
        description: "",
      },
      focus: {
        label: "focus-within:bg-blue-100",
        icon: {
          base: {
            unChecked:
              "peer-focus-visible:ring-3 peer-focus-visible:ring-blue-500",
            checked:
              "peer-focus-visible:ring-3 peer-focus-visible:ring-blue-500",
          },
          children: { unChecked: "", checked: "" },
        },
        text: "",
        description: "",
      },
      disabled: {
        label: "",
        icon: {
          base: {
            unChecked: "peer-disabled:bg-blue-100",
            checked: "peer-disabled:bg-blue-100",
          },
          children: {
            unChecked: "bg-white-900",
            checked: "bg-white-900",
          },
        },
        text: "text-gray-500",
        description: "text-gray-500",
      },
    },
  },
};
