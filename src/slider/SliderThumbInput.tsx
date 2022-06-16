import { cx } from "ariakit-utils";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";
import { SliderInputOptions, useSliderInput } from "@adaptui/react";

import { BoxProps, useBox } from "../box";
import { useTheme } from "../theme";

import { SliderThumbUIProps } from "./SliderThumbProps";

export const useSliderThumbInput = createHook<SliderThumbInputOptions>(
  ({ state, size, knobIcon, tooltip, index, isDisabled, ...props }) => {
    const theme = useTheme("slider");
    const className = cx(
      theme.thumb.input.common,
      size ? theme.thumb.input.size[size] : "",
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
);

export type SliderThumbInputOptions<T extends As = "input"> = BoxProps<T> &
  SliderInputOptions<T> &
  Partial<SliderThumbUIProps> & {};

export type SliderThumbInputProps<T extends As = "input"> = Props<
  SliderThumbInputOptions<T>
>;
