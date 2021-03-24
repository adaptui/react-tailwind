import { cx } from "@renderlesskit/react";
import * as React from "react";

import { Box, BoxProps } from "../box";
import { useTheme } from "../theme";
import { forwardRefWithAs } from "../utils/types";

export type TextareaProps = BoxProps & {
  resize?: keyof Renderlesskit.GetThemeValue<"textarea", "resize">;
};

export const Textarea = forwardRefWithAs<
  TextareaProps,
  HTMLTextAreaElement,
  "textarea"
>((props, ref) => {
  const { resize = "horizontal", className, children, ...rest } = props;

  const theme = useTheme();
  const textaresStyles = cx(
    theme.textarea.base,
    theme.textarea.resize[resize],
    className,
  );

  return <Box as="textarea" className={textaresStyles} ref={ref} {...rest} />;
});

Textarea.displayName = "Textarea";

export default Textarea;
