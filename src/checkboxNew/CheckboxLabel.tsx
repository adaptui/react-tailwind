import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";

export type CheckboxLabelProps = BoxProps & {};

export const CheckboxLabel = forwardRefWithAs<
  CheckboxLabelProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const { className, ...rest } = props;

  const theme = useTheme("checkboxNew");
  const checkboxLabelStyles = cx(theme.label, className);

  return <Box as="label" ref={ref} className={checkboxLabelStyles} {...rest} />;
});

CheckboxLabel.displayName = "CheckboxLabel";
