import { tcm } from "../utils";
import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { useCircularProgressContext } from "./CircularProgress";

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
  const { state, size = "md" } = useCircularProgressContext();
  const { isIndeterminate, percent } = state;
  const determinant = isIndeterminate ? undefined : (percent ?? 0) * 2.64;
  const strokeDasharray =
    determinant == null ? undefined : `${determinant} ${264 - determinant}`;
  const circularProgressBarStyles = tcm(
    theme.circularProgress.bar.size[size],
    isIndeterminate ? theme.circularProgress.bar.indeterminate : "",
    className,
  );

  return (
    <Box
      as="svg"
      ref={ref}
      viewBox="0 0 100 100"
      className={circularProgressBarStyles}
      {...rest}
    >
      <circle
        cx={50}
        cy={50}
        r={42}
        fill="transparent"
        stroke="currentColor"
        strokeWidth="10px"
        className={tcm(theme.circularProgress.bar.track, trackStyle)}
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
        className={tcm(
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

CircularProgressBar.displayName = "CircularProgressBar";
