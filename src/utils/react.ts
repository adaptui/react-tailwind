import * as React from "react";
import { AnyObject, Component, Options, Props } from "ariakit-utils";

import { CheckboxDescriptionOptions } from "../checkbox";

import { isFunction } from "./assertions";
import { tcm } from "./tailwindMerge";
import { As, ComponentWithAs, Dict, PropsWithAs, RenderProp } from "./types";

/**
 * @template Props Component Props
 * @template RefProp HTML intrinsic type, eg: HTMLDivElement
 * @template DefaultType string, eg: "div"
 * @param component
 */
export function forwardRefWithAs<
  Props,
  RefProp = any,
  DefaultType extends As = any,
>(
  component: React.ForwardRefRenderFunction<
    RefProp,
    PropsWithAs<Props, DefaultType>
  >,
) {
  return React.forwardRef(component) as unknown as ComponentWithAs<
    Props,
    DefaultType
  >;
}

/**
 * Creates a type-safe component with the `as` prop and `React.forwardRef`.
 *
 * @example
 * import { createComponent } from "@adaptui/react";
 *
 * type Props = {
 *   as?: "div";
 *   customProp?: boolean;
 * };
 *
 * const Component = createComponent<Props>(({ customProp, ...props }) => {
 *   return <div {...props} />;
 * });
 *
 * <Component as="button" customProp />
 */
export function createComponent<O extends ComponentOptions>(
  render: (props: Props<O>) => React.ReactElement,
  type: string,
) {
  const Role = (props: Props<O>, ref: React.Ref<any>) =>
    render({ ref, ...props, __TYPE__: type });

  const Component = React.forwardRef(Role) as unknown as ComponentProps<O>;
  Component.defaultProps = { __TYPE__: type };

  return Component;
}

export type ComponentProps<O> = Component<O> & {
  defaultProps?: CheckboxDescriptionOptions<"div"> & { __TYPE__: string };
};

export type ComponentOptions<T extends As = any> = Options<T> & {
  __TYPE__?: string;
};

export function runIfFnChildren<T, U>(
  valueOrFn: T,
  ...args: U[]
): React.ReactNode | React.ReactNode[] {
  if (!isFunction(valueOrFn)) return valueOrFn as unknown as React.ReactNode;

  if (valueOrFn(...args).type.toString() !== "Symbol(react.fragment)")
    return [valueOrFn(...args)];

  return valueOrFn(...args).props.children;
}

/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 */
export function getValidChildren(
  children: React.ReactNode | React.ReactNode[],
) {
  return React.Children.toArray(children as React.ReactNode).filter(child =>
    React.isValidElement(child),
  );
}

export const getComponentProps = <T extends any, P>(
  componentMaps: Dict<string>,
  children: RenderProp<T>,
  props: P,
) => {
  const normalizedChildren = runIfFnChildren(children, props);
  const validChildren = getValidChildren(normalizedChildren);
  const componentProps: Dict = {};
  const finalChildren: React.ReactNode[] = [];

  if (validChildren.length > 0) {
    validChildren.forEach(function (child) {
      // @ts-ignore
      if (componentMaps[child?.props?.__TYPE__]) {
        // @ts-ignore
        componentProps[componentMaps[child?.props?.__TYPE__]] = child.props;
      } else {
        finalChildren.push(child);
      }
    });
  } else {
    finalChildren.push(normalizedChildren);
  }

  return { componentProps, finalChildren };
};

export function runIfFn<T extends AnyObject = AnyObject>(
  component: RenderProp<T>,
  props: T,
): React.ReactNode {
  return isFunction(component) ? component({ ...props }) : component;
}

// Merge library & user prop
export const passProps = <T extends AnyObject = AnyObject, S = AnyObject>(
  component: RenderProp<S>,
  stateProps: S,
  props?: T,
) => {
  return React.isValidElement(component)
    ? React.cloneElement(component, {
        ...props,
        ...component.props,
        className: tcm(props?.className, component.props.className),
      })
    : runIfFn(component, { ...stateProps, ...props });
};

// Add a11y to the icon passed
export const withIconA11y = <T extends AnyObject = AnyObject, S = AnyObject>(
  icon: RenderProp<S>,
  stateProps: S,
  props?: T,
) => {
  return passProps(icon, stateProps, {
    role: "img",
    focusable: false,
    "aria-hidden": true,
    ...props,
  });
};
