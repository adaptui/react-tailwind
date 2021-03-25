import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { useFormFieldContext } from "./FormField";

type FormRequiredTextProps = BoxProps & {};

export const FormRequiredText = forwardRefWithAs<
  FormRequiredTextProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { children, className, ...rest } = props;
  const { required } = useFormFieldContext();

  const theme = useTheme();
  const requiredStyles = cx(theme.formField.requiredText, className);

  return required ? (
    <Box ref={ref} className={requiredStyles} aria-hidden={true} {...rest}>
      {children}
    </Box>
  ) : null;
});
