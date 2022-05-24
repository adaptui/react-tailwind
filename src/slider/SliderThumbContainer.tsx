import { SliderThumbOptions, useSliderThumb } from "@renderlesskit/react";
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

export const useSliderThumbContainer = createHook<SliderThumbContainerOptions>(
  ({ state, size, knobIcon, tooltip, index, isDisabled, ...props }) => {
    const theme = useTheme("slider");
    const className = cx(
      theme.thumb.container.base.common,
      size ? theme.thumb.container.base.size[size] : "",
      isDisabled
        ? theme.thumb.container.disabled
        : theme.thumb.container.common,
      props.className,
    );

    props = { ...props, className };
    props = useSliderThumb({ state, ...props });
    props = useBox(props);

    return props;
  },
);

export const SliderThumbContainer =
  createComponent<SliderThumbContainerOptions>(props => {
    const htmlProps = useSliderThumbContainer(props);

    return createElement("div", htmlProps);
  });

export type SliderThumbContainerOptions<T extends As = "div"> = BoxProps<T> &
  SliderThumbOptions<T> &
  Partial<SliderThumbUIProps> & {};

export type SliderThumbContainerProps<T extends As = "div"> = Props<
  SliderThumbContainerOptions<T>
>;
