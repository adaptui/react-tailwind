import React from "react";
import { RadioInitialState, RadioStateReturn } from "reakit";

import { createContext } from "../utils";
import { RadioCommonProps } from "./Radio";
import { useRadioState } from "./useRadioState";

type RadioContextType = {
  radioState?: RadioStateReturn;
  radioSize?: RadioCommonProps["size"];
};

const [RadioProvider, useRadioContext] = createContext<RadioContextType>({
  errorMessage: "Radio must be used within RadioProvider",
  name: "RadioContext",
  strict: false,
});

export { RadioProvider, useRadioContext };

export type RadioGroupProps = RadioInitialState &
  Pick<RadioCommonProps, "size"> & {
    onStateChange?: (state: RadioCommonProps["value"]) => void;
    state?: RadioCommonProps["value"];
    defaultState?: RadioCommonProps["value"];
  };

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  size = "md",
  ...props
}) => {
  const radioState = useRadioState(props);

  return (
    <RadioProvider value={{ radioState: radioState, radioSize: size }}>
      {children}
    </RadioProvider>
  );
};

RadioGroup.displayName = "RadioGroup";
