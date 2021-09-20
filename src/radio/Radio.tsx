import * as React from "react";

import { useRadioProps } from "./helpers";
import { RadioText } from "./RadioText";
import { RadioIcon } from "./RadioIcon";
import { RadioLabel } from "./RadioLabel";
import { RenderProp, RenderPropType } from "../utils/types";
import { RadioDescription } from "./RadioDescription";
import { RadioInput, RadioInputHTMLProps } from "./RadioInput";
import { RadioStateReturn, RadioInitialState } from "./RadioState";

export type RadioOwnProps = RadioInputHTMLProps & {
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

export type RadioProps = RadioInitialState &
  RadioOwnProps &
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
