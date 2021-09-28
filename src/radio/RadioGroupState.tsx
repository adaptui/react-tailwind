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
