import { Tabbable, TabbableProps } from "reakit";
import { ariaAttr } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { forwardRefWithAs, tcm } from "../utils";

import { useAutoSize } from "./useAutoSize";

export type TextareaProps = TabbableProps &
  React.TextareaHTMLAttributes<any> & {
    /**
     * How large should the textarea be?
     *
     * @default md
     */
    size?: keyof Renderlesskit.GetThemeValue<"textarea", "base", "size">;

    /**
     * How the textarea should look?
     *
     * @default solid
     */
    variant?: keyof Renderlesskit.GetThemeValue<"textarea", "base", "variant">;

    /**
     * Minimum number of rows to be displayed.
     *
     * @default 1
     */
    rowsMin?: number;

    /**
     * Maximum number of rows to be displayed.
     */
    rowsMax?: number;

    /**
     * Direction of the textarea in which it can be resized.
     */
    resize?: keyof Renderlesskit.GetThemeValue<"textarea", "base", "resize">;

    /**
     * Whether the textarea should autosize on typing.
     */
    autoSize?: boolean;

    /**
     * True, if the input text to the textarea is invalid.
     */
    invalid?: boolean;
  };

export const Textarea = forwardRefWithAs<
  TextareaProps,
  HTMLTextAreaElement,
  "textarea"
>((props, ref) => {
  const {
    size = "md",
    variant = "outline",
    autoSize = false,
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
    invalid = false,
    disabled,
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
  const textaresStyles = tcm(
    theme.base.common,
    theme.base.size[size],
    theme.base.variant[variant].common,
    disabled || invalid ? "" : theme.base.variant[variant].interactions,
    disabled ? theme.base.variant[variant].disabled : "",
    invalid ? theme.base.variant[variant].invalid : "",
    theme.base.resize[resize],
    className,
  );
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
      <Tabbable
        as="textarea"
        ref={handleRef}
        value={value}
        onChange={handleChange}
        rows={rowsMin}
        cols={cols}
        style={textareaInlineStyles}
        className={textaresStyles}
        disabled={disabled}
        aria-invalid={ariaAttr(invalid)}
        {...rest}
      />
      <Tabbable
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
