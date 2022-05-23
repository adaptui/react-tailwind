import { CheckboxState } from "ariakit";
import { RenderProp } from "ariakit-utils";

import { SwitchDefaultIcon } from "./__utils";
import { SwitchInputProps } from "./SwitchInput";
import { SwitchUIProps } from "./SwitchProps";

export const useSwitchUIState = (props: SwitchUIStateProps): SwitchUIState => {
  const {
    state,
    inputValue,
    size = "md",
    icon = SwitchDefaultIcon,
    label,
    description,
  } = props;

  const isChecked =
    state && inputValue && Array.isArray(state.value)
      ? state.value.includes(inputValue)
      : state.value === true;

  return {
    isChecked,
    size,
    icon,
    label,
    description,
  };
};

export type SwitchUIState = {
  /**
   * If true, Switch is checked.
   */
  isChecked: boolean;

  /**
   * How large should the button be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"switch", "icon", "size">;

  /**
   * Provide custom icons as a replacement for the default ones.
   *
   * @default SwitchDefaultIcon
   */
  icon: RenderProp<SwitchUIProps>;

  /**
   * Label for the Switch.
   */
  label?: RenderProp<SwitchUIProps> | string;

  /**
   * Description for the Switch.
   */
  description?: RenderProp<SwitchUIProps> | string;
};

export type SwitchUIStateProps = Partial<
  Pick<SwitchUIState, "icon" | "label" | "description" | "size">
> & {
  state: CheckboxState;
  inputValue: SwitchInputProps["value"];
};
