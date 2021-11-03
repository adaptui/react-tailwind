import * as React from "react";
import { isUndefined } from "lodash";

export interface CreateContextOptions<ContextType> {
  /**
   * The display name of the context
   */
  name?: string;

  /**
   * Default context value.
   */
  defaultContext?: ContextType;

  /**
   * If `true`, React will throw if context is `null` or `undefined`
   * In some cases, you might want to support nested context, so you can set it to `false`
   */
  strict?: boolean;

  /**
   * Error message to throw if the context is `undefined`
   */
  errorMessage?: string;
}

/**
 * Creates a named context, provider, and hook.
 *
 * @param options create context options
 */
export function createContext<ContextType extends object | null>(
  options: CreateContextOptions<ContextType> = {},
) {
  const {
    name = "Provider",
    defaultContext,
    strict = true,
    errorMessage = "Seems you forgot to wrap `useContext` within the Context Provider",
  } = options;

  const Context = React.createContext<ContextType | undefined>(defaultContext);

  function Provider(props: ContextType & { children: React.ReactNode }) {
    const { children, ...context } = props;

    // Idea to memoize within the createContext from [radix ui](https://github.com/radix-ui/primitives/blob/cefcb6d9281cf203b0ab54b49f85725dc203df85/packages/react/context/src/createContext.tsx#L13)
    // Only re-memoize when prop values change
    const value = React.useMemo(
      () => context,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Object.values(context),
    ) as ContextType;

    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  Provider.displayName = name;

  function useContext() {
    const context = React.useContext(Context);

    if (context) return context;

    if (!isUndefined(defaultContext)) return defaultContext;

    if (strict) {
      throw new Error(errorMessage);
    }

    return undefined;
  }

  return [Provider, useContext] as const;
}
