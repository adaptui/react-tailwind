import { expectAssignable, expectType } from "tsd";
import theme from "./defaultTheme";

// TODO: Test global renderlesskit namespace

expectType<Renderlesskit.Theme>({ components: theme });

// GetThemeValue test
expectAssignable<Renderlesskit.GetThemeValue<"button", "base">>("");
expectType<Renderlesskit.GetThemeValue<"button", "variant">>({
  ghost: "",
  primary: "",
  secondary: "",
  outline: "",
});
expectType<Renderlesskit.GetThemeValue<"button", "size">>({
  md: "",
  lg: "",
  sm: "",
  xl: "",
});
expectType<Renderlesskit.GetThemeValue<"switch", "icon", "wrapper">["size"]>({
  sm: "",
  md: "",
  lg: "",
  xl: "",
});

// user extended theme
type TestTheme = { button: { size: { xl: "" } } };
type UserTheme = { button: { size: { superlarge: "" } } };

expectAssignable<Renderlesskit.MergeTheme<TestTheme, UserTheme>>({
  button: { size: { superlarge: "", xl: "" } },
});
