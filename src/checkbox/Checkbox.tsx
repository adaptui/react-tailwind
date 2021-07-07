import {
  CheckboxStateReturn,
  CheckboxOptions as ReakitCheckboxOptions,
} from "reakit";
import * as React from "react";
import { useControllableState } from "@renderlesskit/react";

import { BoxProps } from "../box";
import { useTheme } from "../theme";
import { CheckboxIcon } from "./CheckboxIcon";
import { CheckboxText } from "./CheckboxText";
import { CheckboxLabel } from "./CheckboxLabel";
import { CheckboxInput } from "./CheckboxInput";
import { createContext, runIfFn } from "../utils";
import { CommonFieldProps } from "../form-field";
import { CheckboxDescription } from "./CheckboxDescription";
import { forwardRefWithAs, RenderProp } from "../utils/types";

export type CheckboxStatus = CheckboxStateReturn["state"];

export type CheckboxContext = {
  state: ReakitCheckboxOptions;
  size: CheckboxProps["size"];
};

const [CheckboxProvider, useCheckboxContext] = createContext<CheckboxContext>({
  name: "CheckboxContext",
  strict: false,
});

export { useCheckboxContext };

type CheckboxRenderProps = RenderProp<ReakitCheckboxOptions>;

export type CheckboxProps = BoxProps &
  Omit<CommonFieldProps, "id" | "isReadOnly"> &
  Omit<ReakitCheckboxOptions, "size" | "setState"> & {
    description?: string;
    defaultState?: ReakitCheckboxOptions["state"];
    onStateChange?: (value: CheckboxStatus) => void;
    size?: keyof Renderlesskit.GetThemeValue<"checkbox", "icon", "size">;
    name?: string;
    inputRef?: React.Ref<HTMLInputElement>;
  };

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
      disabled: isDisabled || disabled,
      focusable,
    }),
    [
      checkboxState,
      setCheckboxStateChange,
      value,
      checked,
      isDisabled,
      disabled,
      focusable,
    ],
  );
  const context = React.useMemo(() => ({ state, size }), [state, size]);

  const theme = useTheme();
  const checkboxTextWrapperStyles = theme.checkbox.textWrapper;

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
          <CheckboxIcon isInvalid={isInvalid} />
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
          <CheckboxIcon isInvalid={isInvalid} />
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
