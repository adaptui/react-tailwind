import { Spinner } from "../spinner";
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
   * Prefix for the Input.
   */
  prefix: RenderPropType<InputStateReturn>;

  /**
   * Suffix for the Input.
   */
  suffix: RenderPropType<InputStateReturn>;

  /**
   * True, if the value of the input is invalid.
   */
  invalid: boolean;

  /**
   * True, if the input is loading.
   */
  loading: boolean;

  /**
   * Spinner component to display when loading.
   */
  spinner: RenderPropType<InputStateReturn>;
};

export type InputActions = {};

export type InputStateReturn = InputState & InputActions;

export type InputInitialState = Partial<
  Pick<
    InputState,
    "prefix" | "suffix" | "size" | "variant" | "invalid" | "loading" | "spinner"
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
    spinner = DefaultInputSpinner,
  } = props;

  return { prefix, suffix, size, variant, invalid, loading, spinner };
}

export const DefaultInputSpinner = (state: InputStateReturn) => {
  const { size } = state;

  return <Spinner size={size !== "xl" ? "xs" : "md"} />;
};
