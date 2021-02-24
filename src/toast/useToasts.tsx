import * as React from "react";

import { useToast } from "./Toaster";
import { ActionType } from "./useToastsStore";
import { useToastsStore } from "./ToastProvider";

export const useToasts = () => {
  const { toasts, pausedAt, dispatch } = useToastsStore();
  const { dismissToast } = useToast();

  const visibleToasts = toasts.filter(t => t.visible);

  React.useEffect(() => {
    if (pausedAt) return;

    const now = Date.now();
    const timeouts = toasts.map(t => {
      if (t.duration === Infinity) return;

      const durationLeft =
        (t.duration || 0) + t.pauseDuration - (now - t.createdAt);

      if (durationLeft < 0) {
        if (t.visible) {
          dismissToast(t.id);
        }
        return;
      }

      return setTimeout(() => dismissToast(t.id), durationLeft);
    });

    return () => {
      timeouts.forEach(timeout => timeout && clearTimeout(timeout));
    };
  }, [toasts, pausedAt, dismissToast]);

  const handlers = React.useMemo(
    () => ({
      startPause: () => {
        dispatch({
          type: ActionType.START_PAUSE,
          time: Date.now(),
        });
      },
      endPause: () => {
        if (pausedAt) {
          dispatch({ type: ActionType.END_PAUSE, time: Date.now() });
        }
      },
      updateHeight: (toastId: string, height: number) =>
        dispatch({
          type: ActionType.UPDATE_TOAST,
          toast: { id: toastId, height },
        }),
      calculateOffset: (
        toastId: string,
        opts?: { reverseOrder?: boolean; margin?: number },
      ) => {
        const { reverseOrder = false, margin = 8 } = opts || {};
        const index = visibleToasts.findIndex(toast => toast.id === toastId);
        const offset =
          index !== -1
            ? visibleToasts
                .slice(...(reverseOrder ? [index + 1] : [0, index]))
                .reduce((acc, t) => acc + (t.height || 0) + margin, 0)
            : 0;

        return offset;
      },
    }),
    [visibleToasts, pausedAt, dispatch],
  );

  return { toasts, visibleToasts, handlers };
};
