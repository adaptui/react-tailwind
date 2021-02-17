import React from "react";
import { RadioProps as ReakitRadioProps } from "reakit";

import { BoxProps } from "../box";
import { RadioIcon } from "./RadioIcon";
import { RadioInput } from "./RadioInput";
import { RadioLabel } from "./RadioLabel";
import { useRadioGroup } from "./RadioGroup";
import { forwardRefWithAs } from "../utils/types";
import { createContext, runIfFn } from "../utils";

export type RadioContext = Pick<
  RadioProps,
  "value" | "disabled" | "inputProps" | "iconProps"
>;

const [RadioProvider, useRadioContext] = createContext<RadioContext>({
  errorMessage: "Radio must be used within RadioProvider",
  name: "Radio",
  strict: false,
});

export { useRadioContext };

export type RadioProps = BoxProps & {
  value: string | number;
  disabled?: boolean;
  inputProps?: Omit<ReakitRadioProps, "value" | "disabled">;
  iconProps?: {
    checkedIcon?: React.ReactNode;
    uncheckedIcon?: React.ReactNode;
    disabledIcon?: React.ReactNode;
  };
};

export const Radio = forwardRefWithAs<RadioProps, HTMLLabelElement, "label">(
  (props, ref) => {
    const { value, disabled, inputProps, iconProps, children, ...rest } = props;
    const { size, ...state } = useRadioGroup();

    return (
      <RadioProvider value={{ value, disabled, inputProps, iconProps }}>
        {typeof children !== "string" ? (
          runIfFn(children, {
            value,
            disabled,
            inputProps,
            iconProps,
            ...state,
          })
        ) : (
          <RadioLabel ref={ref} {...rest}>
            <RadioInput />
            <RadioIcon />
            {children}
          </RadioLabel>
        )}
      </RadioProvider>
    );
  },
);

Radio.displayName = "Radio";
