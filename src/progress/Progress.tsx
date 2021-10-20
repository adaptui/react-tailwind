import * as React from "react";

import { RenderPropType } from "../utils";

import { ProgressBar, ProgressBarHTMLProps } from "./ProgressBar";
import { ProgressHint } from "./ProgressHint";
import { ProgressLabel } from "./ProgressLabel";
import {
  ProgressInitialState,
  ProgressStateReturn,
  useProgressProps,
} from "./ProgressState";
import { ProgressTrack } from "./ProgressTrack";
import { ProgressWrapper } from "./ProgressWrapper";

export type ProgressOwnProps = Partial<ProgressBarHTMLProps> & {
  /**
   * Description for the Progress.
   */
  label?: RenderPropType<ProgressStateReturn>;

  /**
   * Description for the Progress.
   */
  hint?: RenderPropType<ProgressStateReturn>;
};

export type ProgressProps = ProgressInitialState & ProgressOwnProps;

export const Progress = React.forwardRef<HTMLInputElement, ProgressProps>(
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

    console.log("%cwrapperProps", "color: #9c66cc", wrapperProps);
    return (
      <ProgressWrapper {...wrapperProps}>
        {label ? <ProgressLabel className="mb-3" {...labelProps} /> : null}
        {label && hint ? (
          <ProgressHint className="mb-3" {...hintProps} />
        ) : null}
        <ProgressTrack ref={ref} {...trackProps}>
          <ProgressBar {...barProps} />
        </ProgressTrack>
      </ProgressWrapper>
    );
  },
);

Progress.displayName = "Checkbox";
