import * as React from "react";

import { ProgressBar } from "./ProgressBar";
import { ProgressHint } from "./ProgressHint";
import { ProgressLabel } from "./ProgressLabel";
import { ProgressProps, useProgressProps } from "./ProgressProps";
import { ProgressTrack } from "./ProgressTrack";
import { ProgressWrapper } from "./ProgressWrapper";

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const {
      uiProps,
      wrapperProps,
      labelProps,
      hintProps,
      barProps,
      trackProps,
    } = useProgressProps(props);
    const { label, hint } = uiProps;

    return (
      <ProgressWrapper ref={ref} {...wrapperProps}>
        {label ? <ProgressLabel {...labelProps} /> : null}
        {label && hint ? <ProgressHint {...hintProps} /> : null}
        <ProgressTrack {...trackProps}>
          <ProgressBar {...barProps} />
        </ProgressTrack>
      </ProgressWrapper>
    );
  },
);

Progress.displayName = "Progress";
