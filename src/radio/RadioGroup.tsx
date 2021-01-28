import React from "react";
import { RadioInitialState, RadioStateReturn, useRadioState } from "reakit";
import { createContext } from "../utils";

export const [RadioProvider, useRadioContext] = createContext<{
  radioState?: RadioStateReturn;
}>({
  errorMessage: "Radio must be used within RadioProvider",
  name: "RadioContext",
  strict: true,
});

export const RadioGroup: React.FC<RadioInitialState> = ({ children }) => {
  const state = useRadioState();

  return (
    <RadioProvider value={{ radioState: state }}>{children}</RadioProvider>
  );
};
