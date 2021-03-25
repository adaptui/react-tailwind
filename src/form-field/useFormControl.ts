import { ariaAttr } from "@renderlesskit/react";
import { CommonFieldProps, useFormFieldContext } from "./FormField";

export interface UseFormControlProps extends CommonFieldProps {}

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

  const { invalid, disabled, readonly, required, ...cleanProps } = props;

  return {
    ...cleanProps,
    id: props.id ?? field?.fieldId,
    disabled: props.disabled || field?.disabled,
    readOnly: props.readonly || field?.readonly,
    required: props.required || field?.required,
    "aria-invalid": ariaAttr(props.invalid || field?.invalid),
    "aria-required": ariaAttr(props.required || field?.required),
    "aria-readonly": ariaAttr(props.readonly || field?.readonly),
    "aria-describedby": ariaDescribedBy || undefined,
  };
}
