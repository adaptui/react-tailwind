import * as React from "react";
import { cx } from "@renderlesskit/react";
import { Input as ReakitInput, InputProps as ReakitInputProps } from "reakit";

import { Box } from "../box";
import { useTheme } from "../theme";
import { useFormControl } from "../form-field";
import { forwardRefWithAs } from "../utils/types";
import { useAutoSize } from "./useAutoSize";

export type TextareaProps = ReakitInputProps & {
  resize?: keyof Renderlesskit.GetThemeValue<"textarea", "resize">;
  cols?: number;
  rowsMin?: number;
  rowsMax?: number;
  autoSize?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
};

export const Textarea = forwardRefWithAs<
  TextareaProps,
  HTMLTextAreaElement,
  "textarea"
>((props, ref) => {
  const {
    isDisabled,
    isReadOnly,
    isInvalid,
    autoSize,
    resize = "horizontal",
    rows,
    rowsMax,
    rowsMin = 1,
    cols,
    value,
    className,
    style,
    children,
    onChange,
    ...rest
  } = props;
  const rowsMinProp = rows || rowsMin;

  const { handleChange, handleRef, shadowRef, state } = useAutoSize({
    autoSize,
    value,
    rowsMax,
    rowsMinProp,
    onChange,
    ref,
    placeholder: props.placeholder,
  });

  const theme = useTheme();
  const textaresStyles = cx(
    theme.textarea.base,
    theme.textarea.resize[resize],
    className,
  );
  const shadowTextareaStyles = cx(textaresStyles, theme.textarea.shadow);

  const formFieldProps = useFormControl({
    isDisabled: isDisabled || props.disabled,
    isReadOnly: isReadOnly || props.readOnly,
    isInvalid: isInvalid,
    ...rest,
  });

  return (
    <React.Fragment>
      <ReakitInput
        as="textarea"
        ref={handleRef}
        value={value}
        onChange={handleChange}
        rows={rowsMinProp}
        cols={cols}
        style={{
          height: state.outerHeightStyle,
          // Need a large enough difference to allow scrolling.
          // This prevents infinite rendering loop.
          overflow: state.overflow ? "hidden" : undefined,
          ...style,
        }}
        className={textaresStyles}
        {...formFieldProps}
      />
      <Box
        as="textarea"
        ref={shadowRef}
        aria-hidden
        readOnly
        tabIndex={-1}
        className={shadowTextareaStyles}
      />
    </React.Fragment>
  );
});

Textarea.displayName = "Textarea";

export default Textarea;
