import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";
import { SliderInputOptions, useSliderInput } from "@adaptui/react";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { SliderThumbUIProps } from "./SliderThumbProps";

export const useSliderThumbInput = createHook<SliderThumbInputOptions>(
  ({
    state,
    size,
    themeColor,
    knobIcon,
    tooltip,
    index,
    isDisabled,
    ...props
  }) => {
    const theme = useTheme("slider");
    const className = cx(
      theme.input,
      size ? theme.size[size]?.input : "",
      props.className,
    );

    props = { ...props, className };
    props = useSliderInput({ state, ...props });
    props = useBox(props);

    return props;
  },
);

export const SliderThumbInput = createComponent<SliderThumbInputOptions>(
  props => {
    const htmlProps = useSliderThumbInput(props);

    return createElement("input", htmlProps);
  },
  "SliderThumbInput",
);

export type SliderThumbInputOptions<T extends As = "input"> = Omit<
  BoxOptions<T>,
  "size"
> &
  SliderInputOptions<T> &
  Partial<SliderThumbUIProps> & {};

export type SliderThumbInputProps<T extends As = "input"> = Props<
  SliderThumbInputOptions<T>
>;
