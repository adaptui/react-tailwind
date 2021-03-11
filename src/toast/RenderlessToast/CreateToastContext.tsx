import * as React from "react";

import { genId } from "./helpers";
import { Content } from "./ToastTypes";
import { ActionType, DefaultToast } from "./ToastState";
import { useToastState, StateReturnType } from "./index";

export type DefaultToastOptions<T extends DefaultToast> = Omit<
  T,
  "id" | "visible" | "reverseOrder"
>;

export type ConfigurableToastOptions<T extends DefaultToast> = Omit<
  T,
  "visible" | "reverseOrder"
>;

export type ToastOptions<T extends DefaultToast> = Partial<
  DefaultToastOptions<T>
>;

export interface ToastStore<T extends DefaultToast> extends StateReturnType<T> {
  defaultOptions: DefaultToastOptions<T>;
}

export interface ToastHandlerContext<T extends DefaultToast> {
  createToast: CreateToastHandler<T>;
  addToast: ToastHandler<T>;
}

export type CreateToastContextReturn<T extends DefaultToast> = [
  React.FC<Partial<DefaultToastOptions<T>>>,
  () => ToastStore<T>,
  () => ToastHandlerContext<T>,
];

export type CreateToastHandler<T extends DefaultToast> = (
  content: Content,
  options?: ConfigurableToastOptions<T>,
) => T;

export type ToastHandler<T extends DefaultToast> = (
  content: Content,
  options?: ConfigurableToastOptions<T>,
) => string;

/**
 * Creates a named context, provider, and hook.
 *
 * @param options create context options
 */
export function createToastContext<T extends DefaultToast>(
  defaultOptions: DefaultToastOptions<T>,
) {
  const options = {
    strict: true,
    errorMessage:
      "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: "ToastStore",
  };

  const Context = React.createContext<ToastStore<T> | undefined>(undefined);

  Context.displayName = options.name;

  function useToastStore() {
    const context = React.useContext(Context);

    if (!context && options.strict) {
      throw new Error(options.errorMessage);
    }

    return context;
  }

  const HandlerContext = React.createContext<
    ToastHandlerContext<T> | undefined
  >(undefined);

  HandlerContext.displayName = options.name;

  function useToastHandler() {
    const context = React.useContext(HandlerContext);

    if (!context && options.strict) {
      throw new Error(options.errorMessage);
    }

    return context;
  }

  const ToastStoreProvider: React.FC<ToastOptions<T>> = props => {
    const { children, ...rest } = props;
    const { toasts, dispatch } = useToastState<T>();
    console.log("%c toasts", "color: #cc7033", toasts);
    const context = {
      toasts,
      dispatch,
      defaultOptions: { ...defaultOptions, ...rest },
    };

    const createToast: CreateToastHandler<T> = (content, opts) => ({
      visible: false,
      reverseOrder: true,
      ...defaultOptions,
      ...opts,
      content,
      id: opts?.id || genId(),
    });

    const addToast: ToastHandler<T> = (content, options) => {
      const toast = createToast(content, options);

      dispatch({
        type: ActionType.ADD_TOAST,
        toast: { ...toast, visible: true },
      });

      return toast.id;
    };

    return (
      <Context.Provider value={context}>
        <HandlerContext.Provider value={{ createToast, addToast }}>
          {children}
        </HandlerContext.Provider>
      </Context.Provider>
    );
  };

  ToastStoreProvider.displayName = "ToastStoreProvider";

  return [
    ToastStoreProvider,
    useToastStore,
    useToastHandler,
  ] as CreateToastContextReturn<T>;
}
