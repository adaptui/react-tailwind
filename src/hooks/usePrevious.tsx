import * as React from "react";
import type { MutableRefObject } from "react";

/**
 * a type-safe version of the `usePrevious` hook described here:
 * @see {@link https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state}
 */
export function usePrevious<T>(
  value: T,
): MutableRefObject<T | undefined>["current"] {
  const ref = React.useRef<T>();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
