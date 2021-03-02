import * as React from "react";

import { usePrevious } from "../../hooks";
import { useToastStore, useToasters, getToast, Toast } from "./index";

export const useToasts = () => {
  const { toasts } = useToastStore();
  const {
    updateToast,
    updateAllToast,
    upsertToast,
    removeToast,
    dismissToast,
  } = useToasters();
  const visibleToasts = toasts.filter(t => t.visible);
  const previousToasts = usePrevious<Toast[]>(visibleToasts);

  const updateFrontHeight = React.useCallback(
    (frontHeight: number) => {
      updateAllToast({ frontHeight });
    },
    [updateAllToast],
  );

  React.useEffect(() => {
    if (previousToasts == null) return;

    const previousToastsLength = previousToasts.length;
    const toastsLength = visibleToasts.length;

    if (toastsLength >= previousToastsLength) return;

    const frontToast = visibleToasts[toastsLength - 1];

    if (frontToast == null) return;
    if (frontToast.height == null) return;

    updateFrontHeight(frontToast.height);
  }, [visibleToasts, previousToasts, updateFrontHeight]);

  const updateHeight = React.useCallback(
    (toastId: string, height: number) => {
      updateToast(toastId, { height });
      updateFrontHeight(height);
    },
    [updateToast, updateFrontHeight],
  );

  const calculateOffset = React.useCallback(
    (toastId: string) => {
      const index = visibleToasts.findIndex(toast => toast.id === toastId);
      if (index === -1) return 0;

      return visibleToasts
        .slice(index + 1)
        .reduce((acc, t) => acc + (t.height || 0) + 20, 0);
    },
    [visibleToasts],
  );

  React.useEffect(() => {
    const now = Date.now();
    const timeouts = toasts.map(t => {
      if (!t.autoDismiss) return undefined;
      if (t.pausedAt) return undefined;

      const durationLeft =
        (t.dismissDuration || 0) + t.pauseDuration - (now - t.createdAt);

      if (durationLeft < 0) {
        if (t.visible) {
          dismissToast(t.id);
        }
        return undefined;
      }

      return setTimeout(() => dismissToast(t.id), durationLeft);
    });

    return () => {
      timeouts.forEach(timeout => timeout && clearTimeout(timeout));
    };
  }, [toasts, dismissToast]);

  function pauseTimer(toastId: string) {
    const toast = getToast(toasts, toastId);

    if (!toast.autoDismiss) return;

    updateToast(toastId, { pausedAt: Date.now() });
  }

  function resumeTimer(toastId: string) {
    const toast = getToast(toasts, toastId);

    if (!toast.autoDismiss) return;

    const now = Date.now();
    const diff = now - (toast.pausedAt || 0);

    updateToast(toastId, {
      pausedAt: null,
      pauseDuration: toast.pauseDuration + diff,
    });
  }

  return {
    toasts,
    pauseTimer,
    resumeTimer,
    removeToast,
    dismissToast,
    updateToast,
    upsertToast,
    updateHeight,
    calculateOffset,
    updateFrontHeight,
  };
};
