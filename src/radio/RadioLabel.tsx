import { cx } from "@renderlesskit/react";
import React from "react";
import { BoxProps } from "reakit";
import { useTheme } from "..";
import { Box } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { RadioCommonProps } from "./Radio";
import { useRadioContext } from "./RadioGroup";

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
  const _size = size || radioSize || "md";

  const radioStyles = cx(
    theme.radio.base,
    theme.radio.label.base,
    theme.radio.label.size[_size],
    disabled ? theme.radio.disabled : "",
    className,
  );

  return <Box as="label" ref={ref} className={radioStyles} {...rest} />;
});
