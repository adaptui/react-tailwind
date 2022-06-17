import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { fallbackIcon } from "./__utils";

export const useIcon = createHook<IconOptions>(props => {
  const theme = useTheme();
  const iconStyles = theme.icon.base;

  const className = cx(iconStyles, props.className);

  props = { ...props, "data-testid": "testid-icon", className };

  props = useBox(props);
  /**
   * If you're using an icon library like `react-icons`.
   * Note: anyone passing the `as` prop, should manage the `viewBox` from the external component
   */
  if (props.as && typeof props.path !== "string") {
    return props;
  }

  const _viewBox = props.viewBox ?? fallbackIcon.viewBox;
  const _path = (props.children ?? fallbackIcon.path) as string;

  props = { ...props, viewBox: _viewBox, children: _path };

  return props;
});

export const Icon = createComponent<IconOptions>(props => {
  const htmlProps = useIcon(props);

  return createElement("svg", htmlProps);
});

export type IconOptions<T extends As = "svg"> = BoxOptions<T> & {};

export type IconProps<T extends As = "svg"> = Props<IconOptions<T>>;
