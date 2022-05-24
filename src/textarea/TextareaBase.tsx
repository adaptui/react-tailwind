import { ChangeEvent } from "react";
import { useEvent, useForkRef } from "ariakit-utils";
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

export const useTextareaBase = createHook<TextareaBaseOptions>(
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
      theme.base.common,
      size ? theme.base.size[size] : "",
      variant ? theme.base.variant[variant].common : "",
      props.disabled || invalid
        ? ""
        : variant
        ? theme.base.variant[variant].interactions
        : "",
      variant && props.disabled ? theme.base.variant[variant].disabled : "",
      variant && invalid ? theme.base.variant[variant].invalid : "",
      resize ? theme.base.resize[resize] : "",
      props.className,
    );

    const onChangeProp = props.onChange;

    const onChange = useEvent((event: ChangeEvent<HTMLTextAreaElement>) => {
      onChangeProp?.(event);
      if (event.defaultPrevented) return;

      autoSizeOnChange?.(event);
    });

    props = {
      "aria-invalid": invalid,
      rows: rowsMin,
      ...props,
      ref: useForkRef(inputRef, props.ref),
      onChange,
      className,
      style: { ...inputStyles, ...props.style },
    };
    props = useBox(props);

    return props;
  },
);

export const TextareaBase = createComponent<TextareaBaseOptions>(props => {
  const htmlProps = useTextareaBase(props);

  return createElement("textarea", htmlProps);
});

export type TextareaBaseOptions<T extends As = "textarea"> = BoxOptions<T> &
  Partial<TextareaUIProps> & {};

export type TextareaBaseProps<T extends As = "textarea"> = Props<
  TextareaBaseOptions<T>
>;
