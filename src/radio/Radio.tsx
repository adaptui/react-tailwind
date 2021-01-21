import { cx } from "@renderlesskit/react";
import {
  Radio as ReakitRadio,
  RadioGroup as ReakitRadioGroup,
  RadioGroupProps,
  RadioInitialState,
  RadioProps,
  useRadioState,
} from "reakit";
import { useTheme } from "../theme";
import { createContext } from "../utils";
import { forwardRefWithAs } from "../utils/types";

const [RadioProvider, useRadioContext] = createContext({
  name: "RadioContext",
  strict: true,
  errorMessage: "Radio must be used within RadioContextProvider",
});

export const Radio = forwardRefWithAs<
  Partial<RadioProps>,
  HTMLInputElement,
  "input"
>(({ children, className, ...props }, ref) => {
  const state = useRadioContext();
  const theme = useTheme();

  return (
    <label className={cx(theme.radio.base, className)}>
      <ReakitRadio
        className={theme.radio.input}
        {...state}
        {...props}
        ref={ref}
      />
      <span>{children}</span>
    </label>
  );
});

export const RadioGroup = forwardRefWithAs<
  Partial<RadioGroupProps & RadioInitialState>,
  HTMLDivElement,
  "div"
>(({ children, ...props }, ref) => {
  const radio = useRadioState(props);

  return (
    <RadioProvider value={radio}>
      <ReakitRadioGroup {...radio} ref={ref}>
        {children}
      </ReakitRadioGroup>
    </RadioProvider>
  );
});
