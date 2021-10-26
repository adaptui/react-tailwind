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

    return (
      <MeterWrapper ref={ref} {...wrapperProps}>
        {label ? <MeterLabel {...labelProps} /> : null}
        {label && hint ? <MeterHint {...hintProps} /> : null}
        <MeterTrack {...trackProps}>
          <MeterBar {...barProps} />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient( to right, transparent 49.5%, #fff 49.5% 50.5%, transparent 50.5%)",
            }}
          />
        </MeterTrack>
      </MeterWrapper>
    );
  },
);

Meter.displayName = "Meter";
