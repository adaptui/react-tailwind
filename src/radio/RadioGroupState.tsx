import {
  RadioActions as RenderlesskitRadioActions,
  RadioInitialState as RenderlesskitRadioInitialState,
  RadioState as RenderlesskitRadioState,
  useRadioState as useRenderlesskitRadioState,
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
  const { size = "md" } = props;

  return {
    ...state,
    size,
  };
}
