import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

export const useSpinner = createHook<SpinnerOptions>(
  ({
    size = "md",
    themeColor = "base",
    track = "transparent",
    label = "Loading...",
    ...props
  }) => {
    const theme = useTheme("spinner");
    const className = cx(
      theme.base,
      theme.size[size],
      theme.themeColor[themeColor],
      track === "visible"
        ? theme.track[track]?.[themeColor]
        : theme.track.transparent,
      props.className,
    );

    const children = props.children ? (
      props.children
    ) : (
      <>{label ? <span className={theme.label}>{label}</span> : null}</>
    );

    props = { ...props, className, children, "data-testid": "testid-spinner" };
    props = useBox(props);

    return props;
  },
);

export const Spinner = createComponent<SpinnerOptions>(props => {
  const htmlProps = useSpinner(props);

  return createElement("div", htmlProps);
}, "Spinner");

export type SpinnerOptions<T extends As = "div"> = Omit<
  BoxOptions<T>,
  "size"
> & {
  /**
   * How large should the spinner be?
   *
   * @default md
   */
  size?: keyof AdaptUI.GetThemeValue<"spinner", "size">;

  /**
   * How the spinner should be themed?
   *
   * @default base
   */
  themeColor?: keyof AdaptUI.GetThemeValue<"spinner", "themeColor">;

  /**
   * How the spinner should be displayed?
   *
   * @default transparent
   */
  track?: keyof AdaptUI.GetThemeValue<"spinner", "track">;

  /**
   * For accessibility, it is important to add a fallback loading text.
   * This text will be visible to screen readers.
   *
   * @default Loading...
   */
  label?: string;
};

export type SpinnerProps<T extends As = "div"> = Props<SpinnerOptions<T>>;
