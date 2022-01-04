import * as React from "react";

import { RenderProp } from "../utils";

import { CheckboxDescription } from "./CheckboxDescription";
import { CheckboxIcon } from "./CheckboxIcon";
import { CheckboxInput, CheckboxInputHTMLProps } from "./CheckboxInput";
import { CheckboxLabel } from "./CheckboxLabel";
import { useCheckboxProps } from "./CheckboxProps";
import { CheckboxInitialState, CheckboxStateReturn } from "./CheckboxState";
import { CheckboxText } from "./CheckboxText";

export type CheckboxOwnProps = CheckboxInputHTMLProps & {};

export type CheckboxProps = CheckboxInitialState &
  CheckboxOwnProps &
  RenderProp<CheckboxStateReturn>;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      ssr,
      label,
      description,
      labelProps,
      inputProps,
      iconProps,
      textProps,
      descriptionProps,
    } = useCheckboxProps(props);

    if (!ssr) {
      return null;
    }

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
