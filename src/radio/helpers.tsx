import { splitProps } from "reakit-utils";

import { createContext } from "../utils";

import {
  RADIO_GROUP_STATE_KEYS,
  RadioGroupInitialState,
  RadioGroupOwnProps,
  RadioGroupProps,
  RadioGroupStateReturn,
  RadioOwnProps,
  RadioProps,
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

export const useRadioStateReturnSplit = (props: RadioProps) => {
  const [stateReturnProps, radioProps] = splitProps(
    props,
    RADIO_GROUP_STATE_KEYS,
  ) as [RadioGroupStateReturn, RadioOwnProps];

  return [stateReturnProps, radioProps] as const;
};
