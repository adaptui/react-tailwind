import * as React from "react";

import { CircularProgressBar } from "./CircularProgressBar";
import { CircularProgressBarWrapper } from "./CircularProgressBarWrapper";
import { CircularProgressHint } from "./CircularProgressHint";
import { useCircularProgressProps } from "./CircularProgressProps";
import { CircularProgressInitialState } from "./CircularProgressState";
import { CircularProgressTrack } from "./CircularProgressTrack";
import {
  CircularProgressWrapper,
  CircularProgressWrapperHTMLProps,
} from "./CircularProgressWrapper";

export type CircularProgressOwnProps =
  Partial<CircularProgressWrapperHTMLProps> & {};

export type CircularProgressProps = CircularProgressInitialState &
  CircularProgressOwnProps;

export const CircularProgress = React.forwardRef<
  HTMLInputElement,
  CircularProgressProps
>((props, ref) => {
  const {
    hint,
    wrapperProps,
    hintProps,
    barWrapperProps,
    trackProps,
    barProps,
    state,
  } = useCircularProgressProps(props);

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
