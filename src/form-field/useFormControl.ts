import { ariaAttr } from "@renderlesskit/react";
import { CommonFieldProps, useFormFieldContext } from "./FormField";

export interface UseFormControlProps extends CommonFieldProps {
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  invalid?: boolean;
}

/**
 * React hook that provides the props that should be spread on to
 * input fields (`input`, `select`, `textarea`, etc.).
 *
 * It provides a convenient way to control a form fields, validation
 * and helper text.
 */
export function useFormControl(props: UseFormControlProps = {}, _field?: any) {
  const field = useFormFieldContext() || _field;
  const describedBy: string[] = [];

  // Error message must be described first in all scenarios.
  if (field?.hasErrorText) describedBy.push(field?.errorTextId);
  if (field?.hasHelpText) describedBy.push(field?.helpTextId);
  const ariaDescribedBy = describedBy.join(" ");

  const {
    isInvalid,
    isDisabled,
    isReadOnly,
    isRequired,
    ...cleanProps
  } = props;

  return {
    ...cleanProps,
    id: props.id ?? field?.inputId,
    disabled: props.disabled || props?.isDisabled || field?.isDisabled,
    readOnly: props.readOnly || props?.isReadOnly || field?.isReadOnly,
    required: props.required || props?.isRequired || field?.isRequired,
    "aria-invalid": ariaAttr(props.invalid || field?.isInvalid),
    "aria-required": ariaAttr(props.required || field?.isRequired),
    "aria-readonly": ariaAttr(props.readOnly || field?.isReadOnly),
    "aria-describedby": ariaDescribedBy || undefined,
  };
}
