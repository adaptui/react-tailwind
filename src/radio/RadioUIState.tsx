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
    icon = RadioDefaultIcon,
    label,
    description,
  } = props;
  const isChecked = state?.value === inputValue;

  return {
    isChecked,
    size,
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
  size: keyof Renderlesskit.GetThemeValue<"radio", "icon", "size">;

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
  Pick<RadioUIState, "size" | "icon" | "label" | "description">
> & {
  state?: RadioState;
  inputValue?: RadioInputProps["value"];
};
