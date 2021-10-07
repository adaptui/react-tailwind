import { Box, BoxProps } from "../box";
import { useTheme } from "../theme";
import { forwardRefWithAs, tcm } from "../utils";

import { ProgressProps, useProgressContext } from "./Progress";

export type ProgressTrackProps = BoxProps & Pick<ProgressProps, "size">;

export const ProgressTrack = forwardRefWithAs<
  ProgressTrackProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const { size = "md" } = useProgressContext();

  return (
    <Box
      ref={ref}
      className={tcm(
        theme.progress.track.base,
        theme.progress.track.size[size],
        className,
      )}
      {...rest}
    />
  );
});

ProgressTrack.displayName = "ProgressTrack";
