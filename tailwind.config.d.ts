// #region Tailwind default config
type DefaultConfig = {
  purge: never[];
  presets: never[];
  darkMode: boolean;
  theme: {
    screens: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
    };
    colors: {
      transparent: string;
      current: string;
      black: any;
      white: any;
      gray: any;
      red: any;
      yellow: any;
      green: any;
      blue: any;
      indigo: any;
      purple: any;
      pink: any;
    };
    spacing: {
      px: string;
      0: string;
      0.5: string;
      1: string;
      1.5: string;
      2: string;
      2.5: string;
      3: string;
      3.5: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      11: string;
      12: string;
      14: string;
      16: string;
      20: string;
      24: string;
      28: string;
      32: string;
      36: string;
      40: string;
      44: string;
      48: string;
      52: string;
      56: string;
      60: string;
      64: string;
      72: string;
      80: string;
      96: string;
    };
    animation: {
      none: string;
      spin: string;
      ping: string;
      pulse: string;
      bounce: string;
    };
    backgroundColor: (theme: any) => any;
    backgroundImage: {
      none: string;
      "gradient-to-t": string;
      "gradient-to-tr": string;
      "gradient-to-r": string;
      "gradient-to-br": string;
      "gradient-to-b": string;
      "gradient-to-bl": string;
      "gradient-to-l": string;
      "gradient-to-tl": string;
    };
    backgroundOpacity: (theme: any) => any;
    backgroundPosition: {
      bottom: string;
      center: string;
      left: string;
      "left-bottom": string;
      "left-top": string;
      right: string;
      "right-bottom": string;
      "right-top": string;
      top: string;
    };
    backgroundSize: {
      auto: string;
      cover: string;
      contain: string;
    };
    borderColor: (theme: any) => any;
    borderOpacity: (theme: any) => any;
    borderRadius: {
      none: string;
      sm: string;
      DEFAULT: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      full: string;
    };
    borderWidth: {
      DEFAULT: string;
      0: string;
      2: string;
      4: string;
      8: string;
    };
    boxShadow: {
      sm: string;
      DEFAULT: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      inner: string;
      none: string;
    };
    container: {};
    cursor: {
      auto: string;
      default: string;
      pointer: string;
      wait: string;
      text: string;
      move: string;
      "not-allowed": string;
    };
    divideColor: (theme: any) => any;
    divideOpacity: (theme: any) => any;
    divideWidth: (theme: any) => any;
    fill: {
      current: string;
    };
    flex: {
      1: string;
      auto: string;
      initial: string;
      none: string;
    };
    flexGrow: {
      0: string;
      DEFAULT: string;
    };
    flexShrink: {
      0: string;
      DEFAULT: string;
    };
    fontFamily: {
      sans: string[];
      serif: string[];
      mono: string[];
    };
    fontSize: {
      xs: (
        | string
        | {
            lineHeight: string;
          }
      )[];
      sm: (
        | string
        | {
            lineHeight: string;
          }
      )[];
      base: (
        | string
        | {
            lineHeight: string;
          }
      )[];
      lg: (
        | string
        | {
            lineHeight: string;
          }
      )[];
      xl: (
        | string
        | {
            lineHeight: string;
          }
      )[];
      "2xl": (
        | string
        | {
            lineHeight: string;
          }
      )[];
      "3xl": (
        | string
        | {
            lineHeight: string;
          }
      )[];
      "4xl": (
        | string
        | {
            lineHeight: string;
          }
      )[];
      "5xl": (
        | string
        | {
            lineHeight: string;
          }
      )[];
      "6xl": (
        | string
        | {
            lineHeight: string;
          }
      )[];
      "7xl": (
        | string
        | {
            lineHeight: string;
          }
      )[];
      "8xl": (
        | string
        | {
            lineHeight: string;
          }
      )[];
      "9xl": (
        | string
        | {
            lineHeight: string;
          }
      )[];
    };
    fontWeight: {
      thin: string;
      extralight: string;
      light: string;
      normal: string;
      medium: string;
      semibold: string;
      bold: string;
      extrabold: string;
      black: string;
    };
    gap: (theme: any) => any;
    gradientColorStops: (theme: any) => any;
    gridAutoColumns: {
      auto: string;
      min: string;
      max: string;
      fr: string;
    };
    gridAutoRows: {
      auto: string;
      min: string;
      max: string;
      fr: string;
    };
    gridColumn: {
      auto: string;
      "span-1": string;
      "span-2": string;
      "span-3": string;
      "span-4": string;
      "span-5": string;
      "span-6": string;
      "span-7": string;
      "span-8": string;
      "span-9": string;
      "span-10": string;
      "span-11": string;
      "span-12": string;
      "span-full": string;
    };
    gridColumnEnd: {
      auto: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      11: string;
      12: string;
      13: string;
    };
    gridColumnStart: {
      auto: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      11: string;
      12: string;
      13: string;
    };
    gridRow: {
      auto: string;
      "span-1": string;
      "span-2": string;
      "span-3": string;
      "span-4": string;
      "span-5": string;
      "span-6": string;
      "span-full": string;
    };
    gridRowStart: {
      auto: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
    };
    gridRowEnd: {
      auto: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
    };
    transformOrigin: {
      center: string;
      top: string;
      "top-right": string;
      right: string;
      "bottom-right": string;
      bottom: string;
      "bottom-left": string;
      left: string;
      "top-left": string;
    };
    gridTemplateColumns: {
      none: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      11: string;
      12: string;
    };
    gridTemplateRows: {
      none: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
    };
    height: (theme: any) => any;
    inset: (
      theme: any,
      {
        negative,
      }: {
        negative: any;
      },
    ) => any;
    keyframes: {
      spin: {
        to: {
          transform: string;
        };
      };
      ping: {
        "75%, 100%": {
          transform: string;
          opacity: string;
        };
      };
      pulse: {
        "50%": {
          opacity: string;
        };
      };
      bounce: {
        "0%, 100%": {
          transform: string;
          animationTimingFunction: string;
        };
        "50%": {
          transform: string;
          animationTimingFunction: string;
        };
      };
    };
    letterSpacing: {
      tighter: string;
      tight: string;
      normal: string;
      wide: string;
      wider: string;
      widest: string;
    };
    lineHeight: {
      none: string;
      tight: string;
      snug: string;
      normal: string;
      relaxed: string;
      loose: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
    };
    listStyleType: {
      none: string;
      disc: string;
      decimal: string;
    };
    margin: (
      theme: any,
      {
        negative,
      }: {
        negative: any;
      },
    ) => any;
    maxHeight: (theme: any) => any;
    maxWidth: (
      theme: any,
      {
        breakpoints,
      }: {
        breakpoints: any;
      },
    ) => any;
    minHeight: {
      0: string;
      full: string;
      screen: string;
    };
    minWidth: {
      0: string;
      full: string;
      min: string;
      max: string;
    };
    objectPosition: {
      bottom: string;
      center: string;
      left: string;
      "left-bottom": string;
      "left-top": string;
      right: string;
      "right-bottom": string;
      "right-top": string;
      top: string;
    };
    opacity: {
      0: string;
      5: string;
      10: string;
      20: string;
      25: string;
      30: string;
      40: string;
      50: string;
      60: string;
      70: string;
      75: string;
      80: string;
      90: string;
      95: string;
      100: string;
    };
    order: {
      first: string;
      last: string;
      none: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      11: string;
      12: string;
    };
    outline: {
      none: string[];
      white: string[];
      black: string[];
    };
    padding: (theme: any) => any;
    placeholderColor: (theme: any) => any;
    placeholderOpacity: (theme: any) => any;
    ringColor: (theme: any) => any;
    ringOffsetColor: (theme: any) => any;
    ringOffsetWidth: {
      0: string;
      1: string;
      2: string;
      4: string;
      8: string;
    };
    ringOpacity: (theme: any) => any;
    ringWidth: {
      DEFAULT: string;
      0: string;
      1: string;
      2: string;
      4: string;
      8: string;
    };
    rotate: {
      "-180": string;
      "-90": string;
      "-45": string;
      "-12": string;
      "-6": string;
      "-3": string;
      "-2": string;
      "-1": string;
      0: string;
      1: string;
      2: string;
      3: string;
      6: string;
      12: string;
      45: string;
      90: string;
      180: string;
    };
    scale: {
      0: string;
      50: string;
      75: string;
      90: string;
      95: string;
      100: string;
      105: string;
      110: string;
      125: string;
      150: string;
    };
    skew: {
      "-12": string;
      "-6": string;
      "-3": string;
      "-2": string;
      "-1": string;
      0: string;
      1: string;
      2: string;
      3: string;
      6: string;
      12: string;
    };
    space: (
      theme: any,
      {
        negative,
      }: {
        negative: any;
      },
    ) => any;
    stroke: {
      current: string;
    };
    strokeWidth: {
      0: string;
      1: string;
      2: string;
    };
    textColor: (theme: any) => any;
    textOpacity: (theme: any) => any;
    transitionDuration: {
      DEFAULT: string;
      75: string;
      100: string;
      150: string;
      200: string;
      300: string;
      500: string;
      700: string;
      1000: string;
    };
    transitionDelay: {
      75: string;
      100: string;
      150: string;
      200: string;
      300: string;
      500: string;
      700: string;
      1000: string;
    };
    transitionProperty: {
      none: string;
      all: string;
      DEFAULT: string;
      colors: string;
      opacity: string;
      shadow: string;
      transform: string;
    };
    transitionTimingFunction: {
      DEFAULT: string;
      linear: string;
      in: string;
      out: string;
      "in-out": string;
    };
    translate: (
      theme: any,
      {
        negative,
      }: {
        negative: any;
      },
    ) => any;
    width: (theme: any) => any;
    zIndex: {
      auto: string;
      0: string;
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
    };
  };
  variantOrder: string[];
  variants: {
    accessibility: string[];
    alignContent: string[];
    alignItems: string[];
    alignSelf: string[];
    animation: string[];
    appearance: string[];
    backgroundAttachment: string[];
    backgroundClip: string[];
    backgroundColor: string[];
    backgroundImage: string[];
    backgroundOpacity: string[];
    backgroundPosition: string[];
    backgroundRepeat: string[];
    backgroundSize: string[];
    borderCollapse: string[];
    borderColor: string[];
    borderOpacity: string[];
    borderRadius: string[];
    borderStyle: string[];
    borderWidth: string[];
    boxShadow: string[];
    boxSizing: string[];
    clear: string[];
    container: string[];
    cursor: string[];
    display: string[];
    divideColor: string[];
    divideOpacity: string[];
    divideStyle: string[];
    divideWidth: string[];
    fill: string[];
    flex: string[];
    flexDirection: string[];
    flexGrow: string[];
    flexShrink: string[];
    flexWrap: string[];
    float: string[];
    fontFamily: string[];
    fontSize: string[];
    fontSmoothing: string[];
    fontStyle: string[];
    fontVariantNumeric: string[];
    fontWeight: string[];
    gap: string[];
    gradientColorStops: string[];
    gridAutoColumns: string[];
    gridAutoFlow: string[];
    gridAutoRows: string[];
    gridColumn: string[];
    gridColumnEnd: string[];
    gridColumnStart: string[];
    gridRow: string[];
    gridRowEnd: string[];
    gridRowStart: string[];
    gridTemplateColumns: string[];
    gridTemplateRows: string[];
    height: string[];
    inset: string[];
    justifyContent: string[];
    justifyItems: string[];
    justifySelf: string[];
    letterSpacing: string[];
    lineHeight: string[];
    listStylePosition: string[];
    listStyleType: string[];
    margin: string[];
    maxHeight: string[];
    maxWidth: string[];
    minHeight: string[];
    minWidth: string[];
    objectFit: string[];
    objectPosition: string[];
    opacity: string[];
    order: string[];
    outline: string[];
    overflow: string[];
    overscrollBehavior: string[];
    padding: string[];
    placeContent: string[];
    placeItems: string[];
    placeSelf: string[];
    placeholderColor: string[];
    placeholderOpacity: string[];
    pointerEvents: string[];
    position: string[];
    resize: string[];
    ringColor: string[];
    ringOffsetColor: string[];
    ringOffsetWidth: string[];
    ringOpacity: string[];
    ringWidth: string[];
    rotate: string[];
    scale: string[];
    skew: string[];
    space: string[];
    stroke: string[];
    strokeWidth: string[];
    tableLayout: string[];
    textAlign: string[];
    textColor: string[];
    textDecoration: string[];
    textOpacity: string[];
    textOverflow: string[];
    textTransform: string[];
    transform: string[];
    transformOrigin: string[];
    transitionDelay: string[];
    transitionDuration: string[];
    transitionProperty: string[];
    transitionTimingFunction: string[];
    translate: string[];
    userSelect: string[];
    verticalAlign: string[];
    visibility: string[];
    whitespace: string[];
    width: string[];
    wordBreak: string[];
    zIndex: string[];
  };
  plugins: never[];
};
// #endregion config

type DefaultTheme = DefaultConfig["theme"];

const T: DefaultConfig & { theme: { extend: DefaultTheme } } = {};

export default T;
