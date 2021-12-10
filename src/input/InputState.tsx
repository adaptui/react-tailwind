import { RenderPropType } from "../utils";

export type InputState = {
  /**
   * Description for the Switch.
   */
  prefix: RenderPropType<InputStateReturn>;

  /**
   * Description for the Switch.
   */
  suffix: RenderPropType<InputStateReturn>;
};

export type InputActions = {};

export type InputStateReturn = InputState & InputActions;

export type InputInitialState = Partial<
  Pick<InputState, "prefix" | "suffix">
> & {};

export function useInputState(props: InputInitialState = {}): InputStateReturn {
  const { prefix, suffix } = props;

  return { prefix, suffix };
}
