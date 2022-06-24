import * as React from "react";

import { CheckboxDescription } from "./CheckboxDescription";
import { CheckboxIcon } from "./CheckboxIcon";
import { CheckboxInput } from "./CheckboxInput";
import { CheckboxLabel } from "./CheckboxLabel";
import { CheckboxProps, useCheckboxProps } from "./CheckboxProps";
import { CheckboxText } from "./CheckboxText";
import { CheckboxTextWrapper } from "./CheckboxTextWrapper";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      labelProps,
      inputProps,
      iconProps,
      textWrapperProps,
      textProps,
      descriptionProps,
      uiProps,
    } = useCheckboxProps(props);
    const { label, description } = uiProps;

    return (
      <CheckboxLabel {...labelProps}>
        <CheckboxInput ref={ref} {...inputProps} />
        <CheckboxIcon {...iconProps} />
        <CheckboxTextWrapper {...textWrapperProps}>
          {label ? <CheckboxText {...textProps} /> : null}
          {label && description ? (
            <CheckboxDescription {...descriptionProps} />
          ) : null}
        </CheckboxTextWrapper>
      </CheckboxLabel>
    );
  },
);

Checkbox.displayName = "Checkbox";
