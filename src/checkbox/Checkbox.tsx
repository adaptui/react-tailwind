import {
  CheckboxStateReturn,
  CheckboxOptions as ReakitCheckboxOptions,
} from "reakit";
import * as React from "react";
import { useControllableState } from "@renderlesskit/react";

import { BoxProps } from "../box";
import { useTheme } from "../theme";
import { CheckboxText } from "./CheckboxText";
import { CheckboxLabel } from "./CheckboxLabel";
import { CheckboxInput } from "./CheckboxInput";
import { createContext, runIfFn } from "../utils";
import { CommonFieldProps } from "../form-field";
import { CheckboxDescription } from "./CheckboxDescription";
import { forwardRefWithAs, RenderProp } from "../utils/types";
import { CheckboxIcon, CheckboxIconRenderPropValues } from "./CheckboxIcon";

export type CheckboxStatus = CheckboxStateReturn["state"];

export type CheckboxContext = {
  state: ReakitCheckboxOptions & { isInvalid?: boolean };
  size: CheckboxProps["size"];
};

const [CheckboxProvider, useCheckboxContext] = createContext<CheckboxContext>({
  name: "CheckboxContext",
  strict: false,
});

export { useCheckboxContext };

type CheckboxRenderProps = RenderProp<ReakitCheckboxOptions>;

type CheckboxExtraProps = {
  name?: string;
  description?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  defaultState?: ReakitCheckboxOptions["state"];
  size?: keyof Renderlesskit.GetThemeValue<"checkbox", "icon", "size">;
  onStateChange?: (value: CheckboxStatus) => void;
  icon?: (props: CheckboxIconRenderPropValues) => React.ReactNode;
};

export type CheckboxProps = BoxProps &
  Omit<CommonFieldProps, "id" | "isReadOnly"> &
  Omit<ReakitCheckboxOptions, "size" | "setState"> &
  CheckboxExtraProps;

export const Checkbox = forwardRefWithAs<
  CheckboxProps & CheckboxRenderProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const {
    defaultState,
    state: initialState,
    onStateChange,
    value,
    checked,
    disabled,
    isDisabled,
    isRequired,
    isInvalid,
    focusable,
    size = "md",
    name,
    children,
    inputRef,
    description,
    icon,
    ...rest
  } = props;

  const [checkboxState, setCheckboxStateChange] = useControllableState({
    value: initialState,
    defaultValue: defaultState,
    onChange: onStateChange,
  });

  const state = React.useMemo(
    () => ({
      state: checkboxState,
      setState: setCheckboxStateChange,
      value,
      checked,
      isInvalid,
      disabled: isDisabled || disabled,
      focusable,
    }),
    [
      checkboxState,
      setCheckboxStateChange,
      value,
      checked,
      isDisabled,
      isInvalid,
      disabled,
      focusable,
    ],
  );
  const context = React.useMemo(() => ({ state, size }), [state, size]);

  const theme = useTheme();
  const checkboxTextWrapperStyles = theme.checkbox.field.base;

  if (!children) {
    return (
      <CheckboxProvider value={context}>
        <CheckboxLabel ref={ref} {...rest}>
          <CheckboxInput
            ref={inputRef}
            name={name}
            isDisabled={isDisabled}
            isRequired={isRequired}
            isInvalid={isInvalid}
          />
          <CheckboxIcon children={icon} />
        </CheckboxLabel>
      </CheckboxProvider>
    );
  }

  return (
    <CheckboxProvider value={context}>
      {typeof children !== "string" ? (
        runIfFn(children, state)
      ) : (
        <CheckboxLabel ref={ref} {...rest}>
          <CheckboxInput
            ref={inputRef}
            name={name}
            isDisabled={isDisabled}
            isRequired={isRequired}
            isInvalid={isInvalid}
          />
          <CheckboxIcon children={icon} />
          {description ? (
            <div className={checkboxTextWrapperStyles}>
              <CheckboxText>{children}</CheckboxText>
              <CheckboxDescription>{description}</CheckboxDescription>
            </div>
          ) : (
            <CheckboxText>{children}</CheckboxText>
          )}
        </CheckboxLabel>
      )}
    </CheckboxProvider>
  );
});

Checkbox.displayName = "Checkbox";
