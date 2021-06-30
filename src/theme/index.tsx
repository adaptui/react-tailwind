import * as React from "react";
import { cloneDeep } from "lodash-es";

import defaultTheme from "./defaultTheme";
import { createContext } from "../utils";
import { mergeExtensions, mergeThemes } from "./mergeThemes";
import { DeepDictionary, DeepPartial } from "../utils/types";

export type DefaultTheme = typeof defaultTheme;

export type ThemeContext = DeepDictionary<DefaultTheme>;

const [ThemeProvider, useTheme] = createContext<ThemeContext>({
  strict: false,
  name: "ThemeProvider",
});

export { useTheme };

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

  return <ThemeProvider value={finalTheme}>{children}</ThemeProvider>;
};

export * from "./extendTheme";
