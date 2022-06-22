import * as React from "react";

import { RadioDescription } from "./RadioDescription";
import { RadioIcon } from "./RadioIcon";
import { RadioInput } from "./RadioInput";
import { RadioLabel } from "./RadioLabel";
import { RadioProps, useRadioProps } from "./RadioProps";
import { RadioText } from "./RadioText";
import { RadioTextWrapper } from "./RadioTextWrapper";

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (props, ref) => {
    const {
      labelProps,
      inputProps,
      iconProps,
      textWrapperProps,
      textProps,
      descriptionProps,
      uiProps,
    } = useRadioProps(props);
    const { label, description } = uiProps;

    return (
      <RadioLabel {...labelProps}>
        <RadioInput ref={ref} {...inputProps} />
        <RadioIcon {...iconProps} />
        <RadioTextWrapper {...textWrapperProps}>
          {label ? <RadioText {...textProps} /> : null}
          {label && description ? (
            <RadioDescription {...descriptionProps} />
          ) : null}
        </RadioTextWrapper>
      </RadioLabel>
    );
  },
);

Radio.displayName = "Radio";
