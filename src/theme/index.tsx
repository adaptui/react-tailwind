import * as React from "react";
import { defaults, isString, isUndefined, mergeWith } from "lodash";

// @ts-ignore
import resolveConfig from "tailwindcss/lib/util/resolveConfig";
// @ts-ignore
import defaultTailwindConfig from "tailwindcss/stubs/defaultConfig.stub";

import { createContext, ocx } from "../utils";
import defaultTheme from "./defaultTheme";
import themeType from "./themeType";

export type ThemeType = typeof defaultTheme;

export type ExtendThemeType = Partial<typeof themeType>;

export type ThemeContext = ThemeType;

const [ThemeProvider, useTheme] = createContext<ThemeContext>({
  strict: false,
  name: "ThemeProvider",
});

export { useTheme };

export type RenderlesskitProviderProps = {
  tailwindConfig?: any;
  theme?: ExtendThemeType;
  children?: React.ReactNode;
};

export const RenderlesskitProvider = (props: RenderlesskitProviderProps) => {
  const { children, tailwindConfig, theme = defaultTheme } = props;
  const finalTailwindConfig = tailwindConfig
    ? resolveConfig([tailwindConfig, defaultTailwindConfig])
    : resolveConfig([defaultTailwindConfig]);

  const {
    components: userTheme,
  }: { components: ExtendThemeType } = finalTailwindConfig;
  const finalTheme: ThemeType = mergeExtensions(
    mergeThemes([userTheme, theme]),
  );

  return <ThemeProvider value={finalTheme}>{children}</ThemeProvider>;
};

function mergeThemes(themes: ExtendThemeType[]) {
  return {
    ...themes.reduce((merged, theme) => defaults(merged, theme), {}),

    // In order to resolve n config objects, we combine all of their `extend` properties
    // into arrays instead of objects so they aren't overridden.
    extend: collectExtends(themes),
  };
}

function collectExtends(items: ExtendThemeType[]) {
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

function mergeExtensions({ extend, ...theme }: any) {
  return mergeWith(theme, extend, (themeValue, extendValue) => {
    return mergeWith(themeValue, ...extendValue, (merged: any, value: any) => {
      if (isString(merged) && isString(value)) {
        return ocx(merged, value);
      }

      return undefined;
    });
  });
}
