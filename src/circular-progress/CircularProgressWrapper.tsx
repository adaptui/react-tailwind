import * as React from "react";
import {
  cx,
  Progress as RenderlesskitProgress,
  ProgressProps as RenderlesskitProgressProps,
} from "@renderlesskit/react";

import { useTheme } from "../theme";
import { forwardRefWithAs } from "../utils/types";

export type CircularProgressWrapperProps = RenderlesskitProgressProps & {};

export const CircularProgressWrapper = forwardRefWithAs<
  CircularProgressWrapperProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();

  return (
    <RenderlesskitProgress
      ref={ref}
      aria-label="progress"
      className={cx(theme.circularProgress.wrapper, className)}
      {...rest}
    />
  );
});
