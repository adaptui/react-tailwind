import * as React from "react";
import { cx, Progress as RenderlesskitProgress } from "@renderlesskit/react";

import { BoxProps } from "../box";
import { useTheme } from "../theme";
import { forwardRefWithAs } from "../utils/types";
import { useCircularProgress } from "./CircularProgress";

export type CircularProgressWrapperProps = BoxProps & {};

export const CircularProgressWrapper = forwardRefWithAs<
  CircularProgressWrapperProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const state = useCircularProgress();

  return (
    <RenderlesskitProgress
      ref={ref}
      aria-label="progress"
      className={cx(theme.circularProgress.wrapper, className)}
      {...state}
      {...rest}
    />
  );
});
