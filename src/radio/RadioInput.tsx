import { RadioOptions, RadioProps, useRadio } from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { useTheme } from "../theme";
import { tcm } from "../utils";

import { RadioUIProps } from "./RadioProps";

export const useRadioInput = createHook<RadioInputOptions>(
  ({
    state,
    isChecked,
    size,
    icon,
    label,
    description,
    stack,
    maxVisibleItems,
    ...props
  }) => {
    const theme = useTheme("radio");
    const className = tcm(theme.input, props.className);

    props = { ...props, className };
    props = useRadio({ state, ...props }) as RadioProps;

    return props;
  },
);

export const RadioInput = createComponent<RadioInputOptions>(props => {
  const htmlProps = useRadioInput(props);

  return createElement("input", htmlProps);
});

export type RadioInputOptions<T extends As = "input"> = RadioOptions<T> &
  Partial<RadioUIProps> & {};

export type RadioInputProps<T extends As = "input"> = Props<
  RadioInputOptions<T>
>;
