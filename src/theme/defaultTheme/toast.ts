export const toast = {
  // Base Alert Styles
  base: "flex shadow-lg py-2 px-3 rounded-md w-full",
  content: {
    base: "flex w-full transition-opacity",
    show: "opacity-100",
    hide: "opacity-0",
  },
  icon: "inline-flex box-content shrink-0 mr-2 w-4 h-4 py-0.5",
  body: {
    base: "flex flex-col text-sm flex-wrap mr-2",
    title: "font-medium",
    description: "mt-0.5",
  },
  actions: {
    base: "space-x-2 ml-auto flex items-center",
    button: {
      solid: "bg-white hover:bg-white active:bg-white",
      subtle: "text-white",
      ghost: "bg-transparent text-white hover:bg-white active:bg-white",
    },
  },

  // Types
  success: {
    base: "bg-gray-800 text-white",
    body: { description: "text-gray-300" },
    actions: {
      button: {
        solid: "text-gray-800",
        subtle: "bg-gray-700 hover:bg-gray-700 active:bg-gray-700",
        ghost: "hover:text-gray-800",
      },
    },
  },
  info: {
    base: "bg-blue-600 text-white",
    body: { description: "text-blue-300" },
    actions: {
      button: {
        solid: "text-blue-800",
        subtle: "bg-blue-700 hover:bg-blue-700 active:bg-blue-700",
        ghost: "hover:text-blue-800",
      },
    },
  },
  warning: {
    base: "bg-orange-500 text-white",
    body: { description: "text-orange-300" },
    actions: {
      button: {
        solid: "text-orange-800",
        subtle: "bg-orange-700 hover:bg-oranger-700 active:bg-oranger-700",
        ghost: "hover:text-orange-800",
      },
    },
  },
  error: {
    base: "bg-red-600 text-white",
    body: { description: "text-red-300" },
    actions: {
      button: {
        solid: "text-red-800",
        subtle: "bg-red-700 hover:bg-red-700 active:bg-red-700",
        ghost: "hover:text-red-800",
      },
    },
  },

  // Default string content styles
  default: "flex shadow-lg bg-gray-800 py-2 px-3 text-white rounded-md w-full",

  // Container Vercel Toast animation styles
  container: {
    base: "fixed z-50 sm:max-w-xs max-w-[90vw] transition-all duration-300",
    notHovered: "",
    hovered: "",
  },
  animationWrapper: {
    base: "absolute sm:w-80 w-[90vw] transition-all duration-300 transform-gpu",
    notVisible: "",
    visible: "",
  },
  hoverWrapper: "flex transition-all duration-300",
  fill: "absolute left-0 right-0 w-full h-full bg-transparent",

  // Placements
  bottom: {
    container: {
      base: "",
      notHovered: "bottom-2.5",
      hovered: "bottom-5",
    },
    animationWrapper: {
      base: "bottom-0",
      notVisible: "translate-y-20 opacity-0",
      visible: "translate-y-0 opacity-100",
    },
    fill: "top-full",

    left: {
      container: {
        base: "left-5",
      },
      animationWrapper: {
        base: "left-0",
      },
    },

    center: {
      container: {
        base: "right-0 left-[50%] transform translate-x-[-50%]",
      },
      animationWrapper: {
        base: "left-[50%] transform translate-x-[-50%]",
      },
    },

    right: {
      container: {
        base: "right-5",
      },
      animationWrapper: {
        base: "right-0",
      },
    },
  },

  top: {
    container: {
      base: "",
      notHovered: "top-2.5",
      hovered: "top-5",
    },
    animationWrapper: {
      base: "top-0",
      notVisible: "-translate-y-20 opacity-0",
      visible: "translate-y-0 opacity-100",
    },
    fill: "bottom-full",

    left: {
      container: {
        base: "left-5",
      },
      animationWrapper: {
        base: "left-0",
      },
    },

    center: {
      container: {
        base: "right-0 left-[50%] transform translate-x-[-50%]",
      },
      animationWrapper: {
        base: "left-[50%] transform translate-x-[-50%]",
      },
    },

    right: {
      container: {
        base: "right-5",
      },
      animationWrapper: {
        base: "right-0",
      },
    },
  },
};
