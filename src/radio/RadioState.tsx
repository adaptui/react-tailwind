import {
  RadioState as RenderlesskitRadioState,
  RadioActions as RenderlesskitRadioActions,
  useRadioState as useRenderlesskitRadioState,
  RadioInitialState as RenderlesskitRadioInitialState,
} from "@renderlesskit/react";

export type RadioState = RenderlesskitRadioState & {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"radio", "icon", "size">;
};

export type RadioActions = RenderlesskitRadioActions & {};

export type RadioStateReturn = RadioState & RadioActions;

export type RadioInitialState = RenderlesskitRadioInitialState &
  Partial<Pick<RadioState, "size">>;

export function useRadioState(props: RadioInitialState = {}): RadioStateReturn {
  const state = useRenderlesskitRadioState(props);
  console.log("%cstate", "color: #0088cc", state);
  const { size = "md" } = props;

  return {
    ...state,
    size,
  };
}
