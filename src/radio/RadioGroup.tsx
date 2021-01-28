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
  Pick<RadioCommonProps, "size"> & {
    onStateChange?: (state: RadioCommonProps["value"]) => void;
    state?: RadioCommonProps["value"];
    defaultState?: RadioCommonProps["value"];
  };

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  size,
  state,
  defaultState,
  onStateChange,
  ...props
}) => {
  const radioState = useRadioState({
    state: defaultState ? defaultState : state,
    ...props,
  });

  React.useEffect(() => {
    state && radioState.setState(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, radioState.setState]);

  React.useEffect(() => {
    onStateChange?.(radioState.state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [radioState.state]);

  return (
    <RadioProvider value={{ radioState: radioState, radioSize: size }}>
      {children}
    </RadioProvider>
  );
};
