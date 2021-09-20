import { cx } from "@chakra-ui/utils";
import * as React from "react";
import { createTailwindMerge } from "tailwind-merge";

import { Dict, RenderPropType } from "./types";

export interface CreateContextOptions {
  /**
   * If `true`, React will throw if context is `null` or `undefined`
   * In some cases, you might want to support nested context, so you can set it to `false`
   */
  strict?: boolean;
  /**
   * Error message to throw if the context is `undefined`
   */
  errorMessage?: string;
  /**
   * The display name of the context
   */
  name?: string;
}

export type CreateContextReturn<T> = [
  React.Provider<T>,
  () => T,
  React.Context<T>,
];

/**
 * Creates a named context, provider, and hook.
 *
 * @param options create context options
 */
export function createContext<ContextType>(options: CreateContextOptions = {}) {
  const {
    strict = true,
    errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name,
  } = options;

  const Context = React.createContext<ContextType | undefined>(undefined);

  Context.displayName = name;

  function useContext() {
    const context = React.useContext(Context);

    if (!context && strict) {
      throw new Error(errorMessage);
    }

    return context;
  }

  return [
    Context.Provider,
    useContext,
    Context,
  ] as CreateContextReturn<ContextType>;
}

// Function assertions
export function isFunction(value: any): value is Function {
  return typeof value === "function";
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

// SSR check
export function canUseDOM() {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
}

export const isBrowser = canUseDOM();

// Array assertions
export function isArray<T>(value: any): value is Array<T> {
  return Array.isArray(value);
}

// Object assertions
export const isObject = (value: any): value is Dict => {
  const type = typeof value;

  return value != null && type === "object" && !isArray(value);
};

export const objectKeys = <T extends Dict>(obj: T) =>
  Object.keys(obj) as unknown as (keyof T)[];

// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
export const debounce = (func: Function, wait = 166) => {
  let timeout: any;
  function debounced(this: any, ...args: any) {
    // eslint-disable-next-line consistent-this
    const that = this;
    const later = () => {
      func.apply(that, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = () => {
    clearTimeout(timeout);
  };

  return debounced;
};

// String assertions
export function isString(value: any): value is string {
  return Object.prototype.toString.call(value) === "[object String]";
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

export function isUndefined(value: any): value is undefined {
  return typeof value === "undefined" || value === undefined;
}

export const tcm = createTailwindMerge(getDefaultConfig => {
  const defaultConfig = getDefaultConfig();

  return {
    ...defaultConfig,
    classGroups: {
      ...defaultConfig.classGroups,
      "font-size": [
        ...defaultConfig.classGroups["font-size"],
        // Defined custom text presets
        {
          text: ["cxs", "paragraph-cxs", "paragraph-sm", "2base"],
        },
      ],
    },
  };
});
