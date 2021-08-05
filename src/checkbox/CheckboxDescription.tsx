import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { useCheckboxContext } from "./Checkbox";

export type CheckboxDescriptionProps = BoxProps & {};

export const CheckboxDescription = forwardRefWithAs<
  CheckboxDescriptionProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { className, ...rest } = props;
  const { size = "md" } = useCheckboxContext();

  const theme = useTheme();
  const checkboxDescriptionStyles = cx(
    theme.checkbox.field.description.base,
    theme.checkbox.field.description.size[size],
    className,
  );

  return (
    <Box as="span" ref={ref} className={checkboxDescriptionStyles} {...rest} />
  );
});

CheckboxDescription.displayName = "CheckboxDescription";
