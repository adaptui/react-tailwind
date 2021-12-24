import { RenderPropType } from "../utils";

export type TextareaState = {
  /**
   * How large should the textarea be?
   *
   * @default md
   */
  size: keyof Renderlesskit.GetThemeValue<"textarea", "base", "size">;

  /**
   * How the textarea should look?
   *
   * @default solid
   */
  variant: keyof Renderlesskit.GetThemeValue<"textarea", "base", "variant">;

  /**
   * Description for the Switch.
   */
  icon: RenderPropType<TextareaStateReturn>;

  /**
   * Minimum number of rows to be displayed.
   *
   * @default 1
   */
  rowsMin: number;

  /**
   * Maximum number of rows to be displayed.
   */
  rowsMax: number;

  /**
   * Direction of the textarea in which it can be resized.
   */
  resize: keyof Renderlesskit.GetThemeValue<"textarea", "base", "resize">;

  /**
   * Whether the textarea should autosize on typing.
   */
  autoSize: boolean;

  /**
   * True, if the input text to the textarea is invalid.
   */
  invalid: boolean;

  /**
   * True, if the input is loading.
   */
  loading: boolean;
};

export type TextareaActions = {};

export type TextareaStateReturn = TextareaState & TextareaActions;

export type TextareaInitialState = Partial<
  Pick<
    TextareaState,
    | "size"
    | "variant"
    | "icon"
    | "rowsMax"
    | "rowsMin"
    | "autoSize"
    | "resize"
    | "invalid"
    | "loading"
  >
> & {};

export function useTextareaState(
  props: TextareaInitialState = {},
): TextareaStateReturn {
  const {
    icon,
    size = "md",
    variant = "outline",
    autoSize = false,
    resize = autoSize ? "none" : "horizontal",
    rowsMax = Infinity,
    rowsMin = 1,
    invalid = false,
    loading = false,
  } = props;

  return {
    icon,
    size,
    variant,
    invalid,
    loading,
    rowsMax,
    rowsMin,
    resize,
    autoSize,
  };
}
