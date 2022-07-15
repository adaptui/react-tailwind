import { CheckboxOptions, CheckboxProps, useCheckbox } from "ariakit";
import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, BoxProps, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { CheckboxUIProps } from "./CheckboxProps";

export const useCheckboxInput = createHook<CheckboxInputOptions>(
  ({
    state,
    size,
    themeColor,
    isChecked,
    isIndeterminate,
    isUnchecked,
    icon,
    label,
    description,
    stack,
    maxVisibleItems,
    ...props
  }) => {
    const theme = useTheme("checkbox");
    const className = cx(theme.input, props.className);

    props = { ...props, className };

    props = useBox(props as BoxProps) as CheckboxProps;
    props = useCheckbox({ ...props, state }) as CheckboxProps;

    return props;
  },
);

export const CheckboxInput = createComponent<CheckboxInputOptions>(props => {
  const htmlProps = useCheckboxInput(props);

  return createElement("input", htmlProps);
}, "CheckboxInput");

export type CheckboxInputOptions<T extends As = "input"> = BoxOptions<T> &
  CheckboxOptions<T> &
  Partial<CheckboxUIProps> & {};

export type CheckboxInputProps<T extends As = "input"> = Props<
  CheckboxInputOptions<T>
>;
