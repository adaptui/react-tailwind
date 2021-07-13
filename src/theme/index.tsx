import * as React from "react";
import { cloneDeep } from "lodash-es";

import defaultTheme from "./defaultTheme";
import { mergeExtensions, mergeThemes } from "./mergeThemes";
import { DeepDictionary, DeepPartial } from "../utils/types";

export type DefaultTheme = typeof defaultTheme;

export type ThemeContextType = DeepDictionary<DefaultTheme>;

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined,
);

export const useTheme = (component?: keyof DeepDictionary<DefaultTheme>) => {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme: `ThemeContext` is undefined. Seems you forgot to wrap component within the RenderlesskitProvider",
    );
  }

  // Introduce a new theme prop while not breaking the existing one
  if (component && context[component]) return context[component];

  return context;
};

export type PartialDefaultTheme = DeepPartial<DefaultTheme>;
export type ExtendableDefaultTheme = PartialDefaultTheme & {
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

  return (
    <ThemeContext.Provider value={finalTheme}>{children}</ThemeContext.Provider>
  );
};

export * from "./extendTheme";
