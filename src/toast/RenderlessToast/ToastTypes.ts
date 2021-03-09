import { Dict } from "../../utils/types";

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

export interface Toast {
  createdAt: number;
  id: string;
  visible: boolean;
  pauseDuration: number;
  reverseOrder: boolean;
  pausedAt: number | null;
  placement: ToastPlacement;
  autoDismiss: boolean;
  dismissDuration: number;
  animationDuration: number;
  height: number | null;
  frontHeight: number | null;
  content: Content;
  offsetGap: number;
  hoverOffsetGap: number;
  visibleToasts: number;
  visibleMobileToasts: number;
}

type ConfigurableToastOptions = Pick<
  Toast,
  | "id"
  | "autoDismiss"
  | "dismissDuration"
  | "placement"
  | "reverseOrder"
  | "animationDuration"
  | "offsetGap"
  | "hoverOffsetGap"
  | "visibleToasts"
  | "visibleMobileToasts"
>;

export type CreateToastOptions = Partial<ConfigurableToastOptions>;

export type DefaultToastOptions = Omit<ConfigurableToastOptions, "id">;

export type ToastOptions = Partial<DefaultToastOptions>;
