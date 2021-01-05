const theme = {
  alert: {
    base:
      "def:font-sans def:flex def:items-center def:w-full def:overflow-hidden def:p-4 def:bg-blue-50",
    title:
      "def:text-gray-800 def:text-sm def:leading-4 def:font-semibold def:mr-2",
    description: "def:inline def:text-gray-600 def:text-sm def:leading-4",
    icon: {
      base: "def:inherit def:flex-shrink-0 def:mr-3 def:w-5 def:h-5",
      icons: "def:w-full def:h-full",
    },
    actionButton: "def:h-5 def:bg-transparent def:px-0",
    status: {
      info: {
        base: "def:bg-blue-50 ",
        icon: "def:text-blue-400",
        actionButton: "def:text-blue-500",
      },
      success: {
        base: "def:bg-green-50",
        icon: "def:text-green-400",
        actionButton: "def:text-green-500",
      },
      warning: {
        base: "def:bg-orange-50",
        icon: "def:text-orange-400",
        actionButton: "def:text-orange-500",
      },
      error: {
        base: "def:bg-red-50",
        icon: "def:text-red-400",
        actionButton: "def:text-red-500",
      },
      offline: {
        base: "def:bg-purple-50",
        icon: "def:text-purple-400",
        actionButton: "def:text-purple-500",
      },
    },
  },
  button: {
    base:
      "def:font-sans def:font-semibold def:text-white def:inline-flex def:items-center def:justify-center def:appearance-none def:rounded-md def:transition-all def:relative def:whitespace-nowrap def:align-middle def:outline-none def:w-auto def:select-none def-disabled:cursor-not-allowed disabled:cursor-not-allowed def-disabled:opacity-40",
    prefix: "def:inherit def:mr-2",
    suffix: "def:inherit def:ml-2",
    spinner: "def:w-em def:h-em text-current",
    group: "focus:z-1",
    span: "def:inline-block def:cursor-not-allowed",
    iconButton: "def:px-0",
    variant: {
      primary: "def:bg-blue-500",
      secondary: "def:bg-gray-100 def:text-gray-800",
      link: "def:text-gray-800",
    },
    size: {
      xs: "def:h-6 def:min-w-6 def:text-xs def:px-2",
      sm: "def:h-8 def:min-w-8 def:text-sm def:px-3",
      md: "def:h-10 def:min-w-10 def:text-base def:px-4",
      lg: "def:h-12 def:min-w-12 def:text-lg def:px-6",
    },
  },
  buttonGroup: {
    base: "def:inline-block",
    attached: "def:collapse-border",
  },
  icon: {
    base:
      "def:w-em def:h-em def:inline-block def:leading-em def:flex-shrink-0 def:text-current def:align-middle",
  },
  spinner: {
    base:
      "def:inline-block def:border-2 def:border-solid def:border-current def:rounded-full def:animate-spin def:text-blue-500",
    stroke: {
      transparent: "def:border-b-transparent def:border-l-transparent",
      visible: "def:border-b-gray-200 def:border-l-gray-200",
    },
    size: {
      xs: "def:h-3 def:w-3 ",
      sm: "def:h-4 def:w-4 ",
      md: "def:h-6 def:w-6",
      lg: "def:h-8 def:w-8",
      xl: "def:h-12 def:w-12",
    },
  },
  avatar: {
    base:
      "def:font-sans def:font-bold def:inline-flex def:items-center def:relative def:justify-center def:text-center def:uppercase def:text-gray-500 def:bg-gray-100 def:fill-current def:rounded-full def:ring-2 def:ring-white",
    image: "def:rounded-full def:w-full def:h-full def:object-cover",
    group: {
      base: "def:flex def:items-center def:space-x-2",
    },
    badge: {
      base: "def:absolute",
      position: {
        "top-left": "def:top-0 def:left-0",
        "top-right": "def:top-0 def:right-0",
        "bottom-right": "def:bottom-0 def:right-0",
        "bottom-left": "def:bottom-0 def:left-0",
      },
      size: {
        xs: "def:text-xs def:h-1.5 def:w-1.5",
        sm: "def:text-xs def:h-2 def:w-2",
        md: "def:text-xs def:h-2 def:w-2",
        lg: "def:text-sm def:h-2.5 def:w-2.5",
        xl: "def:text-sm def:h-3 def:w-3",
      },
    },
    size: {
      xs: "def:text-xs def:h-4 def:w-4",
      sm: "def:text-xs def:h-5 def:w-5",
      md: "def:text-xs def:h-6 def:w-6",
      lg: "def:text-sm def:h-8 def:w-8",
      xl: "def:text-sm def:h-10 def:w-10",
    },
  },
  badge: {
    base: "def:font-sans def:font-medium def:text-xs def:rounded-full def:py-1",
    variants: {
      primary: "def:text-white def:bg-gray-800",
      secondary: "def:text-gray-700 def:bg-gray-50",
      outline: "def:bg-white def:text-gray-800 def:border def:border-gray-800",
    },
    size: {
      xs: "def:text-xs def:px-2",
      sm: "def:text-sm def:px-3",
      md: "def:text-base def:px-4",
      lg: "def:text-lg def:px-5",
    },
  },
  calendar: {
    base:
      "def:font-sans def:p-3 def:rounded-md def:bg-white def:shadow-lg def:w-max",
    header: {
      base: "def:flex def:justify-between",
      title: "def:text-sm def:font-bold def:text-gray-700",
      button: "def:text-gray-600 def:w-16px",
    },
    table: {
      base: "def:p-4 def:mt-2",
      head: {
        base: "",
        row: "def:text-center",
        header: {
          base:
            "def:text-center def:rounded-lg def:text-sm def:h-8 def:w-8 def:min-h-8 def:min-w-8 def:text-gray-500 def:font-light",
          abbr: "",
        },
      },
      body: {
        base: "",
        row: "",
        data: {
          base:
            "def:text-center def:rounded-lg def:text-sm def:h-8 def:w-8 def:min-h-8 def:min-w-8 focus-within:bg-gray-100 focus-within:text-black aria-selected:text-white aria-selected:bg-blue-400 is-range-selection:bg-blue-100 is-range-selection:rounded-none is-range-selection:text-gray-800 is-range-start:text-white is-range-start:bg-blue-500 is-range-end:text-white is-range-end:bg-blue-500 is-range-start:rounded-l-lg is-range-end:rounded-r-lg",
          button: "def:p-2 def:outline-none aria-disabled:text-gray-400",
        },
      },
    },
  },
  datepicker: {
    base:
      "datepicker def:bg-white def:w-max def:rounded-md def:shadow-sm def:relative def:inline-block def:border def:border-gray-300",
    container:
      "def:flex def:gap-4 def:justify-between def:p-2 def:pr-4 def:pl-4 def:rounded-md",
    segment_field: "def:flex def:justify-between def:gap-1",
    segment:
      "focus:text-blue-500 focus:outline-none def:font-mono def:font-normal",
    trigger:
      "def:text-gray-700 focus:outline-none focus:text-blue-500 def:relative def:inline-block",
    badge: {
      base:
        "def:font-sans def:font-medium def:text-xs def:rounded-full def:py-1",
      variants: {
        primary: "def:text-white def:bg-gray-800",
        secondary: "def:text-gray-700 def:bg-gray-50",
        outline:
          "def:bg-white def:text-gray-800 def:border def:border-gray-800",
      },
      size: {
        xs: "def:text-xs def:px-2",
        sm: "def:text-sm def:px-3",
        md: "def:text-base def:px-4",
        lg: "def:text-lg def:px-5",
      },
    },
  },
  tag: {
    base:
      "def:font-sans def:font-semibold def:bg-gray-100 def:text-gray-800 def:inline-flex def:items-center def:justify-center def:appearance-none def:rounded-md def:transition-all def:relative def:whitespace-nowrap def:align-middle def:outline-none def:w-auto def:select-none disabled:cursor-not-allowed disabled:opacity-40",
    prefix: "def:flex def:mr-2",
    suffix: "def:flex def:ml-2",
    size: {
      xs: "def:h-6 def:min-w-6 def:text-xs def:px-2",
      sm: "def:h-8 def:min-w-8 def:text-sm def:px-3",
      md: "def:h-10 def:min-w-10 def:text-base def:px-4",
      lg: "def:h-12 def:min-w-12 def:text-lg def:px-6",
    },
  },
};

export default theme;
