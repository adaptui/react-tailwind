import { CheckboxOptions, CheckboxProps, useCheckbox } from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { useTheme } from "../theme";
import { cx } from "../utils";

import { CheckboxUIProps } from "./CheckboxProps";

export const useCheckboxInput = createHook<CheckboxInputOptions>(
  ({
    state,
    size,
    isChecked,
    isIndeterminate,
    isUnchecked,
    icon,
    label,
    description,
    ...props
  }) => {
    const theme = useTheme("checkbox");
    const className = cx(theme.input, props.className);

    props = { ...props, className };

    props = useCheckbox({ state, ...props }) as CheckboxProps;

    return props;
  },
);

export const CheckboxInput = createComponent<CheckboxInputOptions>(props => {
  const htmlProps = useCheckboxInput(props);

  return createElement("input", htmlProps);
});

export type CheckboxInputOptions<T extends As = "input"> = CheckboxOptions<T> &
  Partial<CheckboxUIProps> & {};

export type CheckboxInputProps<T extends As = "input"> = Props<
  CheckboxInputOptions<T>
>;
