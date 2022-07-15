import { CheckboxOptions, CheckboxProps, useCheckbox } from "ariakit";
import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, BoxProps, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { SwitchUIProps } from "./SwitchProps";

export const useSwitchInput = createHook<SwitchInputOptions>(
  ({ state, size, isChecked, icon, label, description, ...props }) => {
    const theme = useTheme("switch");
    const className = cx(theme.input, props.className);

    props = useCheckbox({ ...props, state }) as CheckboxProps;
    props = { ...props, className, role: "switch" };
    props = useBox(props as BoxProps) as CheckboxProps;

    return props;
  },
);

export const SwitchInput = createComponent<SwitchInputOptions>(props => {
  const htmlProps = useSwitchInput(props);

  return createElement("input", htmlProps);
}, "SwitchInput");

export type SwitchInputOptions<T extends As = "input"> = BoxOptions<T> &
  CheckboxOptions<T> &
  Partial<Omit<SwitchUIProps, "disabled">> & {};

export type SwitchInputProps<T extends As = "input"> = Props<
  SwitchInputOptions<T>
>;
