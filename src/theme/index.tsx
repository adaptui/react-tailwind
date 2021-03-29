import * as React from "react";
import { cx } from "@renderlesskit/react";
import { defaults, cloneDeep, mergeWith, isString, isUndefined } from "lodash";

import defaultTheme from "./defaultTheme";
import { createContext } from "../utils";
import { DeepDictionary, DeepPartial } from "../utils/types";

export type DefaultTheme = typeof defaultTheme;

export type ThemeContext = DeepDictionary<DefaultTheme>;

const [ThemeProvider, useTheme] = createContext<ThemeContext>({
  strict: false,
  name: "ThemeProvider",
});

export { useTheme };

type PartialDefaultTheme = DeepPartial<DefaultTheme>;
type ExtendableDefaultTheme = PartialDefaultTheme & {
  extend?: PartialDefaultTheme;
};

export type RenderlesskitProviderProps = {
  children?: React.ReactNode;
  theme?: ExtendableDefaultTheme;
};

export const RenderlesskitProvider = (props: RenderlesskitProviderProps) => {
  const { children, theme = defaultTheme } = props;

  const finalTheme: DefaultTheme = React.useMemo(
    () => mergeExtensions(mergeThemes([theme, cloneDeep(defaultTheme)])),
    [theme],
  );

  return <ThemeProvider value={finalTheme}>{children}</ThemeProvider>;
};

export function mergeThemes(themes: PartialDefaultTheme[]) {
  return {
    ...themes.reduce<DefaultTheme>(
      (merged, theme) => defaults(merged, theme),
      {} as DefaultTheme,
    ),

    // In order to resolve n config objects, we combine all of their `extend` properties
    // into arrays instead of objects so they aren't overridden.
    extend: collectExtends(themes),
  };
}

function collectExtends(items: ExtendableDefaultTheme[]) {
  return items.reduce((merged, { extend }) => {
    return mergeWith(merged, extend, (mergedValue, extendValue) => {
      if (isUndefined(mergedValue)) {
        return [extendValue];
      }

      if (Array.isArray(mergedValue)) {
        return [extendValue, ...mergedValue];
      }

      return [extendValue, mergedValue];
    });
  }, {});
}

export function mergeExtensions({
  extend,
  ...theme
}: DefaultTheme & { extend?: PartialDefaultTheme }) {
  return mergeWith(theme, extend, (themeValue, extendValue) => {
    return mergeWith(themeValue, ...extendValue, (merged: any, value: any) => {
      if (isString(merged) && isString(value)) {
        return cx(merged, value);
      }

      return undefined;
    });
  });
}
