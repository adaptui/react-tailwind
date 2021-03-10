import * as React from "react";

import {
  genId,
  Toast,
  Content,
  ActionType,
  useToastStore,
  CreateToastOptions,
} from "./index";

export type ToastHandler = (
  content: Content,
  options?: CreateToastOptions,
) => string;

export type CreateToastHandler = (
  content: Content,
  options?: CreateToastOptions,
) => Toast;

export const useCreateToast = (): CreateToastHandler => {
  const { defaultOptions } = useToastStore();

  return React.useCallback(
    (content, opts) => ({
      createdAt: Date.now(),
      visible: false,
      pausedAt: null,
      pauseDuration: 0,
      height: null,
      frontHeight: null,
      content,
      ...defaultOptions,
      ...opts,
      id: opts?.id || genId(),
    }),
    // Since its only a few object https://twitter.com/dan_abramov/status/1104414272753487872
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(defaultOptions)],
  );
};

export const useAddToast = (): ToastHandler => {
  const { dispatch } = useToastStore();
  const createToast = useCreateToast();

  return React.useCallback(
    (content, options) => {
      const toast = createToast(content, options);

      dispatch({
        type: ActionType.ADD_TOAST,
        toast: { ...toast, visible: true },
      });

      return toast.id;
    },
    [dispatch, createToast],
  );
};

export const useShowToast = (): ToastHandler => {
  const { dispatch } = useToastStore();
  const createToast = useCreateToast();

  return React.useCallback(
    (content, options) => {
      const toast = createToast(content, options);

      dispatch({ type: ActionType.ADD_TOAST, toast });

      setTimeout(() => {
        dispatch({
          type: ActionType.UPDATE_TOAST,
          toast: { ...toast, visible: true },
        });
      }, 0);

      return toast.id;
    },
    [dispatch, createToast],
  );
};

export const useUpsertToast = (): ToastHandler => {
  const { dispatch } = useToastStore();
  const createToast = useCreateToast();

  return React.useCallback(
    (content, options) => {
      const toast = createToast(content, options);

      dispatch({ type: ActionType.UPSERT_TOAST, toast });

      return toast.id;
    },
    [dispatch, createToast],
  );
};

export const useUpdateToast = () => {
  const { dispatch } = useToastStore();

  return React.useCallback(
    (toastId: string, toast: Partial<Toast>) => {
      dispatch({
        type: ActionType.UPDATE_TOAST,
        toast: { ...toast, id: toastId },
      });
    },
    [dispatch],
  );
};

export const useUpdateFieldToast = () => {
  const { dispatch } = useToastStore();

  return React.useCallback(
    (field: keyof Toast, fieldValue: any, toast: Partial<Toast>) => {
      dispatch({
        type: ActionType.UPDATE_FIELD_TOAST,
        field,
        fieldValue,
        toast,
      });
    },
    [dispatch],
  );
};

export const useUpdateAllToast = () => {
  const { dispatch } = useToastStore();

  return React.useCallback(
    (toast: Partial<Toast>) => {
      dispatch({ type: ActionType.UPDATE_ALL_TOAST, toast });
    },
    [dispatch],
  );
};

export const useDismissToast = () => {
  const { dispatch, defaultOptions } = useToastStore();

  return React.useCallback(
    (toastId?: string) => {
      const unmountDuration = defaultOptions.animationDuration;

      dispatch({ type: ActionType.DISMISS_TOAST, toastId });

      setTimeout(() => {
        dispatch({ type: ActionType.REMOVE_TOAST, toastId });
      }, unmountDuration);
    },
    [defaultOptions.animationDuration, dispatch],
  );
};

export const useRemoveToast = () => {
  const { dispatch } = useToastStore();

  return React.useCallback(
    (toastId?: string) => dispatch({ type: ActionType.REMOVE_TOAST, toastId }),
    [dispatch],
  );
};

// Toast Triggers
export const useToastHandlers = () => {
  const addToast = useAddToast();
  const showToast = useShowToast();
  const updateToast = useUpdateToast();
  const updateAllToast = useUpdateAllToast();
  const updateFieldToast = useUpdateFieldToast();
  const upsertToast = useUpsertToast();
  const dismissToast = useDismissToast();
  const removeToast = useRemoveToast();

  return {
    addToast,
    showToast,
    upsertToast,
    updateToast,
    updateAllToast,
    updateFieldToast,
    dismissToast,
    removeToast,
  };
};
