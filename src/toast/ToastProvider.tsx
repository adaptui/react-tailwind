import { Toast } from "./types";
import { createContext } from "../utils";
import { useStore, State, Action } from "./useToastsStore";

export type ToastsStore = State<Toast> & {
  dispatch: React.Dispatch<Action<Toast>>;
};

const [ToastsStoreProvider, useToastsStore] = createContext<ToastsStore>({
  errorMessage: "ToastsStore must be used within ToastProvider",
  name: "ToastsStore",
  strict: false,
});

export { useToastsStore };

export const ToastProvider: React.FC = (props: any) => {
  const { children } = props;
  const store = useStore<Toast>();

  return <ToastsStoreProvider value={store}>{children}</ToastsStoreProvider>;
};
