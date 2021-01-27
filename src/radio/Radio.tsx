import React from "react";
import { cx } from "@renderlesskit/react";
import {
  RadioProps,
  RadioGroupProps,
  Radio as ReakitRadio,
  RadioGroup as ReakitRadioGroup,
} from "reakit";
import { BoxProps, Box } from "../box";
import { useTheme } from "../theme";
import { createContext } from "../utils";
import { forwardRefWithAs } from "../utils/types";
import { useRadioState, RadioInitialState } from "./useRadioState";

const [RadioProvider, useRadioContext] = createContext({
  name: "RadioContext",
  strict: true,
  errorMessage: "Radio must be used within RadioContextProvider",
});

export interface RadioLabelProps extends BoxProps {}
export const RadioLabel = forwardRefWithAs<
  RadioLabelProps,
  HTMLLabelElement,
  "label"
>(({ children, className, ...props }, ref) => {
  const theme = useTheme();

  return (
    <Box
      as="label"
      ref={ref}
      className={cx(theme.radio.base, className)}
      {...props}
    >
      {children}
    </Box>
  );
});

export const Radio = forwardRefWithAs<
  Partial<RadioProps>,
  HTMLInputElement,
  "input"
>(({ children, className, ...props }, ref) => {
  const state = useRadioContext();
  const theme = useTheme();

  return (
    <ReakitRadio
      className={theme.radio.input}
      {...state}
      {...props}
      ref={ref}
    />
  );
});

export const RadioGroup = forwardRefWithAs<
  Partial<RadioGroupProps & RadioInitialState>,
  HTMLDivElement,
  "div"
>(({ children, ...props }, ref) => {
  const radio = useRadioState(props);

  return (
    <RadioProvider value={radio}>
      <ReakitRadioGroup {...radio} ref={ref}>
        {children}
      </ReakitRadioGroup>
    </RadioProvider>
  );
});
