import {
  RadioState as RenderlesskitRadioState,
  RadioActions as RenderlesskitRadioActions,
  useRadioState as useRenderlesskitRadioState,
  RadioInitialState as RenderlesskitRadioInitialState,
} from "@renderlesskit/react";

export type RadioGroupState = RenderlesskitRadioState & {
  /**
   * How large should the button be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"radio", "icon", "size">;
};

export type RadioGroupActions = RenderlesskitRadioActions & {};

export type RadioGroupStateReturn = RadioGroupState & RadioGroupActions;

export type RadioGroupInitialState = RenderlesskitRadioInitialState &
  Partial<Pick<RadioGroupState, "size">>;

export function useRadioGroupState(
  props: RadioGroupInitialState = {},
): RadioGroupStateReturn {
  const state = useRenderlesskitRadioState(props);
  const { size = "lg" } = props;

  return {
    ...state,
    size,
  };
}
