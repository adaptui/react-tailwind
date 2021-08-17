import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";

export type CheckboxTextProps = BoxProps & {
  size: keyof Renderlesskit.GetThemeValue<"checkboxNew", "icon", "size">;
};

export const CheckboxText = forwardRefWithAs<
  CheckboxTextProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { size, className, ...rest } = props;

  const theme = useTheme("checkboxNew");
  const checkboxTextStyles = cx(
    theme.text.base,
    theme.text.size[size],
    className,
  );

  return <Box as="span" ref={ref} className={checkboxTextStyles} {...rest} />;
});

CheckboxText.displayName = "CheckboxText";
