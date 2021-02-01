import React from "react";
import { BoxProps } from "reakit";
import { cx } from "@renderlesskit/react";

import { Box } from "../box";
import { useTheme } from "..";
import { RadioCommonProps } from "./Radio";
import { useRadioContext } from "./RadioGroup";
import { forwardRefWithAs } from "../utils/types";

export type RadioLabelProps = BoxProps & Omit<RadioCommonProps, "value">;

export const RadioLabel = forwardRefWithAs<
  RadioLabelProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const { size, disabled = false, ...mainProps } = props;
  const { className, ...rest } = mainProps;
  const theme = useTheme();
  const { radioSize } = useRadioContext();
  const _size = size || radioSize || "sm";

  const radioStyles = cx(
    theme.radio.base,
    theme.radio.label.base,
    theme.radio.label.size[_size],
    disabled ? theme.radio.disabled : "",
    className,
  );

  return <Box as="label" ref={ref} className={radioStyles} {...rest} />;
});
