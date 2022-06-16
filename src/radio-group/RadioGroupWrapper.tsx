import { RadioGroupOptions, useRadioGroup } from "ariakit";
import { cx } from "ariakit-utils";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { useTheme } from "../theme";

import { RadioGroupUIProps } from "./RadioGroupProps";

export const useRadioGroupWrapper = createHook<RadioGroupWrapperOptions>(
  ({ state, size, themeColor, stack, maxVisibleItems, prefix, ...props }) => {
    const theme = useTheme("radio");
    const className = cx(
      stack ? theme.group[stack].common : "",
      stack && size ? theme.group[stack].size[size] : "",
      props.className,
    );

    props = { ...props, className };
    props = useRadioGroup({ state, ...props });

    return props;
  },
);

export const RadioGroupWrapper = createComponent<RadioGroupWrapperOptions>(
  props => {
    const htmlProps = useRadioGroupWrapper(props);

    return createElement("div", htmlProps);
  },
);

export type RadioGroupWrapperOptions<T extends As = "div"> =
  RadioGroupOptions<T> & Partial<RadioGroupUIProps> & {};

export type RadioGroupWrapperProps<T extends As = "div"> = Props<
  RadioGroupWrapperOptions<T>
>;
