import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { useId } from "../hooks/useId";
import { Box, BoxProps } from "../box";
import { useBoolean } from "../hooks/useBoolean";
import { useFormControl } from "./useFormControl";
import { createContext, runIfFn } from "../utils";
import { forwardRefWithAs, RenderProp } from "../utils/types";

export type CommonFieldProps = {
  id?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
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
  const {
    id,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...htmlProps
  } = props;
  const uuid = useId(id);
  const idProp = `field-${uuid}`;

  const labelId = `${idProp}-label`;
  const errorTextId = `${idProp}-error-text`;
  const helpTextId = `${idProp}-help-text`;

  const [hasHelpText, setHasHelpText] = useBoolean(false);
  const [hasErrorText, setHasErrorText] = useBoolean(false);

  const context = {
    isRequired,
    isInvalid,
    isReadOnly,
    isDisabled,
    inputId: id,
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
  const { htmlProps, ...context } = useFormContextValues(rest);

  const formFieldStyles = cx(theme.formField.wrapper.base, className);

  return (
    <FormFieldContextProvider value={context}>
      <Box
        ref={ref}
        role="group"
        id={context.fieldId}
        className={formFieldStyles}
        {...htmlProps}
      >
        <FormRenderProp children={children} htmlProps={htmlProps} />
      </Box>
    </FormFieldContextProvider>
  );
});

const FormRenderProp: React.FC<{ htmlProps: FormFieldProps }> = ({
  children,
  htmlProps,
}) => {
  const context = useFormFieldContext();
  const controlProps = useFormControl(htmlProps);

  return (
    <>
      {runIfFn(children, {
        ...context,
        inputProps: controlProps,
      })}
    </>
  );
};
