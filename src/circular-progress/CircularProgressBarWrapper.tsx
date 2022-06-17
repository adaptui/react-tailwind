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
    ({ state, size, themeColor, hint, ...props }) => {
      const theme = useTheme("circularProgress");
      const className = cx(
        theme.barWrapper.base,
        state?.isIndeterminate ? theme.barWrapper.indeterminate : "",
        size
          ? hint
            ? theme.size[size].barWrapper.hint
            : theme.size[size].barWrapper.base
          : "",
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
