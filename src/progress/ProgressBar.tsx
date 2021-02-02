import * as React from "react";
import {
  cx,
  Progress as RenderlesskitProgress,
  ProgressProps as RenderlesskitProgressProps,
  ProgressStateReturn,
} from "@renderlesskit/react";

import { useTheme } from "../theme";
import { forwardRefWithAs } from "../utils/types";

export type ProgressBarProps = RenderlesskitProgressProps &
  Pick<ProgressStateReturn, "percent">;

export const ProgressBar = forwardRefWithAs<
  ProgressBarProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { percent, isIndeterminate, className, ...rest } = props;
  const theme = useTheme();

  return (
    <RenderlesskitProgress
      ref={ref}
      aria-label="progress"
      style={{ width: `${percent}%` }}
      className={cx(
        theme.progress.bar.base,
        !isIndeterminate ? theme.progress.bar.normal : "",
        isIndeterminate ? theme.progress.bar.indeterminate : "",
        className,
      )}
      {...rest}
    />
  );
});
