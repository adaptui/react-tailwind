import * as React from "react";
import { splitProps } from "reakit-utils";

import {
  useCheckboxState,
  CheckboxStateReturn,
  CheckboxInitialState,
} from "./CheckboxState";
import { RenderProp } from "../utils/types";
import { CheckboxText } from "./CheckboxText";
import { CheckboxLabel } from "./CheckboxLabel";
import { USE_CHECKBOX_STATE_KEYS } from "./__keys";
import { runIfFn, runIfFnChildren } from "../utils";
import { getCheckboxComponentProps } from "./helpers";
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
  label?: React.ReactNode | ((args: CheckboxStateReturn) => JSX.Element);

  /**
   * Description for the Checkbox.
   */
  description?: React.ReactNode | ((args: CheckboxStateReturn) => JSX.Element);
};

export type CheckboxProps = CheckboxInitialState &
  CheckboxOwnProps &
  RenderProp<CheckboxStateReturn>;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const [state, checkboxProps] = useCheckboxProps(props);
    const {
      icon = CheckboxDefaultIcon,
      label,
      description,
      className,
      style,
      children,
      ...inputProps
    } = checkboxProps;
    const componentProps = getCheckboxComponentProps(
      runIfFnChildren(children, state),
    );

    return (
      <CheckboxLabel
        {...state}
        className={className}
        style={style}
        {...componentProps?.labelProps}
      >
        <CheckboxInput
          ref={ref}
          {...state}
          {...inputProps}
          {...componentProps?.inputProps}
        />
        <CheckboxIcon
          {...state}
          label={label}
          children={runIfFn(icon, state)}
          {...componentProps?.iconProps}
        ></CheckboxIcon>
        {label && !description ? (
          <CheckboxText
            {...state}
            children={runIfFn(label, state)}
            {...componentProps?.textProps}
          />
        ) : null}
        {label && description ? (
          <div className="flex flex-col">
            <CheckboxText
              {...state}
              children={runIfFn(label, state)}
              {...componentProps?.textProps}
            />
            <CheckboxDescription
              {...state}
              children={runIfFn(description, state)}
              {...componentProps?.descriptionProps}
            />
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
