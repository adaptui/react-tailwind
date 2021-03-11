import * as React from "react";

import {
  Toast,
  ToastOptions,
  useToastState,
  StateReturnType,
  DefaultToastOptions,
} from "./index";
import { createContext } from "../../../utils";

export interface ToastStore extends StateReturnType<Toast> {
  defaultOptions: DefaultToastOptions;
}

const [ToastStoreProvider, useToastStore] = createContext<ToastStore>({
  strict: false,
  name: "ToastsState",
  errorMessage: "useToastStore must be used within ToastProvider",
});

export { useToastStore };

const _defaultOptions = {
  placement: "bottom-center",
  autoDismiss: true,
  dismissDuration: 3000,
  animationDuration: 0,
  reverseOrder: true,
};

export const ToastProvider: React.FC<{
  defaultOptions?: ToastOptions & { [x: string]: any };
}> = props => {
  const { children, defaultOptions } = props;
  const store = useToastState<Toast>();
  const context = {
    ...store,
    defaultOptions: { ..._defaultOptions, ...defaultOptions },
  };

  return <ToastStoreProvider value={context}>{children}</ToastStoreProvider>;
};
