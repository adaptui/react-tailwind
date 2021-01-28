import React from "react";
import {
  RadioStateReturn,
  Radio as ReakitRadio,
  RadioProps as ReakitRadioProps,
} from "reakit";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { RadioIcon } from "./RadioIcon";
import { useRadioContext } from "./RadioGroup";
import { forwardRefWithAs } from "../utils/types";

export type RadioProps = Omit<ReakitRadioProps, "size"> & RadioStateReturn;

export const Radio = forwardRefWithAs<
  Partial<RadioProps>,
  HTMLInputElement,
  "input"
>((props, ref) => {
  const { radioState } = useRadioContext();
  const { className, size, ...rest } = props;
  const theme = useTheme();
  const radioStyles = cx(theme.radio.input, className);

  console.log(radioState?.currentId, radioState?.state);
  return (
    <>
      <ReakitRadio
        ref={ref}
        className={radioStyles}
        {...radioState}
        {...rest}
      />
      <RadioIcon
        value={rest.value || (radioState?.currentId as string)}
        disabled={rest.disabled}
      />
    </>
  );
});
