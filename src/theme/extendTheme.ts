import { ExtendableDefaultTheme } from "./index";

export const extendTheme = <T = ExtendableDefaultTheme>(theme: T): T => {
  return theme;
};
