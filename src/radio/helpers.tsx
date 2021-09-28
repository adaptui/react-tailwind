import { splitProps } from "reakit-utils";

import { createContext } from "../utils";

import {
  RadioGroupInitialState,
  RadioGroupOwnProps,
  RadioGroupProps,
  RadioGroupStateReturn,
  USE_RADIO_GROUP_STATE_KEYS,
  useRadioGroupState,
} from "./index";

const [RadioStateContextProvider, useRadioStateContext] =
  createContext<RadioGroupStateReturn>({
    strict: false,
    name: "RadioStateContext",
  });

export { RadioStateContextProvider, useRadioStateContext };

export const useRadioGroupStateSplit = (props: RadioGroupProps) => {
  const [stateProps, radioGroupProps] = splitProps(
    props,
    USE_RADIO_GROUP_STATE_KEYS,
  ) as [RadioGroupInitialState, RadioGroupOwnProps];
  const state = useRadioGroupState(stateProps);

  return [state, radioGroupProps, stateProps] as const;
};
