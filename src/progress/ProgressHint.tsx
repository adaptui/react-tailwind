import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { ProgressUIProps } from "./ProgressProps";

export const useProgressHint = createHook<ProgressHintOptions>(
  ({ state, size, themeColor, label, hint, ...props }) => {
    const theme = useTheme("progress");
    const className = cx(
      theme.hint,
      size ? theme.size[size]?.hint : "",
      themeColor ? theme.themeColor[themeColor]?.hint : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const ProgressHint = createComponent<ProgressHintOptions>(props => {
  const htmlProps = useProgressHint(props);

  return createElement("div", htmlProps);
});

export type ProgressHintOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<ProgressUIProps> & {};

export type ProgressHintProps<T extends As = "div"> = Props<
  ProgressHintOptions<T>
>;
