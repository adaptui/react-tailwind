import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { useId } from "../hooks/useId";
import { useBoolean } from "../hooks/useBoolean";
import { createContext, runIfFn } from "../utils";
import { forwardRefWithAs, RenderProp } from "../utils/types";
import { useFormControl } from "./useFormControl";

export type CommonFieldProps = {
  id?: string;
  disabled?: boolean;
  invalid?: boolean;
  readonly?: boolean;
  required?: boolean;
};

type FormFieldContextProps = Omit<
  ReturnType<typeof useFormContextValues>,
  "htmlProps"
>;

const [
  FormFieldContextProvider,
  useFormFieldContext,
] = createContext<FormFieldContextProps>({ strict: false });

export { useFormFieldContext };

const useFormContextValues = (props: FormFieldProps) => {
  const { id, required, invalid, disabled, readonly, ...htmlProps } = props;
  const uuid = useId(id);
  const idProp = `field-${uuid}`;

  const labelId = `${idProp}-label`;
  const errorTextId = `${idProp}-error-text`;
  const helpTextId = `${idProp}-help-text`;

  const [hasHelpText, setHasHelpText] = useBoolean();
  const [hasErrorText, setHasErrorText] = useBoolean();

  const context = {
    required,
    invalid,
    readonly,
    disabled,
    fieldId: idProp,
    labelId,
    errorTextId,
    helpTextId,
    hasHelpText,
    hasErrorText,
    setHasHelpText,
    setHasErrorText,
    htmlProps,
  };

  return context;
};

export type FormFieldProps = BoxProps & CommonFieldProps;

export const FormField = forwardRefWithAs<
  FormFieldProps &
    RenderProp<
      FormFieldContextProps & {
        inputProps: ReturnType<typeof useFormControl>;
      }
    >,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { children, className, ...rest } = props;

  const theme = useTheme();
  const {
    htmlProps,
    errorTextId,
    helpTextId,
    setHasErrorText,
    setHasHelpText,
    hasErrorText,
    hasHelpText,
    ...context
  } = useFormContextValues(rest);

  const formFieldStyles = cx(theme.formField.wrapper.base, className);

  const controlProps = useFormControl(context, {
    errorTextId,
    helpTextId,
    setHasErrorText,
    setHasHelpText,
    hasErrorText,
    hasHelpText,
  });

  const originalContext = {
    ...context,
    errorTextId,
    helpTextId,
    setHasErrorText,
    setHasHelpText,
    hasErrorText,
    hasHelpText,
  };

  return (
    <FormFieldContextProvider value={originalContext}>
      <Box
        ref={ref}
        role="group"
        id={context.fieldId}
        className={formFieldStyles}
        {...htmlProps}
      >
        {runIfFn(children, {
          ...originalContext,
          inputProps: controlProps,
        })}
      </Box>
    </FormFieldContextProvider>
  );
});
