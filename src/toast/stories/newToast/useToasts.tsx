import * as React from "react";

import { Toast } from "./types";
import { usePrevious } from "../../../hooks";
import { ActionType } from "./useToastsStore";
import { useToastsStore } from "./ToastProvider";

export const useToasts = () => {
  const { toasts, dispatch } = useToastsStore();
  const visibleToasts = toasts.filter(t => t.visible);
  const previousToasts = usePrevious<Toast[]>(toasts);

  const updateFrontHeight = React.useCallback(
    (frontHeight: number) =>
      dispatch({
        type: ActionType.UPDATE_ALL_TOAST,
        toast: { frontHeight },
      }),
    [dispatch],
  );

  React.useEffect(() => {
    if (previousToasts == null) return;

    const previousToastsLength = previousToasts.length;
    const toastsLength = toasts.length;

    if (toastsLength >= previousToastsLength) return;

    const frontToast = toasts[toastsLength - 1];

    if (frontToast == null) return;
    if (frontToast.height == null) return;

    updateFrontHeight(frontToast.height);
  }, [toasts, previousToasts, updateFrontHeight]);

  const updateHeight = React.useCallback(
    (toastId: string, height: number) => {
      dispatch({
        type: ActionType.UPDATE_TOAST,
        toast: { id: toastId, height },
      });
      updateFrontHeight(height);
    },
    [dispatch, updateFrontHeight],
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

  return { toasts, updateHeight, updateFrontHeight, calculateOffset };
};
