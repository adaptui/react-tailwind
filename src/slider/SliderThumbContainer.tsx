import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";
import { SliderThumbOptions, useSliderThumb } from "@adaptui/react";

import { BoxProps, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SliderThumbUIProps } from "./SliderThumbProps";

export const useSliderThumbContainer = createHook<SliderThumbContainerOptions>(
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
      theme.thumbContainer.default,
      isDisabled ? theme.thumbContainer.disabled : "",
      size ? theme.size[size]?.thumbContainer : "",
      !isDisabled
        ? themeColor
          ? cx(
              theme.themeColor[themeColor]?.thumbContainer?.default,
              theme.themeColor[themeColor]?.thumbContainer?.hover,
              theme.themeColor[themeColor]?.thumbContainer?.active,
              theme.themeColor[themeColor]?.thumbContainer?.focus,
            )
          : ""
        : themeColor
        ? theme.themeColor[themeColor]?.thumbContainer?.disabled
        : "",
      props.className,
    );

    props = { ...props, className };
    props = useSliderThumb({ state, ...props, children: null });
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
