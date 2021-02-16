import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { ProgressProps, useProgressContext } from "./Progress";

export type ProgressTrackProps = BoxProps & Pick<ProgressProps, "size">;

export const ProgressTrack = forwardRefWithAs<
  ProgressTrackProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const { size = "sm" } = useProgressContext();

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

ProgressTrack.displayName = "ProgressTrack";
