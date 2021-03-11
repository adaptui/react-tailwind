import * as React from "react";
import { useMediaQuery } from "../../hooks";
import {
  ActionType,
  ToastHandler,
  useCreateToast,
  useToastStore,
} from "../RenderlessToast/core";
import { Toast } from "./types";

export const useInternalShowToast = (): ToastHandler<Toast> => {
  const { dispatch } = useToastStore();
  const createToast = useCreateToast();
  const [isMobile] = useMediaQuery("(max-width: 640px)");

  return React.useCallback(
    (content, options) => {
      const toast = createToast(content, options);

      dispatch({
        type: ActionType.ADD_TOAST,
        toast,
        maxToasts: isMobile ? 1 : 20,
      });

      setTimeout(() => {
        dispatch({
          type: ActionType.UPDATE_TOAST,
          toast: { ...toast, visible: true },
        });
      }, 0);

      return toast.id;
    },
    [dispatch, createToast, isMobile],
  );
};
