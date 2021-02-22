import * as React from "react";

export interface Toast {
  id: string;
  visible: boolean;
  pauseDuration: number;
}

export interface State<T> {
  toasts: T[];
  pausedAt: number | undefined;
}

const TOAST_LIMIT = 20;

export enum ActionType {
  ADD_TOAST,
  UPDATE_TOAST,
  UPSERT_TOAST,
  DISMISS_TOAST,
  REMOVE_TOAST,
  START_PAUSE,
  END_PAUSE,
}

export type Action<T> =
  | {
      type: ActionType.ADD_TOAST;
      toast: T;
    }
  | {
      type: ActionType.UPSERT_TOAST;
      toast: T;
    }
  | {
      type: ActionType.UPDATE_TOAST;
      toast: Partial<T>;
    }
  | {
      type: ActionType.DISMISS_TOAST;
      toastId?: string;
    }
  | {
      type: ActionType.REMOVE_TOAST;
      toastId?: string;
    }
  | {
      type: ActionType.START_PAUSE;
      time: number;
    }
  | {
      type: ActionType.END_PAUSE;
      time: number;
    };

const reducer = <T extends Toast>(
  state: State<T>,
  action: Action<T>,
): State<T> => {
  switch (action.type) {
    case ActionType.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case ActionType.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map(t =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      };

    case ActionType.UPSERT_TOAST:
      const { toast } = action;
      return state.toasts.find(t => t.id === toast.id)
        ? reducer(state, { type: ActionType.UPDATE_TOAST, toast })
        : reducer(state, { type: ActionType.ADD_TOAST, toast });

    case ActionType.DISMISS_TOAST:
      return {
        ...state,
        toasts: state.toasts.map(t =>
          t.id === action.toastId || action.toastId === undefined
            ? {
                ...t,
                visible: false,
              }
            : t,
        ),
      };

    case ActionType.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }

      return {
        ...state,
        toasts: state.toasts.filter(t => t.id !== action.toastId),
      };

    case ActionType.START_PAUSE:
      return {
        ...state,
        pausedAt: action.time,
      };

    case ActionType.END_PAUSE:
      const diff = action.time - (state.pausedAt || 0);

      return {
        ...state,
        pausedAt: undefined,
        toasts: state.toasts.map(t => ({
          ...t,
          pauseDuration: t.pauseDuration + diff,
        })),
      };
  }
};

const initialState = { toasts: [], pausedAt: undefined };

export const useStore = <T extends Toast>() => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<State<T>, Action<T>>
  >(reducer, initialState);

  return { ...state, dispatch };
};
