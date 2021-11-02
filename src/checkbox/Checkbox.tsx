import * as React from "react";

import { RenderProp, RenderPropType } from "../utils";

import { CheckboxDescription } from "./CheckboxDescription";
import { CheckboxIcon } from "./CheckboxIcon";
import { CheckboxInput, CheckboxInputProps } from "./CheckboxInput";
import { CheckboxLabel } from "./CheckboxLabel";
import { useCheckboxProps } from "./CheckboxProps";
import { CheckboxInitialState, CheckboxStateReturn } from "./CheckboxState";
import { CheckboxText } from "./CheckboxText";

export type CheckboxOwnProps = Partial<CheckboxInputProps> & {
  /**
   * Provide custom icons as a replacement for the default ones.
   */
  icon?: RenderPropType<CheckboxStateReturn>;

  /**
   * Description for the Checkbox.
   */
  label?: RenderPropType<CheckboxStateReturn>;

  /**
   * Description for the Checkbox.
   */
  description?: RenderPropType<CheckboxStateReturn>;
};

export type CheckboxProps = CheckboxInitialState &
  CheckboxOwnProps &
  RenderProp<CheckboxStateReturn>;

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
