import * as React from "react";

import { Toast, ToastPlacement } from "./ToastTypes";
import { useMediaQuery, usePrevious } from "../hooks";
import { useToastTimer } from "./RenderlessToast/useToastTimer";
import { useToastHandlers, useToastStore } from "./ToastProvider";
import { getPlacementSortedToasts, mobileSortedToasts } from "./helpers";

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

  const timerHandlers = useToastTimer(visibleToasts, updateToast, dismissToast);

  return {
    toasts: isMobile ? mobileSortedToasts(sortedToasts) : sortedToasts,
    ...timerHandlers,
    updateHeight,
    calculateOffset,
    updateFrontHeight,
  };
};

export type useToastsReturnType = ReturnType<typeof useToasts>;
