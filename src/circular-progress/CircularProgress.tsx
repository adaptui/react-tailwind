import * as React from "react";

import { CircularProgressBar } from "./CircularProgressBar";
import { CircularProgressBarWrapper } from "./CircularProgressBarWrapper";
import { CircularProgressHint } from "./CircularProgressHint";
import {
  CircularProgressProps,
  useCircularProgressProps,
} from "./CircularProgressProps";
import { CircularProgressTrack } from "./CircularProgressTrack";
import { CircularProgressWrapper } from "./CircularProgressWrapper";

export const CircularProgress = React.forwardRef<
  HTMLDivElement,
  CircularProgressProps
>((props, ref) => {
  const {
    wrapperProps,
    hintProps,
    barWrapperProps,
    trackProps,
    barProps,
    uiProps,
  } = useCircularProgressProps(props);
  const { hint, state } = uiProps;

  return (
    <CircularProgressWrapper ref={ref} {...wrapperProps}>
      {hint && !state.isIndeterminate ? (
        <CircularProgressHint {...hintProps} />
      ) : null}
      <CircularProgressBarWrapper {...barWrapperProps}>
        <CircularProgressTrack {...trackProps} />
        <CircularProgressBar {...barProps} />
      </CircularProgressBarWrapper>
    </CircularProgressWrapper>
  );
});

CircularProgress.displayName = "CircularProgress";
