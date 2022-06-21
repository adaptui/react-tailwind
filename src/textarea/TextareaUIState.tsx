import { SlotIcon } from "../icons";
import { RenderProp } from "../utils";

import { DefaultTextareaSpinner } from "./__utils";
import { TextareaBaseProps } from "./TextareaBase";
import { useAutoSize } from "./useAutoSize";

export function useTextareaUIState(
  props: TextareaUIStateProps = {},
): TextareaUIState {
  const {
    size = "md",
    variant = "outline",
    autoSize = false,
    resize = autoSize ? "none" : "horizontal",
    rowsMax = Infinity,
    rowsMin = 1,
    invalid = false,
    loading = false,
    icon = invalid ? <SlotIcon /> : null,
    spinner = DefaultTextareaSpinner,
  } = props;

  const autoSizeState = useAutoSize(props);

  return {
    size,
    variant,
    autoSize,
    resize,
    rowsMax,
    rowsMin,
    invalid,
    loading,
    icon,
    spinner,
    ...autoSizeState,
  };
}

export type TextareaUIState = {
  /**
   * How large should the textarea be?
   *
   * @default md
   */
  size: keyof AdaptUI.GetThemeValue<"textarea", "size">;

  /**
   * How the textarea should look?
   *
   * @default outline
   */
  variant: keyof AdaptUI.GetThemeValue<"textarea", "variant">;

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
  resize: keyof AdaptUI.GetThemeValue<"textarea", "base", "resize">;

  /**
   * Whether the textarea should autosize on typing.
   */
  autoSize: boolean;

  /**
   * True, if the input text to the textarea is invalid.
   */
  invalid: boolean;

  /**
   * Icon for the Textarea.
   */
  icon: RenderProp<TextareaUIState>;

  /**
   * True, if the input is loading.
   */
  loading: boolean;

  /**
   * Spinner for the Textarea.
   */
  spinner: RenderProp<TextareaUIState>;

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
  autoSizeOnChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export type TextareaUIStateProps = Partial<
  Pick<
    TextareaUIState,
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
  Partial<Pick<TextareaBaseProps, "placeholder" | "value">> & {};
