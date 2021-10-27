import * as React from "react";

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
      label,
      hint,
      wrapperProps,
      labelProps,
      hintProps,
      barProps,
      trackProps,
    } = useMeterProps(props);

    const getGapArray = (intervals, gap, dividedPercentage) => {
      const initialGap = 0;
      const finalGap = 100;
      return [
        initialGap,
        ...[...Array(intervals)]
          .map((_, i) => {
            return [
              dividedPercentage * (i + 1) - gap,
              dividedPercentage * (i + 1) - gap,
              dividedPercentage * (i + 1) + gap,
              dividedPercentage * (i + 1) + gap,
            ];
          })
          .flat(),
        finalGap,
      ];
    };

    const getGradient = gapArray => {
      const chunks = chunk(gapArray, 2);
      return chunks
        .map(([a, b], i) => {
          if (isEven(i)) return `#000 ${a}% ${b}%`;
          return `#fff ${a}% ${b}%`;
        })
        .join(", ");
    };

    const intervals = 3;
    const percentage = 100;
    const gap = 1;
    const dividedPercentage = Math.round(percentage / (intervals + 1));
    console.log("%cdividedPercentage", "color: #7f2200", dividedPercentage);
    const gapArray = getGapArray(intervals, gap, dividedPercentage);
    console.log("%cgapArray", "color: #994d75", gapArray);
    const gradient = getGradient(gapArray);
    console.log("%cgradient", "color: #e5de73", gradient);
    const backgroundImage = `linear-gradient( to right, ${gradient})`;

    return (
      <MeterWrapper ref={ref} {...wrapperProps}>
        {label ? <MeterLabel {...labelProps} /> : null}
        {label && hint ? <MeterHint {...hintProps} /> : null}
        <MeterTrack {...trackProps}>
          <MeterBar {...barProps} />
          <div className="absolute inset-0" style={{ backgroundImage }} />
        </MeterTrack>
      </MeterWrapper>
    );
  },
);

Meter.displayName = "Meter";

function chunk<T>(arr: T[], size: number): T[][] {
  return [...Array(Math.ceil(arr.length / size))].map((_, i) =>
    arr.slice(size * i, size + size * i),
  );
}

function isEven(n: number) {
  return n % 2 === 0;
}
