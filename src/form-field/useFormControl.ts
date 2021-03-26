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
    ...cleanHtmlProps
  } = props;

  const _invalid = props?.invalid || isInvalid || field?.isInvalid;
  const _disabled = props?.disabled || isDisabled || field?.isDisabled;
  const _required = props?.required || isRequired || field?.isRequired;
  const _readOnly = props?.readOnly || isReadOnly || field?.isReadOnly;

  return {
    ...cleanHtmlProps,
    id: props?.id ?? field?.inputId,
    disabled: _disabled,
    readOnly: _readOnly,
    required: _required,
    "aria-invalid": ariaAttr(_invalid),
    "aria-required": ariaAttr(_required),
    "aria-readonly": ariaAttr(_readOnly),
    "aria-describedby": ariaDescribedBy || undefined,
  };
}
