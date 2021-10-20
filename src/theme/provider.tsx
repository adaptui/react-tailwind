import * as React from "react";

import defaultTheme from "./defaultTheme";
import {
  DefaultTheme,
  ExtendableDefaultTheme,
  ThemeContextType,
  ThemeKeys,
} from "./types";
import { mergeExtensions, mergeThemes } from "./utils";

export const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined,
);

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

export type RenderlesskitProviderProps = {
  theme?: DefaultTheme;
  extend?: ExtendableDefaultTheme;
};

export const RenderlesskitProvider: React.FC<RenderlesskitProviderProps> =
  props => {
    const { children, theme = defaultTheme, extend } = props;

    let finalTheme = theme;

    if (extend) {
      finalTheme = mergeExtensions(mergeThemes([extend, theme]));
    }

    return (
      <ThemeContext.Provider value={finalTheme}>
        {children}
      </ThemeContext.Provider>
    );
  };
