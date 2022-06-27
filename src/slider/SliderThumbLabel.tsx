import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxProps, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SliderThumbUIProps } from "./SliderThumbProps";

export const useSliderThumbLabel = createHook<SliderThumbLabelOptions>(
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
    const className = cx(theme.thumbLabel, props.className);

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const SliderThumbLabel = createComponent<SliderThumbLabelOptions>(
  props => {
    const htmlProps = useSliderThumbLabel(props);

    return createElement("label", htmlProps);
  },
);

export type SliderThumbLabelOptions<T extends As = "label"> = BoxProps<T> &
  Partial<SliderThumbUIProps> & {};

export type SliderThumbLabelProps<T extends As = "label"> = Props<
  SliderThumbLabelOptions<T>
>;
