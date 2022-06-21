import { FocusableOptions, useFocusable } from "ariakit";
import { cx, useForkRef } from "ariakit-utils";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { useTheme } from "../theme";
import { tcm } from "../utils";

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
    const className = tcm(
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

    return props;
  },
);

export const TextareaGhost = createComponent<TextareaGhostOptions>(props => {
  const htmlProps = useTextareaGhost(props);

  return createElement("textarea", htmlProps);
});

export type TextareaGhostOptions<T extends As = "textarea"> =
  FocusableOptions<T> & Partial<TextareaUIProps> & {};

export type TextareaGhostProps<T extends As = "textarea"> = Props<
  TextareaGhostOptions<T>
>;
