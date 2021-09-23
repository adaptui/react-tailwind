import { createToastStore, DefaultToastOptions } from "@renderlesskit/react";

import { Content, Toast } from "./index";

const defaultOptions: DefaultToastOptions<Toast> = {
  animationDuration: 0,
  pausedAt: null,
  pauseDuration: 0,
  height: null,
  frontHeight: null,
  placement: "bottom-center",
  autoDismiss: true,
  dismissDuration: 3000,
  offsetGap: 10,
  hoverOffsetGap: 10,
  visibleToasts: 3,
};

const [ToastProvider, useToastStore, useCreateToast, useToastHandlers] =
  createToastStore<Toast, Content>(defaultOptions);

export { ToastProvider, useCreateToast, useToastHandlers, useToastStore };
