import React from "react";
import { Radio as ReakitRadio, RadioProps as ReakitRadioProps } from "reakit";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { RadioIcon } from "./RadioIcon";
import { useRadioContext } from "./RadioGroup";
import { forwardRefWithAs } from "../utils/types";

export type RadioCommonProps = {
  disabled?: boolean;
  value?: ReakitRadioProps["value"];
  size?: keyof Renderlesskit.GetThemeValue<"radio", "icon">["size"];
};

export const Radio = forwardRefWithAs<
  Partial<ReakitRadioProps>,
  HTMLInputElement,
  "input"
>((props, ref) => {
  const { className, size, ...rest } = props;

  const theme = useTheme();
  const { radioState } = useRadioContext();
  const radioStyles = cx(theme.radio.input, className);

  return (
    <>
      <ReakitRadio
        ref={ref}
        className={radioStyles}
        {...radioState}
        {...rest}
      />
      <RadioIcon value={rest.value} disabled={rest.disabled} />
    </>
  );
});
