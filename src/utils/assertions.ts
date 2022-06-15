import { Dict } from "./types";

// Null / Undefined assertions
export function isUndefined(value: any): value is undefined {
  return typeof value === "undefined" || value === undefined;
}

// String assertions
export function isString(value: any): value is string {
  return Object.prototype.toString.call(value) === "[object String]";
}

// Array assertions
export function isArray<T>(value: any): value is Array<T> {
  return Array.isArray(value);
}

// Object assertions
export const isObject = (value: any): value is Dict => {
  const type = typeof value;

  return value != null && type === "object" && !isArray(value);
};

// Function assertions
export function isFunction(value: any): value is Function {
  return typeof value === "function";
}
