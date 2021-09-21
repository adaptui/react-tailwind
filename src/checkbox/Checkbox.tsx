import * as React from "react";

import { useCheckboxProps } from "./helpers";
import { CheckboxText } from "./CheckboxText";
import { CheckboxIcon } from "./CheckboxIcon";
import { CheckboxLabel } from "./CheckboxLabel";
import { RenderProp, RenderPropType } from "../utils/types";
import { CheckboxDescription } from "./CheckboxDescription";
import { CheckboxInput, CheckboxInputProps } from "./CheckboxInput";
import { CheckboxStateReturn, CheckboxInitialState } from "./CheckboxState";

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
        {label && !description ? <CheckboxText {...textProps} /> : null}
        {label && description ? (
          <div>
            <CheckboxText {...textProps} />
            <CheckboxDescription {...descriptionProps} />
          </div>
        ) : null}
      </CheckboxLabel>
    );
  },
);

Checkbox.displayName = "Checkbox";
