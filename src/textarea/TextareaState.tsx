import { SlotIcon } from "../icons";
import { Spinner } from "../spinner";
import { useTheme } from "../theme";
import { RenderPropType, tcm } from "../utils";

import { TextareaBaseProps } from "./TextareaBase";
import { useAutoSize } from "./useAutoSize";

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
   * Description for the Switch.
   */
  icon: RenderPropType<TextareaStateReturn>;

  /**
   * True, if the input is loading.
   */
  loading: boolean;

  /**
   * Description for the Switch.
   */
  spinner: RenderPropType<TextareaStateReturn>;

  /**
   * Input ref needed by useAutoSize hook.
   */
  inputRef: React.RefObject<HTMLTextAreaElement>;

  /**
   * Ghost ref needed by useAutoSize hook.
   */
  ghostRef: React.RefObject<HTMLTextAreaElement>;

  /**
   * Inline styles for the textarea when autosize.
   */
  inputStyles: React.CSSProperties;

  /**
   * onChange handler to merge with textarea onChange to update the autoSize height.
   */
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
    | "spinner"
  >
> &
  Partial<Pick<TextareaBaseProps, "placeholder" | "value" | "onChange">> & {};

export function useTextareaState(
  props: TextareaInitialState = {},
): TextareaStateReturn {
  const {
    size = "md",
    variant = "outline",
    autoSize = false,
    resize = autoSize ? "none" : "horizontal",
    rowsMax = Infinity,
    rowsMin = 1,
    invalid = false,
    loading = false,
    icon = <SlotIcon />,
    spinner = DefaultTextareaSpinner,
  } = props;

  const autoSizeState = useAutoSize(props);

  return {
    size,
    variant,
    invalid,
    loading,
    rowsMax,
    rowsMin,
    resize,
    autoSize,
    ...autoSizeState,
    icon,
    spinner,
  };
}

export const DefaultTextareaSpinner = (state: TextareaStateReturn) => {
  const { autoSize, size } = state;
  const theme = useTheme("textarea");

  return (
    <Spinner
      className={tcm(theme.icon.common, autoSize ? theme.icon.normal : "")}
      size={size !== "xl" ? "xs" : "md"}
    />
  );
};
