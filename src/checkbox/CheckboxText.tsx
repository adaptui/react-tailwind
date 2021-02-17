import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { useCheckboxContext } from "./Checkbox";
import { forwardRefWithAs } from "../utils/types";

export type CheckboxTextProps = BoxProps & {};

export const CheckboxText = forwardRefWithAs<
  CheckboxTextProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;

  const { size = "md" } = useCheckboxContext();

  const theme = useTheme();
  const checkboxLabelStyles = cx(
    theme.checkbox.label.base,
    theme.checkbox.label.size[size],
    className,
  );

  return <Box className={checkboxLabelStyles} ref={ref} {...rest} />;
});
