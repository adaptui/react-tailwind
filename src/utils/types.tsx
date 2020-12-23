import * as React from "react";

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
};

export function forwardRefWithAsSimple<
  Props,
  RefProp = any,
  DefaultType extends As = any
>(component: React.ForwardRefRenderFunction<RefProp, Props>) {
  return (React.forwardRef(component) as unknown) as ComponentWithAs<
    Props,
    DefaultType
  >;
}

export function forwardRefWithAs<Props, DefaultType extends As>(
  component: React.ForwardRefRenderFunction<any, any>,
) {
  return (React.forwardRef(component) as unknown) as ComponentWithAs<
    Props,
    DefaultType
  >;
}
