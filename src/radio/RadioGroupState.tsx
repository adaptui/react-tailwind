import { splitProps } from "reakit-utils";
import {
  RadioActions as RenderlesskitRadioActions,
  RadioInitialState as RenderlesskitRadioInitialState,
  RadioState as RenderlesskitRadioState,
  useRadioState as useRenderlesskitRadioState,
} from "@renderlesskit/react";

import { createContext } from "../utils";

import {
  RadioGroupOwnProps,
  RadioGroupProps,
  USE_RADIO_GROUP_STATE_KEYS,
} from "./index";

export type RadioGroupState = RenderlesskitRadioState & {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"radio", "icon", "size">;
  /**
   * Controls how the group of radios are arranged
   *
   * @default vertical
   */
  stack: "vertical" | "horizontal";
};

export type RadioGroupActions = RenderlesskitRadioActions & {};

export type RadioGroupStateReturn = RadioGroupState & RadioGroupActions;

export type RadioGroupInitialState = RenderlesskitRadioInitialState &
  Partial<Pick<RadioGroupState, "size" | "stack">>;

export function useRadioGroupState(
  props: RadioGroupInitialState = {},
): RadioGroupStateReturn {
  const state = useRenderlesskitRadioState(props);
  const { size = "md", stack = "vertical" } = props;

  return {
    ...state,
    size,
    stack,
  };
}

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
