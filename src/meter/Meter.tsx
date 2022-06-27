import * as React from "react";

import { MeterBar } from "./MeterBar";
import { MeterBarWrapper } from "./MeterBarWrapper";
import { MeterHint } from "./MeterHint";
import { MeterLabel } from "./MeterLabel";
import { MeterProps, useMeterProps } from "./MeterProps";
import { MeterTrack } from "./MeterTrack";
import { MeterWrapper } from "./MeterWrapper";

/**
 * Convert a value to percentage based on lower and upper bound values
 *
 * @param value the value in number
 * @param min the minimum value
 * @param max the maximum value
 */
// ! Remove after next core update
export function valueToPercent(value: number, min: number, max: number) {
  return ((value - min) * 100) / (max - min);
}

export const Meter = React.forwardRef<HTMLDivElement, MeterProps>(
  (props, ref) => {
    const {
      uiProps,
      wrapperProps,
      labelProps,
      hintProps,
      barWrapperProps,
      barProps,
      trackProps,
    } = useMeterProps(props);
    const { state, label, hint, intervals } = uiProps;
    const { value, max } = state;
    const maxMultiplier = max / intervals;
    const intervalValue = value / maxMultiplier;

    return (
      <MeterWrapper ref={ref} {...wrapperProps}>
        {label ? <MeterLabel {...labelProps} /> : null}
        {label && hint ? <MeterHint {...hintProps} /> : null}
        <MeterBarWrapper {...barWrapperProps}>
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
                          state={{
                            ...state,
                            percent: valueToPercent(intervalValue, i, interval),
                          }}
                        />
                      ) : null}
                    </MeterTrack>
                  );
                })
            : null}
        </MeterBarWrapper>
      </MeterWrapper>
    );
  },
);

Meter.displayName = "Meter";
