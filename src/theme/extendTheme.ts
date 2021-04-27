import { ExtendableDefaultTheme } from ".";

export function extendTheme<T = ExtendableDefaultTheme>(theme: T): T {
  return theme;
}
