export type Renderable = JSX.Element | string | number | null;

export type ValueFunction<TValue, TArg> = (arg: TArg) => TValue;
export type ValueOrFunction<TValue, TArg> =
  | TValue
  | ValueFunction<TValue, TArg>;
export type Content = ValueOrFunction<Renderable, Toast>;

export interface Toast {
  createdAt: number;
  id: string;
  content: Content;
  visible: boolean;
  pauseDuration: number;
  height?: number;
  frontHeight?: number;
  duration?: number;
}

export type ToastOptions = Partial<Pick<Toast, "id" | "duration">>;
