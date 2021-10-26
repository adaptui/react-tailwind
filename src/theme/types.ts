import { DeepDictionary, DeepPartial } from "../utils";

import defaultTheme from "./defaultTheme";

export type DefaultTheme = typeof defaultTheme;

export type ThemeKeys = keyof DefaultTheme;

export type ThemeContextType = DeepDictionary<DefaultTheme>;

export type PartialDefaultTheme = DeepPartial<DefaultTheme>;

export type ExtendableDefaultTheme = PartialDefaultTheme & {
  extend?: PartialDefaultTheme;
};
