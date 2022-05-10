import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

export const useSpinner = createHook<SpinnerOptions>(
  ({ size = "md", label = "Loading...", stroke = "transparent", ...props }) => {
    const theme = useTheme("spinner");
    const className = cx(
      theme.base,
      theme.size[size],
      theme.stroke[stroke],
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
});

export type SpinnerOptions<T extends As = "div"> = BoxOptions<T> & {
  /**
   * For accessibility, it is important to add a fallback loading text.
   * This text will be visible to screen readers.
   *
   * @default Loading...
   */
  label?: string;

  /**
   * How large should the spinner be?
   *
   * @default md
   */
  size?: keyof Renderlesskit.GetThemeValue<"spinner", "size">;

  /**
   * How the spinner should be displayed?
   *
   * @default transparent
   */
  stroke?: keyof Renderlesskit.GetThemeValue<"spinner", "stroke">;
};

export type SpinnerProps<T extends As = "div"> = Props<SpinnerOptions<T>>;
