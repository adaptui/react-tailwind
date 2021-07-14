import { ExtendableDefaultTheme } from "./index";

export function extendTheme<T = ExtendableDefaultTheme>(theme: T): T {
  return theme;
}
