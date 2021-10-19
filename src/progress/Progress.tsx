import * as React from "react";

import { ProgressBar, ProgressBarHTMLProps } from "./ProgressBar";
import { ProgressInitialState, useProgressProps } from "./ProgressState";
import { ProgressTrack } from "./ProgressTrack";

export type ProgressOwnProps = Partial<ProgressBarHTMLProps> & {};

export type ProgressProps = ProgressInitialState & ProgressOwnProps;

export const Progress = React.forwardRef<HTMLInputElement, ProgressProps>(
  (props, ref) => {
    const { barProps, trackProps } = useProgressProps(props);

    return (
      <ProgressTrack ref={ref} {...trackProps}>
        <ProgressBar {...barProps} />
      </ProgressTrack>
    );
  },
);

Progress.displayName = "Checkbox";
