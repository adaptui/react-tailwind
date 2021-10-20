import { defaults, isString, isUndefined, mergeWith, tcm } from "../utils";

import {
  DefaultTheme,
  ExtendableDefaultTheme,
  PartialDefaultTheme,
} from "./types";

export const extendTheme = <T = ExtendableDefaultTheme>(theme: T): T => {
  return theme;
};

// Based on https://github.com/tailwindlabs/tailwindcss/blob/6ce8864f47061035cd79b2d563eea72467dcb3b7/src/util/resolveConfig.js
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

// Based on https://github.com/tailwindlabs/tailwindcss/blob/6ce8864f47061035cd79b2d563eea72467dcb3b7/src/util/resolveConfig.js
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

// Based on https://github.com/tailwindlabs/tailwindcss/blob/6ce8864f47061035cd79b2d563eea72467dcb3b7/src/util/resolveConfig.js
export function mergeExtensions({
  extend,
  ...theme
}: DefaultTheme & { extend?: PartialDefaultTheme }) {
  return mergeWith(theme, extend, (themeValue, extendValue) => {
    return mergeWith(
      themeValue,
      ...extendValue,
      (merged: any, value: any[]) => {
        if (isString(merged) && isString(value)) {
          return tcm(merged, value);
        }

        return undefined;
      },
    );
  });
}
