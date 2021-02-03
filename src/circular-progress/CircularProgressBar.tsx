import * as React from "react";
import { cx, ProgressStateReturn } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { CircularProgressProps } from "./CircularProgress";

export type CircularProgressBarProps = BoxProps &
  Pick<CircularProgressProps, "size"> &
  ProgressStateReturn & {
    trackStyle?: string;
    innerTrackStyle?: string;
  };

export const CircularProgressBar = forwardRefWithAs<
  CircularProgressBarProps,
  HTMLOrSVGElement,
  "svg"
>((props, ref) => {
  const [state, _props] = split(props, [
    "value",
    "min",
    "max",
    "isIndeterminate",
    "percent",
    "setValue",
  ]);
  const { isIndeterminate, percent } = state;
  const {
    size = "sm",
    className,
    trackStyle,
    innerTrackStyle,
    ...rest
  } = _props;
  const theme = useTheme();
  const determinant = isIndeterminate ? undefined : (percent ?? 0) * 2.64;
  const strokeDasharray =
    determinant == null ? undefined : `${determinant} ${264 - determinant}`;

  return (
    <Box
      as="svg"
      ref={ref}
      viewBox="0 0 100 100"
      className={cx(
        theme.circularProgress.bar.size[size],
        isIndeterminate ? theme.circularProgress.bar.indeterminate : "",
        className,
      )}
      {...rest}
    >
      <circle
        cx={50}
        cy={50}
        r={42}
        fill="transparent"
        stroke="currentColor"
        strokeWidth="10px"
        className={cx(theme.circularProgress.bar.track, trackStyle)}
      />
      <circle
        cx={50}
        cy={50}
        r={42}
        fill="transparent"
        stroke="currentColor"
        strokeWidth="10px"
        strokeDashoffset="66"
        strokeDasharray={strokeDasharray}
        className={cx(
          theme.circularProgress.bar.innerTrack.base,
          isIndeterminate
            ? theme.circularProgress.bar.innerTrack.indeterminate
            : "",
          innerTrackStyle,
        )}
      />
    </Box>
  );
});

export type Dict<T = any> = Record<string, T>;
export function split<T extends Dict, K extends keyof T>(object: T, keys: K[]) {
  const picked: Dict = {};
  const omitted: Dict = {};

  Object.keys(object).forEach(key => {
    if (keys.includes(key as T[K])) {
      picked[key] = object[key];
    } else {
      omitted[key] = object[key];
    }
  });

  return [picked, omitted] as [{ [P in K]: T[P] }, Omit<T, K>];
}
