import * as React from "react";

import { RenderProp, RenderPropType } from "../utils/types";

import {
  RadioDescription,
  RadioIcon,
  RadioInput,
  RadioInputProps,
  RadioLabel,
  RadioText,
} from "./index";
import { RadioGroupStateReturn } from "./RadioGroupState";
import { RadioStateReturn, useRadioProps } from "./RadioState";

export type RadioOwnProps = Partial<RadioInputProps> & {
  /**
   * Provide custom icons as a replacement for the default ones.
   */
  icon?: RenderPropType<RadioStateReturn>;
  /**
   * Description for the Radio.
   */
  label?: RenderPropType<RadioStateReturn>;
  /**
   * Description for the Radio.
   */
  description?: RenderPropType<RadioStateReturn>;
};

export type RadioProps = RadioOwnProps &
  Partial<RadioGroupStateReturn> &
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
