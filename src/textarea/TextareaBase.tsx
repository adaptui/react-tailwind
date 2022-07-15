import { ChangeEvent } from "react";
import { FocusableOptions, useFocusable } from "ariakit";
import { useEvent, useForkRef } from "ariakit-utils";
import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

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
      theme.base.default,
      resize ? theme.base.resize[resize] : "",
      size ? theme.size[size]?.base : "",
      props.disabled
        ? ""
        : variant
        ? cx(
            theme.variant[variant]?.default?.base,
            theme.variant[variant]?.hover?.base,
            theme.variant[variant]?.active?.base,
            theme.variant[variant]?.focus?.base,
            invalid ? theme.variant[variant]?.invalid?.base : "",
          )
        : "",
      variant && props.disabled ? theme.variant[variant]?.disabled?.base : "",
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
    props = useFocusable(props);
    props = useBox(props);

    return props;
  },
);

export const TextareaBase = createComponent<TextareaBaseOptions>(props => {
  const htmlProps = useTextareaBase(props);

  return createElement("textarea", htmlProps);
}, "TextareaBase");

export type TextareaBaseOptions<T extends As = "textarea"> = BoxOptions<T> &
  FocusableOptions<T> &
  Partial<TextareaUIProps> & {};

export type TextareaBaseProps<T extends As = "textarea"> = Props<
  TextareaBaseOptions<T>
>;
