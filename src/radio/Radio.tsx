import React from "react";

import { BoxProps } from "../box";
import { RadioIcon } from "./RadioIcon";
import { RadioInput } from "./RadioInput";
import { RadioLabel } from "./RadioLabel";
import { RadioInitialState } from "./RadioState";
import { createContext, runIfFn } from "../utils";
import { RadioGroupProps, useRadioGroup } from "./RadioGroup";
import { forwardRefWithAs, RenderProp } from "../utils/types";

export type RadioStateContext = RadioInitialState;

const [RadioStateProvider, useRadioState] = createContext<RadioStateContext>({
  errorMessage: "RadioState must be used within RadioStateProvider",
  name: "RadioState",
  strict: false,
});

export { useRadioState };

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
};

export type RadioProps = BoxProps & RadioInitialProps & RadioRenderProps;

export const Radio = forwardRefWithAs<RadioProps, HTMLLabelElement, "label">(
  (props, ref) => {
    const { className, style, children, ...rest } = props;
    const { size, ...state } = useRadioGroup();

    return (
      <RadioStateProvider value={state}>
        <RadioPropsProvider value={{ size, ...rest }}>
          {typeof children !== "string" ? (
            runIfFn(children, { size, ...rest, ...state })
          ) : (
            <RadioLabel ref={ref} className={className} style={style}>
              <RadioInput />
              <RadioIcon />
              {children}
            </RadioLabel>
          )}
        </RadioPropsProvider>
      </RadioStateProvider>
    );
  },
);

Radio.displayName = "Radio";
