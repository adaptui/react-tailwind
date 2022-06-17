import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { RadioUIProps } from "./RadioProps";

export const useRadioDescription = createHook<RadioDescriptionOptions>(
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
    const className = cx(
      theme.description.common,
      size ? theme.description.size[size] : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const RadioDescription = createComponent<RadioDescriptionOptions>(
  props => {
    const htmlProps = useRadioDescription(props);

    return createElement("div", htmlProps);
  },
);

export type RadioDescriptionOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<RadioUIProps> & {};

export type RadioDescriptionProps<T extends As = "div"> = Props<
  RadioDescriptionOptions<T>
>;
