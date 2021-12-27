import { RenderPropType } from "../utils";

export type SelectState = {
  /**
   * How large should the select be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"select", "base", "size">;

  /**
   * How the select should look?
   *
   * @default solid
   */
  variant: keyof Renderlesskit.GetThemeValue<"select", "base", "variant">;

  /**
   * Description for the Switch.
   */
  prefix: RenderPropType<SelectStateReturn>;

  /**
   * Description for the Switch.
   */
  suffix: RenderPropType<SelectStateReturn>;

  /**
   * True, if the value of the textarea is invalid.
   */
  invalid: boolean;

  /**
   * True, if the input is loading.
   */
  loading: boolean;
};

export type SelectActions = {};

export type SelectStateReturn = SelectState & SelectActions;

export type SelectInitialState = Partial<
  Pick<
    SelectState,
    "prefix" | "suffix" | "size" | "variant" | "invalid" | "loading"
  >
> & {};

export function useSelectState(
  props: SelectInitialState = {},
): SelectStateReturn {
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
