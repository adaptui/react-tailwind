import * as React from "react";
import { cx } from "ariakit-utils";

import { CheckboxDescription } from "./CheckboxDescription";
import { CheckboxIcon } from "./CheckboxIcon";
import { CheckboxInput } from "./CheckboxInput";
import { CheckboxLabel } from "./CheckboxLabel";
import { CheckboxProps, useCheckboxProps } from "./CheckboxProps";
import { CheckboxText } from "./CheckboxText";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      labelProps,
      inputProps,
      iconProps,
      textProps,
      descriptionProps,
      uiProps,
    } = useCheckboxProps(props);
    const { label, description } = uiProps;

    return (
      <CheckboxLabel {...labelProps}>
        <CheckboxInput ref={ref} {...inputProps} />
        <CheckboxIcon {...iconProps} />
        <div className={cx(label && !description ? "flex items-center" : "")}>
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
