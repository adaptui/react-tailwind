import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { ProgressProps } from "./Progress";
import { forwardRefWithAs } from "../utils/types";

export type ProgressTrackProps = BoxProps & Pick<ProgressProps, "size">;

export const ProgressTrack = forwardRefWithAs<
  ProgressTrackProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { size = "sm", className, ...rest } = props;
  const theme = useTheme();

  return (
    <Box
      ref={ref}
      className={cx(
        theme.progress.track.base,
        theme.progress.track.size[size],
        className,
      )}
      {...rest}
    />
  );
});
