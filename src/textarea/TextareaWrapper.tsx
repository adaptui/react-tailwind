import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { TextareaUIProps } from "./TextareaProps";

export const useTextareaWrapper = createHook<TextareaWrapperOptions>(
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
    const className = cx(theme.wrapper, props.className);

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const TextareaWrapper = createComponent<TextareaWrapperOptions>(
  props => {
    const htmlProps = useTextareaWrapper(props);

    return createElement("div", htmlProps);
  },
  "TextareaWrapper",
);

export type TextareaWrapperOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<TextareaUIProps> & {};

export type TextareaWrapperProps<T extends As = "div"> = Props<
  TextareaWrapperOptions<T>
>;
