import { Toast, Content } from "./ToastTypes";
import { createToastContext, DefaultToastOptions } from "./RenderlessToast";

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

const [
  ToastProvider,
  useToastStore,
  useCreateToast,
  useToastHandlers,
] = createToastContext<Toast, Content>(defaultOptions);

export { ToastProvider, useToastStore, useCreateToast, useToastHandlers };
