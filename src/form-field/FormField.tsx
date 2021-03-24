import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { useId } from "../hooks/useId";
import { createContext } from "../utils";
import { forwardRefWithAs } from "../utils/types";

type FormFieldContextProps = {
  fieldId: string;
  labelId: string;
  errorTextId: string;
  helpTextId: string;
  invalid?: boolean;
  required?: boolean;
};

const [
  FormFieldContextProvider,
  useFormFieldContext,
] = createContext<FormFieldContextProps>({ strict: false });

export { useFormFieldContext };

export type FormFieldProps = BoxProps & {
  invalid?: boolean;
  required?: boolean;
};

export const FormField = forwardRefWithAs<
  FormFieldProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const {
    id,
    children,
    className,
    invalid = false,
    required = false,
    ...rest
  } = props;

  const theme = useTheme();
  const uuid = useId(id);
  const idProp = `field-${uuid}`;

  const labelId = `${idProp}-label`;
  const errorTextId = `${idProp}-error-text`;
  const helpTextId = `${idProp}-help-text`;

  const context = {
    fieldId: idProp,
    labelId,
    errorTextId,
    helpTextId,
    required,
    invalid,
  };

  const formFieldStyles = cx(theme.formField.wrapper.base, className);

  return (
    <FormFieldContextProvider value={context}>
      <Box
        id={idProp}
        role="group"
        ref={ref}
        className={formFieldStyles}
        {...rest}
      >
        {children}
      </Box>
    </FormFieldContextProvider>
  );
});
