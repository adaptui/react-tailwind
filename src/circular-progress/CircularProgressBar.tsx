import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { useCircularProgress } from "./CircularProgress";

export type CircularProgressBarProps = BoxProps & {
  trackStyle?: string;
  innerTrackStyle?: string;
};

export const CircularProgressBar = forwardRefWithAs<
  CircularProgressBarProps,
  HTMLOrSVGElement,
  "svg"
>((props, ref) => {
  const { className, trackStyle, innerTrackStyle, ...rest } = props;
  const theme = useTheme();
  const { state, size = "md" } = useCircularProgress();
  const { isIndeterminate, percent } = state;
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
