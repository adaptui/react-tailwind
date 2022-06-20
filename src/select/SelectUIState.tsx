import { SelectIcon } from "../icons";
import { RenderProp } from "../utils";

import { DefaultSelectSpinner } from "./__utils";
import { SelectUIProps } from "./SelectProps";

export function useSelectUIState(props: SelectUIStateProps): SelectUIState {
  const {
    prefix,
    suffix = <SelectIcon />,
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
   * How large should the select be?
   *
   * @default md
   */
  size: keyof AdaptUI.GetThemeValue<"select", "size">;

  /**
   * How the select should look?
   *
   * @default solid
   */
  variant: keyof AdaptUI.GetThemeValue<"select", "variant">;

  /**
   * Prefix for the Select.
   */
  prefix: RenderProp<SelectUIProps>;

  /**
   * Suffix for the Select.
   * @default <SelectIcon />
   */
  suffix: RenderProp<SelectUIProps>;

  /**
   * True, if the value of the select is invalid.
   */
  invalid: boolean;

  /**
   * True, if the select is loading.
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
