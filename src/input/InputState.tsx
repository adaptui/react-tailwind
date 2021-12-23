import { RenderPropType } from "../utils";

export type InputState = {
  /**
   * How large should the input be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"input", "base", "size">;

  /**
   * How the input should look?
   *
   * @default solid
   */
  variant: keyof Renderlesskit.GetThemeValue<"input", "base", "variant">;

  /**
   * Description for the Switch.
   */
  prefix: RenderPropType<InputStateReturn>;

  /**
   * Description for the Switch.
   */
  suffix: RenderPropType<InputStateReturn>;

  /**
   * True, if the value of the input is invalid.
   */
  invalid?: boolean;

  /**
   * True, if the input is loading.
   */
  loading?: boolean;
};

export type InputActions = {};

export type InputStateReturn = InputState & InputActions;

export type InputInitialState = Partial<
  Pick<
    InputState,
    "prefix" | "suffix" | "size" | "variant" | "invalid" | "loading"
  >
> & {};

export function useInputState(props: InputInitialState = {}): InputStateReturn {
  const {
    prefix,
    suffix,
    size = "md",
    variant = "outline",
    invalid = false,
    loading = false,
  } = props;

  return { prefix, suffix, size, variant, invalid, loading };
}
