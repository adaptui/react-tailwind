import {
  CheckboxActions,
  CheckboxInitialState,
  CheckboxState,
  useCheckboxState,
} from "@renderlesskit/react";

import { Box } from "../box";
import { useTheme } from "../theme";
import { RenderPropType, tcm } from "../utils";

import { SwitchProps } from "./Switch";
import { SwitchInputOptions, SwitchInputProps } from "./SwitchInput";

export type SwitchState = CheckboxState & {
  /**
   * How large should the switch be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"switch", "icon", "size">;

  /**
   * Input's value.
   */
  value: SwitchInputOptions["value"];

  /**
   * If true, Checkbox is checked.
   */
  isChecked: boolean;

  /**
   * Provide custom icons as a replacement for the default ones.
   */
  icon: RenderPropType<SwitchStateReturn & Pick<SwitchInputProps, "disabled">>;

  /**
   * Description for the Switch.
   */
  label: RenderPropType<SwitchStateReturn>;

  /**
   * Description for the Switch.
   */
  description: RenderPropType<SwitchStateReturn>;
};

export type SwitchActions = CheckboxActions & {};

export type SwitchStateReturn = SwitchState & SwitchActions;

export type SwitchInitialState = CheckboxInitialState &
  Partial<
    Pick<SwitchState, "size" | "value" | "icon" | "label" | "description">
  >;

export function useSwitchState(
  props: SwitchInitialState = {},
): SwitchStateReturn {
  const { state, setState } = useCheckboxState(props);
  const {
    size = "md",
    icon = SwitchDefaultIcon,
    label,
    description,
    value,
  } = props;

  const isChecked =
    Array.isArray(state) && value ? state.includes(value) : state === true;

  return {
    state,
    setState,
    size,
    value,
    isChecked,
    icon,
    label,
    description,
  };
}

export const SwitchDefaultIcon: SwitchProps["icon"] = state => {
  const { size, isChecked, disabled } = state;

  const theme = useTheme("switch");
  const switchIconContentStyles = tcm(
    theme.icon.children.common,
    theme.icon.children.size.default[size],
    isChecked
      ? theme.icon.children.size.checked[size]
      : theme.icon.children.size.unChecked[size],
    disabled
      ? tcm(
          theme.icon.children.disabled,
          theme.icon.children.size.disabled[size],
        )
      : "",
  );

  return <Box as="span" className={switchIconContentStyles} />;
};
