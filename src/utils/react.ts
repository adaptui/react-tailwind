import * as React from "react";

import { isFunction } from "./assertions";
import { cx } from "./tailwindMerge";
import {
  As,
  ComponentWithAs,
  Dict,
  PropsWithAs,
  RenderPropType,
} from "./types";

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

export function runIfFnChildren<T, U>(
  valueOrFn: T | ((...fnArgs: U[]) => T),
  ...args: U[]
): T {
  // Know bug but this is the only way to make it work
  // {({ isChecked }) => {
  //   return (
  //     <>
  //       <SwitchText data-testid="testid-mode">
  //         {isChecked ? DARK_MODE : LIGHT_MODE}
  //       </SwitchText>
  //     </>
  //   );
  // }}
  // Need a wrapper to get the children when the children is a function
  // @ts-ignore
  return isFunction(valueOrFn) ? valueOrFn(...args).props.children : valueOrFn;
}

/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 */
export function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter(child =>
    React.isValidElement(child),
  ) as React.ReactElement[];
}

// Merge library & user prop
export const passProps = (icon: RenderPropType, props?: Dict) => {
  return React.isValidElement(icon)
    ? React.cloneElement(icon, {
        ...props,
        ...icon.props,
        className: cx(props?.className, icon.props.className),
      })
    : runIfFn(icon, { ...props });
};

// Add a11y to the icon passed
export const withIconA11y = (icon: RenderPropType, props?: Dict) => {
  return passProps(icon, {
    role: "img",
    focusable: false,
    "aria-hidden": true,
    ...props,
  });
};

export const getComponentProps = <T, P>(
  componentMaps: Dict<string>,
  children: T,
  props: P,
) => {
  const normalizedChildren = runIfFnChildren(children, props);
  const validChildren = getValidChildren(normalizedChildren);
  const componentProps: Dict = {};
  const finalChildren: React.ReactNode[] = [];

  validChildren.forEach(child => {
    // @ts-ignore
    if (componentMaps[child.type.displayName]) {
      componentProps[
        // @ts-ignore
        componentMaps[child.type.displayName]
      ] = child.props;
    } else {
      finalChildren.push(child);
    }
  });

  return { componentProps, finalChildren };
};
