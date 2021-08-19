import * as React from "react";
import { splitProps } from "reakit-utils";

import { runIfFn } from "../utils";
import { CheckboxText } from "./CheckboxText";
import { CheckboxLabel } from "./CheckboxLabel";
import { USE_CHECKBOX_STATE_KEYS } from "./__keys";
import { CheckboxDescription } from "./CheckboxDescription";
import { CheckboxIcon, CheckboxDefaultIcon } from "./CheckboxIcon";
import { CheckboxInput, CheckboxInputHTMLProps } from "./CheckboxInput";
import { CheckboxInitialState, useCheckboxState } from "./CheckboxState";

export type CheckboxOwnProps = CheckboxInputHTMLProps & {
  /**
   * Provide custom icons as a replacement for the default ones.
   */
  icon?: React.ReactNode;

  /**
   * Label for the Checkbox.
   */
  label?: string;

  /**
   * Description for the Checkbox.
   */
  description?: string;
};

export type CheckboxProps = CheckboxInitialState & CheckboxOwnProps;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const [stateProps, checkboxProps] = splitProps(
      props,
      USE_CHECKBOX_STATE_KEYS,
    ) as [CheckboxInitialState, CheckboxOwnProps];
    const state = useCheckboxState(stateProps);
    const {
      icon = CheckboxDefaultIcon,
      label,
      description,
      className,
      style,
      ...inputProps
    } = checkboxProps;

    return (
      <CheckboxLabel {...state} className={className} style={style}>
        <CheckboxInput ref={ref} {...state} {...inputProps} />
        <CheckboxIcon {...state}>{runIfFn(icon, state)}</CheckboxIcon>
        {label && !description ? (
          <CheckboxText {...state}>{label}</CheckboxText>
        ) : null}
        {label && description ? (
          <div className="flex flex-col">
            <CheckboxText {...state}>{label}</CheckboxText>
            <CheckboxDescription {...state}>{description}</CheckboxDescription>
          </div>
        ) : null}
      </CheckboxLabel>
    );
  },
);

Checkbox.displayName = "Checkbox";
