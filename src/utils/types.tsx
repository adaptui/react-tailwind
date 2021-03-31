import * as React from "react";

export type RenderProp<T> = {
  children?: React.ReactNode | ((args: T) => JSX.Element);
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

/**
 * @template Props Component Props
 * @template RefProp HTML intrinsic type, eg: HTMLDivElement
 * @template DefaultType string, eg: "div"
 * @param component
 */
export function forwardRefWithAs<
  Props,
  RefProp = any,
  DefaultType extends As = any
>(
  component: React.ForwardRefRenderFunction<
    RefProp,
    PropsWithAs<Props, DefaultType>
  >,
) {
  return (React.forwardRef(component) as unknown) as ComponentWithAs<
    Props,
    DefaultType
  >;
}

export type AnyString = string & { ignore?: any };

export type Dict<T = any> = Record<string, T>;

// export type Split<T, K extends string> = T extends `${infer P1}${K}${infer P2}`
//   ? [P1, ...Split<P2, K>]
//   : [T];

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type DeepDictionary<K> = {
  [P in keyof K]: K[P] extends object
    ? DeepDictionary<K[P]> & { [x: string]: any }
    : K[P];
};
