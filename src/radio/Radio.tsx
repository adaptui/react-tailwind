import React from "react";
import {
  Radio as ReakitRadio,
  RadioProps as ReakitRadioProps,
  RadioGroup as ReakitRadioGroup,
  RadioGroupProps as ReakitRadioGroupProps,
} from "reakit";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { BoxProps, Box } from "../box";
import { createContext } from "../utils";
import { forwardRefWithAs } from "../utils/types";
import {
  useRadioState,
  RadioInitialState,
  RadioStateReturn,
} from "./useRadioState";

const [RadioProvider, useRadioContext] = createContext<{
  radioState: RadioStateReturn;
  radioSize?: RadioLabelProps["size"];
}>({
  name: "RadioContext",
  strict: true,
  errorMessage: "Radio must be used within RadioContextProvider",
});

export interface RadioLabelProps extends BoxProps {
  /**
   * How large should the radio be?
   */
  size?: keyof Renderlesskit.GetThemeValue<"radio", "size">;
}

export const RadioLabel = forwardRefWithAs<
  RadioLabelProps,
  HTMLLabelElement,
  "label"
>(({ children, className, size, ...props }, ref) => {
  const theme = useTheme();
  const { radioSize } = useRadioContext();
  const _size = size || radioSize || "sm";

  return (
    <Box
      as="label"
      ref={ref}
      className={cx(theme.radio.base, theme.radio.size[_size], className)}
      {...props}
    >
      {children}
    </Box>
  );
});

export const Radio = forwardRefWithAs<
  Partial<ReakitRadioProps>,
  HTMLInputElement,
  "input"
>(({ children, className, ...props }, ref) => {
  const { radioState } = useRadioContext();
  const theme = useTheme();

  return (
    <ReakitRadio
      className={theme.radio.input}
      {...radioState}
      {...props}
      ref={ref}
    />
  );
});

type RadioGroupProps = Partial<ReakitRadioGroupProps & RadioInitialState> &
  Partial<Pick<RadioLabelProps, "size">>;

export const RadioGroup = forwardRefWithAs<
  RadioGroupProps,
  HTMLDivElement,
  "div"
>(({ children, size, ...props }, ref) => {
  const radio = useRadioState(props);

  return (
    <RadioProvider value={{ radioState: radio, radioSize: size }}>
      <ReakitRadioGroup {...radio} ref={ref}>
        {children}
      </ReakitRadioGroup>
    </RadioProvider>
  );
});
