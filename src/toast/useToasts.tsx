import * as React from "react";
import { useToastsStore } from "./ToastProvider";

export const useToasts = () => {
  const { toasts } = useToastsStore();
  const visibleToasts = toasts.filter(t => t.visible);

  return { toasts, visibleToasts };
};
