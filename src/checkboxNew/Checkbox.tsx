import * as React from "react";
import { splitProps } from "reakit-utils";

import {
  useCheckboxState,
  CheckboxStateReturn,
  CheckboxInitialState,
} from "./CheckboxState";
import { runIfFn } from "../utils";
import { CheckboxText } from "./CheckboxText";
import { CheckboxLabel } from "./CheckboxLabel";
import { USE_CHECKBOX_STATE_KEYS } from "./__keys";
import { CheckboxDescription } from "./CheckboxDescription";
import { CheckboxIcon, CheckboxDefaultIcon } from "./CheckboxIcon";
import { CheckboxInput, CheckboxInputHTMLProps } from "./CheckboxInput";

export type CheckboxOwnProps = CheckboxInputHTMLProps & {
  /**
   * Provide custom icons as a replacement for the default ones.
   */
  icon?: React.ReactNode | ((args: CheckboxStateReturn) => JSX.Element);

  /**
   * Description for the Checkbox.
   */
  description?: string;
};

export type CheckboxProps = CheckboxInitialState & CheckboxOwnProps;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const [state, checkboxProps] = useCheckboxProps(props);
    const {
      icon = CheckboxDefaultIcon,
      children,
      description,
      className,
      style,
      ...inputProps
    } = checkboxProps;

    return (
      <CheckboxLabel {...state} className={className} style={style}>
        <CheckboxInput ref={ref} {...state} {...inputProps} />
        <CheckboxIcon {...state}>{runIfFn(icon, state)}</CheckboxIcon>
        {children && !description ? (
          <CheckboxText {...state}>{children}</CheckboxText>
        ) : null}
        {children && description ? (
          <div className="flex flex-col">
            <CheckboxText {...state}>{children}</CheckboxText>
            <CheckboxDescription {...state}>{description}</CheckboxDescription>
          </div>
        ) : null}
      </CheckboxLabel>
    );
  },
);

Checkbox.displayName = "Checkbox";

export const useCheckboxProps = (props: CheckboxProps) => {
  const [stateProps, checkboxProps] = splitProps(
    props,
    USE_CHECKBOX_STATE_KEYS,
  ) as [CheckboxInitialState, CheckboxOwnProps];
  const state = useCheckboxState(stateProps);

  return [state, checkboxProps, stateProps] as [
    CheckboxStateReturn,
    CheckboxOwnProps,
    CheckboxInitialState,
  ];
};
