import { Box, BoxProps } from "../box";
import { useTheme } from "../theme";
import { forwardRefWithAs, tcm } from "../utils";

import { FormFieldContextProps, useFormFieldContext } from "./FormField";

type FormLabelProps = BoxProps & {};

export const FormLabel = forwardRefWithAs<
  FormLabelProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const { id, children, htmlFor, className, ...rest } = props;
  const { labelId, inputId } = useFormFieldContext() as FormFieldContextProps;

  const theme = useTheme();
  const labelStyles = tcm(theme.formField.labelText, className);

  return (
    <Box
      as="label"
      ref={ref}
      id={id || labelId}
      htmlFor={props.htmlFor ?? inputId}
      className={labelStyles}
      {...rest}
    >
      {children}
    </Box>
  );
});
