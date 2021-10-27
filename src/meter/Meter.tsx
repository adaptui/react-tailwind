import * as React from "react";
import { valueToPercent } from "@renderlesskit/react";

import { RenderPropType } from "../utils";

import { MeterBar } from "./MeterBar";
import { MeterHint } from "./MeterHint";
import { MeterLabel } from "./MeterLabel";
import {
  MeterInitialState,
  MeterStateReturn,
  useMeterProps,
} from "./MeterState";
import { MeterTrack } from "./MeterTrack";
import { MeterWrapper, MeterWrapperHTMLProps } from "./MeterWrapper";

export type MeterOwnProps = Partial<MeterWrapperHTMLProps> & {
  /**
   * Label for the Meter.
   */
  label?: RenderPropType<MeterStateReturn>;

  /**
   * Hint for the Meter.
   */
  hint?: RenderPropType<MeterStateReturn>;
};

export type MeterProps = MeterInitialState & MeterOwnProps;

export const Meter = React.forwardRef<HTMLInputElement, MeterProps>(
  (props, ref) => {
    const {
      state,
      label,
      hint,
      wrapperProps,
      labelProps,
      hintProps,
      barProps,
      trackProps,
    } = useMeterProps(props);
    const { intervals, value, max } = state;
    const maxMultiplier = max / intervals;
    const intervalValue = value / maxMultiplier;

    return (
      <MeterWrapper ref={ref} {...wrapperProps}>
        {label ? <MeterLabel {...labelProps} /> : null}
        {label && hint ? <MeterHint {...hintProps} /> : null}
        <div className="flex w-full space-x-1 meter-radius">
          {intervals >= 1
            ? Array(intervals)
                .fill(0)
                .map((_, i) => {
                  const interval = i + 1;

                  return (
                    <MeterTrack key={`interval-${interval}`} {...trackProps}>
                      {intervalValue >= i ? (
                        <MeterBar
                          {...barProps}
                          percent={valueToPercent(intervalValue, i, interval)}
                        />
                      ) : null}
                    </MeterTrack>
                  );
                })
            : null}
        </div>
      </MeterWrapper>
    );
  },
);

Meter.displayName = "Meter";
