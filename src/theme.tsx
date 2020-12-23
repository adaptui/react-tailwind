const theme = {
  alert: {
    base: "font-sans flex items-center w-full overflow-hidden p-4 bg-blue-50",
    title: "text-gray-800 text-sm leading-4 font-semibold mr-2",
    description: "inline text-gray-600 text-sm leading-4",
    icon: {
      base: "inherit flex-shrink-0 mr-3 w-5 h-5",
      icons: "w-full h-full",
    },
    actionButton: "h-5 bg-transparent px-0",
    status: {
      info: {
        base: "bg-blue-50",
        icon: "text-blue-400",
        actionButton: "text-blue-500",
      },
      success: {
        base: "bg-green-50",
        icon: "text-green-400",
        actionButton: "text-green-500",
      },
      warning: {
        base: "bg-orange-50",
        icon: "text-orange-400",
        actionButton: "text-orange-500",
      },
      error: {
        base: "bg-red-50",
        icon: "text-red-400",
        actionButton: "text-red-500",
      },
      offline: {
        base: "bg-purple-50",
        icon: "text-purple-400",
        actionButton: "text-purple-500",
      },
    },
  },
  button: {
    base:
      "font-sans font-semibold text-white inline-flex items-center justify-center appearance-none rounded-md transition-all relative whitespace-nowrap align-middle outline-none w-auto select-none disabled:cursor-not-allowed disabled:opacity-40",
    prefix: "inherit mr-2",
    suffix: "inherit ml-2",
    spinner: "w-em h-em text-current",
    group: "focus:z-1",
    span: "inline-block cursor-not-allowed",
    variant: {
      primary: "bg-gray-800",
      secondary: "bg-gray-100 text-gray-800",
      link: "text-gray-800",
    },
    size: {
      xs: "h-6 min-w-6 text-xs px-2",
      sm: "h-8 min-w-8 text-sm px-3",
      md: "h-10 min-w-10 text-base px-4",
      lg: "h-12 min-w-12 text-lg px-6",
    },
  },
  buttonGroup: {
    base: "inline-block",
    attached: "collapse-border",
  },
  icon: {
    base:
      "w-em h-em inline-block leading-em flex-shrink-0 text-current align-middle",
  },
  spinner: {
    base:
      "inline-block border-2 border-solid border-current rounded-full animate-spin text-blue-500",
    stroke: {
      transparent: "border-b-transparent border-l-transparent",
      visible: "border-b-gray-200 border-l-gray-200",
    },
    size: {
      xs: "h-3 w-3 ",
      sm: "h-4 w-4 ",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-12 w-12",
    },
  },
  avatar: {
    base:
      "font-sans font-bold inline-flex items-center relative justify-center text-center uppercase text-gray-500 bg-gray-100 fill-current rounded-full ring-2 ring-white",
    image: "rounded-full w-full h-full object-cover",
    group: {
      base: "flex items-center space-x-2",
    },
    badge: {
      base: "absolute",
      position: {
        "top-left": "top-0 left-0",
        "top-right": "top-0 right-0",
        "bottom-right": "bottom-0 right-0",
        "bottom-left": "bottom-0 left-0",
      },
      size: {
        xs: "text-xs h-1.5 w-1.5",
        sm: "text-xs h-2 w-2",
        md: "text-xs h-2 w-2",
        lg: "text-sm h-2.5 w-2.5",
        xl: "text-sm h-3 w-3",
      },
    },
    size: {
      xs: "text-xs h-4 w-4",
      sm: "text-xs h-5 w-5",
      md: "text-xs h-6 w-6",
      lg: "text-sm h-8 w-8",
      xl: "text-sm h-10 w-10",
    },
  },
  badge: {
    base: "font-sans font-medium text-xs rounded-full py-1",
    variants: {
      primary: "text-white bg-gray-800",
      secondary: "text-gray-700 bg-gray-50",
      outline: "bg-white text-gray-800 border border-gray-800",
    },
    size: {
      xs: "text-xs px-2",
      sm: "text-sm px-3",
      md: "text-base px-4",
      lg: "text-lg px-5",
    },
  },
  calendar: {
    base: "font-sans p-3 rounded-md bg-white shadow-lg w-max",
    header: {
      base: "flex justify-between",
      title: "text-sm font-bold text-gray-700",
      button: "text-gray-600 w-16px",
    },
    table: {
      base: "p-4 mt-2",
      head: {
        base: "",
        row: "text-center",
        header: {
          base:
            "text-center rounded-lg text-sm h-8 w-8 min-h-8 min-w-8 text-gray-500 font-light",
          abbr: "",
        },
      },
      body: {
        base: "",
        row: "",
        data: {
          base:
            "text-center rounded-lg text-sm h-8 w-8 min-h-8 min-w-8 focus-within:bg-gray-100 focus-within:text-black aria-selected:text-white aria-selected:bg-blue-400 is-range-selection:bg-blue-100 is-range-selection:rounded-none is-range-selection:text-gray-800 is-range-start:text-white is-range-start:bg-blue-500 is-range-end:text-white is-range-end:bg-blue-500 is-range-start:rounded-l-lg is-range-end:rounded-r-lg",
          button: "p-2 outline-none aria-disabled:text-gray-400",
        },
      },
    },
  },
  datepicker: {
    base:
      "datepicker bg-white w-max rounded-md shadow-sm relative inline-block border border-gray-300",
    container: "flex gap-4 justify-between p-2 pr-4 pl-4 rounded-md",
    segment_field: "flex justify-between gap-1",
    segment: "focus:text-blue-500 focus:outline-none font-mono font-normal",
    trigger:
      "text-gray-700 focus:outline-none focus:text-blue-500 relative inline-block",
    badge: {
      base: "font-sans font-medium text-xs rounded-full py-1",
      variants: {
        primary: "text-white bg-gray-800",
        secondary: "text-gray-700 bg-gray-50",
        outline: "bg-white text-gray-800 border border-gray-800",
      },
      size: {
        xs: "text-xs px-2",
        sm: "text-sm px-3",
        md: "text-base px-4",
        lg: "text-lg px-5",
      },
    },
  },
  tag: {
    base:
      "font-sans font-semibold bg-gray-100 text-gray-800 inline-flex items-center justify-center appearance-none rounded-md transition-all relative whitespace-nowrap align-middle outline-none w-auto select-none disabled:cursor-not-allowed disabled:opacity-40",
    prefix: "flex mr-2",
    suffix: "flex ml-2",
    size: {
      xs: "h-6 min-w-6 text-xs px-2",
      sm: "h-8 min-w-8 text-sm px-3",
      md: "h-10 min-w-10 text-base px-4",
      lg: "h-12 min-w-12 text-lg px-6",
    },
  },
};

export default theme;
