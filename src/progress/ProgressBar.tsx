import {
  Progress as RenderlesskitProgress,
  ProgressProps,
} from "@renderlesskit/react";

import { useTheme } from "../theme";
import { tcm } from "../utils";
import { forwardRefWithAs } from "../utils/types";

import { useProgressContext } from "./Progress";

export type ProgressBarProps = Partial<ProgressProps> & {};

export const ProgressBar = forwardRefWithAs<
  ProgressBarProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const { state } = useProgressContext();
  const { percent, isIndeterminate } = state;

  return (
    <RenderlesskitProgress
      ref={ref}
      aria-label="progress"
      style={{ width: `${percent}%` }}
      className={tcm(
        theme.progress.bar.base,
        !isIndeterminate
          ? theme.progress.bar.normal
          : theme.progress.bar.indeterminate,
        className,
      )}
      {...rest}
    />
  );
});

ProgressBar.displayName = "ProgressBar";
