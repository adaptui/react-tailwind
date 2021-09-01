import * as React from "react";

import { CheckboxText } from "./CheckboxText";
import { CheckboxLabel } from "./CheckboxLabel";
import { runIfFn, runIfFnChildren } from "../utils";
import { RenderProp, RenderPropType } from "../utils/types";
import { CheckboxDescription } from "./CheckboxDescription";
import { CheckboxIcon, CheckboxDefaultIcon } from "./CheckboxIcon";
import { CheckboxInput, CheckboxInputHTMLProps } from "./CheckboxInput";
import { getCheckboxComponentProps, useCheckboxProps } from "./helpers";
import { CheckboxStateReturn, CheckboxInitialState } from "./CheckboxState";

export type CheckboxOwnProps = CheckboxInputHTMLProps & {
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
          children={runIfFn(icon, state)}
          {...componentProps?.iconProps}
        />
        {label && !description ? (
          <CheckboxText
            {...state}
            children={runIfFn(label, state)}
            {...componentProps?.textProps}
          />
        ) : null}
        {label && description ? (
          <div>
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
