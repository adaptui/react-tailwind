import * as React from "react";

import {
  useToastState,
  StateReturnType,
  DefaultToast,
  genId,
  ActionType,
} from "./index";
import { createContext } from "../../utils";

export type DefaultToastOptions<T extends DefaultToast> = Omit<
  T,
  "id" | "visible" | "reverseOrder"
>;

export type DefaultToastProviderOptions<T extends DefaultToast> = Partial<
  DefaultToastOptions<T>
>;

export type ConfigurableToastOptions<T extends DefaultToast> = Omit<
  T,
  "visible" | "reverseOrder"
>;

export type ToastOptions<T extends DefaultToast> = Partial<
  ConfigurableToastOptions<T>
>;

export interface ToastStore<T extends DefaultToast>
  extends StateReturnType<T> {}

export interface CreateToast<T extends DefaultToast, Content> {
  createToast: CreateToastHandler<T, Content>;
}

export type CreateToastHandler<T extends DefaultToast, Content> = (
  content: Content,
  options?: ToastOptions<T>,
) => T;

export type AddToast<T extends DefaultToast, Content> = (
  content: Content,
  options?: ToastOptions<T>,
) => string;

export type ShowToast<T extends DefaultToast, Content> = (
  content: Content,
  options?: ToastOptions<T>,
) => string;

export type UpdateToast<T extends DefaultToast> = (
  toastId: string,
  toast: Partial<T>,
) => void;

export type UpdateFieldToast<T extends DefaultToast> = (
  field: keyof T,
  fieldValue: any,
  toast: Partial<T>,
) => void;

export type UpdateAllToast<T extends DefaultToast> = (
  toast: Partial<T>,
) => void;

export type DismissToast = (toastId?: string) => void;

export type RemoveToast = (toastId?: string) => void;

export type ToastHandlers<T extends DefaultToast, Content> = {
  addToast: AddToast<T, Content>;
  showToast: ShowToast<T, Content>;
  updateToast: UpdateToast<T>;
  updateFieldToast: UpdateFieldToast<T>;
  updateAllToast: UpdateAllToast<T>;
  dismissToast: DismissToast;
  removeToast: RemoveToast;
};

export function createToastContext<T extends DefaultToast, Content>(
  defaultOptions: DefaultToastOptions<T>,
) {
  const [ToastStoreProvider, useToastStore] = createContext<ToastStore<T>>({
    strict: false,
    name: "ToastsState",
    errorMessage: "useToastStore must be used within ToastProvider",
  });

  const [CreateToastProvider, useCreateToast] = createContext<
    CreateToast<T, Content>
  >({
    strict: false,
    name: "CreateToast",
    errorMessage: "useCreateToast must be used within ToastProvider",
  });

  const [ToastHandlersProvider, useToastHandlers] = createContext<
    ToastHandlers<T, Content>
  >({
    strict: false,
    name: "ToastHandlers",
    errorMessage: "useToastHandlers must be used within ToastProvider",
  });

  const ToastProvider: React.FC<DefaultToastProviderOptions<T>> = props => {
    const { children, ...rest } = props;
    const { toasts, dispatch } = useToastState<T>();
    const context = {
      toasts,
      dispatch,
    };

    // @ts-ignore
    const createToast: CreateToastHandler<T, Content> = (content, opts) => ({
      visible: false,
      reverseOrder: true,
      ...defaultOptions,
      ...rest,
      ...opts,
      content,
      id: opts?.id || genId(),
    });

    const addToast: AddToast<T, Content> = (content, options) => {
      const toast = createToast(content, options);

      dispatch({
        type: ActionType.ADD_TOAST,
        toast: { ...toast, visible: true },
      });

      return toast.id;
    };

    const showToast: ShowToast<T, Content> = (content, options) => {
      const toast = createToast(content, options);

      dispatch({ type: ActionType.ADD_TOAST, toast });

      setTimeout(() => {
        dispatch({
          type: ActionType.UPDATE_TOAST,
          toast: { ...toast, visible: true },
        });
      }, 0);

      return toast.id;
    };

    const updateToast: UpdateToast<T> = (toastId, toast) => {
      dispatch({
        type: ActionType.UPDATE_TOAST,
        toast: { ...toast, id: toastId },
      });
    };

    const updateFieldToast: UpdateFieldToast<T> = (
      field,
      fieldValue,
      toast,
    ) => {
      dispatch({
        type: ActionType.UPDATE_FIELD_TOAST,
        field,
        fieldValue,
        toast,
      });
    };

    const updateAllToast: UpdateAllToast<T> = toast => {
      dispatch({ type: ActionType.UPDATE_ALL_TOAST, toast });
    };

    const dismissToast: DismissToast = toastId => {
      const unmountDuration = defaultOptions.animationDuration;

      dispatch({ type: ActionType.DISMISS_TOAST, toastId });

      setTimeout(() => {
        dispatch({ type: ActionType.REMOVE_TOAST, toastId });
      }, unmountDuration);
    };

    const removeToast: RemoveToast = toastId =>
      dispatch({ type: ActionType.REMOVE_TOAST, toastId });

    return (
      <ToastStoreProvider value={context}>
        <CreateToastProvider value={{ createToast }}>
          <ToastHandlersProvider
            value={{
              addToast,
              showToast,
              updateToast,
              updateFieldToast,
              updateAllToast,
              dismissToast,
              removeToast,
            }}
          >
            {children}
          </ToastHandlersProvider>
        </CreateToastProvider>
      </ToastStoreProvider>
    );
  };

  ToastProvider.displayName = "ToastStoreProvider";

  return [
    ToastProvider,
    useToastStore,
    useCreateToast,
    useToastHandlers,
  ] as CreateToastContextReturn<T, Content>;
}

export type CreateToastContextReturn<T extends DefaultToast, Content> = [
  React.FC<Partial<DefaultToastOptions<T>>>,
  () => ToastStore<T>,
  () => CreateToast<T, Content>,
  () => ToastHandlers<T, Content>,
];
