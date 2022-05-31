import { expectAssignable, expectType } from "tsd";

import theme from "../defaultTheme";

// TODO: Test global adaptui namespace

expectType<AdaptUI.Theme>({ components: theme });

// GetThemeValue test
expectAssignable<AdaptUI.GetThemeValue<"button", "base", "default">>("");
expectType<AdaptUI.GetThemeValue<"button", "variant", "default">>({
  ghost: "",
  solid: "",
  subtle: "",
  outline: "",
});
expectType<AdaptUI.GetThemeValue<"button", "size", "default">>({
  sm: "",
  md: "",
  lg: "",
  xl: "",
});
expectType<AdaptUI.GetThemeValue<"switch", "icon">["size"]>({
  sm: "",
  md: "",
  lg: "",
  xl: "",
});

// user extended theme
type TestTheme = { button: { size: { xl: "" } } };
type UserTheme = { button: { size: { superlarge: "" } } };

expectAssignable<AdaptUI.MergeTheme<TestTheme, UserTheme>>({
  button: { size: { superlarge: "", xl: "" } },
});
