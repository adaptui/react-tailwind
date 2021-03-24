import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { useFormFieldContext } from "./FormField";

type FormErrorMessageProps = BoxProps & {};

export const FormErrorMessage = forwardRefWithAs<
  FormErrorMessageProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { id, children, className, ...rest } = props;
  const { errorTextId, invalid } = useFormFieldContext();
  const theme = useTheme();
  const errorStyles = cx(theme.formField.errorText, className);

  return invalid ? (
    <Box
      aria-live="polite"
      ref={ref}
      id={id || errorTextId}
      className={errorStyles}
      {...rest}
    >
      {children}
    </Box>
  ) : null;
});
