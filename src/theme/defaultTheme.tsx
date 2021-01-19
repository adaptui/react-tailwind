const theme = {
  alert: {
    base:
      "lib:font-sans lib:flex lib:items-center lib:w-full lib:overflow-hidden lib:p-4",
    title:
      "lib:text-gray-800 lib:text-sm lib:leading-4 lib:font-semibold lib:mr-2",
    description: "lib:inline lib:text-gray-600 lib:text-sm lib:leading-4",
    icon: {
      base: "lib:inherit lib:flex-shrink-0 lib:mr-3 lib:w-5 lib:h-5",
      icons: "lib:w-full lib:h-full",
    },
    actionButton: "lib:h-5 bg-transparent lib:px-0",
    status: {
      info: {
        base: "lib:bg-blue-50 ",
        icon: "lib:text-blue-400",
        actionButton: "lib:text-blue-500",
      },
      success: {
        base: "lib:bg-green-50",
        icon: "lib:text-green-400",
        actionButton: "lib:text-green-500",
      },
      warning: {
        base: "lib:bg-orange-50",
        icon: "lib:text-orange-400",
        actionButton: "lib:text-orange-500",
      },
      error: {
        base: "lib:bg-red-50",
        icon: "lib:text-red-400",
        actionButton: "lib:text-red-500",
      },
      offline: {
        base: "lib:bg-purple-50",
        icon: "lib:text-purple-400",
        actionButton: "lib:text-purple-500",
      },
    },
  },
  button: {
    span: "lib:inline-block lib:cursor-not-allowed",
    base:
      "lib:inline-flex lib:items-center lib:justify-center lib:outline-none lib:appearance-none lib:transition-all lib:whitespace-nowrap lib:align-middle lib:select-none lib:disabled:cursor-not-allowed lib:disabled:opacity-40",
    variant: {
      primary: "lib:bg-gray-800 lib:text-white",
      secondary: "lib:bg-gray-100 lib:text-gray-800",
      outline: "lib:text-gray-800 lib:border lib:border-gray-300",
      ghost: "lib:text-gray-800 lib:hover:bg-gray-100",
    },
    size: {
      xs:
        "lib:h-6 lib:w-auto lib:min-w-6 lib:px-2 lib:text-xs lib:font-medium lib:rounded-md lib:shadow-sm",
      sm:
        "lib:h-8 lib:w-auto lib:min-w-8 lib:px-3 lib:text-sm lib:font-medium lib:rounded-md lib:shadow-sm",
      lg:
        "lib:h-10 lib:w-auto lib:min-w-10 lib:px-4 lib:text-sm lib:font-medium lib:rounded-lg lib:shadow-sm",
      xl:
        "lib:h-12 lib:w-auto lib:min-w-12 lib:px-4 lib:text-base lib:font-medium lib:rounded-lg lib:shadow-sm",
    },
    prefix: {
      xs: "lib:inherit lib:mr-1.5",
      sm: "lib:inherit lib:mr-2",
      lg: "lib:inherit lib:mr-2",
      xl: "lib:inherit lib:mr-2",
    },
    suffix: {
      xs: "lib:inherit lib:ml-1.5",
      sm: "lib:inherit lib:ml-2",
      lg: "lib:inherit lib:ml-2",
      xl: "lib:inherit lib:ml-2",
    },
    spinner: "lib:w-em lib:h-em text-current",
    group: "lib:focus:z-1 lib:-mr-px lib:shadow-none",
  },
  // We can reduce the repeated classes once we seperate these
  iconButton: {
    span: "lib:inline-block lib:cursor-not-allowed",
    base:
      "lib:inline-flex lib:items-center lib:justify-center lib:outline-none lib:appearance-none lib:transition-all lib:whitespace-nowrap lib:align-middle lib:select-none lib:disabled:cursor-not-allowed lib:disabled:opacity-40",
    variant: {
      primary: "lib:bg-gray-800 lib:text-white",
      secondary: "lib:bg-gray-100 lib:text-gray-800",
      outline: "lib:text-gray-800 lib:border lib:border-gray-300",
      ghost: "lib:text-gray-800 lib:hover:bg-gray-100",
    },
    size: {
      xs:
        "lib:h-6 lib:w-auto lib:min-w-6 lib:text-xs lib:rounded-md lib:shadow-sm",
      sm:
        "lib:h-8 lib:w-auto lib:min-w-8 lib:text-base lib:rounded-md lib:shadow-sm",
      lg:
        "lib:h-10 lib:w-auto lib:min-w-10 lib:text-base lib:rounded-lg lib:shadow-sm",
      xl:
        "lib:h-12 lib:w-auto lib:min-w-12 lib:text-base lib:rounded-lg lib:shadow-sm",
    },
    group: "lib:focus:z-1",
  },
  buttonGroup: {
    base: "lib:inline-block lib:shadow-sm lib:rounded-lg",
    attached: "lib:collapse-border",
  },
  icon: {
    base:
      "lib:w-em lib:h-em lib:inline-block lib:leading-em lib:flex-shrink-0 lib:text-current lib:align-middle",
  },
  spinner: {
    base:
      "lib:inline-block lib:border-2 lib:border-solid lib:border-current lib:rounded-full lib:animate-spin lib:text-blue-500",
    stroke: {
      transparent: "lib:border-b-transparent lib:border-l-transparent",
      visible: "lib:border-b-gray-200 lib:border-l-gray-200",
    },
    size: {
      xs: "lib:h-3 lib:w-3 ",
      sm: "lib:h-4 lib:w-4 ",
      md: "lib:h-6 lib:w-6",
      lg: "lib:h-8 lib:w-8",
      xl: "lib:h-12 lib:w-12",
    },
  },
  avatar: {
    base:
      "lib:font-sans lib:font-bold lib:inline-flex lib:items-center lib:relative lib:justify-center lib:text-center lib:uppercase lib:text-gray-500 lib:bg-gray-100 lib:fill-current lib:rounded-full lib:ring-2 lib:ring-white",
    image: "lib:rounded-full lib:w-full lib:h-full lib:object-cover",
    group: {
      base: "lib:flex lib:items-center lib:space-x-2",
    },
    badge: {
      base: "lib:absolute",
      position: {
        "top-left": "lib:top-0 lib:left-0",
        "top-right": "lib:top-0 lib:right-0",
        "bottom-right": "lib:bottom-0 lib:right-0",
        "bottom-left": "lib:bottom-0 lib:left-0",
      },
      size: {
        xs: "lib:text-xs lib:h-1.5 lib:w-1.5",
        sm: "lib:text-xs lib:h-2 lib:w-2",
        md: "lib:text-xs lib:h-2 lib:w-2",
        lg: "lib:text-sm lib:h-2.5 lib:w-2.5",
        xl: "lib:text-sm lib:h-3 lib:w-3",
      },
    },
    size: {
      xs: "lib:text-xs lib:h-4 lib:w-4",
      sm: "lib:text-xs lib:h-5 lib:w-5",
      md: "lib:text-xs lib:h-6 lib:w-6",
      lg: "lib:text-sm lib:h-8 lib:w-8",
      xl: "lib:text-sm lib:h-10 lib:w-10",
    },
  },
  badge: {
    base: "lib:font-sans lib:font-medium lib:text-xs lib:rounded-full lib:py-1",
    variants: {
      primary: "lib:text-white lib:bg-gray-800",
      secondary: "lib:text-gray-700 lib:bg-gray-50",
      outline: "lib:bg-white lib:text-gray-800 lib:border lib:border-gray-800",
    },
    size: {
      xs: "lib:text-xs lib:px-2",
      sm: "lib:text-sm lib:px-3",
      md: "lib:text-base lib:px-4",
      lg: "lib:text-lg lib:px-5",
    },
  },
  calendar: {
    base:
      "lib:font-sans lib:p-3 lib:rounded-md lib:bg-white lib:shadow-lg lib:w-max",
    header: {
      base: "lib:flex lib:justify-between",
      title: "lib:text-sm lib:font-bold lib:text-gray-700",
      button: "lib:text-gray-600 lib:w-16px",
    },
    table: {
      base: "lib:p-4 lib:mt-2",
      head: {
        base: "",
        row: "lib:text-center",
        header: {
          base:
            "lib:text-center lib:rounded-lg lib:text-sm lib:h-8 lib:w-8 lib:min-h-8 lib:min-w-8 lib:text-gray-500 lib:font-light",
          abbr: "",
        },
      },
      body: {
        base: "",
        row: "",
        data: {
          base:
            "lib:text-center lib:rounded-lg lib:text-sm lib:h-8 lib:w-8 lib:min-h-8 lib:min-w-8 lib:focus-within:bg-gray-100 lib:focus-within:text-black lib:aria-selected:text-white lib:aria-selected:bg-blue-400 lib:is-range-selection:bg-blue-100 lib:is-range-selection:rounded-none lib:is-range-selection:text-gray-800 lib:is-selection-start:text-white lib:is-selection-start:bg-blue-500 lib:is-selection-end:text-white lib:is-selection-end:bg-blue-500 lib:is-selection-start:rounded-l-lg lib:is-selection-end:rounded-r-lg",
          button: "lib:p-2 lib:outline-none lib:aria-disabled:text-gray-400",
        },
      },
    },
  },
  datepicker: {
    base:
      "datepicker lib:bg-white lib:w-max lib:rounded-md lib:shadow-sm lib:relative lib:inline-block lib:border lib:border-gray-300",
    container:
      "lib:flex lib:gap-4 lib:justify-between lib:p-2 lib:pr-4 lib:pl-4 lib:rounded-md",
    segment_field: "lib:flex lib:justify-between lib:gap-1",
    segment:
      "lib:focus:text-blue-500 lib:focus:outline-none lib:font-mono lib:font-normal",
    trigger:
      "lib:text-gray-700 lib:focus:outline-none focus:text-blue-500 lib:relative lib:inline-block",
    badge: {
      base:
        "lib:font-sans lib:font-medium lib:text-xs lib:rounded-full lib:py-1",
      variants: {
        primary: "lib:text-white lib:bg-gray-800",
        secondary: "lib:text-gray-700 lib:bg-gray-50",
        outline:
          "lib:bg-white lib:text-gray-800 lib:border lib:border-gray-800",
      },
      size: {
        xs: "lib:text-xs lib:px-2",
        sm: "lib:text-sm lib:px-3",
        md: "lib:text-base lib:px-4",
        lg: "lib:text-lg lib:px-5",
      },
    },
  },
  tag: {
    base:
      "lib:font-sans lib:font-semibold lib:bg-gray-100 lib:text-gray-800 lib:inline-flex lib:items-center lib:justify-center lib:appearance-none lib:rounded-md lib:transition-all lib:relative lib:whitespace-nowrap lib:align-middle lib:outline-none lib:w-auto lib:select-none lib:disabled:cursor-not-allowed lib:disabled:opacity-40",
    prefix: "lib:flex lib:mr-2",
    suffix: "lib:flex lib:ml-2",
    size: {
      xs: "lib:h-6 lib:min-w-6 lib:text-xs lib:px-2",
      sm: "lib:h-8 lib:min-w-8 lib:text-sm lib:px-3",
      lg: "lib:h-10 lib:min-w-10 lib:text-base lib:px-4 lib:rounded-lg",
    },
  },
  checkbox: {
    label:
      "lib:relative lib:inline-flex lib:items-center lib:font-sans lib:align-top lib:cursor-pointer",
    input:
      "lib:absolute lib:top-0 lib:w-full lib:h-full lib:p-0 lib:m-0 lib:overflow-visible lib:opacity-0 lib:z-1",
  },
};

export default theme;
