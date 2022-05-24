import { useForkRef } from "ariakit-utils";
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
      theme.ghost,
      props.className,
    );

    props = {
      "aria-invalid": invalid,
      ...props,
      className,
      ref: useForkRef(ghostRef, props.ref),
    };
    props = useBox(props);

    return props;
  },
);

export const TextareaGhost = createComponent<TextareaGhostOptions>(props => {
  const htmlProps = useTextareaGhost(props);

  return createElement("textarea", htmlProps);
});

export type TextareaGhostOptions<T extends As = "textarea"> = BoxOptions<T> &
  Partial<TextareaUIProps> & {};

export type TextareaGhostProps<T extends As = "textarea"> = Props<
  TextareaGhostOptions<T>
>;
