import React from "react";

import { BoxProps } from "../box";
import { RadioIcon } from "./RadioIcon";
import { RadioInput } from "./RadioInput";
import { RadioLabel } from "./RadioLabel";
import { RadioInitialState } from "./RadioState";
import { createContext, runIfFn } from "../utils";
import { RadioGroupProps, useRadioGroup } from "./RadioGroup";
import { forwardRefWithAs, RenderProp } from "../utils/types";
import { CheckboxDescription } from "../checkbox";
import { useTheme } from "../theme";
import { CommonFieldProps } from "../form-field";
import { RadioText } from "./RadioText";

type RadioStateContext = RadioInitialState &
  Omit<CommonFieldProps, "id" | "isReadOnly">;

const [RadioStateProvider, useRadioStateContext] =
  createContext<RadioStateContext>({
    errorMessage: "RadioState must be used within RadioStateProvider",
    name: "RadioState",
    strict: false,
  });

type RadioPropsContext = RadioInitialProps & Pick<RadioGroupProps, "size">;

const [RadioPropsProvider, useRadioProps] = createContext<RadioPropsContext>({
  errorMessage: "RadioProps must be used within RadioPropsProvider",
  name: "RadioProps",
  strict: false,
});

type RadioRenderProps = RenderProp<RadioStateContext & RadioPropsContext>;

export type RadioInitialProps = {
  id?: string;
  value: string | number;
  checked?: boolean;
  disabled?: boolean;
  focusable?: boolean;
  checkedIcon?: React.ReactNode;
  uncheckedIcon?: React.ReactNode;
  disabledIcon?: React.ReactNode;
  description?: string;
};

export type RadioProps = BoxProps &
  RadioInitialProps &
  RadioRenderProps &
  Pick<RadioGroupProps, "size"> &
  Omit<CommonFieldProps, "id" | "isReadOnly">;

export const Radio = forwardRefWithAs<RadioProps, HTMLLabelElement, "label">(
  (props, ref) => {
    const {
      className,
      style,
      description,
      children,
      isDisabled,
      isInvalid,
      isRequired,
      disabled,
      size = "md",
      ...rest
    } = props;
    const { size: _size = size, ...state } = useRadioGroup();

    const radio = useTheme("radio");
    const radioTextWrapperStyles = radio.field.base;

    const isTrulyDisabled = isDisabled || disabled;
    const isTrulyInvalid = isInvalid || !!rest["aria-invalid"];

    return (
      <RadioStateProvider
        value={{
          ...state,
          isDisabled: isTrulyDisabled,
          isInvalid: isTrulyInvalid,
          isRequired,
        }}
      >
        <RadioPropsProvider value={{ size: _size, ...rest }}>
          {typeof children !== "string" ? (
            runIfFn(children, { size: _size, ...rest, ...state })
          ) : (
            <RadioLabel ref={ref} className={className} style={style}>
              <RadioInput />
              <RadioIcon />
              {description ? (
                <div className={radioTextWrapperStyles}>
                  <RadioText>{children}</RadioText>
                  <CheckboxDescription>{description}</CheckboxDescription>
                </div>
              ) : (
                <RadioText>{children}</RadioText>
              )}
            </RadioLabel>
          )}
        </RadioPropsProvider>
      </RadioStateProvider>
    );
  },
);

Radio.displayName = "Radio";

export { useRadioStateContext, useRadioProps };
