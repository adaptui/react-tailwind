import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxProps, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { CircularProgressUIProps } from "./CircularProgressProps";

export const useCircularProgressBarWrapper =
  createHook<CircularProgressBarWrapperOptions>(
    ({ state, size, hint, ...props }) => {
      const theme = useTheme("circularProgress");
      const className = cx(
        size
          ? hint
            ? theme.barWrapper.hint.size[size]
            : theme.barWrapper.common.size[size]
          : "",
        state?.isIndeterminate ? theme.barWrapper.indeterminate : "",
        props.className,
      );

      props = { viewBox: "0 0 100 100", ...props, className };
      props = useBox(props);

      return props;
    },
  );

export const CircularProgressBarWrapper =
  createComponent<CircularProgressBarWrapperOptions>(props => {
    const htmlProps = useCircularProgressBarWrapper(props);

    return createElement("svg", htmlProps);
  });

export type CircularProgressBarWrapperOptions<T extends As = "svg"> =
  BoxProps<T> & Partial<CircularProgressUIProps> & {};

export type CircularProgressBarWrapperProps<T extends As = "svg"> = Props<
  CircularProgressBarWrapperOptions<T>
>;
