import React from "react";
import { RadioInitialState, RadioStateReturn, useRadioState } from "reakit";
import { createContext } from "../utils";
import { RadioCommonProps } from "./Radio";

type RadioContextType = {
  radioState?: RadioStateReturn;
  radioSize?: RadioCommonProps["size"];
};
export const [RadioProvider, useRadioContext] = createContext<RadioContextType>(
  {
    errorMessage: "Radio must be used within RadioProvider",
    name: "RadioContext",
    strict: true,
  },
);

export type RadioGroupProps = RadioInitialState &
  Pick<RadioCommonProps, "size">;

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  size,
  ...props
}) => {
  const state = useRadioState(props);

  return (
    <RadioProvider value={{ radioState: state, radioSize: size }}>
      {children}
    </RadioProvider>
  );
};
