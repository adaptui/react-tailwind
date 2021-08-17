import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";

export type CheckboxDescriptionProps = BoxProps & {
  size: keyof Renderlesskit.GetThemeValue<"checkboxNew", "icon", "size">;
};

export const CheckboxDescription = forwardRefWithAs<
  CheckboxDescriptionProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { size, className, ...rest } = props;

  const theme = useTheme("checkboxNew");
  const checkboxDescriptionStyles = cx(
    theme.description.base,
    theme.description.size[size],
    className,
  );

  return (
    <Box as="span" ref={ref} className={checkboxDescriptionStyles} {...rest} />
  );
});

CheckboxDescription.displayName = "CheckboxDescription";
