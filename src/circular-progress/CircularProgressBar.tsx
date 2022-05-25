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

export const useCircularProgressBar = createHook<CircularProgressBarOptions>(
  ({ state, size, hint, ...props }) => {
    const determinant = state?.isIndeterminate
      ? undefined
      : (state?.percent ?? 0) * 2.7;
    const strokeDasharray =
      determinant == null ? undefined : `${determinant} ${270 - determinant}`;

    const theme = useTheme("circularProgress");
    const className = cx(
      theme.bar.common,
      state?.isIndeterminate ? theme.bar.indeterminate : "",
      props.className,
    );

    props = {
      viewBox: "0 0 100 100",
      cx: 50,
      cy: 50,
      r: 44,
      fill: "transparent",
      stroke: "currentColor",
      strokeWidth: hint ? "5px" : "10px",
      strokeDashoffset: "62",
      strokeDasharray: strokeDasharray,
      strokeLinecap: "round",
      ...props,
      className,
    };
    props = useBox(props);

    return props;
  },
);

export const CircularProgressBar = createComponent<CircularProgressBarOptions>(
  props => {
    const htmlProps = useCircularProgressBar(props);

    return createElement("circle", htmlProps);
  },
);

export type CircularProgressBarOptions<T extends As = "circle"> = BoxProps<T> &
  Partial<CircularProgressUIProps> & {};

export type CircularProgressBarProps<T extends As = "circle"> = Props<
  CircularProgressBarOptions<T>
>;
