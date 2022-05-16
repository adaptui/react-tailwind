import * as React from "react";

import { RenderProp } from "../utils";

import { CheckboxDescription } from "./CheckboxDescription";
import { CheckboxIcon } from "./CheckboxIcon";
import { CheckboxInput, CheckboxInputProps } from "./CheckboxInput";
import { CheckboxLabel } from "./CheckboxLabel";
import { useCheckboxProps } from "./CheckboxProps";
import { CheckboxState, CheckboxStateProps } from "./CheckboxState";
import { CheckboxText } from "./CheckboxText";

export type CheckboxOwnProps = Omit<CheckboxInputProps, "size" | "state"> &
  CheckboxStateProps;

export type CheckboxProps = React.PropsWithChildren<CheckboxOwnProps>;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      state,
      labelProps,
      inputProps,
      iconProps,
      textProps,
      descriptionProps,
    } = useCheckboxProps(props);
    const { label, description } = state;

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
