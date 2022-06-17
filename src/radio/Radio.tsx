import * as React from "react";

import { cx } from "../utils";

import { RadioDescription } from "./RadioDescription";
import { RadioIcon } from "./RadioIcon";
import { RadioInput } from "./RadioInput";
import { RadioLabel } from "./RadioLabel";
import { RadioProps, useRadioProps } from "./RadioProps";
import { RadioText } from "./RadioText";

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (props, ref) => {
    const {
      labelProps,
      inputProps,
      iconProps,
      textProps,
      descriptionProps,
      uiProps,
    } = useRadioProps(props);
    const { label, description } = uiProps;

    return (
      <RadioLabel {...labelProps}>
        <RadioInput ref={ref} {...inputProps} />
        <RadioIcon {...iconProps} />
        {/* TODO: Create a new component & check for shadows */}
        <div className={cx(label && !description ? "flex items-center" : "")}>
          {label ? <RadioText {...textProps} /> : null}
          {label && description ? (
            <RadioDescription {...descriptionProps} />
          ) : null}
        </div>
      </RadioLabel>
    );
  },
);

Radio.displayName = "Radio";
