export const slider = {
  wrapper: {
    default:
      "relative inline-block outline-none select-none touch-none min-w-80 cursor-pointer",
    disabled: "cursor-not-allowed",
  },
  trackWrapper: "relative w-full py-1.5",
  track: "w-full rounded-2xl",
  filledTrack: "absolute -translate-y-1/2 rounded-2xl top-1/2",
  thumbWrapper:
    "absolute top-0 flex flex-col items-center z-10 focus-within:z-20",
  thumbLabel: "",
  thumbContainer: {
    default:
      "flex items-center justify-center rounded-full select-none touch-none cursor-pointer transition-all",
    disabled: "cursor-not-allowed",
  },
  input:
    "sr-only m-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer",
  size: {
    sm: {
      track: "h-0.5",
      filledTrack: "h-0.5",
      thumbWrapper: "7px",
      thumbContainer: "w-3.5 h-3.5",
      input: "w-3.5 h-3.5",
      knobIcon: "text-[10px]",
    },
    md: {
      track: "h-1",
      filledTrack: "h-1",
      thumbWrapper: "8px",
      thumbContainer: "w-4 h-4",
      input: "w-4 h-4",
      knobIcon: "text-[10px]",
    },
    lg: {
      track: "h-2",
      filledTrack: "h-2",
      thumbWrapper: "10px",
      thumbContainer: "w-5 h-5",
      input: "w-5 h-5",
      knobIcon: "text-xs",
    },
    xl: {
      track: "h-2.5",
      filledTrack: "h-2.5",
      thumbWrapper: "12px",
      thumbContainer: "w-6 h-6",
      input: "w-6 h-6",
      knobIcon: "text-base",
    },
  },
  themeColor: {
    base: {
      track: "bg-gray-100",
      filledTrack: "bg-gray-900",
      thumbContainer: {
        default: "bg-white-900 shadow-csm",
        hover: "peer-hover:shadow-knobHover",
        active: "peer-active:shadow-knobActive",
        focus: "peer-focus-visible:shadow-knobFocusBase",
        disabled: "bg-gray-300",
      },
    },
    primary: {
      track: "bg-blue-100",
      filledTrack: "bg-blue-600",
      thumbContainer: {
        default: "bg-white-900 shadow-csm",
        hover: "peer-hover:shadow-knobHover",
        active: "peer-active:shadow-knobActive",
        focus: "peer-focus-visible:shadow-knobFocusPrimary",
        disabled: "bg-gray-300",
      },
    },
  },
};
