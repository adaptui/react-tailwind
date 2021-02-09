import React from "react";
import {
  RadioHTMLProps,
  Radio as ReakitRadio,
  RadioProps as ReakitRadioProps,
} from "reakit";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { RadioIcon } from "./RadioIcon";
import { useRadioContext } from "./RadioGroup";
import { forwardRefWithAs } from "../utils/types";

export type RadioCommonProps = Partial<
  Pick<ReakitRadioProps, "value" | "disabled">
> & {
  size?: keyof Renderlesskit.GetThemeValue<"radio", "icon", "size">;
};

export const RadioInput: React.FC<RadioHTMLProps & RadioCommonProps> = ({
  className,
  ...rest
}) => {
  const theme = useTheme();
  const { radioState } = useRadioContext();

  const radioStyles = cx(theme.radio.input, className);

  return <ReakitRadio className={radioStyles} {...radioState} {...rest} />;
};

export const Radio = forwardRefWithAs<
  RadioHTMLProps &
    RadioCommonProps & {
      checkedIcon?: React.ReactNode;
      uncheckedIcon?: React.ReactNode;
      disabledIcon?: React.ReactNode;
    },
  HTMLInputElement,
  "input"
>((props, ref) => {
  const { checkedIcon, uncheckedIcon, disabledIcon } = props;
  return (
    <>
      <RadioInput ref={ref} {...props} />
      <RadioIcon
        value={props.value}
        disabled={props.disabled}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
        disabledIcon={disabledIcon}
      />
    </>
  );
});
