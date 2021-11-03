import * as React from "react";
import { valueToPercent } from "@renderlesskit/react";

import { MeterBar } from "./MeterBar";
import { MeterBarWrapper } from "./MeterBarWrapper";
import { MeterHint } from "./MeterHint";
import { MeterLabel } from "./MeterLabel";
import { useMeterProps } from "./MeterProps";
import { MeterInitialState } from "./MeterState";
import { MeterTrack } from "./MeterTrack";
import { MeterWrapper, MeterWrapperHTMLProps } from "./MeterWrapper";

export type MeterOwnProps = MeterWrapperHTMLProps & {};

export type MeterProps = MeterInitialState & MeterOwnProps;

export const Meter = React.forwardRef<HTMLDivElement, MeterProps>(
  (props, ref) => {
    const {
      state,
      label,
      hint,
      wrapperProps,
      labelProps,
      hintProps,
      barWrapperProps,
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
                          percent={valueToPercent(intervalValue, i, interval)}
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
