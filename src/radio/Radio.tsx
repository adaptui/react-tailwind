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

export type RadioStateContext = RadioInitialState &
  Omit<CommonFieldProps, "id" | "isReadOnly">;

const [RadioStateProvider, useRadioStateContext] =
  createContext<RadioStateContext>({
    errorMessage: "RadioState must be used within RadioStateProvider",
    name: "RadioState",
    strict: false,
  });

export { useRadioStateContext };

export type RadioPropsContext = RadioInitialProps &
  Pick<RadioGroupProps, "size">;

const [RadioPropsProvider, useRadioProps] = createContext<RadioPropsContext>({
  errorMessage: "RadioProps must be used within RadioPropsProvider",
  name: "RadioProps",
  strict: false,
});

export { useRadioProps };

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
      ...rest
    } = props;
    const { size, ...state } = useRadioGroup();

    const radio = useTheme("radio");
    const radioTextWrapperStyles = radio.field.base;

    return (
      <RadioStateProvider value={state}>
        <RadioPropsProvider value={{ size, ...rest }}>
          {typeof children !== "string" ? (
            runIfFn(children, { size, ...rest, ...state })
          ) : (
            <RadioLabel ref={ref} className={className} style={style}>
              <RadioInput
                isDisabled={isDisabled}
                isRequired={isRequired}
                isInvalid={isInvalid}
              />
              <RadioIcon
                isDisabled={isDisabled}
                isRequired={isRequired}
                isInvalid={isInvalid}
              />
              {description ? (
                <div className={radioTextWrapperStyles}>
                  <span>{children}</span>
                  <CheckboxDescription>{description}</CheckboxDescription>
                </div>
              ) : (
                <span>{children}</span>
              )}
            </RadioLabel>
          )}
        </RadioPropsProvider>
      </RadioStateProvider>
    );
  },
);

Radio.displayName = "Radio";
