import { useControllableState } from "@renderlesskit/react";
import * as React from "react";
import {
  CompositeState,
  CompositeActions,
  CompositeInitialState,
  useCompositeState,
} from "reakit";

export type RadioState = CompositeState & {
  /**
   * The `value` attribute of the current checked radio.
   */
  state: string | number | undefined;
};

export type RadioActions = CompositeActions & {
  /**
   * Sets `state`.
   */
  setState: React.Dispatch<React.SetStateAction<string | number>>;
};

export type RadioInitialState = CompositeInitialState &
  Partial<Pick<RadioState, "state">> & {
    defaultState?: RadioState["state"];
    onStateChange?: (v: RadioState["state"]) => void;
  };

export type RadioStateReturn = RadioState & RadioActions;

export function useRadioState(
  initialState: RadioInitialState = {},
): RadioStateReturn {
  const {
    state: initialValue,
    defaultState,
    loop = true,
    onStateChange,
    ...props
  } = initialState;

  const [state, setState] = useControllableState({
    value: initialValue,
    defaultValue: defaultState,
    onChange: onStateChange,
  });

  const composite = useCompositeState({ ...props, loop });
  return {
    ...composite,
    state,
    setState,
  };
}
