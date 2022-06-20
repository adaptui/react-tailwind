import { RenderProp } from "../utils";

import { DefaultInputSpinner } from "./__utils";
import { InputUIProps } from "./InputProps";

export function useInputUIState(props: InputUIStateProps): InputUIState {
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

export type InputUIState = {
  /**
   * How large should the input be?
   *
   * @default md
   */
  size: keyof AdaptUI.GetThemeValue<"input", "size">;

  /**
   * How the input should look?
   *
   * @default solid
   */
  variant: keyof AdaptUI.GetThemeValue<"input", "variant">;

  /**
   * Prefix for the Input.
   */
  prefix: RenderProp<InputUIProps>;

  /**
   * Suffix for the Input.
   */
  suffix: RenderProp<InputUIProps>;

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
  spinner: RenderProp<InputUIProps>;
};

export type InputUIStateProps = Partial<
  Pick<
    InputUIState,
    "prefix" | "suffix" | "size" | "variant" | "invalid" | "loading" | "spinner"
  >
>;
