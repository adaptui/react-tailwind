import { useCallback, useEffect } from "react";
import { useToastTimer } from "@renderlesskit/react";

import { useMediaQuery, usePrevious } from "../hooks";

import {
  getPlacementSortedToasts,
  mobileSortedToasts,
  Toast,
  ToastPlacement,
  useToastHandlers,
  useToastStore,
} from "./index";

export const useToasts = () => {
  const { toasts } = useToastStore();
  const { updateToast, updateFieldToast, dismissToast } = useToastHandlers();
  const visibleToasts = toasts.filter(t => t.visible);
  const previousToasts = usePrevious<Toast[]>(visibleToasts);
  const [isMobile] = useMediaQuery("(max-width: 640px)");
  const sortedToasts = getPlacementSortedToasts(toasts);

  const updateFrontHeight = useCallback(
    (placement: ToastPlacement, frontHeight: number) => {
      updateFieldToast("placement", placement, { frontHeight });
    },

    [updateFieldToast],
  );

  useEffect(() => {
    if (previousToasts == null) return;

    const previousToastsLength = previousToasts.length;
    const toastsLength = visibleToasts.length;

    if (toastsLength >= previousToastsLength) return;

    const frontToast = visibleToasts[toastsLength - 1];

    if (frontToast == null) return;
    if (frontToast.height == null) return;

    updateFrontHeight(frontToast.placement, frontToast.height);
  }, [visibleToasts, previousToasts, updateFrontHeight]);

  const updateHeight = useCallback(
    (toastId: string, height: number, placement: ToastPlacement) => {
      updateToast(toastId, { height });
      updateFrontHeight(placement, height);
    },
    [updateToast, updateFrontHeight],
  );

  const calculateOffset = useCallback(
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
