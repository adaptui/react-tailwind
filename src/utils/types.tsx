import * as React from "react";

export type RenderPropType<T = any> =
  | React.ReactNode
  | ((args: T) => JSX.Element);

export type RenderProp<T> = {
  children?: RenderPropType<T>;
};

export type As<Props = any> = React.ElementType<Props>;

export type PropsWithAs<Props = {}, Type extends As = As> = Props &
  Omit<React.ComponentProps<Type>, "as" | keyof Props> & {
    as?: Type;
  };

export type ComponentWithAs<Props, DefaultType extends As> = {
  <Type extends As>(
    props: PropsWithAs<Props, Type> & { as: Type },
  ): JSX.Element;
  (props: PropsWithAs<Props, DefaultType>): JSX.Element;
  displayName?: string;
};

export type AnyString = string & { ignore?: any };

export type Dict<T = any> = Record<string, T>;

export type Split<T, K extends string> = T extends `${infer P1}${K}${infer P2}`
  ? [P1, ...Split<P2, K>]
  : [T];

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type DeepDictionary<K> = {
  [P in keyof K]: K[P] extends object
    ? DeepDictionary<K[P]> & { [x: string]: any }
    : K[P];
};
