import { Dict } from "../utils/types";
import { TimerToast } from "./RenderlessToast";

export interface Toast extends TimerToast {
  content?: Content;
  placement: ToastPlacement;
  height: number | null;
  frontHeight: number | null;
  offsetGap: number;
  hoverOffsetGap: number;
  visibleToasts: number;
}

export type Renderable = JSX.Element | string | number | null;

export type ValueFunction<Value, Arg> = (arg: Arg) => Value;

export type ValueOrFunction<Value, Arg> = Value | ValueFunction<Value, Arg>;

export type Content =
  | ValueOrFunction<
      Renderable,
      {
        toast: Toast;
        showAlertContent: boolean;
      }
    >
  | Dict;

export type ToastPlacement =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";
