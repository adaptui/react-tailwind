import * as React from "react";

import { CheckboxDescription } from "./CheckboxDescription";
import { CheckboxIcon } from "./CheckboxIcon";
import { CheckboxInput } from "./CheckboxInput";
import { CheckboxLabel } from "./CheckboxLabel";
import { CheckboxProps, useCheckboxProps } from "./CheckboxProps";
import { CheckboxText } from "./CheckboxText";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      label,
      description,
      labelProps,
      inputProps,
      iconProps,
      textProps,
      descriptionProps,
    } = useCheckboxProps(props);

    return (
      <CheckboxLabel {...labelProps}>
        <CheckboxInput ref={ref} {...inputProps} />
        <CheckboxIcon {...iconProps} />
        <div>
          {label ? <CheckboxText {...textProps} /> : null}
          {label && description ? (
            <CheckboxDescription {...descriptionProps} />
          ) : null}
        </div>
      </CheckboxLabel>
    );
  },
);

Checkbox.displayName = "Checkbox";
