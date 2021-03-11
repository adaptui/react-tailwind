import * as React from "react";

export interface DefaultToast {
  id: string;
  visible: boolean;
  reverseOrder: boolean;
}

export interface State<T> {
  toasts: T[];
}

const TOAST_LIMIT = 20;

export enum ActionType {
  ADD_TOAST,
  UPSERT_TOAST,
  UPDATE_TOAST,
  UPDATE_FIELD_TOAST,
  UPDATE_ALL_TOAST,
  DISMISS_TOAST,
  REMOVE_TOAST,
}

export type Action<T> =
  | {
      type: ActionType.ADD_TOAST;
      toast: T;
      maxToasts?: number;
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
      type: ActionType.UPDATE_FIELD_TOAST;
      field: keyof T;
      fieldValue: any;
      toast: Partial<T>;
    }
  | {
      type: ActionType.UPDATE_ALL_TOAST;
      toast: Partial<T>;
    }
  | {
      type: ActionType.DISMISS_TOAST;
      toastId?: string;
    }
  | {
      type: ActionType.REMOVE_TOAST;
      toastId?: string;
    };

const reducer = <T extends DefaultToast>(
  state: State<T>,
  action: Action<T>,
): State<T> => {
  switch (action.type) {
    case ActionType.ADD_TOAST: {
      const maxToasts = action.maxToasts || TOAST_LIMIT;

      return {
        ...state,
        toasts: action.toast.reverseOrder
          ? [...state.toasts, action.toast].slice(-maxToasts)
          : [action.toast, ...state.toasts].slice(-maxToasts),
      };
    }

    case ActionType.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map(t =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      };

    case ActionType.UPDATE_FIELD_TOAST:
      return {
        ...state,
        toasts: state.toasts.map(t =>
          t[action.field] === action.fieldValue ? { ...t, ...action.toast } : t,
        ),
      };

    case ActionType.UPDATE_ALL_TOAST:
      return {
        ...state,
        toasts: state.toasts.map(t => ({ ...t, ...action.toast })),
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
  }
};

const initialState = { toasts: [] };

export const useToastState = <T extends DefaultToast>(): StateReturnType<T> => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<State<T>, Action<T>>
  >(reducer, initialState);

  return { toasts: state.toasts, dispatch };
};

export interface StateReturnType<T> {
  toasts: T[];
  dispatch: React.Dispatch<Action<T>>;
}
