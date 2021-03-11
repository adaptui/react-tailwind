import { DefaultToast } from "./ToastState";
import { Content, ToastPlacement } from "./ToastTypes";
import { createToastContext, DefaultToastOptions } from "./CreateToastContext";

const defaultOptions: DefaultToastOptions<Toast> = {
  createdAt: Date.now(),
  pausedAt: null,
  pauseDuration: 0,
  height: null,
  frontHeight: null,
  placement: "bottom-center",
  autoDismiss: false,
  dismissDuration: 3000,
  animationDuration: 0,
  offsetGap: 10,
  hoverOffsetGap: 10,
  visibleToasts: 3,
};

export interface Toast extends DefaultToast {
  createdAt: number;
  content?: Content;
  placement: ToastPlacement;
  pauseDuration: number;
  pausedAt: number | null;
  autoDismiss: boolean;
  dismissDuration: number;
  animationDuration: number;
  height: number | null;
  frontHeight: number | null;
  offsetGap: number;
  hoverOffsetGap: number;
  visibleToasts: number;
}

const [
  ToastProvider,
  useToastStore,
  useToastHandler,
] = createToastContext<Toast>(defaultOptions);

export { ToastProvider, useToastStore, useToastHandler };
