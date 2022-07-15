import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { TextareaBaseProps } from "./TextareaBase";
import { TextareaUIProps } from "./TextareaProps";

export const useTextareaSpinner = createHook<TextareaSpinnerOptions>(
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
      theme.spinner.base,
      autoSize || resize === "none" ? theme.spinner.autoSize : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const TextareaSpinner = createComponent<TextareaSpinnerOptions>(
  props => {
    const htmlProps = useTextareaSpinner(props);

    return createElement("div", htmlProps);
  },
  "TextareaSpinner",
);

export type TextareaSpinnerOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<TextareaUIProps> &
  Pick<TextareaBaseProps, "disabled"> & {};

export type TextareaSpinnerProps<T extends As = "div"> = Props<
  TextareaSpinnerOptions<T>
>;
