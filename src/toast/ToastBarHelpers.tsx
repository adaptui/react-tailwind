import * as React from "react";

import {
  getPlacementSortedToasts,
  getToast,
  mobileSortedToasts,
} from "./helpers";
import { Toast, ToastPlacement } from "./ToastTypes";
import { useMediaQuery, usePrevious } from "../hooks";
import { useToastHandlers, useToastStore } from "./ToastProvider";

export const useToasts = () => {
  const { toasts } = useToastStore();
  const { updateToast, updateFieldToast, dismissToast } = useToastHandlers();
  const visibleToasts = toasts.filter(t => t.visible);
  const previousToasts = usePrevious<Toast[]>(visibleToasts);
  const [isMobile] = useMediaQuery("(max-width: 640px)");
  const sortedToasts = getPlacementSortedToasts(toasts);

  const updateFrontHeight = React.useCallback(
    (placement: ToastPlacement, frontHeight: number) => {
      updateFieldToast("placement", placement, { frontHeight });
    },

    [updateFieldToast],
  );

  React.useEffect(() => {
    if (previousToasts == null) return;

    const previousToastsLength = previousToasts.length;
    const toastsLength = visibleToasts.length;

    if (toastsLength >= previousToastsLength) return;

    const frontToast = visibleToasts[toastsLength - 1];

    if (frontToast == null) return;
    if (frontToast.height == null) return;

    updateFrontHeight(frontToast.placement, frontToast.height);
  }, [visibleToasts, previousToasts, updateFrontHeight]);

  const updateHeight = React.useCallback(
    (toastId: string, height: number, placement: ToastPlacement) => {
      updateToast(toastId, { height });
      updateFrontHeight(placement, height);
    },
    [updateToast, updateFrontHeight],
  );

  const calculateOffset = React.useCallback(
    (toastId: string, placement: ToastPlacement) => {
      const toasts = sortedToasts[placement];
      const index = toasts.findIndex(toast => toast.id === toastId);
      if (index === -1) return 0;

      return toasts
        .slice(index + 1)
        .reduce((acc, t) => acc + (t.height || 0) + t.hoverOffsetGap, 0);
    },
    [sortedToasts],
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

  const pauseTimer = React.useCallback(
    (toastId: string) => {
      const toast = getToast(visibleToasts, toastId);

      if (!toast.autoDismiss) return;

      updateToast(toastId, { pausedAt: Date.now() });
    },
    [visibleToasts, updateToast],
  );

  const resumeTimer = React.useCallback(
    (toastId: string) => {
      const toast = getToast(visibleToasts, toastId);

      if (!toast.autoDismiss) return;

      const now = Date.now();
      const diff = now - (toast.pausedAt || 0);

      updateToast(toastId, {
        pausedAt: null,
        pauseDuration: toast.pauseDuration + diff,
      });
    },
    [visibleToasts, updateToast],
  );

  return {
    toasts: isMobile ? mobileSortedToasts(sortedToasts) : sortedToasts,
    pauseTimer,
    resumeTimer,
    updateHeight,
    calculateOffset,
    updateFrontHeight,
  };
};

export type useToastsReturnType = ReturnType<typeof useToasts>;
