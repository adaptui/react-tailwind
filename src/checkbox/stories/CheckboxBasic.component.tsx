import * as React from "react";
import { CheckboxState, CheckboxStateProps, useCheckboxState } from "ariakit";
import { RenderProp } from "ariakit-utils";

import { runIfFn } from "../../utils";
import { CheckboxDefaultIcon } from "../__utils";
import { CheckboxDescription } from "../CheckboxDescription";
import { CheckboxIcon } from "../CheckboxIcon";
import { CheckboxInput, CheckboxInputProps } from "../CheckboxInput";
import { CheckboxLabel } from "../CheckboxLabel";
import { Value } from "../CheckboxState";
import { CheckboxText } from "../CheckboxText";

export type CheckboxBasicProps = CheckboxStateProps &
  Omit<CheckboxInputProps, "value" | "size" | "defaultValue"> &
  Pick<CheckboxUiState, "label" | "description"> &
  Partial<Pick<CheckboxUiState, "size" | "icon">> & {
    inputValue: CheckboxInputProps["value"];
  };

export type CheckboxUiProps = CheckboxUiState & {
  state: CheckboxState;
};

export type CheckboxUiState = {
  /**
   * If true, Checkbox is checked.
   */
  isChecked: boolean;

  /**
   * If true, Checkbox is indeterminate.
   */
  isIndeterminate: boolean;

  /**
   * If true, Checkbox is unchecked.
   */
  isUnchecked: boolean;

  /**
   * How large should the button be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"checkbox", "icon", "size">;

  /**
   * Provide custom icons as a replacement for the default ones.
   *
   * @default CheckboxDefaultIcon
   */
  icon: RenderProp<CheckboxUiProps>;

  /**
   * Label for the Checkbox.
   */
  label?: RenderProp<CheckboxUiProps> | string;

  /**
   * Description for the Checkbox.
   */
  description?: RenderProp<CheckboxUiProps> | string;
};

export const CheckboxBasic: React.FC<CheckboxBasicProps> = props => {
  const {
    defaultValue = true,
    value,
    setValue,
    inputValue,
    size = "md",
    icon = CheckboxDefaultIcon,
    label,
    description,
    className,
    style,
    ...inputProps
  } = props;
  const state = useCheckboxState<Value>({
    defaultValue,
    value,
    setValue,
  });

  const isChecked =
    state && inputValue && Array.isArray(state.value)
      ? state.value.includes(inputValue)
      : state.value === true;
  const isIndeterminate = state.value === "mixed";
  const isUnchecked = !isChecked && !isIndeterminate;

  const uiState: CheckboxUiState = {
    isChecked,
    isIndeterminate,
    isUnchecked,
    size,
    icon,
    label,
    description,
  };

  const uiProps: CheckboxUiProps = {
    state,
    ...uiState,
  };

  return (
    <CheckboxLabel
      state={state}
      size={size}
      label={label}
      description={description}
      disabled={inputProps.disabled}
      className={className}
      style={style}
    >
      <CheckboxInput state={state} value={inputValue} {...inputProps} />
      <CheckboxIcon
        state={state}
        size={size}
        label={label}
        description={description}
        isChecked={isChecked}
        isIndeterminate={isIndeterminate}
        isUnchecked={isUnchecked}
      >
        {icon(uiProps)}
      </CheckboxIcon>
      <div>
        {label ? (
          <CheckboxText state={state} size={size}>
            {runIfFn(label, uiProps)}
          </CheckboxText>
        ) : null}
        {label && description ? (
          <CheckboxDescription state={state} size={size}>
            {runIfFn(description, uiProps)}
          </CheckboxDescription>
        ) : null}
      </div>
    </CheckboxLabel>
  );
};

export default CheckboxBasic;
