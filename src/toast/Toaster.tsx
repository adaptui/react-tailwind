import { ActionType } from "./useToastsStore";
import { useToastsStore } from "./ToastProvider";
import { ToastOptions, Toast, Content } from "./types";

type ToastHandler = (content: Content, options?: ToastOptions) => string;

const createToast = (content: Content, opts?: ToastOptions): Toast => ({
  createdAt: Date.now(),
  visible: true,
  pauseDuration: 0,
  content,
  ...opts,
  id: opts?.id || genId(),
});

const useAddToast = (): ToastHandler => {
  const { dispatch } = useToastsStore();

  return (content, options) => {
    const toast = createToast(content, options);
    dispatch({ type: ActionType.UPSERT_TOAST, toast });

    return toast.id;
  };
};

const useDismissToast = () => {
  const { dispatch } = useToastsStore();

  return (toastId?: string) => {
    dispatch({
      type: ActionType.DISMISS_TOAST,
      toastId,
    });

    setTimeout(() => {
      dispatch({
        type: ActionType.REMOVE_TOAST,
        toastId,
      });
    }, 1000);
  };
};

const useRemoveToast = () => {
  const { dispatch } = useToastsStore();

  return (toastId?: string) => {
    dispatch({
      type: ActionType.REMOVE_TOAST,
      toastId,
    });
  };
};

export const useToast = () => {
  const addToast = useAddToast();
  const dismissToast = useDismissToast();
  const removeToast = useRemoveToast();

  return { addToast, dismissToast, removeToast };
};

export const genId = (() => {
  let count = 0;
  return () => {
    return (++count).toString();
  };
})();
