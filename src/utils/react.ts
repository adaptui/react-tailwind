import * as React from "react";
import { AnyObject } from "ariakit-utils";

import { isFunction } from "./assertions";
import { cx } from "./tailwindMerge";
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

// From Chakra Utils
export function runIfFn<T, U>(
  valueOrFn: T | ((...fnArgs: U[]) => T),
  ...args: U[]
): T {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

export function runIfFnChildren<T, U>(valueOrFn: T, ...args: U[]): T {
  if (!isFunction(valueOrFn)) return valueOrFn;

  // @ts-ignore
  if (valueOrFn(...args).type.toString() !== "Symbol(react.fragment)")
    // @ts-ignore
    return [valueOrFn(...args)];

  // @ts-ignore
  return valueOrFn(...args).props.children;
}

/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 */
export function getValidChildren<T extends any>(children: RenderProp<T>) {
  return React.Children.toArray(children as React.ReactNode).filter(child =>
    React.isValidElement(child),
  ) as React.ReactNode[];
}

// Merge library & user prop
export const passProps = <T extends AnyObject>(
  component: RenderProp<T>,
  props?: T,
) => {
  return React.isValidElement(component)
    ? React.cloneElement(component, {
        ...props,
        ...component.props,
        className: cx(props?.className, component.props.className),
      })
    : runIfFn(component, props as T);
};

// Add a11y to the icon passed
export const withIconA11y = (icon: RenderProp, props?: Dict) => {
  return passProps(icon, {
    role: "img",
    focusable: false,
    "aria-hidden": true,
    ...props,
  });
};

export const getComponentProps = <T extends any, P>(
  componentMaps: Dict<string>,
  children: RenderProp<T>,
  props: P,
) => {
  const normalizedChildren = runIfFnChildren(children, props);
  const validChildren = getValidChildren(normalizedChildren);
  const componentProps: Dict = {};
  const finalChildren: RenderProp<T>[] = [];

  if (validChildren.length > 0) {
    validChildren.forEach(function (child) {
      // @ts-ignore
      if (componentMaps[child?.type?.displayName]) {
        // @ts-ignore
        componentProps[componentMaps[child?.type?.displayName]] = child.props;
      } else {
        finalChildren.push(child);
      }
    });
  } else {
    finalChildren.push(normalizedChildren);
  }

  return { componentProps, finalChildren };
};
