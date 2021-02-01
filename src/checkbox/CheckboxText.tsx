import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { CheckboxStateProps, useCheckboxTheme } from "./Checkbox";

export type CheckboxTextProps = BoxProps & CheckboxStateProps;

export const CheckboxText = forwardRefWithAs<
  CheckboxTextProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { state, size, className, ...rest } = props;

  const checkboxTheme = useCheckboxTheme();
  const _size = size || checkboxTheme?.size || "sm";

  const theme = useTheme();
  const checkboxLabelStyles = cx(
    theme.checkbox.label.base,
    theme.checkbox.label.size[_size],
    className,
  );

  return <Box className={checkboxLabelStyles} ref={ref} {...rest} />;
});
