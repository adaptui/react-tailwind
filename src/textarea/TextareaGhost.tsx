import { FocusableOptions, useFocusable } from "ariakit";
import { useForkRef } from "ariakit-utils";
import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { TextareaUIProps } from "./TextareaProps";

export const useTextareaGhost = createHook<TextareaGhostOptions>(
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
      theme.ghost,
      props.className,
    );

    props = {
      "aria-invalid": invalid,
      ...props,
      className,
      ref: useForkRef(ghostRef, props.ref),
    };
    props = useFocusable(props);
    props = useBox(props);

    return props;
  },
);

export const TextareaGhost = createComponent<TextareaGhostOptions>(props => {
  const htmlProps = useTextareaGhost(props);

  return createElement("textarea", htmlProps);
}, "TextareaGhost");

export type TextareaGhostOptions<T extends As = "textarea"> = BoxOptions<T> &
  FocusableOptions<T> &
  Partial<TextareaUIProps> & {};

export type TextareaGhostProps<T extends As = "textarea"> = Props<
  TextareaGhostOptions<T>
>;
