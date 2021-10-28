import * as React from "react";

import { RenderPropType } from "../utils";

import { ProgressBar } from "./ProgressBar";
import { ProgressHint } from "./ProgressHint";
import { ProgressLabel } from "./ProgressLabel";
import {
  ProgressInitialState,
  ProgressStateReturn,
  useProgressProps,
} from "./ProgressState";
import { ProgressTrack } from "./ProgressTrack";
import { ProgressWrapper, ProgressWrapperHTMLProps } from "./ProgressWrapper";

export type ProgressOwnProps = Partial<ProgressWrapperHTMLProps> & {
  /**
   * Label for the Progress.
   */
  label?: RenderPropType<ProgressStateReturn>;

  /**
   * Hint for the Progress.
   */
  hint?: RenderPropType<ProgressStateReturn>;
};

export type ProgressProps = ProgressInitialState & ProgressOwnProps;

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const {
      label,
      hint,
      wrapperProps,
      labelProps,
      hintProps,
      barProps,
      trackProps,
    } = useProgressProps(props);

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
