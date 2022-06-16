import { cx } from "ariakit-utils";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";

import { CircularProgressUIProps } from "./CircularProgressProps";

export const useCircularProgressHint = createHook<CircularProgressHintOptions>(
  ({ state, size, themeColor, hint, ...props }) => {
    const theme = useTheme("circularProgress");
    const className = cx(
      theme.hint,
      size ? theme.size[size].hint : "",
      themeColor ? theme.themeColor[themeColor].hint : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const CircularProgressHint =
  createComponent<CircularProgressHintOptions>(props => {
    const htmlProps = useCircularProgressHint(props);

    return createElement("span", htmlProps);
  });

export type CircularProgressHintOptions<T extends As = "span"> = BoxOptions<T> &
  Partial<CircularProgressUIProps> & {};

export type CircularProgressHintProps<T extends As = "span"> = Props<
  CircularProgressHintOptions<T>
>;
