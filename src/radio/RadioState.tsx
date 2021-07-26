import {
  CompositeState,
  CompositeActions,
  CompositeInitialState,
  useCompositeState,
} from "reakit";
import * as React from "react";
import { useControllableState } from "@renderlesskit/react";

type StateType = string | number | undefined;

export type RadioState = CompositeState & {
  /**
   * The `value` attribute of the current checked radio.
   */
  state: StateType;
};

export type RadioActions = CompositeActions & {
  /**
   * Sets `state`.
   */
  setState: React.Dispatch<React.SetStateAction<StateType>>;
};

export type RadioInitialState = CompositeInitialState &
  Partial<Pick<RadioState, "state">> & {
    defaultState?: StateType;
    onStateChange?: (v: StateType) => void;
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

  const [state, setState] = useControllableState<string | number | undefined>({
    value: initialValue,
    defaultValue: defaultState,
    onChange: onStateChange,
  });

  React.useEffect(() => {
    onStateChange?.(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const composite = useCompositeState({ ...props, loop });
  return {
    ...composite,
    state,
    setState,
  };
}
