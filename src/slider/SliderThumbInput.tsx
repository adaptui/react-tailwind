import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";
import { SliderInputOptions, useSliderInput } from "@adaptui/react";

import { BoxProps } from "../box";
import { useTheme } from "../theme";
import { tcm } from "../utils";

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
    const className = tcm(
      theme.input,
      size ? theme.size[size]?.input : "",
      props.className,
    );

    props = { ...props, className };
    props = useSliderInput({ state, ...props });

    return props;
  },
);

export const SliderThumbInput = createComponent<SliderThumbInputOptions>(
  props => {
    const htmlProps = useSliderThumbInput(props);

    return createElement("input", htmlProps);
  },
);

export type SliderThumbInputOptions<T extends As = "input"> = Omit<
  BoxProps<T>,
  "size"
> &
  SliderInputOptions<T> &
  Partial<SliderThumbUIProps> & {};

export type SliderThumbInputProps<T extends As = "input"> = Props<
  SliderThumbInputOptions<T>
>;
