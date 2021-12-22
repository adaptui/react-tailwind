import { RenderPropType } from "../utils";

export type SelectState = {
  /**
   * How large should the select be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"select", "main", "size">;

  /**
   * How the select should look?
   *
   * @default solid
   */
  variant: keyof Renderlesskit.GetThemeValue<"select", "main", "variant">;

  /**
   * Description for the Switch.
   */
  prefix: RenderPropType<SelectStateReturn>;

  /**
   * Description for the Switch.
   */
  suffix: RenderPropType<SelectStateReturn>;
};

export type SelectActions = {};

export type SelectStateReturn = SelectState & SelectActions;

export type SelectInitialState = Partial<
  Pick<SelectState, "prefix" | "suffix" | "size" | "variant">
> & {};

export function useSelectState(
  props: SelectInitialState = {},
): SelectStateReturn {
  const { prefix, suffix, size = "md", variant = "outline" } = props;

  return { prefix, suffix, size, variant };
}
