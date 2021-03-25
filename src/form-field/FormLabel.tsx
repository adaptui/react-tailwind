import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { useFormFieldContext } from "./FormField";

type FormLabelProps = BoxProps & {};

export const FormLabel = forwardRefWithAs<
  FormLabelProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const { id, children, htmlFor, className, ...rest } = props;
  const { labelId, fieldId } = useFormFieldContext();

  const theme = useTheme();
  const labelStyles = cx(theme.formField.labelText, className);

  return (
    <Box
      as="label"
      ref={ref}
      id={id || labelId}
      htmlFor={props.htmlFor ?? fieldId}
      className={labelStyles}
      {...rest}
    >
      {children}
    </Box>
  );
});
