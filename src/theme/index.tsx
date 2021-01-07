import * as React from "react";
import { cx } from "@renderlesskit/react";
import { defaults, isString, isUndefined, mergeWith } from "lodash";

import { createContext } from "../utils";
import defaultTheme from "./defaultTheme";
import { overrideTailwindClasses } from "./tailwind-override";
import defaultTailwindProperties from "./defaultTailwindProperties";

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

type DeepDictionary<K> = {
  [P in keyof K]: K[P] extends object
    ? DeepDictionary<K[P]> & { [x: string]: any }
    : K[P];
};

export type ThemeType = typeof defaultTheme;

export type ExtendThemeType = ThemeType & DeepPartial<{ extend: ThemeType }>;

export type ThemeContext = DeepDictionary<ThemeType>;

const [ThemeProvider, useTheme] = createContext<ThemeContext>({
  strict: false,
  name: "ThemeProvider",
});

export type OverrideContext = (...classNames: any[]) => string;

const [OverrideProvider, useOverride] = createContext<OverrideContext>({
  strict: false,
  name: "OverrideProvider",
});

export { useTheme, useOverride };

export type RenderlesskitProviderProps = {
  tailwindConfig?: any;
  theme?: ExtendThemeType;
  children?: React.ReactNode;
  tailwindProperties?: { [key: string]: string[] };
};

export const RenderlesskitProvider = (props: RenderlesskitProviderProps) => {
  const {
    children,
    tailwindConfig = { components: {} },
    theme = defaultTheme,
    tailwindProperties = defaultTailwindProperties,
  } = props;

  const ocx = (...classNames: string[]) =>
    overrideTailwindClasses(cx(...classNames), {
      tailwindProperties: tailwindProperties,
    });
  const {
    components: userTheme,
  }: { components: ExtendThemeType } = tailwindConfig;
  const finalTheme: ThemeType = mergeExtensions(
    mergeThemes([userTheme, theme]),
    ocx,
  );

  return (
    <ThemeProvider value={finalTheme}>
      <OverrideProvider value={ocx}>{children}</OverrideProvider>
    </ThemeProvider>
  );
};

function mergeThemes(themes: ExtendThemeType[]) {
  return {
    ...themes.reduce<ThemeType>(
      (merged, theme) => defaults(merged, theme),
      {} as ThemeType,
    ),

    // In order to resolve n config objects, we combine all of their `extend` properties
    // into arrays instead of objects so they aren't overridden.
    extend: collectExtends(themes),
  };
}

function collectExtends(
  items: ExtendThemeType[],
): { [Key: string]: ExtendThemeType[] } {
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

function mergeExtensions(
  { extend, ...theme }: any,
  ocx: (...classNames: string[]) => string,
): ExtendThemeType {
  return mergeWith(theme, extend, (themeValue, extendValue) => {
    return mergeWith(themeValue, ...extendValue, (merged: any, value: any) => {
      if (isString(merged) && isString(value)) {
        return ocx(merged, value);
      }

      return undefined;
    });
  });
}
