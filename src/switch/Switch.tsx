import * as React from "react";

import { RenderProp } from "../utils";

import { SwitchDescription } from "./SwitchDescription";
import { SwitchIcon } from "./SwitchIcon";
import { SwitchInput, SwitchInputHTMLProps } from "./SwitchInput";
import { SwitchLabel } from "./SwitchLabel";
import { useSwitchProps } from "./SwitchProps";
import { SwitchInitialState, SwitchStateReturn } from "./SwitchState";
import { SwitchText } from "./SwitchText";

export type SwitchOwnProps = SwitchInputHTMLProps & {};

export type SwitchProps = SwitchInitialState &
  SwitchOwnProps &
  RenderProp<SwitchStateReturn>;

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (props, ref) => {
    const {
      label,
      description,
      labelProps,
      inputProps,
      iconProps,
      textProps,
      descriptionProps,
    } = useSwitchProps(props);

    return (
      <SwitchLabel {...labelProps}>
        <SwitchInput as="button" ref={ref} {...inputProps} />
        {label && !description ? <SwitchText {...textProps} /> : null}
        {label && description ? (
          <div>
            <SwitchText {...textProps} />
            <SwitchDescription {...descriptionProps} />
          </div>
        ) : null}
        <SwitchIcon {...iconProps} />
      </SwitchLabel>
    );
  },
);

Switch.displayName = "Switch";
