import * as React from "react";
import { cloneDeep } from "lodash";

import { DeepDictionary, DeepPartial } from "../utils/types";

import defaultTheme from "./defaultTheme";
import { mergeExtensions, mergeThemes } from "./mergeThemes";

export type DefaultTheme = typeof defaultTheme;

export type ThemeContextType = DeepDictionary<DefaultTheme>;

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined,
);

type ThemeKeys = keyof DefaultTheme;
export function useTheme(): DefaultTheme;
export function useTheme<T extends ThemeKeys>(component?: T): DefaultTheme[T];
export function useTheme<T extends ThemeKeys>(component?: T) {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme: `ThemeContext` is undefined. Seems you forgot to wrap component within the RenderlesskitProvider",
    );
  }

  // Introduce a new theme prop while not breaking the existing one
  if (component && context[component]) return context[component];

  return context;
}

export type PartialDefaultTheme = DeepPartial<DefaultTheme>;
export type ExtendableDefaultTheme = PartialDefaultTheme & {
  extend?: PartialDefaultTheme;
};

export type RenderlesskitProviderProps = {
  theme?: DefaultTheme;
  extend?: ExtendableDefaultTheme;
};

export const RenderlesskitProvider: React.FC<RenderlesskitProviderProps> =
  props => {
    const { children, theme = defaultTheme, extend } = props;

    let finalTheme = theme;

    if (extend) {
      finalTheme = mergeExtensions(mergeThemes([extend, cloneDeep(theme)]));
    }

    return (
      <ThemeContext.Provider value={finalTheme}>
        {children}
      </ThemeContext.Provider>
    );
  };

export * from "./extendTheme";
