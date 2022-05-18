import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

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

const fallbackIcon = {
  path: (
    <g stroke="currentColor" strokeWidth="1.5">
      <path
        fill="none"
        strokeLinecap="round"
        d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      />
      <path
        fill="currentColor"
        strokeLinecap="round"
        d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      />
      <circle fill="none" strokeMiterlimit="10" cx="12" cy="12" r="11.25" />
    </g>
  ),
  viewBox: "0 0 24 24",
};
