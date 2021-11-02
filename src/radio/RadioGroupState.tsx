import {
  RadioActions as RenderlesskitRadioActions,
  RadioInitialState as RenderlesskitRadioInitialState,
  RadioState as RenderlesskitRadioState,
  useRadioState as useRenderlesskitRadioState,
} from "@renderlesskit/react";

import { createContext } from "../utils";

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

  /**
   * Informs the Radio Group & Radio that Show More is used.
   *
   * @default null
   */
  maxVisibleItems: number | null;
};

export type RadioGroupActions = RenderlesskitRadioActions & {};

export type RadioGroupStateReturn = RadioGroupState & RadioGroupActions;

export type RadioGroupInitialState = RenderlesskitRadioInitialState &
  Partial<Pick<RadioGroupState, "size" | "stack" | "maxVisibleItems">>;

export function useRadioGroupState(
  props: RadioGroupInitialState = {},
): RadioGroupStateReturn {
  const state = useRenderlesskitRadioState(props);
  const { size = "md", stack = "vertical", maxVisibleItems = null } = props;

  return {
    ...state,
    size,
    stack,
    maxVisibleItems,
  };
}

const [RadioGroupContextProvider, useRadioGroupContext] =
  createContext<RadioGroupStateReturn>({
    name: "RadioStateContext",
    strict: false,
  });

export { RadioGroupContextProvider, useRadioGroupContext };
