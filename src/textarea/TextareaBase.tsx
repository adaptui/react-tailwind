import * as React from "react";
import { createHook } from "reakit-system";
import { TabbableHTMLProps, TabbableOptions, useTabbable } from "reakit";
import { useForkRef, useLiveRef } from "reakit-utils";
import { ariaAttr, createComponent } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { tcm } from "../utils";

import { TEXTAREA_BASE_KEYS } from "./__keys";
import { TextareaStateReturn } from "./TextareaState";

export type TextareaBaseOptions = TabbableOptions &
  Pick<
    TextareaStateReturn,
    | "size"
    | "variant"
    | "icon"
    | "invalid"
    | "resize"
    | "rowsMin"
    | "inputRef"
    | "inputStyles"
    | "autoSizeOnChange"
  > & {};

export type TextareaBaseHTMLProps = Omit<TabbableHTMLProps, "size" | "prefix"> &
  React.TextareaHTMLAttributes<any>;

export type TextareaBaseProps = TextareaBaseOptions & TextareaBaseHTMLProps;

export const useTextareaBase = createHook<
  TextareaBaseOptions,
  TextareaBaseHTMLProps
>({
  name: "TextareaBase",
  compose: useTabbable,
  keys: TEXTAREA_BASE_KEYS,

  useProps(options, htmlProps) {
    const {
      size,
      variant,
      invalid,
      disabled,
      resize,
      rowsMin,
      inputRef,
      inputStyles,
      autoSizeOnChange,
    } = options;

    const {
      className: htmlClassName,
      ref: htmlRef,
      style: htmlStyle,
      onChange: htmlOnChange,
      ...restHtmlProps
    } = htmlProps;
    const onChangeRef = useLiveRef(htmlOnChange);
    const theme = useTheme("textarea");
    const className = tcm(
      theme.base.common,
      theme.base.size[size],
      theme.base.variant[variant].common,
      disabled || invalid ? "" : theme.base.variant[variant].interactions,
      disabled ? theme.base.variant[variant].disabled : "",
      invalid ? theme.base.variant[variant].invalid : "",
      theme.base.resize[resize],
      htmlClassName,
    );

    const onChange = React.useCallback(
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChangeRef.current?.(event);
        if (event.defaultPrevented) return;

        autoSizeOnChange?.(event);
      },
      [onChangeRef, autoSizeOnChange],
    );

    return {
      ref: useForkRef(inputRef, htmlRef),
      className,
      disabled,
      style: { ...inputStyles, ...htmlStyle },
      onChange,
      rows: rowsMin,
      "aria-invalid": ariaAttr(invalid),
      ...restHtmlProps,
    };
  },
});

export const TextareaBase = createComponent({
  as: "textarea",
  memo: true,
  useHook: useTextareaBase,
});
