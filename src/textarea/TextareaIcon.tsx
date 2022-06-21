import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { TextareaBaseProps } from "./TextareaBase";
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
    disabled,
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
      theme.icon.base,
      autoSize || resize === "none" ? theme.icon.autoSize : "",
      size ? theme.size[size]?.icon : "",
      disabled
        ? ""
        : variant
        ? cx(
            theme.variant[variant]?.default?.icon,
            theme.variant[variant]?.hover?.icon,
            theme.variant[variant]?.active?.icon,
            theme.variant[variant]?.focus?.icon,
            invalid ? theme.variant[variant]?.invalid?.icon : "",
          )
        : "",
      variant && disabled ? theme.variant[variant]?.disabled?.icon : "",
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
  Partial<TextareaUIProps> &
  Pick<TextareaBaseProps, "disabled"> & {};

export type TextareaIconProps<T extends As = "div"> = Props<
  TextareaIconOptions<T>
>;
