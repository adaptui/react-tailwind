import React from "react";
import { cx } from "@renderlesskit/react";
import {
  RadioProps,
  RadioGroupProps,
  Radio as ReakitRadio,
  RadioGroup as ReakitRadioGroup,
} from "reakit";
import { useTheme } from "../theme";
import { createContext } from "../utils";
import { forwardRefWithAs } from "../utils/types";
import { useRadioState, RadioInitialState } from "./useRadioState";

const [RadioProvider, useRadioContext] = createContext({
  name: "RadioContext",
  strict: true,
  errorMessage: "Radio must be used within RadioContextProvider",
});

export const RadioLabel = forwardRefWithAs<{}, HTMLLabelElement, "label">(
  ({ children, className }, ref) => {
    const theme = useTheme();

    return (
      <label ref={ref} className={cx(theme.radio.base, className)}>
        {children}
      </label>
    );
  },
);

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
