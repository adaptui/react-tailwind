import { useControllableState } from "@renderlesskit/react";
import { CheckboxStateReturn as ReakitCheckboxStateReturn } from "reakit";

import {
  CheckboxIcon,
  CheckboxDefaultIcon,
  CheckboxIconRenderProps,
} from "./CheckboxIcon";
import { CheckboxText } from "./CheckboxText";
import { CheckboxLabel } from "./CheckboxLabel";
import { forwardRefWithAs, RenderProp } from "../utils/types";
import { CheckboxDescription } from "./CheckboxDescription";
import { CheckboxInput, CheckboxInputProps } from "./CheckboxInput";
import { runIfFn } from "../utils";

export type CheckboxProps = Omit<CheckboxInputProps, "size"> & {
  /**
   * Default State of the Checkbox for uncontrolled Checkbox.
   *
   * @default false
   */

  defaultState?: ReakitCheckboxStateReturn["state"];

  /**
   * State of the Checkbox for controlled Checkbox.
   */
  state?: ReakitCheckboxStateReturn["state"];

  /**
   * OnChange callback for controlled Checkbox.
   */
  onStateChange?: ReakitCheckboxStateReturn["setState"];

  /**
   * How large should the button be?
   *
   * @default md
   */
  size?: keyof Renderlesskit.GetThemeValue<"checkboxNew", "icon", "size">;

  /**
   * Provide custom icons as a replacement for the default ones.
   */
  icon?: (props: CheckboxIconRenderProps) => React.ReactNode;

  /**
   * Label for the Checkbox.
   */
  label?: string;

  /**
   * Description for the Checkbox.
   */
  description?: string;

  /**
   * Children of the Checkbox.
   */
  children?: RenderProp<CheckboxProps>;
};

export const Checkbox = forwardRefWithAs<
  CheckboxProps,
  HTMLInputElement,
  "input"
>((props, ref) => {
  const {
    // Default State should be false otherwise input state will be undefined
    defaultState = false,
    state: stateProp,
    onStateChange,
    value,
    size = "md",
    invalid = false,
    icon = CheckboxDefaultIcon,
    label,
    description,
    // Top level styles(label) for the checkbox
    className,
    style,
    children,
    ...inputProps
  } = props;

  const [state, setState] = useControllableState({
    defaultValue: defaultState,
    value: stateProp,
    onChange: onStateChange,
  });
  console.log("%c state", "color: #73998c", state);

  if (description && !label) {
    console.warn("Checkbox: `description` should be used along with `label`");
  }

  if (!children) {
    return (
      <CheckboxLabel className={className} style={style}>
        <CheckboxInput
          ref={ref}
          state={state}
          setState={setState}
          value={value}
          {...inputProps}
        />
        <CheckboxIcon state={state} value={value} size={size} invalid={invalid}>
          {icon}
        </CheckboxIcon>
        {label && !description ? (
          <CheckboxText size={size}>{label}</CheckboxText>
        ) : null}
        {label && description ? (
          <div className="flex flex-col">
            <CheckboxText size={size}>{label}</CheckboxText>
            <CheckboxDescription size={size}>{description}</CheckboxDescription>
          </div>
        ) : null}
      </CheckboxLabel>
    );
  }

  return <>{runIfFn(children, { state, setState })};</>;
});

Checkbox.displayName = "Checkbox";
