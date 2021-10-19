import { defaults, isString, isUndefined, mergeWith, tcm } from "../utils";

import {
  DefaultTheme,
  ExtendableDefaultTheme,
  PartialDefaultTheme,
} from "./index";

function collectExtends(items: ExtendableDefaultTheme[]) {
  return items.reduce((merged, { extend }) => {
    return mergeWith(merged, extend, (mergedValue: any, extendValue: any) => {
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

export function mergeExtensions({
  extend,
  ...theme
}: DefaultTheme & { extend?: PartialDefaultTheme }) {
  return mergeWith(theme, extend, (themeValue: any, extendValue: any) => {
    return mergeWith(themeValue, ...extendValue, (merged: any, value: any) => {
      if (isString(merged) && isString(value)) {
        return tcm(merged, value);
      }

      return undefined;
    });
  });
}
