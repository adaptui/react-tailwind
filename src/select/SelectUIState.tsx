import { RenderProp } from "../utils";

import { DefaultSelectSpinner } from "./__utils";
import { SelectUIProps } from "./SelectProps";

export function useSelectUIState(props: SelectUIStateProps): SelectUIState {
  const {
    prefix,
    suffix,
    size = "md",
    variant = "outline",
    invalid = false,
    loading = false,
    spinner = DefaultSelectSpinner,
  } = props;

  return { prefix, suffix, size, variant, invalid, loading, spinner };
}

export type SelectUIState = {
  /**
   * How large should the input be?
   *
   * @default md
   */
  size: keyof AdaptUI.GetThemeValue<"input", "base", "size">;

  /**
   * How the input should look?
   *
   * @default solid
   */
  variant: keyof AdaptUI.GetThemeValue<"input", "base", "variant">;

  /**
   * Prefix for the Select.
   */
  prefix: RenderProp<SelectUIProps>;

  /**
   * Suffix for the Select.
   */
  suffix: RenderProp<SelectUIProps>;

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
  spinner: RenderProp<SelectUIProps>;
};

export type SelectUIStateProps = Partial<
  Pick<
    SelectUIState,
    "prefix" | "suffix" | "size" | "variant" | "invalid" | "loading" | "spinner"
  >
>;
