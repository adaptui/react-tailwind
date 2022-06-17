import { RadioState } from "ariakit";

import { RenderProp } from "../utils";

import { RadioDefaultIcon } from "./__utils";
import { RadioInputProps } from "./RadioInput";
import { RadioUIProps } from "./RadioProps";

export const useRadioUIState = (props: RadioUIStateProps): RadioUIState => {
  const {
    state,
    inputValue,
    size = "md",
    themeColor = "base",
    icon = RadioDefaultIcon,
    label,
    description,
  } = props;
  const isChecked = state?.value === inputValue;

  return {
    isChecked,
    size,
    themeColor,
    icon,
    label,
    description,
  };
};

export type RadioUIState = {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size: keyof AdaptUI.GetThemeValue<"radio", "size">;

  /**
   * How the radio should be themed?
   *
   * @default base
   */
  themeColor: keyof AdaptUI.GetThemeValue<"radio", "themeColor">;

  /**
   * If true, Radio is checked.
   */
  isChecked: boolean;

  /**
   * Provide custom icons as a replacement for the default ones.
   *
   * @default RadioDefaultIcon
   */
  icon: RenderProp<RadioUIProps>;

  /**
   * Label for the Radio.
   */
  label?: RenderProp<RadioUIProps> | string;

  /**
   * Description for the Radio.
   */
  description?: RenderProp<RadioUIProps> | string;
};

export type RadioUIStateProps = Partial<
  Pick<RadioUIState, "size" | "icon" | "label" | "description" | "themeColor">
> & {
  state?: RadioState;
  inputValue?: RadioInputProps["value"];
};
