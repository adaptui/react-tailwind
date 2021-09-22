import { Input as ReakitInput, InputProps as ReakitInputProps } from "reakit";

import { Box } from "../box";
import { useFormControl } from "../form-field";
import { useTheme } from "../theme";
import { tcm } from "../utils";
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
    rowsMin = rows || 1,
    cols,
    value,
    className,
    style,
    children,
    onChange,
    ...rest
  } = props;
  const { handleChange, handleRef, shadowRef, inlineStyles } = useAutoSize({
    ref,
    value,
    rowsMax,
    autoSize,
    rowsMin,
    onChange,
    placeholder: props.placeholder,
  });
  const formFieldProps = useFormControl({
    isDisabled: isDisabled || props.disabled,
    isReadOnly: isReadOnly || props.readOnly,
    isInvalid,
    ...rest,
  });

  const theme = useTheme();
  const textaresStyles = tcm(
    theme.textarea.base,
    theme.textarea.resize[resize],
    className,
  );
  const shadowTextareaStyles = tcm(textaresStyles, theme.textarea.shadow);
  const textareaInlineStyles = {
    height: inlineStyles.outerHeightStyle,
    // Need a large enough difference to allow scrolling.
    // This prevents infinite rendering loop.
    overflow: inlineStyles.overflow ? "hidden" : undefined,
    ...style,
  };

  return (
    <>
      <ReakitInput
        as="textarea"
        ref={handleRef}
        value={value}
        onChange={handleChange}
        rows={rowsMin}
        cols={cols}
        style={textareaInlineStyles}
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
    </>
  );
});

Textarea.displayName = "Textarea";

export default Textarea;
