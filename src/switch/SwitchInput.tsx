import { CheckboxOptions, CheckboxProps, useCheckbox } from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { useTheme } from "../theme";
import { tcm } from "../utils";

import { SwitchUIProps } from "./SwitchProps";

export const useSwitchInput = createHook<SwitchInputOptions>(
  ({ state, size, isChecked, icon, label, description, ...props }) => {
    const theme = useTheme("switch");
    const className = tcm(theme.input, props.className);

    props = useCheckbox({ ...props, state }) as CheckboxProps;
    props = { ...props, className, role: "switch" };

    return props;
  },
);

export const SwitchInput = createComponent<SwitchInputOptions>(props => {
  const htmlProps = useSwitchInput(props);

  return createElement("input", htmlProps);
});

export type SwitchInputOptions<T extends As = "input"> = CheckboxOptions<T> &
  Partial<Omit<SwitchUIProps, "disabled">> & {};

export type SwitchInputProps<T extends As = "input"> = Props<
  SwitchInputOptions<T>
>;
