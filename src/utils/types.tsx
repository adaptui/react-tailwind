import * as React from "react";
import { AnyObject, RenderProp as AriakitRenderProp } from "ariakit-utils";

/**
 * The `children` prop that supports a function.
 * @template T Element type.
 */
export declare type RenderProp<T = AnyObject> =
  | React.ReactNode
  | AriakitRenderProp<T>;

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

export type Dict<T = any> = Record<string, T>;

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type DeepDictionary<K> = {
  [P in keyof K]: K[P] extends object
    ? DeepDictionary<K[P]> & { [x: string]: any }
    : K[P];
};
