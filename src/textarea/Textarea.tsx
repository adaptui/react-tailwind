import { Box, BoxProps } from "../box";
import { useTheme } from "../theme";
import { forwardRefWithAs, tcm } from "../utils";

import { useAutoSize } from "./useAutoSize";

export type TextareaProps = BoxProps &
  React.TextareaHTMLAttributes<any> & {
    resize?: keyof Renderlesskit.GetThemeValue<"textarea", "resize">;
    cols?: number;
    rowsMin?: number;
    rowsMax?: number;
    autoSize?: boolean;
  };

export const Textarea = forwardRefWithAs<
  TextareaProps,
  HTMLTextAreaElement,
  "textarea"
>((props, ref) => {
  const {
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

  const theme = useTheme("textarea");
  const textaresStyles = tcm(theme.base, theme.resize[resize], className);
  const shadowTextareaStyles = tcm(textaresStyles, theme.shadow);
  const textareaInlineStyles = {
    height: inlineStyles.outerHeightStyle,
    // Need a large enough difference to allow scrolling.
    // This prevents infinite rendering loop.
    overflow: inlineStyles.overflow ? "hidden" : undefined,
    ...style,
  };

  return (
    <>
      <Box
        as="textarea"
        ref={handleRef}
        value={value}
        onChange={handleChange}
        rows={rowsMin}
        cols={cols}
        style={textareaInlineStyles}
        className={textaresStyles}
        {...rest}
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
