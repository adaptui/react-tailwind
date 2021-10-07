import {
  Progress as RenderlesskitProgress,
  ProgressProps,
} from "@renderlesskit/react";

import { useTheme } from "../theme";
import { forwardRefWithAs, tcm } from "../utils";

import { useCircularProgressContext } from "./CircularProgress";

export type CircularProgressWrapperProps = Partial<ProgressProps> & {};

export const CircularProgressWrapper = forwardRefWithAs<
  CircularProgressWrapperProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const state = useCircularProgressContext();

  return (
    <RenderlesskitProgress
      ref={ref}
      aria-label="progress"
      className={tcm(theme.circularProgress.wrapper, className)}
      {...state}
      {...rest}
    />
  );
});

CircularProgressWrapper.displayName = "CircularProgressWrapper";
