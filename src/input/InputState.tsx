import { RenderPropType } from "../utils";

export type InputState = {
  /**
   * How large should the input be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"input", "main", "size">;

  /**
   * How the input should look?
   *
   * @default solid
   */
  variant: keyof Renderlesskit.GetThemeValue<"input", "main", "variant">;

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
  Pick<InputState, "prefix" | "suffix" | "size" | "variant">
> & {};

export function useInputState(props: InputInitialState = {}): InputStateReturn {
  const { prefix, suffix, size = "md", variant = "outline" } = props;

  return { prefix, suffix, size, variant };
}
