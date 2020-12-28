import * as React from "react";
import resolveConfig from "tailwindcss/lib/util/resolveConfig";
import defaultTailwindConfig from "tailwindcss/stubs/defaultConfig.stub";

import { createContext } from "../utils";
import defaultTheme from "./defaultTheme";

export type ThemeContext = {};

const [ThemeProvider, useTheme] = createContext<ThemeContext>({
  strict: false,
  name: "ThemeProvider",
});

export { useTheme };

export type RenderlesskitProviderProps = {
  tailwindConfig?: any;
  theme?: any;
  children?: React.ReactNode;
};

export const RenderlesskitProvider = (props: RenderlesskitProviderProps) => {
  const { children, tailwindConfig, theme = defaultTheme } = props;
  const finalTailwindConfig = resolveConfig([defaultTailwindConfig]);
  console.log("%c finalTailwindConfig", "color: #99614d", finalTailwindConfig);
  const finalTheme = defaultTheme;
  console.log("%c finalTheme", "color: #00736b", finalTheme);

  return <ThemeProvider value={finalTheme}>{children}</ThemeProvider>;
};
