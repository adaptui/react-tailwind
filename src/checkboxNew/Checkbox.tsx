import * as React from "react";
import { splitProps } from "reakit-utils";

import {
  useCheckboxState,
  CheckboxStateReturn,
  CheckboxInitialState,
} from "./CheckboxState";
import { CheckboxText } from "./CheckboxText";
import { CheckboxLabel } from "./CheckboxLabel";
import { USE_CHECKBOX_STATE_KEYS } from "./__keys";
import { getValidChildren, runIfFn } from "../utils";
import { CheckboxDescription } from "./CheckboxDescription";
import { CheckboxIcon, CheckboxDefaultIcon } from "./CheckboxIcon";
import { CheckboxInput, CheckboxInputHTMLProps } from "./CheckboxInput";
import { Dict } from "../utils/types";

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

export type CheckboxProps = CheckboxInitialState & CheckboxOwnProps;

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

    const componentProps = getCheckboxComponentProps(children);

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
        <CheckboxIcon {...state} label={label} {...componentProps?.iconProps}>
          {runIfFn(icon, state)}
        </CheckboxIcon>
        {label && !description ? (
          <CheckboxText {...state} {...componentProps?.textProps}>
            {runIfFn(label, state)}
          </CheckboxText>
        ) : null}
        {label && description ? (
          <div className="flex flex-col">
            <CheckboxText {...state} {...componentProps?.textProps}>
              {runIfFn(label, state)}
            </CheckboxText>
            <CheckboxDescription
              {...state}
              {...componentProps?.descriptionProps}
            >
              {runIfFn(description, state)}
            </CheckboxDescription>
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

const ComponentPropsMap = {
  CheckboxLabel: "labelProps",
  CheckboxInput: "inputProps",
  CheckboxIcon: "iconProps",
  CheckboxText: "textProps",
  CheckboxDescription: "descriptionProps",
};

export const getCheckboxComponentProps = (children: React.ReactNode) => {
  const validChildren = getValidChildren(children);
  const props: Dict = {};

  validChildren.forEach(child => {
    props[
      // @ts-ignore
      ComponentPropsMap[child.type.displayName]
    ] = child.props;
  });

  return props;
};
