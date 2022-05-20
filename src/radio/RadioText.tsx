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

export const useRadioText = createHook<RadioTextOptions>(
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
      theme.text.common,
      size ? theme.text.size[size] : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const RadioText = createComponent<RadioTextOptions>(props => {
  const htmlProps = useRadioText(props);

  return createElement("div", htmlProps);
});

export type RadioTextOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<RadioUIProps> & {};

export type RadioTextProps<T extends As = "div"> = Props<RadioTextOptions<T>>;
