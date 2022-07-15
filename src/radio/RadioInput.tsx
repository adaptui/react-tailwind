import { RadioOptions, RadioProps, useRadio } from "ariakit";
import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { RadioUIProps } from "./RadioProps";

export const useRadioInput = createHook<RadioInputOptions>(
  ({
    state,
    isChecked,
    size,
    themeColor,
    icon,
    label,
    description,
    stack,
    maxVisibleItems,
    ...props
  }) => {
    const theme = useTheme("radio");
    const className = cx(theme.input, props.className);

    props = { ...props, className };
    props = useRadio({ state, ...props }) as RadioProps;
    props = useBox(props) as RadioProps;

    return props;
  },
);

export const RadioInput = createComponent<RadioInputOptions>(props => {
  const htmlProps = useRadioInput(props);

  return createElement("input", htmlProps);
}, "RadioInput");

export type RadioInputOptions<T extends As = "input"> = RadioOptions<T> &
  Partial<RadioUIProps> & {};

export type RadioInputProps<T extends As = "input"> = Props<
  RadioInputOptions<T>
>;
