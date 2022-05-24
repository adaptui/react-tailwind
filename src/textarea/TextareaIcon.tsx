import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { TextareaUIProps } from "./TextareaProps";

export const useTextareaIcon = createHook<TextareaIconOptions>(
  ({
    size,
    variant,
    autoSize,
    resize,
    rowsMax,
    rowsMin,
    invalid,
    loading,
    icon,
    spinner,
    autoSizeOnChange,
    inputStyles,
    inputRef,
    ghostRef,
    ...props
  }) => {
    const theme = useTheme("textarea");
    const className = cx(
      theme.icon.common,
      autoSize ? theme.icon.normal : "",
      size ? theme.icon.size[size] : "",
      invalid ? theme.icon.invalid : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const TextareaIcon = createComponent<TextareaIconOptions>(props => {
  const htmlProps = useTextareaIcon(props);

  return createElement("div", htmlProps);
});

export type TextareaIconOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<TextareaUIProps> & {};

export type TextareaIconProps<T extends As = "div"> = Props<
  TextareaIconOptions<T>
>;
