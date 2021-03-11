import * as React from "react";

import {
  Toast,
  ToastOptions,
  useToastState,
  StateReturnType,
  DefaultToastOptions,
} from "./index";
import { createContext } from "../../utils";

export interface ToastStore extends StateReturnType<Toast> {
  defaultOptions: DefaultToastOptions;
}

const [ToastStoreProvider, useToastStore] = createContext<ToastStore>({
  strict: false,
  name: "ToastsState",
  errorMessage: "useToastStore must be used within ToastProvider",
});

export { useToastStore };

const defaultOptions: DefaultToastOptions = {
  placement: "bottom-center",
  autoDismiss: true,
  dismissDuration: 3000,
  animationDuration: 0,
  reverseOrder: true,
  offsetGap: 10,
  hoverOffsetGap: 10,
  visibleToasts: 3,
};

export const ToastProvider: React.FC<ToastOptions> = props => {
  const { children, ...rest } = props;
  const store = useToastState<Toast>();
  const context = { ...store, defaultOptions: { ...defaultOptions, ...rest } };

  return <ToastStoreProvider value={context}>{children}</ToastStoreProvider>;
};
