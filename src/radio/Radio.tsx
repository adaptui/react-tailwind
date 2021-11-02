import * as React from "react";

import { RenderProp } from "../utils";

import { RadioDescription } from "./RadioDescription";
import { RadioIcon } from "./RadioIcon";
import { RadioInput, RadioInputHTMLProps } from "./RadioInput";
import { RadioLabel } from "./RadioLabel";
import { useRadioProps } from "./RadioProps";
import { RadioInitialState, RadioStateReturn } from "./RadioState";
import { RadioText } from "./RadioText";

export type RadioOwnProps = RadioInputHTMLProps & {};

export type RadioProps = RadioOwnProps &
  RadioInitialState &
  RenderProp<RadioStateReturn>;

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (props, ref) => {
    const {
      label,
      description,
      labelProps,
      inputProps,
      iconProps,
      textProps,
      descriptionProps,
    } = useRadioProps(props);

    return (
      <RadioLabel {...labelProps}>
        <RadioInput ref={ref} {...inputProps} />
        <RadioIcon {...iconProps} />
        {label && !description ? <RadioText {...textProps} /> : null}
        {label && description ? (
          <div>
            <RadioText {...textProps} />
            <RadioDescription {...descriptionProps} />
          </div>
        ) : null}
      </RadioLabel>
    );
  },
);

Radio.displayName = "Radio";
